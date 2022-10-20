import moment from "moment";
import React, { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DatePicker = ({ calendarApi: calendarApiObjProp }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [state, setState] = useState({
    datePicker: {
      selection: {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
        isInit: true,
      },
    },
  });
  const calendarApiObj = calendarApiObjProp?.currentDataManager;

  const handleSelection = (selectionObj) => {
    const obj = {
      ...onPreviewChange(selectionObj?.selection?.startDate),
    };
    setState({
      datePicker: {
        ...state.datePicker,
        selection: {
          ...obj,
          key: "selection",
          isInit: true,
        },
      },
    });

    setShowDropdown(false);
    calendarApiObj.dispatch({
      type: "CHANGE_DATE",
      dateMarker: obj?.endDate,
    });
  };

  // const updatePreview = (val) => {
  //   console.log("preview vla", val);
  //   if (!val) {
  //     setState({
  //       ...state,
  //       datePicker: { ...state.datePicker, preview: null },
  //     });
  //     return;
  //   } else {
  //     setState({
  //       ...state,
  //       datePicker: {
  //         ...state.datePicker,
  //         preview: { ...val, color: "green" },
  //       },
  //     });
  //   }
  // };

  const onPreviewChange = (arg) => {
    try {
      const unit = calendarApiObj.data.viewSpec.durationUnit;
      const obj = {
        startDate: moment(arg).startOf(unit).toDate(),
        endDate: moment(arg).endOf(unit).toDate(),
      };
      return obj;
    } catch (e) {
      return {};
    }
  };

  // update selection when change in viewType
  useEffect(() => {
    handleSelection(calendarApiObj.state?.currentDate);
  }, [calendarApiObj?.state?.currentViewType]);
  return (
    <div className="date-picker-container">
      <div>
        <h2 onClick={() => setShowDropdown((prev) => !prev)}>
          {calendarApiObj?.data?.viewTitle}
          <FontAwesomeIcon
            icon={showDropdown ? faAngleUp : faAngleDown}
          ></FontAwesomeIcon>
        </h2>
        {showDropdown && (
          <div
            style={{
              position: "absolute",
            }}
          >
            <DateRange
              ranges={[state?.datePicker?.selection]}
              onChange={handleSelection}
              // focusedRange={state.datePicker.focusedRange}
              // onRangeFocusChange={handleRangeFocusChange}
              // preview={state.datePicker?.preview}
              // onPreviewChange={(value) => {
              //   updatePreview(value ? onPreviewChange(value) : null);
              // }}
              focusedRange={[0, 0]}
              displayMode="dateRange"
            />
          </div>
        )}
      </div>
      {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-chevron-down" /> */}
    </div>
  );
};

export default DatePicker;
