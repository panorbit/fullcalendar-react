import React from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DemoAppContainer, DemoAppMain } from "./DemoApp.style";

export default class DemoApp extends React.Component {
  state = {
    weekendsVisible: true,
    currentEvents: [],
  };
  calendarRef = React.createRef();
  render() {
    // console.log("state", this.state);
    console.log("checklllllllllll", this.calendarRef.current?.getApi());
    return (
      <DemoAppContainer>
        {/* {this.renderSidebar()} */}
        {/* <div style={{ position: "absolute" }}>
          {this.state.showDatePickerModal && this.renderDatePicker()}
        </div> */}
        <DemoAppMain>
          <FullCalendar
            ref={this.calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              // prevYear,nextYear
              left: "datePicker",
              // center: "title",
              // center: "datePicker",
              right: "today prev,next,viewTypeSelection",
              //dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            weekNumbers={true}
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </DemoAppMain>
      </DemoAppContainer>
    );
  }

  // renderDatePicker() {
  //   // console.log("this.state?.datePicker", this.state?.datePicker);
  //   return (
  //     <DateRange
  //       ranges={[this.state?.datePicker?.selection]}
  //       onChange={this.handleSelection}
  //       // focusedRange={this.state.datePicker.focusedRange}
  //       // onRangeFocusChange={this.handleRangeFocusChange}

  //       // preview={this.state.datePicker?.preview}
  //       // onPreviewChange={(value) => {
  //       //   console.log("preview yyyyyyyyyyyyyyyyyyyyyyyyy? ", value);
  //       //   this.updatePreview(value ? this.onPreviewChange(value) : null);
  //       // }}
  //       focusedRange={[0, 0]}
  //       displayMode="dateRange"
  //     />
  //   );
  // }

  // renderSidebar() {
  //   return (
  //     <div className="demo-app-sidebar">
  //       <div className="demo-app-sidebar-section">
  //         <h2>Instructions</h2>
  //         <ul>
  //           <li>Select dates and you will be prompted to create a new event</li>
  //           <li>Drag, drop, and resize events</li>
  //           <li>Click an event to delete it</li>
  //         </ul>
  //       </div>
  //       <div className="demo-app-sidebar-section">
  //         <label>
  //           <input
  //             type="checkbox"
  //             checked={this.state.weekendsVisible}
  //             onChange={this.handleWeekendsToggle}
  //           ></input>
  //           toggle weekends
  //         </label>
  //       </div>
  //       <div className="demo-app-sidebar-section">
  //         <h2>All Events ({this.state.currentEvents.length})</h2>
  //         <ul>{this.state.currentEvents.map(renderSidebarEvent)}</ul>
  //       </div>
  //     </div>
  //   );
  // }

  // handleWeekendsToggle = () => {
  //   this.setState({
  //     weekendsVisible: !this.state.weekendsVisible,
  //   });
  // };

  handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  handleEventClick = (clickInfo) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  handleEvents = (events) => {
    this.setState({
      currentEvents: events,
    });
  };
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}
