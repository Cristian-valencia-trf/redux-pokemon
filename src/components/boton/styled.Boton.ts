import styled from "styled-components";

interface IStyledButton {
  color?: string;
  width?: string;
  fontSize?: string;
  paddingf?: string;
  backgroundColor?: string;
}

const StyledButton = styled.button<IStyledButton>`
  color: ${(pr) => (pr.color ? pr.color : "black")};
  width: ${(pr) => (pr.width ? pr.width : "150")}px;
  font-size: ${(pr) => (pr.fontSize ? pr.fontSize : "13")}px;
  padding: ${(pr) => (pr.paddingf ? pr.paddingf : "9")}px;
  background-color: ${(pr) =>
    pr.backgroundColor ? pr.backgroundColor : "white"};
  &:hover {
    color: white;
    background: green;
    transition: 0.5s;
  }
`;

export default StyledButton;
