import React, { ChangeEventHandler } from "react";

import StyledField from "./styled.Field";

interface IPropertys {
  border?: string;
  fontfamily?: string;
  fontThick?: string;
  margin?: string;
  padding?: string;
}

interface HTMLEvent {
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export type IField = IPropertys & HTMLEvent;

const Field = (props: IField) => {
  return <StyledField {...props} />;
};

export default Field;
