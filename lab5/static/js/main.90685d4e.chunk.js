(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=(a(13),a(1)),s=a(2),i=a(4),u=a(3),m=(a(14),function(e){return r.a.createElement("header",{className:"toolbar"},r.a.createElement("nav",{className:"toolbar__navigation"},r.a.createElement("div",{className:"toolbar__logo"},r.a.createElement("a",{href:"/"},"CURRENCY CONVERTER")),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"toolbar_navigation-items"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Sign in")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Sign up"))))))}),v=a(5),h=(a(15),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currencies:["RUB","USD","EUR","HKD","JPY","CAD"],base:"RUB",amount:"1",convertTo:"USD",result:"",date:""},e.handleSelect=function(t){var a;e.setState((a={},Object(v.a)(a,t.target.name,t.target.value),Object(v.a)(a,"result",null),a),e.calculate)},e.calculate=function(){var t=e.state.amount;fetch("https://api.exchangeratesapi.io/latest?base=".concat(e.state.base)).then((function(e){return e.json()})).then((function(a){var n=a.date,r=(a.rates[e.state.convertTo]*t).toFixed(4);e.setState({result:r,date:n})}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.currencies,a=e.base,n=e.amount,c=e.convertTo,l=e.result,o=e.date;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,n," ",a," is equavalent to ",l," ",c),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("select",{name:"convertTo",value:c,onChange:this.handleSelect,className:"form-control"},t.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))),r.a.createElement("p",null,"As of ",o))))}}]),a}(n.Component)),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement("main",{style:{marginTop:"64px"}},r.a.createElement(h,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.90685d4e.chunk.js.map