import React from "react";
import "./style.css";

function ImageCard(props){
    return(
        <div className="card character-card">
            <img className="card-img img-custom" src={props.character.image} alt={props.character.name}/>
        </div>
    );
}

export default ImageCard;