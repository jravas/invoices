(this.webpackJsonpinvoices=this.webpackJsonpinvoices||[]).push([[0],{18:function(e,t,a){e.exports=a(31)},23:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n,i=a(0),c=a.n(i),r=a(14),s=a.n(r),l=(a(23),a(24),a(7)),m=a(5);a(25);!function(e){e.Overview="/",e.Invoices="/invoices",e.Settings="/settings"}(n||(n={}));var o=a(17),u=function(){var e=Object(m.f)().pathname,t=Object(i.useState)(""),a=Object(o.a)(t,2),r=a[0],s=a[1];Object(i.useEffect)((function(){l(e)}));var l=function(e){switch(e){case n.Overview:return void s("Overview");case n.Invoices:return void s("Invoices");case n.Settings:return void s("Settings");default:return}};return c.a.createElement("header",{className:"header"},c.a.createElement("h1",{className:"header--title t t--alpha s--left--med s--right--med"},r))},v=function(e){var t=e.name,a=e.price,n=e.date,i=e.status;return c.a.createElement("div",{className:"invoice s--left--med s--right--med s--top--tny s--bottom--tny ".concat(i?"invoice--active":"invoice--inactive")},c.a.createElement("div",{className:"invoice--header"},c.a.createElement("p",{className:"invoice--header--title"},t)),c.a.createElement("div",{className:"invoice--footer s--top--tny"},c.a.createElement("p",null,a," HRK"),c.a.createElement("p",{className:"t--light"},n)))},d=function(){return c.a.createElement("div",{className:"filters"},c.a.createElement("span",{className:"filters--item t t--gama s--left--med"},"All"),c.a.createElement("span",{className:"filters--item t t--gama s--left--med"},"Paid"),c.a.createElement("span",{className:"filters--item t t--gama s--left--med"},"Unpaid"))},E=[{id:"00",name:"Water supply service",price:"124,32",date:"17.4.2020.",status:!0},{id:"01",name:"Internet service provider",price:"168,27",date:"15.4.2020.",status:!0},{id:"02",name:"Electricity service",price:"245,12",date:"12.4.2020.",status:!0},{id:"03",name:"Natural gas",price:"224,95",date:"12.4.2020.",status:!0},{id:"04",name:"Netflix",price:"80,00",date:"10.4.2020.",status:!0},{id:"05",name:"PlayStation Plus",price:"65,00",date:"8.4.2020.",status:!0}],p=function(){return c.a.createElement("div",{className:"main"},c.a.createElement(d,null),c.a.createElement("div",{className:"invoices invoices--list"},E.map((function(e){return c.a.createElement(v,Object.assign({key:e.id},e))}))))},f=[{id:"00",name:"Water supply service",price:"124,32",date:"17.4.2020.",status:!1},{id:"01",name:"Internet service provider",price:"168,27",date:"15.4.2020.",status:!1},{id:"02",name:"Electricity service",price:"245,12",date:"12.4.2020.",status:!1}],h=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"graph s--left--med s--right--med s--bottom--med"}),c.a.createElement("div",{className:"main"},c.a.createElement("h1",{className:"overview-title t t--beta"},"Unpaid"),c.a.createElement("div",{className:"invoices invoices--list"},f.map((function(e){return c.a.createElement(v,Object.assign({key:e.id},e))})))))},g=function(){return c.a.createElement("div",{className:"main"})};var N=function(){return c.a.createElement(l.a,{basename:"/invoices"},c.a.createElement(c.a.Fragment,null,c.a.createElement(u,null),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:n.Settings},c.a.createElement(g,null)),c.a.createElement(m.a,{path:n.Invoices},c.a.createElement(p,null)),c.a.createElement(m.a,{path:n.Overview},c.a.createElement(h,null))),c.a.createElement("nav",{className:"footer"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(l.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(l.b,{to:"/invoices"},"Invoices")),c.a.createElement("li",null,c.a.createElement(l.b,{to:"/settings"},"Settings"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.c592301b.chunk.js.map