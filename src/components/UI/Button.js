import React from "react";

import classes from "./Button.module.css";

//componente responsável por estilizar todos os butões da aplicação
const Button = (props) => {
  return (
    <button className={classes.button} type={props.type || "button"} onClick={props.onClick}>{props.children}</button>
  );
};

export default Button;
