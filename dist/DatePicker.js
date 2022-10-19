import { __assign } from "tslib";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
var DatePicker = function (_a) {
    var _b, _c, _d;
    var calendarApiObjProp = _a.calendarApi;
    var _e = useState(false), showDropdown = _e[0], setShowDropdown = _e[1];
    var _f = useState({
        datePicker: {
            selection: {
                startDate: new Date(),
                endDate: new Date(),
                key: "selection",
                isInit: true,
            },
        },
    }), state = _f[0], setState = _f[1];
    var calendarApiObj = calendarApiObjProp === null || calendarApiObjProp === void 0 ? void 0 : calendarApiObjProp.currentDataManager;
    var handleSelection = function (selectionObj) {
        var _a;
        var obj = __assign({}, onPreviewChange((_a = selectionObj === null || selectionObj === void 0 ? void 0 : selectionObj.selection) === null || _a === void 0 ? void 0 : _a.startDate));
        setState({
            datePicker: __assign(__assign({}, state.datePicker), { selection: __assign(__assign({}, obj), { key: "selection", isInit: true }) }),
        });
        setShowDropdown(false);
        calendarApiObj.dispatch({
            type: "CHANGE_DATE",
            dateMarker: obj === null || obj === void 0 ? void 0 : obj.endDate,
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
    var onPreviewChange = function (arg) {
        try {
            var unit = calendarApiObj.data.viewSpec.durationUnit;
            var obj = {
                startDate: moment(arg).startOf(unit).toDate(),
                endDate: moment(arg).endOf(unit).toDate(),
            };
            return obj;
        }
        catch (e) {
            return {};
        }
    };
    // update selection when change in viewType
    useEffect(function () {
        var _a;
        handleSelection((_a = calendarApiObj.state) === null || _a === void 0 ? void 0 : _a.currentDate);
    }, [(_b = calendarApiObj === null || calendarApiObj === void 0 ? void 0 : calendarApiObj.state) === null || _b === void 0 ? void 0 : _b.currentViewType]);
    return (React.createElement("div", { className: "date-picker-container" },
        React.createElement("div", null,
            React.createElement("h2", { onClick: function () { return setShowDropdown(function (prev) { return !prev; }); } }, (_c = calendarApiObj === null || calendarApiObj === void 0 ? void 0 : calendarApiObj.data) === null || _c === void 0 ? void 0 :
                _c.viewTitle,
                React.createElement(FontAwesomeIcon, { icon: faAngleDown })),
            showDropdown && (React.createElement("div", { style: {
                    position: "absolute",
                } },
                React.createElement(DateRange, { ranges: [(_d = state === null || state === void 0 ? void 0 : state.datePicker) === null || _d === void 0 ? void 0 : _d.selection], onChange: handleSelection, 
                    // focusedRange={state.datePicker.focusedRange}
                    // onRangeFocusChange={handleRangeFocusChange}
                    // preview={state.datePicker?.preview}
                    // onPreviewChange={(value) => {
                    //   updatePreview(value ? onPreviewChange(value) : null);
                    // }}
                    focusedRange: [0, 0], displayMode: "dateRange" }))))));
};
export default DatePicker;
//# sourceMappingURL=DatePicker.js.map