import "./vdom";
import * as React from "react";
import {
  CalendarOptions,
  CalendarApi,
  CalendarDataProvider,
  CalendarContent,
  CalendarRoot,
} from "@fullcalendar/common";

export default class FullCalendar extends React.Component<CalendarOptions> {
  private _calendarApi = new CalendarApi();

  render() {
    console.log("test-2 devvv");
    return (
      <CalendarDataProvider
        optionOverrides={this.props}
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
                <span>Test check</span>
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
