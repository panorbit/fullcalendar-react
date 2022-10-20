import React, { useRef, useState } from "react";
import DropDownModal from "../common/DropDownModal/DropDownModal";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
var ViewTypeSelection = function (_a) {
    var _b, _c, _d;
    var calendarApiObjProp = _a.calendarApi;
    var _e = useState(false), showModal = _e[0], setShowModal = _e[1];
    var calendarApiObj = calendarApiObjProp === null || calendarApiObjProp === void 0 ? void 0 : calendarApiObjProp.currentDataManager;
    var batchRendering = function (callback) {
        // subclasses should implement
        callback();
    };
    var getCurrentData = function () {
        return calendarApiObj === null || calendarApiObj === void 0 ? void 0 : calendarApiObj.getCurrentData();
    };
    // util
    function triggerDateUnselect(pev, context) {
        context.emitter.trigger("unselect", {
            jsEvent: pev ? pev.origEvent : null,
            view: context.viewApi || context.calendarApi.view,
        });
    }
    function unselect(pev) {
        var state = getCurrentData();
        if (state.dateSelection) {
            calendarApiObj.dispatch({ type: "UNSELECT_DATES" });
            triggerDateUnselect(pev, state);
        }
    }
    var changeView = function (viewTypeRaw, dateOrRange) {
        var viewType = viewTypeRaw.key;
        batchRendering(function () {
            unselect();
            if (dateOrRange) {
                if (dateOrRange.start && dateOrRange.end) {
                    // a range
                    calendarApiObj.dispatch({
                        type: "CHANGE_VIEW_TYPE",
                        viewType: viewType,
                    });
                    calendarApiObj.dispatch({
                        // not very efficient to do two dispatches
                        type: "SET_OPTION",
                        optionName: "visibleRange",
                        rawOptionValue: dateOrRange,
                    });
                }
                else {
                    var dateEnv = getCurrentData().dateEnv;
                    calendarApiObj.dispatch({
                        type: "CHANGE_VIEW_TYPE",
                        viewType: viewType,
                        dateMarker: dateEnv.createMarker(dateOrRange),
                    });
                }
            }
            else {
                calendarApiObj.dispatch({
                    type: "CHANGE_VIEW_TYPE",
                    viewType: viewType,
                });
            }
        });
        setShowModal(false);
    };
    var options = [
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
    var activeItem = (_c = (_b = calendarApiObj === null || calendarApiObj === void 0 ? void 0 : calendarApiObj.data) === null || _b === void 0 ? void 0 : _b.viewSpec) === null || _c === void 0 ? void 0 : _c.type;
    var headerRef = useRef();
    return (React.createElement("div", { className: "view-selection-container" },
        React.createElement("div", null,
            React.createElement("h2", { ref: headerRef, onClick: function () { return setShowModal(function (prev) { return !prev; }); } },
                ((_d = options.find(function (e) { return e.key === activeItem; })) === null || _d === void 0 ? void 0 : _d.label) || activeItem,
                React.createElement(FontAwesomeIcon, { icon: showModal ? faAngleUp : faAngleDown })),
            showModal && (React.createElement(DropDownModal, { setModalIsVisibal: setShowModal, data: options, handleClick: changeView, kababIconRef: headerRef, ContainerStyle: { width: "120px" } })))));
};
export default ViewTypeSelection;
//# sourceMappingURL=ViewTypeSelection.js.map