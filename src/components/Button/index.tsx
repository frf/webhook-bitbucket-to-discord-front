import React, { MouseEventHandler } from 'react';
import './styles.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];
const COLOR = ['primary', 'blue', 'red', 'green'];

interface ButtonProps {
  children?:string;
  type?:any;
  reset?: string;
  submit?: string;
  click?: MouseEventHandler;
  buttonStyle?:any;
  buttonSize?:any;
  buttonColor?:any;
}

const Button: React.FC<ButtonProps> = (props)  => {

  const checkButtonStyle = STYLES.includes(props.buttonStyle)
    ? props.buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(props.buttonSize) ? props.buttonSize : SIZES[0];

  const checkButtonColor = COLOR.includes(props.buttonColor) ? props.buttonColor : null;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={props.click}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;