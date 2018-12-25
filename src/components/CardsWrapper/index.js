import React from "react";
import "./style.css";

function CardsWrapper(props){
    return <div className="container card-wrapper">{props.children}</div>
}

export default CardsWrapper;