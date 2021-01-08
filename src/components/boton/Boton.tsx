import React, { MouseEventHandler } from "react";
import StyledButton from "./styled.Boton";

interface IPropertys {
  color?: string;
  width?: string;
  fontSize?: string;
  paddingf?: string;
  children?: any;
  backgroundColor?: string;
}

interface IMouseEvents {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type IButton = IPropertys & IMouseEvents;

const Boton = (props: IButton) => {
  const { children } = props;

  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Boton;
