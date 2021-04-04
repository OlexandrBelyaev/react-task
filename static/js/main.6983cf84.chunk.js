(this["webpackJsonpreact-task"]=this["webpackJsonpreact-task"]||[]).push([[0],{18:function(e,a,t){},20:function(e,a,t){},21:function(e,a,t){},26:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),r=t(6),n=t.n(r),i=t(11),d=t(7),l=t(8),o=t(13),h=t(10),u=(t(18),t(5),t(0)),j=function(e){var a=e.localization,t=e.setSearchNameCity,c=e.searchNameCity,s=e.addCard,r=e.setBackgroundCard,n=e.changeLanguage,i=e.lang;return Object(u.jsxs)("div",{className:"Header",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"text",className:"Header__searchBar",placeholder:a[i].placeholder,onChange:t,value:c}),Object(u.jsx)("button",{className:"Header__searchButton",type:"button",onClick:s,children:a[i].searchBitton})]}),Object(u.jsxs)("div",{className:"Header__modificators",children:[Object(u.jsxs)("div",{className:"Header__palette",children:["Palette:",Object(u.jsx)("button",{className:"Header__paletteButtons",onClick:r("#FFF1FE")}),Object(u.jsx)("button",{className:"Header__paletteButtons",onClick:r("#F1F2FF")}),Object(u.jsx)("button",{className:"Header__paletteButtons",onClick:r("#459DE9")}),Object(u.jsx)("button",{className:"Header__paletteButtons",onClick:r("#F2F2F2")}),Object(u.jsx)("button",{className:"Header__paletteButtons",onClick:r("#C5C5C5")}),Object(u.jsx)("button",{className:"Header__paletteButtons",onClick:r("#8D8D8D")})]}),Object(u.jsxs)("select",{className:"Header__langSelector",onChange:n,value:i,children:[Object(u.jsx)("option",{value:"en",children:"EN"}),Object(u.jsx)("option",{value:"ua",children:"UA"}),Object(u.jsx)("option",{value:"ru",children:"RU"})]})]})]})},b=(t(20),t(12)),m=(t(21),t(9)),g=t.n(m),C=function(e){var a={chart:{id:"basic-bar"},xaxis:{categories:["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"]},fill:{colors:e.averageTemp>0?"red":"blue"}};return Object(u.jsx)("div",{className:"app",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"mixed-chart",children:Object(u.jsx)(g.a,{options:a,series:[{name:"Temperature",data:[5,7,10,11,15,8,10,9]}],type:"area",width:"300",height:"150"})})})})},p=function(e){var a=e.whether,t=e.localization,s=e.language,r=e.background,n=e.deleteCard,i=e.id,d=Object(c.useState)("c"),l=Object(b.a)(d,2),o=l[0],h=l[1],j=Object.assign({},a.main),m=Object.assign({},a.weather),g=Object.assign({},a.sys),p=Object.assign({},a.wind),_=Object.assign({},m[0]),O=_.description,v=_.icon,f=(j.temp_max+j.temp_min)/2,k=function(e){return Math.round(9*e/5-459.67).toString()},x=function(e){var a=Math.round(e-273.15).toString();return a>0?"+".concat(a):a};return Object(u.jsxs)("div",{className:"WhetherCard",style:{background:r},children:[Object(u.jsxs)("div",{className:"WhetherCard__header",children:[Object(u.jsx)("div",{className:"WhetherCard__city",children:"".concat(a.name,", ").concat(g.country)}),Object(u.jsxs)("div",{className:"WhetherCard__iconWhether",children:[Object(u.jsx)("img",{className:"WhetherCard__icon",src:"http://openweathermap.org/img/wn/".concat(v,"@2x.png"),alt:"weatherIcon"}),Object(u.jsx)("div",{className:"WhetherCard__whetherDescription",children:O}),Object(u.jsx)("button",{className:"WhetherCard__deleteCard",onClick:n(i),children:"x"})]})]}),Object(u.jsx)("div",{className:"WhetherCard__date",children:function(){var e,a=new Date;switch(a.getDay()){case 0:e="Mon";break;case 1:e="Tue";break;case 2:e="Wed";break;case 3:e="Thi";break;case 4:e="Fri";break;case 5:e="Sat";break;case 6:e="Sun"}switch(e+=", ".concat(a.getDate()," "),a.getMonth()){case 0:e+="January";break;case 1:e+="February";break;case 2:e+="March";break;case 3:e+="April";break;case 4:e+="May";break;case 5:e+="June";break;case 6:e+="Jule";break;case 7:e+="August";break;case 8:e+="September";break;case 9:e+="October";break;case 10:e+="November";break;case 11:e+="December"}return e+=", ".concat(a.getHours(),":").concat(a.getMinutes())}()}),Object(u.jsx)("div",{className:"WhetherCard__chart",children:Object(u.jsx)(C,{averageTemp:x(f)})}),Object(u.jsxs)("div",{className:"WhetherCard__templine",children:[Object(u.jsxs)("div",{className:"WhetherCard__tempcontainer",children:[Object(u.jsxs)("div",{className:"WhetherCard__tempToggle",children:["c"===o?Object(u.jsx)("span",{className:"WhetherCard__temp",children:x(j.temp)}):Object(u.jsx)("span",{className:"WhetherCard__temp",children:k(j.temp)}),Object(u.jsx)("span",{href:"#1",className:"c"===o?"WhetherCard__temptype-active":"WhetherCard__temptype",onClick:function(){h("c")},children:"\u2103"})," | ",Object(u.jsx)("span",{href:"#1",className:"f"===o?"WhetherCard__temptype-active":"WhetherCard__temptype",onClick:function(){h("f")},children:"\u2109"})]}),Object(u.jsx)("div",{className:"WhetherCard__feelslike",children:"c"===o?"".concat(t[s].feelsLike," ").concat(x(j.feels_like),"\u2103"):"".concat(t[s].feelsLike," ").concat(k(j.feels_like),"\u2109")})]}),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"WhetherCard__additional",children:[Object(u.jsxs)("div",{children:["".concat(t[s].wind,": "),Object(u.jsx)("b",{className:"WhetherCard__additional-blue",children:"".concat(p.speed," m/s")})]}),Object(u.jsxs)("div",{children:["".concat(t[s].humidity,":"),Object(u.jsx)("b",{className:"WhetherCard__additional-blue",children:" ".concat(j.humidity)})]}),Object(u.jsxs)("div",{children:["".concat(t[s].pressure,":"),Object(u.jsx)("b",{className:"WhetherCard__additional-blue",children:" ".concat(j.pressure)})]})]})})]})]})},_=function(e){var a=e.savedCards,t=e.localization,c=e.language,s=e.background,r=e.deleteCard,n=e.chartBackground;return Object(u.jsx)("div",{className:"CardList",children:a.map((function(e,a){return Object(u.jsx)(p,{whether:e,localization:t,language:c,background:s,deleteCard:r,id:a,chartBackground:n},a)}))})};_.defultProps={savedCards:[]};var O=_,v=function(e){Object(o.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(d.a)(this,t);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={lang:"en",savedCards:[],key:"1c5a9a29fe1346947d780b45fcf95006",background:"#FFF1FE",searchNameCity:"",localization:{en:{placeholder:"City name...",searchBitton:"Add",feelsLike:"Feels like",wind:"Wind",humidity:"Humidity",pressure:"Pressure"},ua:{placeholder:"\u041d\u0430\u0437\u0432\u0430 \u043c\u0456\u0441\u0442\u0430...",searchBitton:"\u0414\u043e\u0434\u0430\u0442\u0438",feelsLike:"\u0412\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u044f\u043a",wind:"\u0412\u0456\u0442\u0435\u0440",humidity:"\u0412\u043e\u043b\u043e\u0433\u0456\u0441\u0442\u044c",pressure:"\u0422\u0438\u0441\u043a"},ru:{placeholder:"\u0418\u043c\u044f \u0433\u043e\u0440\u043e\u0434\u0430...",searchBitton:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",feelsLike:"\u0427\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a",wind:"\u0412\u0435\u0442\u0435\u0440",humidity:"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c",pressure:"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435"}}},e.loadData=function(){null===JSON.parse(localStorage.getItem("savedCards"))?fetch("https://geolocation-db.com/json/").then((function(e){return e.json()})).then((function(a){e.setState({location:a})})).then((function(){e.loadWhether(e.state.location.city)})):e.setState({savedCards:JSON.parse(localStorage.getItem("savedCards"))}),localStorage.getItem("lang")&&e.setState({lang:localStorage.getItem("lang")})},e.loadWhether=function(a){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat(e.state.key)).then((function(e){return e.json()})).then((function(a){200===a.cod&&e.setState((function(e){return{whether:a,savedCards:[a].concat(Object(i.a)(e.savedCards))}}))})).then((function(){localStorage.setItem("savedCards",JSON.stringify(e.state.savedCards))}))},e.changeLanguage=function(a){e.setState({lang:a.target.value}),localStorage.setItem("lang",a.target.value)},e.setBackgroundCard=function(a){return function(){e.setState({background:a})}},e.setBackgroundChart=function(a){return function(){e.setState({chartBackground:a})}},e.setSearchNameCity=function(a){e.setState({searchNameCity:a.target.value})},e.addCard=function(){e.loadWhether(e.state.searchNameCity),e.setState({searchNameCity:""})},e.deleteCard=function(a){return function(){var t=e.state.savedCards.filter((function(e,t){return a!==t}));e.setState({savedCards:t}),localStorage.setItem("savedCards",JSON.stringify(t))}},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{localization:this.state.localization,setSearchNameCity:this.setSearchNameCity,searchNameCity:this.state.searchNameCity,addCard:this.addCard,setBackgroundCard:this.setBackgroundCard,changeLanguage:this.changeLanguage,lang:this.state.lang}),Object(u.jsx)(O,{savedCards:this.state.savedCards,localization:this.state.localization,language:this.state.lang,background:this.state.background,deleteCard:this.deleteCard})]})}}]),t}(s.a.Component);n.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))},5:function(e,a,t){}},[[26,1,2]]]);
//# sourceMappingURL=main.6983cf84.chunk.js.map