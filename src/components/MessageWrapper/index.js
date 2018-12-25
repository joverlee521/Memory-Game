import React from "react";

function MessageWrapper(props){
    const winLose = props.winLose;
    let image;
    if(winLose === "win"){
        image = <img src="/images/win.gif" alt="Win GIF"/>
    }
    else if(winLose === "lose"){
        image = <img src="/images/lose.gif" alt="Lose GIF"/>
    }
    return(
        <div className="messageWrapper">
            {image}
        </div>
    )
}

export default MessageWrapper;