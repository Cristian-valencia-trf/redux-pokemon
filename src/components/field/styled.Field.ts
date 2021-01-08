import { ChangeEventHandler } from "react";
import styled from "styled-components";

interface IStyledField { 
  border?: string;
  fontfamily?: string;
  fontThick?: string;
  margin?: string;
  padding?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const StyledField = styled.input<IStyledField>`
  border: ${(pr) => pr.border ? pr.border: "12"};
  font-family: ${(pr) => pr.fontfamily? pr.fontfamily:"Lucida Console"};
  font-weight:${(pr) => pr.fontThick? pr.fontThick:"bold"};
  margin: ${(pr) => pr.margin ? pr.margin: "10"}px;
  padding: ${(pr) => pr.padding? pr.padding:"10"}px;

`;

export default StyledField;
