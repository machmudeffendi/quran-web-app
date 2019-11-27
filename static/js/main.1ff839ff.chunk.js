(this["webpackJsonpquran-web-app"]=this["webpackJsonpquran-web-app"]||[]).push([[0],{32:function(e,a,t){e.exports=t(47)},37:function(e,a,t){},45:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),o=t.n(c);t(37),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(18),i=t(6),u=t(7),l=t(9),m=t(8),d=t(14),h=t(10),p=t(17),b=t.n(p),f=(t(45),t(46),t(3)),y=t(15),v=function(e){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.onClick,n=e.darkmode;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-c-green"},r.a.createElement("div",{className:"container"},r.a.createElement(f.b,{className:"navbar-brand",to:"/#"},a),r.a.createElement("div",{className:"mr-auto"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(f.b,{className:"nav-item nav-link active",to:"/#"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement(f.b,{className:"nav-item nav-link",to:"/surah"},"Baca Surah"),r.a.createElement(f.b,{className:"nav-item nav-link",to:"/description"},"Lihat Deskripsi"))),r.a.createElement("button",{className:"btn btn-dark btn-c-nav",onClick:t},n?"Light Mode":"Dark Mode")))}}]),a}(r.a.Component),E="https://al-quran-8d642.firebaseio.com",g=function(e){return{type:"FETCH_NEW_SURAH",payload:[],meta:{type:"api",url:E+"/data.json?print=pretty",callback:e}}},O=function(e){var a=e.item;return r.a.createElement("div",{className:"col-sm-12 col-md-4 mt-3 mb-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a.nama),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},a.asma),r.a.createElement("p",{className:"card-text desc-h-scroll"},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:a.keterangan}})),r.a.createElement(f.b,{to:"/quran-web-app/surah/"+a.nomor,className:"card-link"},"Baca"),r.a.createElement(f.b,{to:"/quran-web-app/surah/description/"+a.nomor,className:"card-link"},"Lihat Deskripsi"))))},S=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={isLoading:!1},t.handleUpdateSurah=function(){t.setState({isLoading:!0}),t.props.updateSurah((function(){t.setState({isLoading:!1})}))},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.handleUpdateSurah()}},{key:"componentWillUnmount",value:function(){this.props.currentSurah.currentSurah=[]}},{key:"render",value:function(){var e=this.props.currentSurah,a=this.state.isLoading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Assalamuallaikum"),r.a.createElement("p",{className:"lead"},"Selamat datang di Quran Web."))),r.a.createElement("div",{className:"container mb-5 content"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,a&&r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))),void 0===e.currentSurah.map?r.a.createElement("span",{className:"alert alert-danger w-100"},"Opps... Not found any data!"):e.currentSurah.map((function(e,a){return r.a.createElement(O,{key:a,item:e})})))))}}]),a}(r.a.Component);S.defaultProps={currentSurah:{currentSurah:[{asma:"asma",nama:"Al-Fatihah",arti:"Pembukaan",keterangan:"Keterangan",audio:"audio",nomor:1},{asma:"asma",nama:"Al-Baqarah",arti:"Sapi Betina",keterangan:"Keterangan",audio:"audio",nomor:2},{asma:"asma",nama:"Ali'Imran",arti:"Keluarga Imran",keterangan:"Keterangan",audio:"audio",nomor:3},{asma:"asma",nama:"An-Nisa",arti:"Wanita",keterangan:"Keterangan",audio:"audio",nomor:4}]}};var N=Object(s.b)((function(e){return{currentSurah:e.currentSurah}}),(function(e){return{updateSurah:function(a){e(g(a))}}}))(S),k=function(e){var a=e.nomor,t=e.arab,n=e.arabTranslate,c=e.indonesia;return r.a.createElement("div",{className:"card mt-2 mb-2"},r.a.createElement("div",{className:"card-body p-2"},r.a.createElement("span",{className:"number-c-1"},a<=9?"0"+a:a),r.a.createElement("div",{className:"text-right"},r.a.createElement("span",{className:"arabic"},t)),r.a.createElement("div",{className:"text-left"},r.a.createElement("span",{className:"arabic-tr"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))),r.a.createElement("div",{className:"text-left"},r.a.createElement("span",{className:"translate"},c))))},j=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).state={play:!1},t.togglePlay=t.togglePlay.bind(Object(d.a)(t)),t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"togglePlay",value:function(){this.setState({play:!this.state.play},(function(){}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"bottom-player"},r.a.createElement("audio",{controls:!0},r.a.createElement("source",{src:this.props.url,type:"audio/mpeg"})))}}]),a}(r.a.Component),w=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).state={noSurah:0,isLoadingTitle:!1,isLoadingContent:!1,redirect:!1,redirectSurah:0,itemSurah:{asma:"asma",nama:"Al-Fatihah",arti:"Pembukaan"}},t.surahRedirect=t.surahRedirect.bind(Object(d.a)(t)),t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;this.setState({noSurah:a,isLoadingTitle:!0,isLoadingContent:!0}),this.props.updateAyyah(a,(function(){e.setState({isLoadingContent:!1})})),this.props.updateSurah((function(){e.setState({isLoadingTitle:!1}),void 0===e.props.currentSurah.currentSurah.error&&e.props.currentSurah.currentSurah.map((function(t,n){return n===a-1?e.setState({itemSurah:t}):""}))})),window.scrollTo(0,0)}},{key:"componentWillUnmount",value:function(){this.props.currentAyyah.currentAyyah=[],this.props.currentSurah.currentSurah=[]}},{key:"surahRedirect",value:function(e){var a=this;this.props.currentAyyah.currentAyyah=[];var t=e.target.value;this.setState({noSurah:t,redirect:!0,redirectSurah:t,isLoadingContent:!0}),this.props.updateAyyah(t,(function(){a.setState({isLoadingContent:!1})})),void 0===this.props.currentSurah.currentSurah.error&&this.props.currentSurah.currentSurah.map((function(e,n){return n===t-1?a.setState({itemSurah:e}):""})),this.props.history.push("/quran-web-app/surah/"+t)}},{key:"render",value:function(){var e=this.props,a=e.currentAyyah,t=e.currentSurah,n=this.state,c=n.isLoadingTitle,o=n.isLoadingContent,s=n.noSurah,i=n.itemSurah,u={title:i.nama+" - Quran Web",description:i.keterangan,meta:{charset:"utf-8",name:{keywords:"react,meta,document,html,tags"}}};return r.a.createElement("div",{className:"container text-center mb-5 content"},r.a.createElement(b.a,u),r.a.createElement("div",{className:"audio-player d-none"},void 0===t.currentSurah.map?"":t.currentSurah.map((function(e,a){return a===s-1&&r.a.createElement(j,{key:a,url:e.audio})}))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-sm-2 text-left"},r.a.createElement(f.b,{to:"../",className:"link-back"},r.a.createElement("button",{className:"btn btn-c-green"},"Kembali"))),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("h2",{className:"title-surah"},i.asma," - ",i.nama," - ",i.arti),r.a.createElement("h2",null,c&&r.a.createElement("div",{className:"spinner-border text-c-green",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))),r.a.createElement("div",{className:"col-sm-2 text-right"},r.a.createElement("span",{className:"right-choice-surah"},r.a.createElement("select",{className:"form-control",onChange:this.surahRedirect},r.a.createElement("option",{hidden:!0},"Pilih Surah"),void 0===t.currentSurah.map?"":t.currentSurah.map((function(e,a){return r.a.createElement("option",{key:a,value:e.nomor},e.nama)})))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-sm-12 col-md-8"},r.a.createElement("h2",null,o&&r.a.createElement("div",{className:"spinner-border text-c-green",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))),r.a.createElement("div",{className:"bx-items"},void 0===a.currentAyyah.map?"":a.currentAyyah.map((function(e,a){return r.a.createElement(k,{key:a,nomor:e.nomor,arab:e.ar,arabTranslate:e.tr,indonesia:e.id})}))))))}}]),a}(r.a.Component);w.defaultProps={currentSurah:{currentSurah:[{asma:"asma",nama:"Al-Fatihah",arti:"Pembukaan",audio:"audio",nomor:1},{asma:"asma",nama:"Al-Baqarah",arti:"Sapi Betina",audio:"audio",nomor:2}]},currentAyyah:{currentAyyah:[{nomor:"1",ar:"Arab",tr:"tr",id:"Indonesia"},{nomor:"2",ar:"Arab",tr:"tr",id:"Indonesia"},{nomor:"3",ar:"Arab",tr:"tr",id:"Indonesia"}]}};var A=Object(y.f)(Object(s.b)((function(e){return{currentAyyah:e.currentAyyah,currentSurah:e.currentSurah}}),(function(e){return{updateAyyah:function(a,t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1?arguments[1]:void 0;return{type:"FETCH_NEW_AYYAH",payload:[],meta:{type:"api",url:E+"/surat/".concat(e,".json?print=pretty"),callback:a}}}(a,t))},updateSurah:function(a){return e(g(a))}}}))(w)),C={title:"Oops not found - Quran Web",description:"I am a description, and I can create multiple tags",meta:{charset:"utf-8",name:{keywords:"react,meta,document,html,tags"}}},P=function(){return r.a.createElement("div",{className:"container text-center"},r.a.createElement(b.a,C),r.a.createElement("div",{className:"mt-5"},r.a.createElement("h2",{className:"_404title"},"Oops 404!"),r.a.createElement("span",{className:"_404desc"},"page not found.."),r.a.createElement(f.b,{to:"/",className:"_404link"},"Back home")))},L=function(){window.scrollTo(0,0)},x=function(e){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"goUp",onClick:L},"^")}}]),a}(r.a.Component),D=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"text-center"},r.a.createElement("span",{className:"text-muted"},"Copyright \xa9 2019 ",r.a.createElement("a",{href:"http://github.com/machmudeffendi",className:"link-footer"},"Machmudfends"))))},M=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).state={darkMode:!1,busrainCss:["busrain"]},t.toggleDarkMode=t.toggleDarkMode.bind(Object(d.a)(t)),t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"toggleDarkMode",value:function(){this.setState((function(e){return{darkMode:!e.darkMode,busrainCss:["busrain",e.darkMode?"":"dark"]}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:this.state.busrainCss.join(" ")},r.a.createElement(b.a,{title:"Home - Quran Web",description:"I am a description, and I can create multiple tags",meta:{charset:"utf-8",name:{keywords:"react,meta,document,html,tags"}}}),r.a.createElement(f.a,null,r.a.createElement(v,{title:"Quran Web",onClick:this.toggleDarkMode,darkmode:this.state.darkMode}),r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/quran-web-app/",exact:!0,component:N}),r.a.createElement(y.a,{path:"/quran-web-app/surah/:id",exact:!0,component:A}),r.a.createElement(y.a,{component:P})),r.a.createElement(x,null)),r.a.createElement(D,null))}}]),a}(r.a.Component),_=t(16),T=function(e){return function(a){return function(t){if(!t.meta||"api"!==t.meta.type)return a(t);var n=t.meta,r=n.url,c=n.callback,o=Object.assign({},t.meta);fetch(r,o).then((function(e){return e.json()})).then((function(e){return"function"===typeof t.meta.onSuccess&&t.meta.onSuccess(e),e})).then((function(a){var n=Object.assign({},t,{payload:a});delete n.meta,e.dispatch(n),c&&c()}))}}},W=function(e){return function(e){return function(a){console.log("Redux Log: ",a),e(a)}}},H=t(22);function I(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function q(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?I(t,!0).forEach((function(a){Object(H.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var B={currentSurah:[]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_NEW_SURAH":return q({},e,{currentSurah:a.payload});default:return e}};function R(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function U(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?R(t,!0).forEach((function(a){Object(H.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var K={currentAyyah:[]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_NEW_AYYAH":return U({},e,{currentAyyah:a.payload});default:return e}},Y={currentSurah:B,currentAyyah:K},J=Object(_.c)({currentSurah:F,currentAyyah:Q}),$=function(){return Object(_.d)(J,Y,Object(_.a)(T,W))},z=function(e){var a=$();return r.a.createElement(s.a,{store:a},r.a.createElement(M,null))};o.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.1ff839ff.chunk.js.map