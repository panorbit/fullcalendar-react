/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { ModalContainer, ModalContentDiv, ModalContentText, } from "./DropDownModal.style";
function DropDownModal(props) {
    var _a = props.style, style = _a === void 0 ? {} : _a, _b = props.ContainerStyle, ContainerStyle = _b === void 0 ? {} : _b, _c = props.TextStyle, TextStyle = _c === void 0 ? {} : _c, _d = props.data, data = _d === void 0 ? [] : _d, _e = props.itemContainerStyle, itemContainerStyle = _e === void 0 ? {} : _e, setModalIsVisibal = props.setModalIsVisibal, _f = props.kababIconRef, kababIconRef = _f === void 0 ? false : _f, handleClick = props.handleClick, _g = props.version, version = _g === void 0 ? 1 : _g, isActive = props.isActive, _h = props.field, field = _h === void 0 ? "" : _h, 
    // additional params required to pass during click
    extraParms = props.extraParms;
    var modalRef = useRef();
    useClickOutside(modalRef, function () {
        if (!field) {
            return setModalIsVisibal(false);
        }
        return setModalIsVisibal(field);
    }, kababIconRef);
    var handleSelection = function (item) {
        if (!field) {
            return handleClick(item, { activeRowItem: extraParms === null || extraParms === void 0 ? void 0 : extraParms.activeRowItem });
        }
        return handleClick(field, item);
    };
    // undefined to handle prev developed code
    if (!isActive && isActive !== undefined) {
        return React.createElement(React.Fragment, null);
    }
    return (React.createElement(ModalContainer, { className: version === "1" ? "" : "outside", ref: modalRef, style: ContainerStyle || style }, data.length > 0 &&
        data.map(function (item, i) { return (React.createElement(ModalContentDiv, { className: "".concat(item.class || "", " 'list'"), style: itemContainerStyle, key: i, onClick: function () { return handleSelection(item); } },
            React.createElement(ModalContentText, { className: "".concat(version === "1" ? "" : "outside", " ").concat(item.disable ? "disable" : ""), style: TextStyle }, item.label))); })));
}
export default DropDownModal;
//# sourceMappingURL=DropDownModal.js.map