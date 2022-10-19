import moment from "moment";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { DateRange } from "react-date-range";
import { DatePickerContainer } from "./DemoApp.style";
const DatePicker = ({ calendarApi: calendarApiObjProp }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [state, setState] = useState({
    // calendarApiObj: props.calendarApi?.currentDataManager,
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
  console.log(
    "state.calendarApiObj",
    // state.calendarApiObj,
    calendarApiObjProp?.currentDataManager,
    calendarApiObj
  );

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
        // onPreviewChange(selectionObj),
        // selection: state.datePicker?.preview,
      },
    });

    console.log("checkkkkkkkkkkkkk", calendarApiObj.dispatch, obj?.endDate);
    setShowDropdown(false);
    calendarApiObj.dispatch({
      type: "CHANGE_DATE",
      dateMarker: obj?.endDate,
    });
  };

  const updatePreview = (val) => {
    console.log("preview vla", val);
    if (!val) {
      setState({
        ...state,
        datePicker: { ...state.datePicker, preview: null },
      });
      return;
    } else {
      setState({
        ...state,
        datePicker: {
          ...state.datePicker,
          preview: { ...val, color: "green" },
        },
      });
    }
  };
  const onPreviewChange = (arg) => {
    console.log("preview++++++++++++++++", arg);
    try {
      console.log("aa", calendarApiObj.data);
      const unit = calendarApiObj.data.viewSpec.durationUnit;
      const obj = {
        startDate: moment(arg).startOf(unit).toDate(),
        endDate: moment(arg).endOf(unit).toDate(),
      };
      console.log("returning===========", obj);
      return obj;
    } catch (e) {
      console.log("failed=================", e);
      return {};
    }
  };

  //   const handleDatePicker = (...spread) => {
  //     const calendarApiDet = spread?.[2];
  //     console.log("calendarApiDet", calendarApiDet);
  //     const calendarApiObj = calendarApiDet?.currentDataManager;
  //     console.log("calendarApi", calendarApiObj);
  //     // setState({ showDatePickerModal: true });
  //     setState({
  //       // currentEvents: events,
  //       showDatePickerModal: true,
  //       calendarApiObj,
  //     });
  //   };
  console.log("calendarApiObj.data", calendarApiObj.state?.currentDate);
  useEffect(() => {
    // const obj = {
    //   ...onPreviewChange(calendarApiObj.state?.currentDate),
    // };

    handleSelection(calendarApiObj.state?.currentDate);
  }, [calendarApiObj?.state?.currentViewType]);
  return (
    // <div className="date-picker-container">
    <DatePickerContainer>
      <h2 onClick={() => setShowDropdown((prev) => !prev)}>
        {calendarApiObj?.data?.viewTitle}
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
            //   console.log("preview yyyyyyyyyyyyyyyyyyyyyyyyy? ", value);
            //   updatePreview(value ? onPreviewChange(value) : null);
            // }}
            focusedRange={[0, 0]}
            displayMode="dateRange"
          />
        </div>
      )}
      {/* </div> */}
      {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-chevron-down" /> */}
    </DatePickerContainer>
  );
};

export default DatePicker;
