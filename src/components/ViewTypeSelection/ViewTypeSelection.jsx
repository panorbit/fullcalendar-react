import React, { useRef, useState } from "react";
import DropDownModal from "../common/DropDownModal/DropDownModal";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ViewTypeSelection = ({ calendarApi: calendarApiObjProp }) => {
  const [showModal, setShowModal] = useState(false);
  const calendarApiObj = calendarApiObjProp?.currentDataManager;

  const batchRendering = (callback) => {
    // subclasses should implement
    callback();
  };

  const getCurrentData = () => {
    return calendarApiObj?.getCurrentData();
  };
  // util
  function triggerDateUnselect(pev, context) {
    context.emitter.trigger("unselect", {
      jsEvent: pev ? pev.origEvent : null,
      view: context.viewApi || context.calendarApi.view,
    });
  }
  function unselect(pev) {
    let state = getCurrentData();

    if (state.dateSelection) {
      calendarApiObj.dispatch({ type: "UNSELECT_DATES" });
      triggerDateUnselect(pev, state);
    }
  }

  const changeView = (viewTypeRaw, dateOrRange) => {
    const { key: viewType } = viewTypeRaw;
    batchRendering(() => {
      unselect();
      if (dateOrRange) {
        if (dateOrRange.start && dateOrRange.end) {
          // a range
          calendarApiObj.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType,
          });
          calendarApiObj.dispatch({
            // not very efficient to do two dispatches
            type: "SET_OPTION",
            optionName: "visibleRange",
            rawOptionValue: dateOrRange,
          });
        } else {
          let { dateEnv } = getCurrentData();

          calendarApiObj.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType,
            dateMarker: dateEnv.createMarker(dateOrRange),
          });
        }
      } else {
        calendarApiObj.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType,
        });
      }
    });
    setShowModal(false);
  };

  const options = [
    {
      label: "month",
      key: "dayGridMonth",
      id: 1,
    },
    {
      label: "week",
      key: "timeGridWeek",
      id: 2,
    },
    {
      label: "day",
      key: "timeGridDay",
      id: 3,
    },
  ];
  const activeItem = calendarApiObj?.data?.viewSpec?.type;
  const headerRef = useRef();
  return (
    <div className="view-selection-container">
      <div>
        <h2 ref={headerRef} onClick={() => setShowModal((prev) => !prev)}>
          {options.find((e) => e.key === activeItem)?.label || activeItem}
          <FontAwesomeIcon
            icon={showModal ? faAngleUp : faAngleDown}
          ></FontAwesomeIcon>
        </h2>
        {showModal && (
          <DropDownModal
            setModalIsVisibal={setShowModal}
            data={options}
            handleClick={changeView}
            kababIconRef={headerRef}
            ContainerStyle={{ width: "120px" }}
          />
        )}
      </div>
    </div>
  );
};

export default ViewTypeSelection;
