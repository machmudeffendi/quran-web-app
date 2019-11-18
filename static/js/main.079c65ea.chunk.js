(this["webpackJsonpquran-web-app"]=this["webpackJsonpquran-web-app"]||[]).push([[0],{30:function(e,t,a){e.exports=a(41)},35:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c);a(35),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(17),u=a(4),s=a(5),l=a(7),m=a(6),p=a(13),h=a(8),d=(a(40),a(14)),b=a(15),y=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.onClick,n=e.darkmode;return r.a.createElement("nav",{className:"nav-header shadow t-center"},r.a.createElement("span",{className:"brand"},t),r.a.createElement("span",{className:"right-navbar darkmode-btn",onClick:a},n?"Light Mode":"Dark Mode"))}}]),t}(r.a.Component),f="https://al-quran-8d642.firebaseio.com",v=function(e){return{type:"FETCH_NEW_SURAH",payload:[],meta:{type:"api",url:f+"/data.json?print=pretty",callback:e}}},O=function(e){var t=e.index,a=e.nomor,n=e.nama,c=e.asma;return r.a.createElement("div",{className:"items",key:t},r.a.createElement("div",{className:"book"},r.a.createElement(d.b,{to:"/quran-web-app/surah/"+a,className:"title-link"},n),r.a.createElement("p",{className:"text-grey"},c),r.a.createElement("span",null,a)))},g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1},a.handleUpdateSurah=function(){a.setState({isLoading:!0}),a.props.updateSurah((function(){a.setState({isLoading:!1})}))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.handleUpdateSurah()}},{key:"componentWillUnmount",value:function(){this.props.currentSurah.currentSurah=[]}},{key:"render",value:function(){var e=this.props.currentSurah,t=this.state.isLoading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"search-body"},r.a.createElement("div",{className:"search-box"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"bs-form-input",placeholder:"Search.."})))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"box box-center"},r.a.createElement("h2",null,t&&"Loading .."),e.currentSurah.map((function(e,t){return r.a.createElement(O,{key:t,item:t,nomor:e.nomor,nama:e.nama,asma:e.asma})})))))}}]),t}(r.a.Component),E=Object(i.b)((function(e){return{currentSurah:e.currentSurah}}),(function(e){return{updateSurah:function(t){e(v(t))}}}))(g),j=function(e){var t=e.nomor,a=e.arab,n=e.arabTranslate,c=e.indonesia;return r.a.createElement("div",{className:"item"},r.a.createElement("span",{className:"nomor"},t<=9?"0"+t:t),r.a.createElement("span",{className:"arabic"},a),r.a.createElement("span",{className:"arabic-tr"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})),r.a.createElement("span",{className:"translate"},c))},k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={play:!1},a.togglePlay=a.togglePlay.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"togglePlay",value:function(){this.setState({play:!this.state.play},(function(){}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"bottom-player"},r.a.createElement("audio",{controls:!0},r.a.createElement("source",{src:this.props.url,type:"audio/mpeg"})))}}]),t}(r.a.Component),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={noSurah:0,isLoadingTitle:!1,isLoadingContent:!1,redirect:!1,redirectSurah:0},a.surahRedirect=a.surahRedirect.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;this.setState({noSurah:t,isLoadingTitle:!0,isLoadingContent:!0}),this.props.updateAyyah(t,(function(){e.setState({isLoadingContent:!1})})),this.props.updateSurah((function(){e.setState({isLoadingTitle:!1})})),window.scrollTo(0,0)}},{key:"componentWillUnmount",value:function(){this.props.currentAyyah.currentAyyah=[],this.props.currentSurah.currentSurah=[]}},{key:"surahRedirect",value:function(e){var t=this;this.props.currentAyyah.currentAyyah=[];var a=e.target.value;this.setState({noSurah:a,redirect:!0,redirectSurah:a,isLoadingContent:!0}),this.props.updateAyyah(a,(function(){t.setState({isLoadingContent:!1})})),this.props.history.push("/quran-web-app/surah/"+a)}},{key:"render",value:function(){var e=this.props,t=e.currentAyyah,a=e.currentSurah,n=this.state,c=n.isLoadingTitle,o=n.isLoadingContent,i=n.noSurah;return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"audio-player"},a.currentSurah.map((function(e,t){return t===i-1&&r.a.createElement(k,{key:t,url:e.audio})}))),r.a.createElement("span",{className:"back"},r.a.createElement(d.b,{to:"../",className:"link-back"},"Kembali")),r.a.createElement("span",{className:"right-choice-surah"},r.a.createElement("select",{className:"",onChange:this.surahRedirect},r.a.createElement("option",{hidden:!0},"Pilih Surah"),a.currentSurah.map((function(e,t){return r.a.createElement("option",{key:t,value:e.nomor},e.nama)})))),r.a.createElement("h2",{className:"title-surah"},a.currentSurah.map((function(e,t){return t===i-1?e.asma+" - "+e.nama:""}))),r.a.createElement("h2",null,c&&"Title Loading .."),r.a.createElement("h2",null,o&&"Content Loading .."),r.a.createElement("div",{className:"bx-items"},t.currentAyyah.map((function(e,t){return r.a.createElement(j,{key:t,nomor:e.nomor,arab:e.ar,arabTranslate:e.tr,indonesia:e.id})}))))}}]),t}(r.a.Component),N=Object(b.f)(Object(i.b)((function(e){return{currentAyyah:e.currentAyyah,currentSurah:e.currentSurah}}),(function(e){return{updateAyyah:function(t,a){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return{type:"FETCH_NEW_AYYAH",payload:[],meta:{type:"api",url:f+"/surat/".concat(e,".json?print=pretty"),callback:t}}}(t,a))},updateSurah:function(t){return e(v(t))}}}))(S)),w=function(){return r.a.createElement("div",{className:"_404"},r.a.createElement("h2",null,"Oops 404!"),r.a.createElement("span",{className:"_404desk"},"Page not found :("),r.a.createElement(d.b,{to:"/quran-web-app/",className:"_404home"},"Back home"))},C=function(){window.scrollTo(0,0)},A=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"goUp",onClick:C},"^")}}]),t}(r.a.Component),P=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={darkMode:!1,busrainCss:["busrain"]},a.toggleDarkMode=a.toggleDarkMode.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"toggleDarkMode",value:function(){this.setState((function(e){return{darkMode:!e.darkMode,busrainCss:["busrain",e.darkMode?"":"dark"]}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:this.state.busrainCss.join(" ")},r.a.createElement("div",{className:"basic-background"}),r.a.createElement(d.a,null,r.a.createElement(y,{title:"Quran",onClick:this.toggleDarkMode,darkmode:this.state.darkMode}),r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/quran-web-app/",exact:!0,component:E}),r.a.createElement(b.a,{path:"/quran-web-app/surah/:id",exact:!0,component:N}),r.a.createElement(b.a,{component:w}))),r.a.createElement(A,null))}}]),t}(r.a.Component),L=a(16),D=function(e){return function(t){return function(a){if(!a.meta||"api"!==a.meta.type)return t(a);var n=a.meta,r=n.url,c=n.callback,o=Object.assign({},a.meta);fetch(r,o).then((function(e){return e.json()})).then((function(e){return"function"===typeof a.meta.onSuccess&&a.meta.onSuccess(e),e})).then((function(t){var n=Object.assign({},a,{payload:t});delete n.meta,e.dispatch(n),c&&c()}))}}},M=function(e){return function(e){return function(t){console.log("Redux Log: ",t),e(t)}}},T=a(21);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach((function(t){Object(T.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H={currentSurah:[]},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_NEW_SURAH":return x({},e,{currentSurah:t.payload});default:return e}};function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach((function(t){Object(T.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var U={currentAyyah:[]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_NEW_AYYAH":return R({},e,{currentAyyah:t.payload});default:return e}},Y={currentSurah:H,currentAyyah:U},B=Object(L.c)({currentSurah:q,currentAyyah:F}),I=function(){return Object(L.d)(B,Y,Object(L.a)(D,M))},J=function(e){var t=I();return r.a.createElement(i.a,{store:t},r.a.createElement(P,null))};o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.079c65ea.chunk.js.map