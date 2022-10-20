import { __makeTemplateObject } from "tslib";
import styled from "styled-components";
export var ModalContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: 20px;\n  position: absolute;\n  background-color: ", ";\n  z-index: 10;\n  border-radius: 6px;\n  animation: heightAnimation 400ms 1;\n  overflow: auto;\n  padding: 15px 20px 15px 20px;\n  width: 21.3rem;\n  min-width: max-content;\n  max-height: 50rem;\n\n  &.outside {\n    background-color: ", ";\n    border: 1px solid ", ";\n\n    & p {\n      color: ", " !important;\n    }\n  }\n\n  @keyframes heightAnimation {\n    from {\n      opacity: 0;\n      transform: translateY(10px);\n      overflow: hidden;\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0px);\n      overflow: hidden;\n    }\n  }\n"], ["\n  min-height: 20px;\n  position: absolute;\n  background-color: ", ";\n  z-index: 10;\n  border-radius: 6px;\n  animation: heightAnimation 400ms 1;\n  overflow: auto;\n  padding: 15px 20px 15px 20px;\n  width: 21.3rem;\n  min-width: max-content;\n  max-height: 50rem;\n\n  &.outside {\n    background-color: ", ";\n    border: 1px solid ", ";\n\n    & p {\n      color: ", " !important;\n    }\n  }\n\n  @keyframes heightAnimation {\n    from {\n      opacity: 0;\n      transform: translateY(10px);\n      overflow: hidden;\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0px);\n      overflow: hidden;\n    }\n  }\n"])), function (_a) {
    var _b;
    var theme = _a.theme;
    return ((_b = theme.customTheme) === null || _b === void 0 ? void 0 : _b.primary) || "#4F4ED0";
}, function (_a) {
    var _b;
    var theme = _a.theme;
    return ((_b = theme.core) === null || _b === void 0 ? void 0 : _b.pureSecondary) || "#ffffff";
}, function (_a) {
    var _b;
    var theme = _a.theme;
    return ((_b = theme.core) === null || _b === void 0 ? void 0 : _b.secondary) || "#EEEFF5";
}, function (_a) {
    var _b;
    var theme = _a.theme;
    return ((_b = theme.contrast) === null || _b === void 0 ? void 0 : _b.darkPrimary) || "#717171";
});
export var ModalContentDiv = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 25px;\n"], ["\n  height: 25px;\n"])));
export var ModalContentText = styled.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 1em;\n  /* color: white; */\n  color: ", ";\n  margin-top: 10px;\n  cursor: pointer;\n\n  &.outside {\n    color: ", ";\n  }\n  &.disable {\n    opacity: 0.2;\n  }\n"], ["\n  font-size: 1em;\n  /* color: white; */\n  color: ", ";\n  margin-top: 10px;\n  cursor: pointer;\n\n  &.outside {\n    color: ", ";\n  }\n  &.disable {\n    opacity: 0.2;\n  }\n"])), function (_a) {
    var _b;
    var theme = _a.theme;
    return ((_b = theme.contrast) === null || _b === void 0 ? void 0 : _b.tertiary) || "FFFFFF";
}, function (_a) {
    var _b;
    var theme = _a.theme;
    return ((_b = theme.contrast) === null || _b === void 0 ? void 0 : _b.darkPrimary) || "2E2E2E";
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=DropDownModal.style.js.map