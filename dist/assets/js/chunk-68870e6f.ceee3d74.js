(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68870e6f"],{2532:function(t,e,a){"use strict";var r=a("23e7"),s=a("5a34"),c=a("1d80"),n=a("ab13");r({target:"String",proto:!0,forced:!n("includes")},{includes:function(t){return!!~String(c(this)).indexOf(s(t),arguments.length>1?arguments[1]:void 0)}})},"3c15":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",{staticClass:"match-height"},[a("b-col",{attrs:{lg:"12"}},[a("truck-list",{attrs:{trucks:t.trucks}})],1)],1)},s=[],c=a("a15b"),n=a("b28b"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("b-card-title",[t._v("Çöp Kamyonu İstatistikleri")])],1),a("b-card-body",[a("div",{staticClass:"m-2"},[a("b-row",[a("b-col",{staticClass:"d-flex align-items-center justify-content-start mb-1 mb-md-0",attrs:{cols:"12",md:"6"}},[a("label",[t._v("Göster")]),a("v-select",{staticClass:"per-page-selector d-inline-block ml-50 mr-1",attrs:{options:t.perPageOptions,clearable:!1},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1),a("b-col",{attrs:{cols:"12",md:"6"}},[a("div",{staticClass:"d-flex align-items-center justify-content-end"},[a("b-form-input",{staticClass:"d-inline-block mr-1",attrs:{placeholder:"Ara..."},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}})],1)])],1)],1),a("b-table",{staticClass:"position-relative",attrs:{items:t.filteredItems,responsive:"",fields:t.fields,"primary-key":"id","sort-by":t.sortBy,"show-empty":"","empty-text":"No matching records found","sort-desc":t.isSortDirDesc},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.isSortDirDesc=e},"update:sort-desc":function(e){t.isSortDirDesc=e}},scopedSlots:t._u([{key:"cell(plate_no)",fn:function(e){return[a("b-badge",{staticClass:"cursor-pointer",attrs:{pill:"",variant:"light-primary"},on:{click:function(a){return t.goDetails(e.item)}}},[t._v(" "+t._s(e.value)+" ")])]}}])}),a("div",{staticClass:"mx-2 mb-2"},[a("b-row",[a("b-col",{staticClass:"d-flex align-items-center justify-content-center justify-content-sm-start",attrs:{cols:"12",sm:"6"}},[a("span",{staticClass:"text-muted"})]),a("b-col",{staticClass:"d-flex align-items-center justify-content-center justify-content-sm-end",attrs:{cols:"12",sm:"6"}},[a("b-pagination",{staticClass:"mb-0 mt-1 mt-sm-0",attrs:{"total-rows":t.totalItems,"per-page":t.perPage,"first-number":"","last-number":"","prev-class":"prev-item","next-class":"next-item"},scopedSlots:t._u([{key:"prev-text",fn:function(){return[a("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"18"}})]},proxy:!0},{key:"next-text",fn:function(){return[a("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"18"}})]},proxy:!0}]),model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)],1)},p=[],_=(a("4de4"),a("caad"),a("2532"),a("205f")),o=a("b885"),u=a("4968"),l=a("6197"),d=a("4797"),m=a("29a1"),f=a("e98b"),b=a("26d2"),g=a("4a7a"),E=a.n(g),h=(a("6dfc"),{props:["trucks"],components:{BCard:_["a"],BCardHeader:o["a"],BCardTitle:u["a"],BCardBody:l["a"],BRow:c["a"],BCol:n["a"],BFormInput:d["a"],BTable:m["a"],BBadge:f["a"],BPagination:b["a"],vSelect:E.a},data:function(){return{currentPage:1,items:[],perPage:10,perPageOptions:[5,10,15,20,25,50],searchQuery:"",fields:[{key:"plate_no",label:"Plaka No"}],sortBy:"plate_no",isSortDirDesc:!0,totalItems:0}},computed:{filteredItems:function(){var t=this;return this.searchQuery?this.items.filter((function(e){return e.plate_no.includes(t.searchQuery)})):this.items}},watch:{trucks:function(t,e){this.items=t,this.totalItems=t.length}},created:function(){this.items=this.trucks,this.totalItems=this.trucks.length},methods:{goDetails:function(t){this.$router.push({name:"trucksDetails",params:{truck:t}})}}}),D=h,T=a("2877"),Z=Object(T["a"])(D,i,p,!1,null,null,null),y=Z.exports,O=a("c003"),v=a.n(O),B={components:{BRow:c["a"],BCol:n["a"],TruckList:y},data:function(){return{trucks:v.a}}},k=B,j=Object(T["a"])(k,r,s,!1,null,null,null);e["default"]=j.exports},"5a34":function(t,e,a){var r=a("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},a15b:function(t,e,a){"use strict";a.d(e,"a",(function(){return T}));var r=a("b42e"),s=a("c637"),c=a("a723"),n=a("2326"),i=a("228e"),p=a("6c06"),_=a("b508"),o=a("d82f"),u=a("cf75"),l=a("fa73");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){f(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function f(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var b=["start","end","center"],g=Object(_["a"])((function(t,e){return e=Object(l["h"])(Object(l["g"])(e)),e?Object(l["c"])(["row-cols",t,e].filter(p["a"]).join("-")):null})),E=Object(_["a"])((function(t){return Object(l["c"])(t.replace("cols",""))})),h=[],D=function(){var t=Object(i["b"])().reduce((function(t,e){return t[Object(u["g"])(e,"cols")]=Object(u["c"])(c["n"]),t}),Object(o["c"])(null));return h=Object(o["h"])(t),Object(u["d"])(Object(o["m"])(m(m({},t),{},{alignContent:Object(u["c"])(c["s"],null,(function(t){return Object(n["a"])(Object(n["b"])(b,"between","around","stretch"),t)})),alignH:Object(u["c"])(c["s"],null,(function(t){return Object(n["a"])(Object(n["b"])(b,"between","around"),t)})),alignV:Object(u["c"])(c["s"],null,(function(t){return Object(n["a"])(Object(n["b"])(b,"baseline","stretch"),t)})),noGutters:Object(u["c"])(c["f"],!1),tag:Object(u["c"])(c["s"],"div")})),s["hb"])},T={name:s["hb"],functional:!0,get props(){return delete this.props,this.props=D(),this.props},render:function(t,e){var a,s=e.props,c=e.data,n=e.children,i=s.alignV,p=s.alignH,_=s.alignContent,o=[];return h.forEach((function(t){var e=g(E(t),s[t]);e&&o.push(e)})),o.push((a={"no-gutters":s.noGutters},f(a,"align-items-".concat(i),i),f(a,"justify-content-".concat(p),p),f(a,"align-content-".concat(_),_),a)),t(s.tag,Object(r["a"])(c,{staticClass:"row",class:o}),n)}}},ab13:function(t,e,a){var r=a("b622"),s=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[s]=!1,"/./"[t](e)}catch(r){}}return!1}},c003:function(t,e){t.exports=[{truck_id:1,truck_name:"truck001",truck_ip:"172.0.0.11",plate_no:"07 MVS 33",driver_name:"John Doe",type:"truck",collected_container_count:12,status:"active",daily_distance:"38000",productivity_rate:"32",end_of_shift:"2021-10-17T17:56:08.499Z",description:"",ping_statu:"ERROR",last_success_ping:"2021-08-03T06:26:59.497Z",last_ping:"2021-10-02T12:01:09.000Z",reader_statu:"DISABLED",last_reader:"2021-08-03T06:26:59.497Z",gps_statu:"DISABLED",last_gps:"2021-08-03T06:26:59.497Z",cam_front_statu:"DISABLED",last_cam_front:"2021-08-03T06:26:59.497Z",cam_back_statu:"DISABLED",last_cam_back:"2021-08-03T06:26:59.497Z",temp_statu:0,last_temp:"2021-08-03T06:26:59.497Z",reader_app_statu:"DISABLED",last_reader_app:"2021-08-03T06:26:59.497Z",gps_app_statu:"DISABLED",last_gps_app:"2021-08-03T06:26:59.497Z",cam_app_statu:"DISABLED",last_cam_app:"2021-08-03T06:26:59.497Z",transfer_app_statu:"DISABLED",last_transfer_app:"2021-08-03T06:26:59.497Z",therm_app_statu:"DISABLED",last_therm_app:"2021-08-03T06:26:59.497Z",create_time:"2021-08-03T06:26:59.497Z",cam_inverse:"",latitude:"37.05627306130235",longitude:"27.357845306396484",last_gps_time:"2021-08-03T06:26:59.497Z"},{truck_id:2,truck_name:"truck002",truck_ip:"172.0.0.12",plate_no:"07 MVS 34",driver_name:"John Doe",type:"truck",collected_container_count:45,status:"park",daily_distance:"32500",productivity_rate:"56.2",end_of_shift:"2021-10-17T10:56:08.499Z",description:"",ping_statu:"ERROR",last_success_ping:"2021-09-15T08:21:05.000Z",last_ping:"2021-10-02T12:01:14.000Z",reader_statu:"ENABLED",last_reader:"2021-09-15T08:18:45.000Z",gps_statu:"DISABLED",last_gps:"2021-09-15T08:22:39.000Z",cam_front_statu:"DISABLED",last_cam_front:"2021-09-15T08:22:42.000Z",cam_back_statu:"ENABLED",last_cam_back:"2021-09-15T08:21:52.000Z",temp_statu:41,last_temp:"2021-09-15T08:23:02.000Z",reader_app_statu:"ENABLED",last_reader_app:"2021-09-15T08:21:48.000Z",gps_app_statu:"ENABLED",last_gps_app:"2021-09-15T08:22:39.000Z",cam_app_statu:"ENABLED",last_cam_app:"2021-09-15T08:21:48.000Z",transfer_app_statu:"ENABLED",last_transfer_app:"2021-09-15T08:21:48.000Z",therm_app_statu:"ENABLED",last_therm_app:"2021-09-15T08:21:44.000Z",create_time:"2021-08-03T06:26:59.499Z",cam_inverse:"",latitude:"37.049834101110534",longitude:"27.345485687255863",last_gps_time:"2021-08-03T10:53:39.000Z"},{truck_id:3,truck_name:"truck003",truck_ip:"172.0.0.13",plate_no:"07 MVS 35",driver_name:"John Doe",type:"winch",collected_container_count:23,status:"active",daily_distance:"41200",productivity_rate:"11",end_of_shift:"2021-10-17T21:56:08.499Z",description:"",ping_statu:"ERROR",last_success_ping:"2021-09-15T08:21:05.000Z",last_ping:"2021-10-02T12:01:14.000Z",reader_statu:"ENABLED",last_reader:"2021-09-15T08:18:45.000Z",gps_statu:"DISABLED",last_gps:"2021-09-15T08:22:39.000Z",cam_front_statu:"DISABLED",last_cam_front:"2021-09-15T08:22:42.000Z",cam_back_statu:"ENABLED",last_cam_back:"2021-09-15T08:21:52.000Z",temp_statu:41,last_temp:"2021-09-15T08:23:02.000Z",reader_app_statu:"ENABLED",last_reader_app:"2021-09-15T08:21:48.000Z",gps_app_statu:"ENABLED",last_gps_app:"2021-09-15T08:22:39.000Z",cam_app_statu:"ENABLED",last_cam_app:"2021-09-15T08:21:48.000Z",transfer_app_statu:"ENABLED",last_transfer_app:"2021-09-15T08:21:48.000Z",therm_app_statu:"ENABLED",last_therm_app:"2021-09-15T08:21:44.000Z",create_time:"2021-08-03T06:26:59.499Z",cam_inverse:"",latitude:"37.03202136596886",longitude:"27.497749328613285",last_gps_time:"2021-08-03T10:53:39.000Z"},{truck_id:4,truck_name:"truck004",truck_ip:"172.0.0.13",plate_no:"07 MVS 36",driver_name:"John Doe",type:"winch",collected_container_count:8,status:"park",daily_distance:"54500",productivity_rate:"66",end_of_shift:"2021-10-17T08:56:08.499Z",description:"",ping_statu:"ERROR",last_success_ping:"2021-09-15T08:21:05.000Z",last_ping:"2021-10-02T12:01:14.000Z",reader_statu:"ENABLED",last_reader:"2021-09-15T08:18:45.000Z",gps_statu:"DISABLED",last_gps:"2021-09-15T08:22:39.000Z",cam_front_statu:"DISABLED",last_cam_front:"2021-09-15T08:22:42.000Z",cam_back_statu:"ENABLED",last_cam_back:"2021-09-15T08:21:52.000Z",temp_statu:41,last_temp:"2021-09-15T08:23:02.000Z",reader_app_statu:"ENABLED",last_reader_app:"2021-09-15T08:21:48.000Z",gps_app_statu:"ENABLED",last_gps_app:"2021-09-15T08:22:39.000Z",cam_app_statu:"ENABLED",last_cam_app:"2021-09-15T08:21:48.000Z",transfer_app_statu:"ENABLED",last_transfer_app:"2021-09-15T08:21:48.000Z",therm_app_statu:"ENABLED",last_therm_app:"2021-09-15T08:21:44.000Z",create_time:"2021-08-03T06:26:59.499Z",cam_inverse:"",latitude:"37.03681751347197",longitude:"27.30857849121094",last_gps_time:"2021-08-03T10:53:39.000Z"},{truck_id:5,truck_name:"truck005",truck_ip:"172.0.0.13",plate_no:"07 MVS 37",driver_name:"John Doe",type:"truck",collected_container_count:15,status:"active",daily_distance:"12356",productivity_rate:"55",end_of_shift:"2021-10-18T10:56:08.499Z",description:"",ping_statu:"ERROR",last_success_ping:"2021-09-15T08:21:05.000Z",last_ping:"2021-10-02T12:01:14.000Z",reader_statu:"ENABLED",last_reader:"2021-09-15T08:18:45.000Z",gps_statu:"DISABLED",last_gps:"2021-09-15T08:22:39.000Z",cam_front_statu:"DISABLED",last_cam_front:"2021-09-15T08:22:42.000Z",cam_back_statu:"ENABLED",last_cam_back:"2021-09-15T08:21:52.000Z",temp_statu:41,last_temp:"2021-09-15T08:23:02.000Z",reader_app_statu:"ENABLED",last_reader_app:"2021-09-15T08:21:48.000Z",gps_app_statu:"ENABLED",last_gps_app:"2021-09-15T08:22:39.000Z",cam_app_statu:"ENABLED",last_cam_app:"2021-09-15T08:21:48.000Z",transfer_app_statu:"ENABLED",last_transfer_app:"2021-09-15T08:21:48.000Z",therm_app_statu:"ENABLED",last_therm_app:"2021-09-15T08:21:44.000Z",create_time:"2021-08-03T06:26:59.499Z",cam_inverse:"",latitude:"37.06353336098429",longitude:"27.46564865112305",last_gps_time:"2021-08-03T10:53:39.000Z"},{truck_id:6,truck_name:"truck006",truck_ip:"172.0.0.13",plate_no:"07 MVS 38",driver_name:"John Doe",type:"winch",collected_container_count:32,status:"active",daily_distance:"54644",productivity_rate:"12",end_of_shift:"2021-10-19T10:56:08.499Z",description:"",ping_statu:"ERROR",last_success_ping:"2021-09-15T08:21:05.000Z",last_ping:"2021-10-02T12:01:14.000Z",reader_statu:"ENABLED",last_reader:"2021-09-15T08:18:45.000Z",gps_statu:"DISABLED",last_gps:"2021-09-15T08:22:39.000Z",cam_front_statu:"DISABLED",last_cam_front:"2021-09-15T08:22:42.000Z",cam_back_statu:"ENABLED",last_cam_back:"2021-09-15T08:21:52.000Z",temp_statu:41,last_temp:"2021-09-15T08:23:02.000Z",reader_app_statu:"ENABLED",last_reader_app:"2021-09-15T08:21:48.000Z",gps_app_statu:"ENABLED",last_gps_app:"2021-09-15T08:22:39.000Z",cam_app_statu:"ENABLED",last_cam_app:"2021-09-15T08:21:48.000Z",transfer_app_statu:"ENABLED",last_transfer_app:"2021-09-15T08:21:48.000Z",therm_app_statu:"ENABLED",last_therm_app:"2021-09-15T08:21:44.000Z",create_time:"2021-08-03T06:26:59.499Z",cam_inverse:"",latitude:"37.013244961102856",longitude:"27.45311737060547",last_gps_time:"2021-08-03T10:53:39.000Z"}]},caad:function(t,e,a){"use strict";var r=a("23e7"),s=a("4d64").includes,c=a("44d2"),n=a("ae40"),i=n("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!i},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),c("includes")},e98b:function(t,e,a){"use strict";a.d(e,"a",(function(){return b}));var r=a("2b0e"),s=a("b42e"),c=a("c637"),n=a("a723"),i=a("d82f"),p=a("cf75"),_=a("4a38"),o=a("aa59");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var m=Object(i["j"])(o["b"],["event","routerTag"]);delete m.href.default,delete m.to.default;var f=Object(p["d"])(Object(i["m"])(l(l({},m),{},{pill:Object(p["c"])(n["f"],!1),tag:Object(p["c"])(n["s"],"span"),variant:Object(p["c"])(n["s"],"secondary")})),c["b"]),b=r["default"].extend({name:c["b"],functional:!0,props:f,render:function(t,e){var a=e.props,r=e.data,c=e.children,n=a.active,i=a.disabled,u=Object(_["d"])(a),l=u?o["a"]:a.tag,d=a.variant||"secondary";return t(l,Object(s["a"])(r,{staticClass:"badge",class:["badge-".concat(d),{"badge-pill":a.pill,active:n,disabled:i}],props:u?Object(p["e"])(m,a):{}}),c)}})}}]);