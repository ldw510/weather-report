(this["webpackJsonpweather-report"]=this["webpackJsonpweather-report"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(5),s=n.n(r),i=(n(4),n(3)),o=n(0),d="8c441d4e0ff33a436004c507bc5c6988",u="https://api.openweathermap.org/data/2.5/";var h=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),h=s[0],l=s[1];return Object(o.jsx)("div",{className:"undefined"!=typeof h.main&&h.main.temp>12?"Appsun":"App",children:Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{className:"search-box",children:Object(o.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return c(e.target.value)},value:n,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(u,"weather?q=").concat(n,"&units=metric&APPID=").concat(d)).then((function(e){return e.json()})).then((function(e){l(e),c("")}))}})}),"undefined"!=typeof h.main?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"location-box",children:[Object(o.jsxs)("div",{className:"location",children:[h.name,", ",h.sys.country]}),Object(o.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],n=e.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(n," ").concat(a," ").concat(c)}(new Date)})]}),Object(o.jsxs)("div",{className:"weather=box",children:[Object(o.jsxs)("div",{className:"temp",children:[Math.round(h.main.temp),"\xb0C"]}),Object(o.jsx)("div",{className:"weather",children:h.weather[0].main})]})]}):""]})})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),l()},4:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.672ed0dc.chunk.js.map