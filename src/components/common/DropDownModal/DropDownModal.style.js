import styled from "styled-components";

export const ModalContainer = styled.div`
  min-height: 20px;
  position: absolute;
  background-color: ${({ theme }) => theme.customTheme?.primary || "#4F4ED0"};
  z-index: 10;
  border-radius: 6px;
  animation: heightAnimation 400ms 1;
  overflow: auto;
  padding: 15px 20px 15px 20px;
  width: 21.3rem;
  min-width: max-content;
  max-height: 50rem;

  &.outside {
    background-color: ${({ theme }) => theme.core?.pureSecondary || "#ffffff"};
    border: 1px solid ${({ theme }) => theme.core?.secondary || "#EEEFF5"};

    & p {
      color: ${({ theme }) =>
        theme.contrast?.darkPrimary || "#717171"} !important;
    }
  }

  @keyframes heightAnimation {
    from {
      opacity: 0;
      transform: translateY(10px);
      overflow: hidden;
    }
    to {
      opacity: 1;
      transform: translateY(0px);
      overflow: hidden;
    }
  }
`;

export const ModalContentDiv = styled.div`
  height: 25px;
`;

export const ModalContentText = styled.p`
  font-size: 1em;
  /* color: white; */
  color: ${({ theme }) => theme.contrast?.tertiary || "FFFFFF"};
  margin-top: 10px;
  cursor: pointer;

  &.outside {
    color: ${({ theme }) => theme.contrast?.darkPrimary || "2E2E2E"};
  }
  &.disable {
    opacity: 0.2;
  }
`;
