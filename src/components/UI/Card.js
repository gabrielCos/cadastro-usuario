import React from "react";

import classes from './Card.module.css';

/*componente responsável pelo estilo geral da aplicação*/
const Card = (props) => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
};

export default Card;