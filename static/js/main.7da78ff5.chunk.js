(this.webpackJsonpinvoices=this.webpackJsonpinvoices||[]).push([[0],{18:function(e,t,a){e.exports=a(31)},23:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n,i=a(0),r=a.n(i),c=a(14),s=a.n(c),l=(a(23),a(24),a(9)),m=a(5);a(25);!function(e){e.Overview="/",e.Invoices="/invoices",e.Settings="/settings"}(n||(n={}));var o=a(17),u=function(){var e=Object(m.f)().pathname,t=Object(i.useState)(""),a=Object(o.a)(t,2),c=a[0],s=a[1];Object(i.useEffect)((function(){l(e)}),[]);var l=function(e){switch(e){case n.Overview:return void s("Overview");case n.Invoices:return void s("Invoices");case n.Settings:return void s("Settings");default:return}};return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header--title t t--alpha s--left--med s--right--med"},c))},v=function(e){var t=e.name,a=e.price,n=e.date,i=e.status;return r.a.createElement("div",{className:"invoice s--left--med s--right--med s--top--tny s--bottom--tny ".concat(i?"invoice--active":"invoice--inactive")},r.a.createElement("div",{className:"invoice--header"},r.a.createElement("p",{className:"invoice--header--title"},t)),r.a.createElement("div",{className:"invoice--footer s--top--tny"},r.a.createElement("p",null,a," HRK"),r.a.createElement("p",{className:"t--light"},n)))},d=function(){return r.a.createElement("div",{className:"filters"},r.a.createElement("span",{className:"filters--item t t--gama s--left--med"},"All"),r.a.createElement("span",{className:"filters--item t t--gama s--left--med"},"Paid"),r.a.createElement("span",{className:"filters--item t t--gama s--left--med"},"Unpaid"))},p=[{name:"Water supply service",price:"124,32",date:"17.4.2020.",status:!0},{name:"Internet service provider",price:"168,27",date:"15.4.2020.",status:!0},{name:"Electricity service",price:"245,12",date:"12.4.2020.",status:!0},{name:"Natural gas",price:"224,95",date:"12.4.2020.",status:!0},{name:"Netflix",price:"80,00",date:"10.4.2020.",status:!0},{name:"PlayStation Plus",price:"65,00",date:"8.4.2020.",status:!0}],E=function(){return r.a.createElement("div",{className:"main"},r.a.createElement(d,null),r.a.createElement("div",{className:"invoices invoices--list"},p.map((function(e){return r.a.createElement(v,e)}))))},f=[{name:"Water supply service",price:"124,32",date:"17.4.2020.",status:!1},{name:"Internet service provider",price:"168,27",date:"15.4.2020.",status:!1},{name:"Electricity service",price:"245,12",date:"12.4.2020.",status:!1}],h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"graph s--left--med s--right--med s--bottom--med"}),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"invoices invoices--overview"},f.map((function(e){return r.a.createElement(v,e)})))))},g=function(){return r.a.createElement("div",null,"Settings")};var N=function(){return r.a.createElement(l.a,{basename:"https://jravas.github.io/invoices"},r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:n.Settings},r.a.createElement(g,null)),r.a.createElement(m.a,{path:n.Invoices},r.a.createElement(E,null)),r.a.createElement(m.a,{path:n.Overview},r.a.createElement(h,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.7da78ff5.chunk.js.map