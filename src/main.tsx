import "./vdom";
import * as React from "react";

import {
  CalendarOptions,
  CalendarApi,
  CalendarDataProvider,
  CalendarContent,
  CalendarRoot,
} from "@fullcalendar/common";
import DatePicker from "./DatePicker";
export default class FullCalendar extends React.Component<CalendarOptions> {
  private _calendarApi = new CalendarApi();

  render() {
    return (
      <CalendarDataProvider
        optionOverrides={{
          ...this.props,
          customButtons: {
            ...this.props.customButtons,
            // add datepicker as predefined
            datePicker: {
              text: "datePicker",
              hint: "Date Picker",
              // click: this.handleDatePicker,
              component: DatePicker,
            },
          },
        }}
        calendarApi={this._calendarApi}
      >
        {(data) => (
          <CalendarRoot
            options={data.calendarOptions}
            theme={data.theme}
            emitter={data.emitter}
          >
            {(classNames, height, isHeightAuto, forPrint) => (
              <div className={classNames.join(" ")} style={{ height }}>
                <CalendarContent
                  isHeightAuto={isHeightAuto}
                  forPrint={forPrint}
                  {...data}
                />
              </div>
            )}
          </CalendarRoot>
        )}
      </CalendarDataProvider>
    );
  }

  getApi(): CalendarApi {
    return this._calendarApi;
  }
}
// export all important utils/types
export * from "@fullcalendar/common";
