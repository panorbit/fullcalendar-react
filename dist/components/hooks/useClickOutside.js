/* eslint-disable no-undef */
import { useEffect } from "react";
var useClickOutside = function (ref, handler, secondRef) {
    if (secondRef === void 0) { secondRef = false; }
    useEffect(function () {
        var listener = function (event) {
            if (!ref.current || ref.current.contains(event.target))
                return;
            if (secondRef) {
                if (secondRef.current.contains(event.target))
                    return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        return function () {
            document.removeEventListener("mousedown", listener);
        };
    }, [ref, handler]);
};
export default useClickOutside;
//# sourceMappingURL=useClickOutside.js.map