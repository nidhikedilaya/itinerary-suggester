(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r);a(13);var o=e=>{let{onCityChange:t}=e;const a=["Paris","Tokyo","New York","Bangalore","Berlin","Singapore","Rome","Sydney","Los Angeles"];return l.a.createElement("select",{onChange:e=>t(e.target.value),disabled:0===a.length},l.a.createElement("option",{value:""},"Select a City"),a.map(e=>l.a.createElement("option",{key:e,value:e},e)))};var u=e=>{let{city:t,data:a}=e;return l.a.createElement("div",null,l.a.createElement("h2",null,t),l.a.createElement("h3",null,"Weather"),a.weather&&a.weather.temperature_C&&a.weather.description?l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("strong",null,"Temperature:")," ",a.weather.temperature_C," \xb0C"),l.a.createElement("p",null,l.a.createElement("strong",null,"Description:")," ",a.weather.description)):l.a.createElement("p",null,"No weather data available."),l.a.createElement("h3",null,"Hotels"),l.a.createElement("ul",null,a.hotels.map((e,t)=>l.a.createElement("li",{key:t},e))),l.a.createElement("h3",null,"Places"),l.a.createElement("ul",null,a.places.map((e,t)=>l.a.createElement("li",{key:t},e))))};a(14);var i=function(){const[e,t]=Object(n.useState)(""),[a,r]=Object(n.useState)(null),[c,i]=Object(n.useState)(!1),[s,m]=Object(n.useState)(null);return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Itinerary Suggester"),l.a.createElement(o,{onCityChange:async e=>{t(e),i(!0),m(null);try{const t=await fetch("http://localhost:5000/data/"+e);if(!t.ok)throw new Error("Failed to fetch data");const a=await t.json();r(a)}catch(s){console.error("Error fetching data:",s),m(s.message)}finally{i(!1)}}}),c&&l.a.createElement("p",null,"Loading..."),s&&l.a.createElement("p",{style:{color:"red"}},"Error: ",s),a&&!c&&!s&&l.a.createElement("div",{className:"data-container"},l.a.createElement(u,{city:e,data:a})))};var s=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:c}=t;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,null))),s()},4:function(e,t,a){e.exports=a(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.0676105a.chunk.js.map