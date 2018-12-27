(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"All Might Power",image:"/images/all-might-power.png"},{id:2,name:"All Might Weak",image:"/images/all-might-weak.png"},{id:3,name:"Recovery Girl",image:"/images/recovery-girl.png"},{id:4,name:"Deku",image:"/images/deku.png"},{id:5,name:"Froppy",image:"/images/froppy.png"},{id:6,name:"Bakugo",image:"/images/bakugo.png"},{id:7,name:"Uravity",image:"/images/uravity.png"},{id:8,name:"Grape Juice",image:"/images/grape-juice.png"},{id:9,name:"Tsukuyomi",image:"/images/tsukuyomi.png"},{id:10,name:"Tomura",image:"/images/tomura.png"},{id:11,name:"Nomu",image:"/images/nomu.png"},{id:12,name:"Thirteen",image:"/images/thirteen.png"}]},,,,,,,,function(e,t,a){e.exports=a(29)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),i=a.n(c),o=a(4),m=a(5),s=a(7),l=a(6),u=a(8);a(15);var g=function(e){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid custom-jumbo"},r.a.createElement("h1",{className:"display-4"},"Welcome To"),r.a.createElement("img",{className:"landing-img",src:"".concat("/Memory-Game","/images/my-hero-logo.png"),alt:"My Hero Academia"}),r.a.createElement("h1",{className:"display-4"},"Memory Game!"),r.a.createElement("hr",null),r.a.createElement("h3",null,"Click on an image to earn points, but don't click on any more than once!"),r.a.createElement("hr",null),r.a.createElement("button",{onClick:e.startGame,className:"btn btn-danger"},"Start Game!"))};a(17);var p=function(e){var t,a=e.winLose;return t="win"===a?"You Win!":"lose"===a?"You Lost!":"Click an image to start!",r.a.createElement("ul",{className:"nav sticky-top justify-content-between align-items-center flex-lg-row flex-column px-3"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("img",{src:"".concat("/Memory-Game","/images/my-hero-logo.png"),id:"nav-img",alt:"My Hero Academia"})),r.a.createElement("li",{className:"nav-item text-white h3"},t),r.a.createElement("li",{className:"nav-item text-white h4"},"Score: ",e.score," | Top Score: ",e.topScore))};a(19);var d=function(e){return r.a.createElement("div",{className:"container card-wrapper"},e.children)};a(21);var h=function(e){var t,a=e.winLose;return"win"===a?t=r.a.createElement("img",{src:"".concat("/Memory-Game","/images/win.gif"),alt:"Win GIF"}):"lose"===a&&(t=r.a.createElement("img",{src:"".concat("/Memory-Game","/images/lose.gif"),alt:"Lose GIF"})),r.a.createElement("div",{className:"messageWrapper"},t,r.a.createElement("button",{onClick:e.restart,type:"button",className:"btn btn-primary my-3"},"Restart Game"))};a(23);var f=function(e){return r.a.createElement("div",{className:"card character-card",onClick:function(){return e.clickState(e.character.id)}},r.a.createElement("img",{className:"card-img img-custom",src:"".concat("/Memory-Game")+e.character.image,alt:e.character.name}))};a(25);var v=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"})))},w=a(1),E=(a(27),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).startGame=function(){a.setState({start:!0})},a.updateScore=function(e){var t=a.state.score;t++,a.setState({score:t},function(){e.length===w.length?(a.updateTopScore(),a.setState({winLose:"win",clicked:[]})):a.setState({clicked:e})})},a.updateTopScore=function(){var e=a.state.score,t=a.state.topScore;e>t&&(t=e,a.setState({topScore:t})),a.setState({score:0})},a.resetGame=function(){a.setState({winLose:""})},a.clickState=function(e){var t=a.state.clicked;t.includes(e)?(a.updateTopScore(),a.setState({winLose:"lose",clicked:[]})):(t.push(e),a.updateScore(t))},a.renderCharacters=function(){return a.shuffle(w).map(function(e){return r.a.createElement(f,{character:e,clickState:a.clickState})})},a.state={start:!1,score:0,topScore:0,clicked:[],winLose:""},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"shuffle",value:function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}},{key:"render",value:function(){var e;return this.state.start?(e="win"===this.state.winLose||"lose"===this.state.winLose?r.a.createElement(h,{winLose:this.state.winLose,restart:this.resetGame}):r.a.createElement(d,null,this.renderCharacters()),r.a.createElement("div",{className:"wrapper"},r.a.createElement(p,{score:this.state.score,topScore:this.state.topScore,winLose:this.state.winLose}),r.a.createElement("div",{className:"content"},e),r.a.createElement(v,null))):r.a.createElement(g,{startGame:this.startGame})}}]),t}(n.Component));i.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.48049908.chunk.js.map