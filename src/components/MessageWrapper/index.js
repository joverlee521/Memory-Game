import React from "react";
import "./style.css"

function MessageWrapper(props){
    const winLose = props.winLose;
    let image;
    if(winLose === "win"){
        image = <img src={`${process.env.PUBLIC_URL}/images/win.gif`} alt="Win GIF"/>
    }
    else if(winLose === "lose"){
        image = <img src={`${process.env.PUBLIC_URL}/images/lose.gif`} alt="Lose GIF"/>
    }
    return(
        <div className="messageWrapper">
            {image}
            <button onClick={props.restart}type="button" className="btn btn-primary my-3">Restart Game</button>
        </div>
    )
}

export default MessageWrapper;