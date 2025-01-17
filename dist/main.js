import { __assign, __extends } from "tslib";
import "./vdom";
import * as React from "react";
import { CalendarApi, CalendarDataProvider, CalendarContent, CalendarRoot, } from "@fullcalendar/common";
import DatePicker from "./components/DatePicker";
import ViewTypeSelection from "./components/ViewTypeSelection/ViewTypeSelection";
var FullCalendar = /** @class */ (function (_super) {
    __extends(FullCalendar, _super);
    function FullCalendar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._calendarApi = new CalendarApi();
        return _this;
    }
    FullCalendar.prototype.render = function () {
        return (React.createElement(CalendarDataProvider, { optionOverrides: __assign(__assign({}, this.props), { customButtons: __assign(__assign({}, this.props.customButtons), { 
                    // add datepicker as predefined
                    datePicker: {
                        text: "datePicker",
                        hint: "Date Picker",
                        // click: this.handleDatePicker,
                        component: DatePicker,
                    }, viewTypeSelection: {
                        text: "viewTypeSelection",
                        hint: "View Type Selection",
                        // click: this.handleDatePicker,
                        component: ViewTypeSelection,
                    } }) }), calendarApi: this._calendarApi }, function (data) { return (React.createElement(CalendarRoot, { options: data.calendarOptions, theme: data.theme, emitter: data.emitter }, function (classNames, height, isHeightAuto, forPrint) { return (React.createElement("div", { className: classNames.join(" "), style: { height: height } },
            React.createElement(CalendarContent, __assign({ isHeightAuto: isHeightAuto, forPrint: forPrint }, data)))); })); }));
    };
    FullCalendar.prototype.getApi = function () {
        return this._calendarApi;
    };
    return FullCalendar;
}(React.Component));
export default FullCalendar;
// export all important utils/types
export * from "@fullcalendar/common";
//# sourceMappingURL=main.js.map