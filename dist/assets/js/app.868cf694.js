(function(e){function t(t){for(var a,r,u=t[0],s=t[1],E=t[2],i=0,T=[];i<u.length;i++)r=u[i],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&T.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(T.length)T.shift()();return o.push.apply(o,E||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function u(e){return s.p+"assets/js/"+({}[e]||e)+"."+{"chunk-1272314f":"675e0df0","chunk-18dcf0aa":"9e2bfe5b","chunk-2d01491a":"5becc34c","chunk-4fd51796":"c6993b15","chunk-68870e6f":"ceee3d74","chunk-34294a1e":"3e23b19f","chunk-4e59ea4a":"17aeb940","chunk-4e572e90":"90ffc4f8","chunk-66b3fef6":"d72b8f48","chunk-0abacc6c":"c11b0ccc","chunk-bdb8b580":"a7886797","chunk-40507043":"8edc35b6","chunk-31a0850c":"586b43ac","chunk-45e835a0":"653fa6a3","chunk-b2020d7c":"2b8ffc48","chunk-2ff7d11c":"1360ef1e","chunk-3e019e0f":"ce2d1542","chunk-2d207d68":"7e9c4517","chunk-2d217188":"f0edadd0","chunk-2d22bcc3":"505460bd","chunk-2d22d9b4":"398bf8ad","chunk-490a14fe":"f594bb48","chunk-4252cbe1":"7f598d3b","chunk-71293fe8":"6a6abfad","chunk-8fd193d6":"2bcab2bc"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-2d01491a":1,"chunk-40507043":1,"chunk-45e835a0":1,"chunk-b2020d7c":1,"chunk-2ff7d11c":1,"chunk-3e019e0f":1,"chunk-490a14fe":1,"chunk-4252cbe1":1,"chunk-71293fe8":1,"chunk-8fd193d6":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="assets/css/"+({}[e]||e)+"."+{"chunk-1272314f":"31d6cfe0","chunk-18dcf0aa":"31d6cfe0","chunk-2d01491a":"38393ea5","chunk-4fd51796":"31d6cfe0","chunk-68870e6f":"31d6cfe0","chunk-34294a1e":"31d6cfe0","chunk-4e59ea4a":"31d6cfe0","chunk-4e572e90":"31d6cfe0","chunk-66b3fef6":"31d6cfe0","chunk-0abacc6c":"31d6cfe0","chunk-bdb8b580":"31d6cfe0","chunk-40507043":"8d3a5186","chunk-31a0850c":"31d6cfe0","chunk-45e835a0":"f08e0c0a","chunk-b2020d7c":"622c72fd","chunk-2ff7d11c":"ac7e0822","chunk-3e019e0f":"7588fbd8","chunk-2d207d68":"31d6cfe0","chunk-2d217188":"31d6cfe0","chunk-2d22bcc3":"31d6cfe0","chunk-2d22d9b4":"31d6cfe0","chunk-490a14fe":"fd79da1b","chunk-4252cbe1":"04136afe","chunk-71293fe8":"a87ba7cf","chunk-8fd193d6":"730de3ba"}[e]+".css",c=s.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var E=o[u],i=E.getAttribute("data-href")||E.getAttribute("href");if("stylesheet"===E.rel&&(i===a||i===c))return t()}var T=document.getElementsByTagName("style");for(u=0;u<T.length;u++){E=T[u],i=E.getAttribute("data-href");if(i===a||i===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=c;var A=document.getElementsByTagName("head")[0];A.appendChild(f)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var E,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=u(e);var T=new Error;E=function(t){i.onerror=i.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;T.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",T.name="ChunkLoadError",T.type=a,T.request=r,n[1](T)}c[e]=void 0}};var f=setTimeout((function(){E({type:"timeout",target:i})}),12e4);i.onerror=i.onload=E,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var E=window["webpackJsonp"]=window["webpackJsonp"]||[],i=E.push.bind(E);E.push=t,E=E.slice();for(var T=0;T<E.length;T++)t(E[T]);var f=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0405":function(e,t,n){},"1dff":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c}));var a={},r={},c={app:{appName:"AfaWaste",appLogoImage:n("ed29")},layout:{isRTL:!1,skin:"light",routerTransition:"zoom-fade",type:"vertical",contentWidth:"full",menu:{hidden:!1,isCollapsed:!0},navbar:{type:"floating",backgroundColor:""},footer:{type:"static"},customizer:!0,enableScrollToTop:!0}}},4131:function(e,t,n){},4360:function(e,t,n){"use strict";var a=n("2b0e"),r=n("2f62"),c=n("1dff"),o={namespaced:!0,state:{windowWidth:0,shallShowOverlay:!1,loading:!0},getters:{currentBreakPoint:function(e){var t=e.windowWidth;return t>=c["a"].xl?"xl":t>=c["a"].lg?"lg":t>=c["a"].md?"md":t>=c["a"].sm?"sm":"xs"},getLoading:function(e){return e.loading}},mutations:{UPDATE_WINDOW_WIDTH:function(e,t){e.windowWidth=t},TOGGLE_OVERLAY:function(e,t){e.shallShowOverlay=void 0!==t?t:!e.shallShowOverlay},SET_LOADING:function(e,t){e.loading=t}},actions:{}},u=(n("ac1f"),n("466d"),{namespaced:!0,state:{layout:{isRTL:c["c"].layout.isRTL,skin:localStorage.getItem("vuexy-skin")||c["c"].layout.skin,routerTransition:c["c"].layout.routerTransition,type:c["c"].layout.type,contentWidth:c["c"].layout.contentWidth,menu:{hidden:c["c"].layout.menu.hidden},navbar:{type:c["c"].layout.navbar.type,backgroundColor:c["c"].layout.navbar.backgroundColor},footer:{type:c["c"].layout.footer.type}}},getters:{},mutations:{TOGGLE_RTL:function(e){e.layout.isRTL=!e.layout.isRTL,document.documentElement.setAttribute("dir",e.layout.isRTL?"rtl":"ltr")},UPDATE_SKIN:function(e,t){e.layout.skin=t,localStorage.setItem("vuexy-skin",t),"dark"===t?document.body.classList.add("dark-layout"):document.body.className.match("dark-layout")&&document.body.classList.remove("dark-layout")},UPDATE_ROUTER_TRANSITION:function(e,t){e.layout.routerTransition=t},UPDATE_LAYOUT_TYPE:function(e,t){e.layout.type=t},UPDATE_CONTENT_WIDTH:function(e,t){e.layout.contentWidth=t},UPDATE_NAV_MENU_HIDDEN:function(e,t){e.layout.menu.hidden=t},UPDATE_NAVBAR_CONFIG:function(e,t){Object.assign(e.layout.navbar,t)},UPDATE_FOOTER_CONFIG:function(e,t){Object.assign(e.layout.footer,t)}},actions:{}}),s={namespaced:!0,state:{isVerticalMenuCollapsed:c["c"].layout.menu.isCollapsed},getters:{},mutations:{UPDATE_VERTICAL_MENU_COLLAPSED:function(e,t){e.isVerticalMenuCollapsed=t}},actions:{}},E=n("5530"),i=(n("d81d"),n("159b"),n("b64b"),{namespaced:!0,state:{map:null,sidebar:{currentTab:"",object:null},info:{current:"",data:""},markers:{tags:null,rfid:null,ult:null,recy:null}},getters:{getMap:function(e){return e.map},getMarkerGroups:function(e){var t={};return Object.keys(e.markers).forEach((function(n){null!=e.markers[n]&&(t[n]=e.markers[n].markerGroup)})),t},getSpecificMarkers:function(e){return function(t){var n={},a=e.markers[t]?e.markers[t].markers:[];return Object.keys(a).forEach((function(e){null!=a[e]&&(n=Object(E["a"])(Object(E["a"])({},n),a[e]))})),n}},getTagMarkers:function(e){return e.markers.tags?e.markers.tags.markers:[]},getTagMarkerGroup:function(e){return e.markers.tags?e.markers.tags.markerGroup:null},getRfidMarkers:function(e){return e.markers.rfid?e.markers.rfid.markers:[]},getRfidMarkerGroup:function(e){return e.markers.rfid?e.markers.rfid.markerGroup:[]},getUltMarkers:function(e){return e.markers.ult?e.markers.ult.markers:[]},getUltMarkerGroup:function(e){return e.markers.ult?e.markers.ult.markerGroup:[]},getRecyMarkers:function(e){return e.markers.recy?e.markers.recy.markers:[]}},mutations:{setMap:function(e,t){e.map=t},setCurrentTab:function(e,t){e.sidebar.currentTab=t},setSidebarObject:function(e,t){e.sidebar.object=t},setInfoCurrent:function(e,t){e.info.current=t},setInfoData:function(e,t){e.info.data=t},addMarkers:function(e,t){e.markers[t.type]={icon:t.icon,markers:t.markers,markerGroup:t.markerGroup}}},actions:{}}),T={namespaced:!0,state:{currentType:"dumpsters",customer:null,devices:{rfid:[],ult:[],recy:[]},tags:{}},getters:{getCurrentType:function(e){return e.currentType},getCustomer:function(e){return e.customer},getRfidDevices:function(e){return e.devices.rfid},getUltDevices:function(e){return e.devices.ult},getRecyDevices:function(e){return e.devices.recy},getTags:function(e){return e.tags}},mutations:{setCustomer:function(e,t){e.customer=t},setRfidDevices:function(e,t){e.devices.rfid=t},setUltDevices:function(e,t){e.devices.ult=t},setRecyDevices:function(e,t){e.devices.recy=t},setTags:function(e,t){e.tags=t}},actions:{}},f={namespaced:!0,state:{socket:null},getters:{getSocket:function(e){return e.socket}},mutations:{setSocket:function(e,t){e.socket=t}},actions:{}};a["default"].use(r["a"]);t["a"]=new r["a"].Store({modules:{app:o,appConfig:u,verticalMenu:s,dashboard:i,panel:T,socket:f},strict:Object({NODE_ENV:"production",VUE_APP_GEOCODING_API:"AIzaSyAkxj9mrLtTuUf_LGPlYMn0w1DAkAsfZ5g",BASE_URL:"/"}).DEV})},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79b","./kk.js":"6d79b","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="4678"},"53a2":function(e,t,n){"use strict";n("0405")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("51c2"),c=n("dbbe"),o=n("a6f4"),u=n("a18c"),s=n("4360"),E=(n("4de4"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),n("d3b7"),function(e,t){var n=new RegExp(t,"ig");return e.toString().replace(n,(function(e,t,n){return'<strong class="bg-primary highlighted-text">'+e+"</strong>"}))});a["default"].filter("highlight",E);var i,T,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-100",class:[e.skinClasses],attrs:{id:"app"}},[e.getLoading?n("loading"):n(e.layout,{tag:"component"},[n("router-view")],1)],1)},A=[],l=(n("3ca3"),n("ddb0"),n("498a"),n("a9e3"),n("fb6a"),n("1dff")),d=n("04b0"),R=n("b8f2"),_=n("16ce"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[n("div",{attrs:{id:"loading-bg"}},[n("div",{staticClass:"loading-logo"},[n("img",{attrs:{src:e.logo,alt:"Logo"}})]),n("div",{staticClass:"loading-progress"},[n("b-progress",{key:"info",staticClass:"progress-bar-info",attrs:{animated:"",value:e.calculatePercent,variant:"info",height:"5px"}})],1)])])},m=[],b=(n("159b"),n("b0c0"),n("6d79")),O=n("d95a"),h=n("49f5"),D=n("f39a"),g=n.n(D),P={components:{BProgress:h["a"]},data:function(){return{logo:g.a,steps:[{id:1,name:"getCustomer",message:"Getting customer details!",commit:"panel/setCustomer",completed:!1},{id:2,name:"getDevices",parameter:b["a"].DEVICETYPE_RFID,message:"Getting trucks!",commit:"panel/setRfidDevices",completed:!1},{id:3,name:"getDevices",parameter:b["a"].DEVICETYPE_ULT,message:"Getting ultrasonic details!",commit:"panel/setUltDevices",completed:!1},{id:4,name:"getDevices",parameter:b["a"].DEVICETYPE_RECY,message:"Getting recycles details!",commit:"panel/setRecyDevices",completed:!1},{id:5,name:"getTags",message:"Getting dumpsters!",commit:"panel/setTags",completed:!1}]}},computed:{calculatePercent:function(){var e=this.steps.length,t=this.steps.filter((function(e){return e.completed})).length;return t/e*100}},watch:{calculatePercent:function(e,t){e>=100&&this.$store.commit("app/SET_LOADING",!1)}},created:function(){this.run()},methods:{run:function(){var e=this;this.steps.forEach((function(t){e.runStep(t)}))},runStep:function(e){var t=this;return O["a"][e.name](e.parameter?e.parameter:void 0).then((function(n){t.$store.commit(e.commit,n);var a=t.steps.filter((function(t){return t.id===e.id}));a[0].completed=!0}))}}},C=P,N=(n("53a2"),n("2877")),k=Object(N["a"])(C,p,m,!1,null,null,null),S=k.exports,U=n("f645"),I=function(){return Promise.all([n.e("chunk-66b3fef6"),n.e("chunk-0abacc6c"),n.e("chunk-4252cbe1"),n.e("chunk-71293fe8")]).then(n.bind(null,"03d1"))},L=function(){return Promise.all([n.e("chunk-66b3fef6"),n.e("chunk-0abacc6c"),n.e("chunk-4252cbe1"),n.e("chunk-8fd193d6")]).then(n.bind(null,"2607"))},j=function(){return n.e("chunk-2d22bcc3").then(n.bind(null,"f102"))},y={components:{Loading:S,LayoutHorizontal:L,LayoutVertical:I,LayoutFull:j},computed:{layout:function(){return"full"===this.$route.meta.layout||void 0===this.$route.meta.layout?"layout-full":"layout-".concat(this.contentLayoutType)},contentLayoutType:function(){return this.$store.state.appConfig.layout.type},getLoading:function(){return this.$store.getters["app/getLoading"]}},beforeCreate:function(){for(var e=["primary","secondary","success","info","warning","danger","light","dark"],t=0,n=e.length;t<n;t++)l["b"][e[t]]=Object(_["a"])("--".concat(e[t]),document.documentElement).value.trim();for(var a=["xs","sm","md","lg","xl"],r=0,c=a.length;r<c;r++)l["a"][a[r]]=Number(Object(_["a"])("--breakpoint-".concat(a[r]),document.documentElement).value.slice(0,-2));var o=l["c"].layout.isRTL;document.documentElement.setAttribute("dir",o?"rtl":"ltr")},created:function(){var e=new WebSocket(U["socketUrl"]);this.$store.commit("socket/setSocket",e),e.onopen=function(){console.log("successfully connected to socket server")};var t=this;setTimeout((function(){t.$router.go()}),27e5)},setup:function(){var e=Object(R["a"])(),t=e.skin,n=e.skinClasses;"dark"===t.value&&document.body.classList.add("dark-layout"),Object(d["provideToast"])({hideProgressBar:!0,closeOnClick:!1,closeButton:!1,icon:!1,timeout:3e3,transition:"Vue-Toastification__fade"}),s["a"].commit("app/UPDATE_WINDOW_WIDTH",window.innerWidth);var a=Object(_["b"])(),r=a.width;return Object(o["watch"])(r,(function(e){s["a"].commit("app/UPDATE_WINDOW_WIDTH",e)})),{skinClasses:n}}},v=y,Y=(n("034f"),Object(N["a"])(v,f,A,!1,null,null,null)),M=Y.exports,F=n("5530"),G=n("0a35"),V={name:"FeatherIcon",functional:!0,props:{icon:{required:!0,type:[String,Object]},size:{type:String,default:"14"},badge:{type:[String,Object,Number],default:null},badgeClasses:{type:[String,Object,Array],default:"badge-primary"}},render:function(e,t){var n=t.props,a=t.data,r=e(G[n.icon],Object(F["a"])({props:{size:n.size}},a));if(!n.badge)return r;var c=e("span",{staticClass:"badge badge-up badge-pill",class:n.badgeClasses},[n.badge]);return e("span",{staticClass:"feather-icon position-relative"},[r,c])}},w=V,B=(n("8bd0"),Object(N["a"])(w,i,T,!1,null,null,null)),H=B.exports,x=n("ecee"),W=n("c074"),z=n("ad3d");a["default"].component(H.name,H),x["c"].add(W["o"],W["h"],W["j"],W["c"],W["k"],W["d"],W["i"],W["b"],W["g"],W["n"],W["f"],W["e"],W["l"],W["a"],W["p"],W["m"]),a["default"].component("font-awesome-icon",z["a"]);var K=n("c1df"),X=n.n(K),J=n("2b88"),q=n.n(J);a["default"].use(q.a);var Q=n("6c42");n("cc0f");a["default"].use(Q["default"],{hideProgressBar:!0,closeOnClick:!1,closeButton:!1,icon:!1,timeout:3e3,transition:"Vue-Toastification__fade"}),X.a.locale("tr"),a["default"].prototype.$moment=X.a,a["default"].use(r["a"]),a["default"].use(c["a"]),a["default"].use(o["default"]),n("4131"),n("78a7"),a["default"].config.productionTip=!1,new a["default"]({router:u["a"],store:s["a"],render:function(e){return e(M)}}).$mount("#app")},"602d4":function(e,t,n){},"6d79":function(e,t,n){"use strict";t["a"]={RESULT_FAIL:"FAIL",RESULT_OK:"OK",RESULT_NOT:"NOT",WEB_APP_TYPE_RFID:"RfIdApp",WEB_APP_TYPE_ULT:"UltApp",WEB_APP_TYPE_RECY:"RecyApp",STATU_ACTIVE:"ACTIVE",STATU_PASSIVE:"PASSIVE",HTTP_HEADER:"HEADER",HTTP_DATA:"DATA",HTTP_CHECKTYPE:"CHECKTYPE",HTTP_TOKEN:"TOKEN",HTTP_USERROLE:"USERROLE",HTTP_CUSTOMERID:"CUSTOMERID",HTTP_DATATYPE:"DATATYPE",HTTP_READERTYPE:"READERTYPE",LOGGER_CONTAINER:"CONTAINER",LOGGER_LOGTYPE:"LOGTYPE",LOGGER_FUNC:"FUNC",LOGGER_LOG:"LOG",LOGGER_DEBUG:"DEBUG",LOGGER_ERROR:"ERROR",LOGGER_INFO:"INFO",LOGGER_REPORT:"REPORT",READERTYPE_NONE:"NONE",READERTYPE_STATUS:"STATUS",READERTYPE_CAM:"CAM",READERTYPE_GPS:"GPS",READERTYPE_THERM:"THERM",READERTYPE_BASE:"BASE",READERTYPE_TYPE:"TYPE",READERTYPE_SENS:"SENS",READERTYPE_ULT:"ULT",READERTYPE_RF:"RF",READERTYPE_CAMTRIGGER:"CAMTRIGGER",READERTYPE_ALARM:"ALARM",READERTYPE_DETAIL:"DETAIL",READERTYPE_VERSION:"VERSION",READERTYPE_UPDATE:"UPDATE",CHECKTYPE_NONE:"NONE",CHECKTYPE_APP:"APP",CHECKTYPE_CONN:"CONN",CHECKTYPE_DEVICE:"DEVICE",RFID_APPNAME_NONE:"None",RFID_APPNAME_GPS:"GpsApp",RFID_APPNAME_CHECKER:"CheckerApp",RFID_APPNAME_READER:"ReaderApp",RFID_APPNAME_TRANSFER:"TransferApp",RFID_APPNAME_CAM:"CamApp",RFID_APPNAME_THERM:"ThermApp",RFID_APPNAME_SYSTEM:"SystemApp",RFID_APPTYPE_NONE:"NONE",RFID_APPTYPE_GPS:"GPS",RFID_APPTYPE_CHECKER:"STATUS",RFID_APPTYPE_READER:"RF",RFID_APPTYPE_TRANSFER:"TRANSFER",RFID_APPTYPE_CAM:"CAM",RFID_APPTYPE_THERM:"THERM",RFID_APPTYPE_SYSTEM:"SYSTEM",CONTAINER_FULLNESS_STATU_NONE:"NONE",CONTAINER_FULLNESS_STATU_EMPTY:"EMPTY",CONTAINER_FULLNESS_STATU_LITTLE:"LITTLE",CONTAINER_FULLNESS_STATU_MEDIUM:"MEDIUM",CONTAINER_FULLNESS_STATU_FULL:"FULL",CONTAINER_FULLNESS_STATU_ERROR:"ERROR",TAG_STATU_NONE:"NONE",TAG_STATU_ERROR:"ERROR",RFID_READER_OKBIT:"5379",RFID_READER_STARTBIT:"4354",RFID_READER_CHECKBIT:"45",RFID_TAG_PATTERN:"AFA09012018AFA",APPTYPE_NONE:"NONE",APPTYPE_ULT:"ULT",APPTYPE_RFID:"RFID",APPTYPE_RECY:"RECY",APPTYPE_ADMIN:"ADMIN",APPTYPE_AUTH:"AUTH",APPTYPE_AFATEK:"AFATEK",APPTYPE_ARVENTO:"ARVENTO",APPTYPE_LISTENER:"LISTENER",APPTYPE_UPDATE:"UPDATE",APPTYPE_REPORT:"REPORT",APPTYPE_OPTIMIZE:"OPTIMIZE",DATATYPE_NONE:"NONE",DATATYPE_CUSTOMER:"CUSTOMER",DATATYPE_USER:"USER",DATATYPE_CUSTOMERCONFIG:"CUSTOMERCONFIG",DATATYPE_ADMINCONFIG:"ADMINCONFIG",DATATYPE_LOCALCONFIG:"LOCALCONFIG",DATATYPE_RECY_MAIN_DEVICE:"RECY_MAIN_DEVICE",DATATYPE_RECY_BASE_DEVICE:"RECY_BASE_DEVICE",DATATYPE_RECY_GPS_DEVICE:"RECY_GPS_DEVICE",DATATYPE_RECY_THERM_DEVICE:"RECY_THERM_DEVICE",DATATYPE_RECY_VERSION_DEVICE:"RECY_VERSION_DEVICE",DATATYPE_RECY_ALARM_DEVICE:"RECY_ALARM_DEVICE",DATATYPE_RECY_STATU_DEVICE:"RECY_STATU_DEVICE",DATATYPE_RECY_DETAIL_DEVICE:"RECY_DETAIL_DEVICE",DATATYPE_ULT_MAIN_DEVICE:"ULT_MAIN_DEVICE",DATATYPE_ULT_BASE_DEVICE:"ULT_BASE_DEVICE",DATATYPE_ULT_BATTERY_DEVICE:"ULT_BATTERY_DEVICE",DATATYPE_ULT_GPS_DEVICE:"ULT_GPS_DEVICE",DATATYPE_ULT_ALARM_DEVICE:"ULT_ALARM_DEVICE",DATATYPE_ULT_THERM_DEVICE:"ULT_THERM_DEVICE",DATATYPE_ULT_VERSION_DEVICE:"ULT_VERSION_DEVICE",DATATYPE_ULT_STATU_DEVICE:"ULT_STATU_DEVICE",DATATYPE_ULT_SENS_DEVICE:"ULT_SENS_DEVICE",DATATYPE_RFID_MAIN_DEVICE:"RFID_MAIN_DEVICE",DATATYPE_RFID_GPS_DEVICE:"RFID_GPS_DEVICE",DATATYPE_RFID_ALARM_DEVICE:"RFID_ALARM_DEVICE",DATATYPE_RFID_THERM_DEVICE:"RFID_THERM_DEVICE",DATATYPE_RFID_VERSION_DEVICE:"RFID_VERSION_DEVICE",DATATYPE_RFID_STATU_DEVICE:"RFID_STATU_DEVICE",DATATYPE_RFID_BASE_DEVICE:"RFID_BASE_DEVICE",DATATYPE_RFID_DETAIL_DEVICE:"RFID_DETAIL_DEVICE",DATATYPE_TAG_MAIN:"TAG_MAIN",DATATYPE_TAG_BASE:"TAG_BASE",DATATYPE_TAG_STATU:"TAG_STATU",DATATYPE_TAG_GPS:"TAG_GPS",DATATYPE_TAG_READER:"TAG_READER",ALARMTYPE_NONE:"NONE",ALARMTYPE_ATMP:"THERM",ALARMTYPE_AGPS:"GPS",ALARMSTATU_NONE:"NONE",ALARMSTATU_ALARM:"ALARM",THERMSTATU_NONE:"NONE",THERMSTATU_NORMAL:"NORMAL",THERMSTATU_HIGH:"HIGH",BATTERYSTATU_NONE:"NONE",BATTERYSTATU_NORMAL:"NORMAL",BATTERYSTATU_LOW:"LOW",USER_ROLE_GUEST:"GUEST",USER_ROLE_ADMIN:"ADMIN",USER_ROLE_REPORT:"REPORT",CONTAINERTYPE_NONE:"NONE",TRUCKTYPE_NONE:"NONE",DEVICETYPE_NONE:"NONE",DEVICETYPE_RFID:"RFID",DEVICETYPE_ULT:"ULT",DEVICETYPE_RECY:"RECY",RFID_DEVICE_TYPE_NONE:"NONE",ULT_DEVICE_TYPE_NONE:"NONE",RECY_DEVICE_TYPE_NONE:"NONE",RESULT_ERROR_HTTP_PARSE:"HTTP_PARSE",RESULT_ERROR_HTTP_POST:"HTTP_POST",RESULT_ERROR_USER_INVALIDTOKEN:"USER_INVALIDTOKEN",RESULT_ERROR_USER_ENDTOKEN:"USER_ENDTOKEN",RESULT_ERROR_USER_INVALIDUSER:"USER_INVALIDUSER",RESULT_ERROR_USER_INVALIDUSERROLE:"USER_INVALIDUSERROLE",RESULT_ERROR_USER_INVALIDPASSWORD:"USER_INVALIDPASSWORD",RESULT_ERROR_USER_USERNAMEEXIST:"USER_USERNAMEEXIST",RESULT_ERROR_USER_USEREMAILEXIST:"USER_USEREMAILEXIST",RESULT_ERROR_USER_PASSWORDEMPTY:"USER_PASSWORDEMPTY",RESULT_ERROR_READERTYPE:"READERTYPE",RESULT_ERROR_DEVICETYPE:"DEVICETYPE",RESULT_ERROR_DATATYPE:"DATATYPE",RESULT_ERROR_CUSTOMER_NOTFOUND:"CUSTOMER_NOTFOUND",RESULT_ERROR_USER_NOTFOUND:"USER_NOTFOUND",RESULT_ERROR_DEVICE_NOTFOUND:"DEVICE_NOTFOUND",RESULT_ERROR_DB_SAVE:"DB_SAVE",RESULT_ERROR_REDIS_SAVE:"REDIS_SAVE",RESULT_ERROR_DB_GET:"DB_GET",RESULT_ERROR_REDIS_GET:"REDIS_GET",RESULT_ERROR_CUSTOMER_INVALID:"CUSTOMER_INVALID",RESULT_ERROR_CUSTOMER_CUSTOMERCONFIG_NOTFOUND:"CUSTOMER_CUSTOMERCONFIG_NOTFOUND",RESULT_ERROR_CUSTOMER_ADMINCONFIG_NOTFOUND:"CUSTOMER_ADMINCONFIG_NOTFOUND",RESULT_ERROR_CUSTOMER_LOCALCONFIG_NOTFOUND:"CUSTOMER_LOCALCONFIG_NOTFOUND",RESULT_ERROR_CUSTOMER_TAGS_NOTFOUND:"CUSTOMER_TAGS_NOTFOUND",RESULT_ERROR_CUSTOMERS_NOTFOUND:"CUSTOMERS_NOTFOUND",RESULT_ERROR_DEVICES_NOTFOUND:"DEVICES_NOTFOUND",RESULT_ERROR_CUSTOMERS_DEVICES_NOTFOUND:"CUSTOMERS_DEVICES_NOTFOUND",RESULT_ERROR_TAG_NOTFOUND:"TAG_NOTFOUND",RESULT_ERROR_TAG_CUSTOMER_NOTFOUND:"TAG_CUSTOMER_NOTFOUND",RESULT_ERROR_APP_STARTED:"APP_STARTED",REDIS_CUSTOMER_CHANNEL:"ch-customer-"}},"78a7":function(e,t,n){},"85ec":function(e,t,n){},"8bd0":function(e,t,n){"use strict";n("602d4")},a18c:function(e,t,n){"use strict";var a=n("2909"),r=(n("99af"),n("2b0e")),c=n("8c4f"),o=(n("d3b7"),n("3ca3"),n("ddb0"),[{path:"/",name:"map",component:function(){return Promise.all([n.e("chunk-1272314f"),n.e("chunk-66b3fef6"),n.e("chunk-0abacc6c"),n.e("chunk-bdb8b580"),n.e("chunk-40507043")]).then(n.bind(null,"4bb4"))},meta:{layout:"full"}}]),u=[{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-1272314f"),n.e("chunk-bdb8b580"),n.e("chunk-3e019e0f")]).then(n.bind(null,"a55b"))},meta:{layout:"full"}}],s=[{path:"/dashboard",name:"dashboard",component:function(){return Promise.all([n.e("chunk-1272314f"),n.e("chunk-66b3fef6"),n.e("chunk-18dcf0aa"),n.e("chunk-34294a1e"),n.e("chunk-2ff7d11c")]).then(n.bind(null,"cdac"))},meta:{layout:"default"}},{path:"/containers",name:"containers",component:function(){return Promise.all([n.e("chunk-1272314f"),n.e("chunk-66b3fef6"),n.e("chunk-18dcf0aa"),n.e("chunk-2d01491a"),n.e("chunk-45e835a0")]).then(n.bind(null,"3d02"))},meta:{layout:"default"}},{path:"/trucks",name:"trucks",component:function(){return Promise.all([n.e("chunk-1272314f"),n.e("chunk-18dcf0aa"),n.e("chunk-2d01491a"),n.e("chunk-68870e6f")]).then(n.bind(null,"3c15"))},meta:{layout:"default"}},{path:"/containers/details",name:"containersDetails",component:function(){return Promise.all([n.e("chunk-1272314f"),n.e("chunk-66b3fef6"),n.e("chunk-18dcf0aa"),n.e("chunk-2d01491a"),n.e("chunk-b2020d7c")]).then(n.bind(null,"9391"))},meta:{layout:"default"}},{path:"/trucks/details",name:"trucksDetails",component:function(){return Promise.all([n.e("chunk-1272314f"),n.e("chunk-4e572e90")]).then(n.bind(null,"14ab"))},meta:{layout:"default"}},{path:"/containers/reports",name:"containersReports",component:function(){return Promise.all([n.e("chunk-1272314f"),n.e("chunk-18dcf0aa"),n.e("chunk-2d01491a"),n.e("chunk-4fd51796")]).then(n.bind(null,"ce84"))},meta:{layout:"default"}},{path:"/containers/daily-reports",name:"containersDailyReports",component:function(){return Promise.all([n.e("chunk-1272314f"),n.e("chunk-34294a1e"),n.e("chunk-4e59ea4a")]).then(n.bind(null,"7610"))},meta:{layout:"default"}},{path:"/containers/management",name:"containersManagement",component:function(){return Promise.all([n.e("chunk-1272314f"),n.e("chunk-66b3fef6"),n.e("chunk-18dcf0aa"),n.e("chunk-2d01491a"),n.e("chunk-31a0850c")]).then(n.bind(null,"4da3"))},meta:{layout:"default"}},{path:"/trucks/management",name:"trucksManagement",component:function(){return n.e("chunk-2d22d9b4").then(n.bind(null,"f7e2"))},meta:{layout:"default"}},{path:"/users/list",name:"usersList",component:function(){return n.e("chunk-2d217188").then(n.bind(null,"c4ef"))},meta:{layout:"default"}},{path:"/settings",name:"settings",component:function(){return n.e("chunk-2d207d68").then(n.bind(null,"a1df"))},meta:{layout:"default"}}],E=[{path:"/error-404",name:"error-404",component:function(){return n.e("chunk-490a14fe").then(n.bind(null,"d80f"))},meta:{layout:"full"}},{path:"*",redirect:"error-404"}];r["default"].use(c["a"]);var i=new c["a"]({mode:"history",base:"/",scrollBehavior:function(){return{x:0,y:0}},routes:[].concat(Object(a["a"])(o),Object(a["a"])(u),Object(a["a"])(s),Object(a["a"])(E))});i.afterEach((function(){var e=document.getElementById("loading-bg");e&&(e.style.display="none")}));t["a"]=i},b8f2:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("a6f4"),r=n("4360");function c(){var e=Object(a["computed"])({get:function(){return r["a"].state.verticalMenu.isVerticalMenuCollapsed},set:function(e){r["a"].commit("verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED",e)}}),t=Object(a["computed"])({get:function(){return r["a"].state.appConfig.layout.isRTL},set:function(e){r["a"].commit("appConfig/TOGGLE_RTL",e)}}),n=Object(a["computed"])({get:function(){return r["a"].state.appConfig.layout.skin},set:function(e){r["a"].commit("appConfig/UPDATE_SKIN",e)}}),c=Object(a["computed"])((function(){return"bordered"===n.value?"bordered-layout":"semi-dark"===n.value?"semi-dark-layout":null})),o=Object(a["computed"])({get:function(){return r["a"].state.appConfig.layout.routerTransition},set:function(e){r["a"].commit("appConfig/UPDATE_ROUTER_TRANSITION",e)}}),u=Object(a["computed"])({get:function(){return r["a"].state.appConfig.layout.type},set:function(e){r["a"].commit("appConfig/UPDATE_LAYOUT_TYPE",e)}});Object(a["watch"])(u,(function(e){"horizontal"===e&&"semi-dark"===n.value&&(n.value="light")}));var s=Object(a["computed"])({get:function(){return r["a"].state.appConfig.layout.contentWidth},set:function(e){r["a"].commit("appConfig/UPDATE_CONTENT_WIDTH",e)}}),E=Object(a["computed"])({get:function(){return r["a"].state.appConfig.layout.menu.hidden},set:function(e){r["a"].commit("appConfig/UPDATE_NAV_MENU_HIDDEN",e)}}),i=Object(a["computed"])({get:function(){return r["a"].state.appConfig.layout.navbar.backgroundColor},set:function(e){r["a"].commit("appConfig/UPDATE_NAVBAR_CONFIG",{backgroundColor:e})}}),T=Object(a["computed"])({get:function(){return r["a"].state.appConfig.layout.navbar.type},set:function(e){r["a"].commit("appConfig/UPDATE_NAVBAR_CONFIG",{type:e})}}),f=Object(a["computed"])({get:function(){return r["a"].state.appConfig.layout.footer.type},set:function(e){r["a"].commit("appConfig/UPDATE_FOOTER_CONFIG",{type:e})}});return{isVerticalMenuCollapsed:e,isRTL:t,skin:n,skinClasses:c,routerTransition:o,navbarBackgroundColor:i,navbarType:T,footerType:f,layoutType:u,contentWidth:s,isNavMenuHidden:E}}},cc0f:function(e,t,n){},d116:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("d4ec"),r=n("bee2"),c=function(){function e(){Object(a["a"])(this,e),this.Result,this.Retval}return Object(r["a"])(e,null,[{key:"from",value:function(t){return Object.assign(new e,t)}}]),e}()},d95a:function(e,t,n){"use strict";n.d(t,"a",(function(){return R}));var a=n("5530"),r=n("d4ec"),c=n("bee2"),o=(n("d3b7"),n("bc3a")),u=n.n(o),s=n("4328"),E=n.n(s),i=n("d116"),T=n("6d79");u.a.create();u.a.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e.headers=Object(a["a"])(Object(a["a"])({},e.headers),{},{"Content-Type":"application/x-www-form-urlencoded"}),e.data&&(e.data=E.a.stringify(e.data)),e})),u.a.interceptors.response.use((function(e){if(e.data.Result==T["a"].RESULT_OK)return i["a"].from(JSON.parse(e.data.Retval))}),(function(e){return 401===e.response.status&&(localStorage.removeItem("token"),window.location.href="/login"),Promise.reject(e)}));var f=u.a,A=n("f645"),l=function(){function e(){Object(r["a"])(this,e),this.AppType=null,this.DeviceNo=null,this.DeviceId=null,this.CustomerId=null,this.Time=null,this.Repeat=null,this.DeviceType=null,this.ReaderType=null,this.DataType=null,this.Token=null}return Object(c["a"])(e,null,[{key:"from",value:function(t){return Object.assign(new e,t)}}]),e}(),d=n("4328"),R=function(){function e(){Object(r["a"])(this,e)}return Object(c["a"])(e,null,[{key:"getCustomer",value:function(){return f.post(A["apiUrl"]+A["webApiUrl"]+"/getCustomer").then((function(e){return e}))}},{key:"getDevices",value:function(e){var t=new l;t.DeviceType=e;var n={};return n[T["a"].HTTP_HEADER]=JSON.stringify(Object(a["a"])({},t)),f.post(A["apiUrl"]+A["webApiUrl"]+"/getDevices",n).then((function(e){return e.Devices}))}},{key:"getTags",value:function(){return f.post(A["apiUrl"]+A["webApiUrl"]+"/getTags").then((function(e){return e.Tags}))}},{key:"getTag",value:function(e){var t={};return t[T["a"].HTTP_DATA]=JSON.stringify(e),f.post(A["apiUrl"]+A["webApiUrl"]+"/getTag",t).then((function(e){return e}))}},{key:"getConfig",value:function(e){var t=new l;t.DataType=e;var n={};return n[T["a"].HTTP_HEADER]=JSON.stringify(Object(a["a"])({},t)),f.post(A["apiUrl"]+A["webApiUrl"]+"/getConfig",d.stringify(n),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e}))}}]),e}()},ed29:function(e,t,n){e.exports=n.p+"assets/img/logo.36f34a9f.svg"},f39a:function(e,t){e.exports="data:image/png;base64,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"},f645:function(e,t){e.exports={apiUrl:"http://bodrum.aws.afatek.com.tr",socketUrl:"ws://bodrum.aws.afatek.com.tr/websocket/socket",s3Url:"https://afatek-waste-videos-s3.s3.eu-central-1.amazonaws.com/WAIT_CAM/",geocodingApi:"https://maps.googleapis.com/maps/api/geocode/json?key=".concat("AIzaSyAkxj9mrLtTuUf_LGPlYMn0w1DAkAsfZ5g"),webApiUrl:"/webapi",adminApiUrl:"/adminapi",reportApiUrl:"/reportapi",afatekApiUrl:"/afatekapi",optimizeApiUrl:"/optimizeapi"}}});