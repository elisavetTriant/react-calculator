(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{24:function(t,e,c){},25:function(t,e,c){},33:function(t,e){},34:function(t,e,c){"use strict";c.r(e);var n=c(1),u=c(4),l=c.n(u),a=c(16),i=c.n(a),r=(c(24),c(5)),s=c(36);c(25);var o=function(){var t=Object(u.useState)(null),e=Object(r.a)(t,2),c=e[0],l=e[1],a=Object(u.useState)("0"),i=Object(r.a)(a,2),o=i[0],b=i[1],j=Object(u.useState)(""),d=Object(r.a)(j,2),h=d[0],O=d[1],m=Object(u.useState)(null),v=Object(r.a)(m,2),f=v[0],x=v[1];Object(u.useEffect)((function(){}),[f,o,c]);var p=function(t){var e=parseInt(t.target.value,10);b("0"===o?String(e):o+e),O("0"===h?String(e):h+e)},k=function(t){l(o),O(""),x(f+t.target.value),b(o+t.target.value)},C=function(t){var e=t.split(/([-+/*]+)/g),c=[];return e.forEach((function(t){/([-+/*]+)/.test(t)?(t="-"===t.slice(-1)?t.slice(-2):t.slice(-1),c.push(t)):c.push(t)})),s.a(c.join(""))};return Object(n.jsx)("div",{className:"calculator",children:Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("input",{type:"text",id:"display",value:o,readOnly:!0}),Object(n.jsxs)("div",{className:"calculator-buttons",children:[Object(n.jsx)("button",{id:"clear",className:"calc-button op-key is-clear",onClick:function(){return b("0"),O(""),l(null),void x(null)},children:"Clear"}),Object(n.jsx)("button",{id:"divide",className:"calc-button op-key",value:"/",onClick:function(t){return k(t)},children:"/"}),Object(n.jsx)("button",{id:"seven",className:"calc-button numbers",value:"7",onClick:function(t){return p(t)},children:"7"}),Object(n.jsx)("button",{id:"eight",className:"calc-button numbers",value:"8",onClick:function(t){return p(t)},children:"8"}),Object(n.jsx)("button",{id:"nine",className:"calc-button numbers",value:"9",onClick:function(t){return p(t)},children:"9"}),Object(n.jsx)("button",{id:"multiply",className:"calc-button op-key",value:"*",onClick:function(t){return k(t)},children:"x"}),Object(n.jsx)("button",{id:"four",className:"calc-button numbers",value:"4",onClick:function(t){return p(t)},children:"4"}),Object(n.jsx)("button",{id:"five",className:"calc-button numbers",value:"5",onClick:function(t){return p(t)},children:"5"}),Object(n.jsx)("button",{id:"six",className:"calc-button numbers",value:"6",onClick:function(t){return p(t)},children:"6"}),Object(n.jsx)("button",{id:"subtract",className:"calc-button op-key",value:"-",onClick:function(t){return k(t)},children:"-"}),Object(n.jsx)("button",{id:"one",className:"calc-button numbers",value:"1",onClick:function(t){return p(t)},children:"1"}),Object(n.jsx)("button",{id:"two",className:"calc-button numbers",value:"2",onClick:function(t){return p(t)},children:"2"}),Object(n.jsx)("button",{id:"three",className:"calc-button numbers",value:"3",onClick:function(t){return p(t)},children:"3"}),Object(n.jsx)("button",{id:"add",className:"calc-button op-key",value:"+",onClick:function(t){return k(t)},children:"+"}),Object(n.jsx)("button",{id:"zero",className:"calc-button numbers is-zero",value:"0",onClick:function(t){return p(t)},children:"0"}),Object(n.jsx)("button",{id:"decimal",className:"calc-button numbers",value:".",onClick:function(){/\./.test(h)||(b(o+"."),O(h+"."))},children:"."}),Object(n.jsx)("button",{id:"equals",className:"calc-button eq",value:"=",onClick:function(){return x(null),l(null),O(""),void b(String(C(o)))},children:"="})]})]})})},b=function(){return Object(n.jsxs)("div",{id:"footer",children:[Object(n.jsxs)("p",{children:["Find the source code at this ",Object(n.jsx)("a",{href:"https://github.com/elisavetTriant/react-calculator/",children:"GitHub repository"}),"."]}),Object(n.jsxs)("p",{children:["Made with love for FreeCodeCamp, by ",Object(n.jsx)("a",{href:"https://github.com/elisavetTriant/",children:"@ElisavetTriant"}),"."]})]})};i.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsxs)(l.a.Fragment,{children:[Object(n.jsx)(o,{}),Object(n.jsx)(b,{})]})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.82f19ba6.chunk.js.map