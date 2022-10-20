/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import {
  ModalContainer,
  ModalContentDiv,
  ModalContentText,
} from "./DropDownModal.style";

function DropDownModal(props) {
  const {
    style = {},
    ContainerStyle = {},
    TextStyle = {},
    data = [],
    itemContainerStyle = {},
    setModalIsVisibal,
    kababIconRef = false,
    handleClick,
    version = 1,
    isActive,
    field = "",
    // additional params required to pass during click
    extraParms,
  } = props;
  const modalRef = useRef();
  useClickOutside(
    modalRef,
    () => {
      if (!field) {
        return setModalIsVisibal(false);
      }
      return setModalIsVisibal(field);
    },
    kababIconRef
  );

  const handleSelection = (item) => {
    if (!field) {
      return handleClick(item, { activeRowItem: extraParms?.activeRowItem });
    }
    return handleClick(field, item);
  };

  // undefined to handle prev developed code
  if (!isActive && isActive !== undefined) {
    return <></>;
  }
  return (
    <ModalContainer
      className={version === "1" ? "" : "outside"}
      ref={modalRef}
      style={ContainerStyle || style}
    >
      {data.length > 0 &&
        data.map((item, i) => (
          <ModalContentDiv
            className={`${item.class || ""} 'list'`}
            style={itemContainerStyle}
            key={i}
            onClick={() => handleSelection(item)}
          >
            <ModalContentText
              className={`${version === "1" ? "" : "outside"} ${
                item.disable ? "disable" : ""
              }`}
              style={TextStyle}
            >
              {item.label}
            </ModalContentText>
          </ModalContentDiv>
        ))}
    </ModalContainer>
  );
}

export default DropDownModal;
