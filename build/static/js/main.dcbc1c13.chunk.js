(this.webpackJsonphangman=this.webpackJsonphangman||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),r=s(4),i=s.n(r),c=(s(13),s(3)),u=s(5),o=s(6),h=s(8),l=s(7),d=(s(14),["Workforce","Management","LaborChart","Javascript","Typescript","Programming","Software","Engineering"]);var m=function(){return d[Math.floor(Math.random()*d.length)]},g=s(0),j=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(e){var a;Object(u.a)(this,s),(a=t.call(this,e)).handleKeyPress=function(e){var t=e.key.toUpperCase();t.match(/^[A-Z]$/)&&a.makeGuess(t)};var n=m().toUpperCase();return a.state={answer:n,remainingGuesses:6,lettersGuessed:[],answerSoFar:"_".repeat(n.length)},a}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("keydown",(function(t){t.repeat||e.handleKeyPress(t)}))}},{key:"resetGame",value:function(){var e=m().toUpperCase();this.setState({answer:e,remainingGuesses:6,lettersGuessed:[],answerSoFar:"_".repeat(e.length)})}},{key:"makeGuess",value:function(e){if("playing"===this.getGameStatus()){var t=this.state,s=t.answer,a=t.remainingGuesses,n=t.lettersGuessed,r=t.answerSoFar;if(!n.includes(e)){for(var i=!0,u=Object(c.a)(r),o=0;o<s.length;o++)s[o]===e&&(u[o]=e,i=!1);var h=Object(c.a)(n);h.push(e);var l=a;i&&l--,this.setState({lettersGuessed:h,remainingGuesses:l,answerSoFar:u.join("")})}}}},{key:"getGameStatus",value:function(){var e=this.state,t=e.answer,s=e.remainingGuesses;return e.answerSoFar===t?"victory":s<=0?"defeat":"playing"}},{key:"renderGameOver",value:function(){var e=this,t=this.getGameStatus();return Object(g.jsxs)("div",{className:"game_over",children:[Object(g.jsxs)("h1",{className:"capitalize",children:[t,"!"]}),Object(g.jsxs)("h3",{children:["Answer: ",this.state.answer]}),Object(g.jsx)("button",{onClick:function(){return e.resetGame()},children:"Play again?"}),Object(g.jsx)("hr",{})]})}},{key:"render",value:function(){var e=this.state,t=e.remainingGuesses,s=e.lettersGuessed,a=e.answerSoFar,n=this.getGameStatus();return Object(g.jsxs)("div",{className:"App",children:["playing"!==n?this.renderGameOver():null,Object(g.jsx)("h1",{children:"Hangman"}),Object(g.jsx)("b",{children:"Guesses remaining:"})," ",t,Object(g.jsx)("div",{className:"progress",children:a}),Object(g.jsx)("b",{children:"Letters guessed:"})," ",s.join(", ")]})}}]),s}(n.a.Component);i.a.render(Object(g.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.dcbc1c13.chunk.js.map