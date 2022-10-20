'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib = require('tslib');
require('./vdom.cjs');
var React = require('react');
var common = require('@fullcalendar/common');
var DatePicker = _interopDefault(require('./components/DatePicker'));
var ViewTypeSelection = _interopDefault(require('./components/ViewTypeSelection/ViewTypeSelection'));

var FullCalendar = /** @class */ (function (_super) {
    tslib.__extends(FullCalendar, _super);
    function FullCalendar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._calendarApi = new common.CalendarApi();
        return _this;
    }
    FullCalendar.prototype.render = function () {
        return (React.createElement(common.CalendarDataProvider, { optionOverrides: tslib.__assign(tslib.__assign({}, this.props), { customButtons: tslib.__assign(tslib.__assign({}, this.props.customButtons), { 
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
                    } }) }), calendarApi: this._calendarApi }, function (data) { return (React.createElement(common.CalendarRoot, { options: data.calendarOptions, theme: data.theme, emitter: data.emitter }, function (classNames, height, isHeightAuto, forPrint) { return (React.createElement("div", { className: classNames.join(" "), style: { height: height } },
            React.createElement(common.CalendarContent, tslib.__assign({ isHeightAuto: isHeightAuto, forPrint: forPrint }, data)))); })); }));
    };
    FullCalendar.prototype.getApi = function () {
        return this._calendarApi;
    };
    return FullCalendar;
}(React.Component));

Object.keys(common).forEach(function (k) {
    if (k !== 'default') Object.defineProperty(exports, k, {
        enumerable: true,
        get: function () {
            return common[k];
        }
    });
});
exports.default = FullCalendar;
