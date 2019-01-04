(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"All Might Power",image:"/images/all-might-power.png"},{id:2,name:"All Might Weak",image:"/images/all-might-weak.png"},{id:3,name:"Recovery Girl",image:"/images/recovery-girl.png"},{id:4,name:"Deku",image:"/images/deku.png"},{id:5,name:"Froppy",image:"/images/froppy.png"},{id:6,name:"Bakugo",image:"/images/bakugo.png"},{id:7,name:"Uravity",image:"/images/uravity.png"},{id:8,name:"Grape Juice",image:"/images/grape-juice.png"},{id:9,name:"Tsukuyomi",image:"/images/tsukuyomi.png"},{id:10,name:"Tomura",image:"/images/tomura.png"},{id:11,name:"Nomu",image:"/images/nomu.png"},{id:12,name:"Thirteen",image:"/images/thirteen.png"}]},,,function(e,t,a){e.exports=a(29)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),s=a(1),o=a(2),m=a(4),l=a(3),u=a(5);a(15);var p,g=function(e){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid p-1 custom-jumbo"},r.a.createElement("h1",{className:"display-4"},"Welcome To"),r.a.createElement("img",{className:"landing-img img-fluid",src:"".concat("/Memory-Game","/images/my-hero-logo.png"),alt:"My Hero Academia"}),r.a.createElement("h1",{className:"display-4"},"Memory Game!"),r.a.createElement("hr",null),r.a.createElement("h3",{class:"text-center"},"Click on an image to earn points, but don't click on any more than once!"),r.a.createElement("h3",{class:"text-center"},"Keep an eye on the timer, you only get 10 seconds per turn!"),r.a.createElement("button",{onClick:e.startGame,className:"mt-1 btn btn-danger"},"Start Game!"))},d=(a(17),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).startTimer=function(){a.resetTimer(),p=setInterval(function(){a.setState({timer:a.state.timer-1})},1e3)},a.resetTimer=function(){clearInterval(p),a.setState({timer:10})},a.displayMessage=function(){var e=a.props.winLose,t=a.props.score,n=a.state.timer;return"win"===e?"You Win!":"lose"===e?"You Lost!":0===t?"Click an image to start!":"Keep clicking! "+n+" seconds left!"},a.componentDidUpdate=function(e,t){console.log(t.timer),0===t.timer?(a.props.updateTopScore(),a.props.loseGame(),a.resetTimer()):e.score!==a.props.score&&0!==a.props.score&&(console.log("started timer"),a.startTimer())},a.state={timer:9},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"nav sticky-top justify-content-between align-items-center flex-lg-row flex-column px-3"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("img",{src:"".concat("/Memory-Game","/images/my-hero-logo.png"),id:"nav-img",alt:"My Hero Academia"})),r.a.createElement("li",{className:"nav-item text-white h3"},this.displayMessage()),r.a.createElement("li",{className:"nav-item text-white h4"},"Score: ",this.props.score," | Top Score: ",this.props.topScore))}}]),t}(n.Component));a(19);var f=function(e){return r.a.createElement("div",{className:"container card-wrapper"},e.children)};a(21);var h=function(e){var t=e.winLose;return r.a.createElement("div",{className:"messageWrapper p-5"},"win"===t?r.a.createElement("img",{class:"img-fluid",src:"".concat("/Memory-Game","/images/win.gif"),alt:"Win GIF"}):r.a.createElement("img",{class:"img-fluid",src:"".concat("/Memory-Game","/images/lose.gif"),alt:"Lose GIF"}),r.a.createElement("button",{onClick:e.restart,type:"button",className:"btn btn-primary my-3"},"Restart Game"))};a(23);var v=function(e){return r.a.createElement("div",{className:"card character-card",onClick:function(){return e.clickState(e.character.id)}},r.a.createElement("img",{className:"card-img img-custom",src:"".concat("/Memory-Game")+e.character.image,alt:e.character.name}))};a(25);var y=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"})))},w=a(6),E=(a(27),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).startGame=function(){a.setState({start:!0})},a.winGame=function(){a.setState({winLose:"win",clicked:[]})},a.loseGame=function(){a.setState({winLose:"lose",clicked:[]})},a.resetGame=function(){a.setState({winLose:""})},a.updateScore=function(e){var t=a.state.score;t++,a.setState({score:t},function(){e.length===w.length?(a.updateTopScore(),a.winGame()):a.setState({clicked:e})})},a.updateTopScore=function(){var e=a.state.score,t=a.state.topScore;e>t&&(t=e,a.setState({topScore:t})),a.setState({score:0})},a.clickState=function(e){var t=a.state.clicked;t.includes(e)?(a.updateTopScore(),a.loseGame()):(t.push(e),a.updateScore(t))},a.renderCharacters=function(){return a.shuffle(w).map(function(e){return r.a.createElement(v,{character:e,clickState:a.clickState})})},a.state={start:!1,score:0,topScore:0,clicked:[],winLose:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"shuffle",value:function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}},{key:"render",value:function(){return this.state.start?r.a.createElement("div",{className:"wrapper"},r.a.createElement(d,{score:this.state.score,topScore:this.state.topScore,winLose:this.state.winLose,updateTopScore:this.updateTopScore,loseGame:this.loseGame}),r.a.createElement("div",{className:"content"},""!==this.state.winLose?r.a.createElement(h,{winLose:this.state.winLose,restart:this.resetGame}):r.a.createElement(f,null,this.renderCharacters())),r.a.createElement(y,null)):r.a.createElement(g,{startGame:this.startGame})}}]),t}(n.Component));i.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.cfe98d78.chunk.js.map