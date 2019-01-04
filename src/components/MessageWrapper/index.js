import React from "react";
import "./style.css"

function MessageWrapper(props){
    const winLose = props.winLose;
    return(
        <div className="messageWrapper">
            {(winLose === "win") ? <img src={`${process.env.PUBLIC_URL}/images/win.gif`} alt="Win GIF"/> : <img src={`${process.env.PUBLIC_URL}/images/lose.gif`} alt="Lose GIF"/> }
            <button onClick={props.restart}type="button" className="btn btn-primary my-3">Restart Game</button>
        </div>
    )
}

export default MessageWrapper;