import styled from "styled-components";
const DemoAppContainer = styled.div`
  display: flex;
  min-height: 100%;
  font-size: 14px;
  background: #eeeff5;
`;
const DemoAppMain = styled.div`
  flex-grow: 1;
  padding: 3em;
  & .fc-col-header-cell {
    padding: 5px 0rem;
    background: white;
  }
`;

const DatePickerContainer = styled.div`
  position: relative;
  margin-left: 2rem;
  z-index: 999999999;
  width: 20rem;
  display: flex;
  align-items: center;
  background: red;
`;

export { DemoAppContainer, DemoAppMain, DatePickerContainer };
