(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-620aaa8f"],{"07ac":function(e,t,r){var n=r("23e7"),a=r("6f53").values;n({target:"Object",stat:!0},{values:function(e){return a(e)}})},"1e5d":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",{attrs:{"no-body":""}},[r("b-card-body",[r("b-row",[r("b-col",{attrs:{lg:"12"}},[r("b-form-input",{attrs:{id:"floating-label1",placeholder:"Label Placeholder"},model:{value:e.table.searchQuery,callback:function(t){e.$set(e.table,"searchQuery",t)},expression:"table.searchQuery"}}),r("b-table",{staticClass:"position-relative",attrs:{items:e.filteredDevices,"current-page":e.table.currentPage,"per-page":e.table.perPage,responsive:"","select-mode":"single",fields:e.table.fields,"primary-key":"id","sort-by":e.table.sortBy,"show-empty":"","empty-text":"No matching records found","sort-desc":e.table.isSortDirDesc},on:{"update:sortBy":function(t){return e.$set(e.table,"sortBy",t)},"update:sort-by":function(t){return e.$set(e.table,"sortBy",t)},"update:sortDesc":function(t){return e.$set(e.table,"isSortDirDesc",t)},"update:sort-desc":function(t){return e.$set(e.table,"isSortDirDesc",t)}},scopedSlots:e._u([{key:"cell(DeviceId)",fn:function(t){return[r("span",[e._v(e._s(t.value))])]}},{key:"cell(CustomerId)",fn:function(t){return[r("span",[e._v(e._s(t.value))])]}},{key:"cell(CustomerName)",fn:function(t){return[e.table.searchQuery.length>=3?r("span",{domProps:{innerHTML:e._s(e.$options.filters.highlight(t.value,e.table.searchQuery))}}):r("span",[e._v(e._s(t.value))])]}},{key:"cell(SerialNumber)",fn:function(t){return[r("b-badge",{attrs:{pill:"",variant:"light-primary",title:t.value}},[e._v(" "+e._s(t.value)+" ")])]}},{key:"cell(actions)",fn:function(){return[r("b-button",{staticClass:"btn-icon rounded-circle",attrs:{variant:"warning"}},[r("feather-icon",{attrs:{icon:"ArchiveIcon"}})],1)]},proxy:!0}])}),r("div",{staticClass:"mx-2 mb-2"},[r("b-row",[r("b-col",{staticClass:"d-flex align-items-center justify-content-center justify-content-sm-start",attrs:{cols:"12",sm:"6"}},[r("span",{staticClass:"text-muted"})]),r("b-col",{staticClass:"d-flex align-items-center justify-content-center justify-content-sm-end",attrs:{cols:"12",sm:"6"}},[r("b-pagination",{staticClass:"mb-0 mt-1 mt-sm-0",attrs:{"total-rows":e.table.totalItems,"per-page":e.table.perPage,"first-number":"","last-number":"","prev-class":"prev-item","next-class":"next-item"},scopedSlots:e._u([{key:"prev-text",fn:function(){return[r("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"18"}})]},proxy:!0},{key:"next-text",fn:function(){return[r("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"18"}})]},proxy:!0}]),model:{value:e.table.currentPage,callback:function(t){e.$set(e.table,"currentPage",t)},expression:"table.currentPage"}})],1)],1)],1)],1)],1)],1)],1)},a=[],s=(r("4de4"),r("caad"),r("2532"),r("07ac"),r("205f")),i=r("6197"),c=r("a15b"),o=r("b28b"),u=r("29a1"),l=r("26d2"),f=r("4797"),d=r("e98b"),b=r("1947"),p=r("b2ad"),v=r("6d79"),g={components:{BCard:s["a"],BCardBody:i["a"],BRow:c["a"],BCol:o["a"],BTable:u["a"],BPagination:l["a"],BFormInput:f["a"],BBadge:d["a"],BButton:b["a"]},data:function(){return{devices:[],table:{currentPage:1,perPage:5,perPageOptions:[5,10,15,20,25,50],searchQuery:"",fields:[{key:"DeviceId",label:"Device ID"},{key:"CustomerId",label:"Customer ID"},{key:"CustomerName",label:"Customer Name"},{key:"SerialNumber",label:"Serial Number"},{key:"actions",label:"Edit"}],sortBy:"DeviceId",isSortDirDesc:!0,totalItems:0}}},computed:{filteredDevices:function(){var e=this;return this.devices.filter((function(t){return t.CustomerName.toLocaleLowerCase().includes(e.table.searchQuery.toLocaleLowerCase())}))}},mounted:function(){this.getDevices()},methods:{getDevices:function(){var e=this;p["a"].getDevices(v["a"].DEVICETYPE_RFID).then((function(t){console.log("geldi: ",t),e.devices=Object.values(t.Devices),e.table.totalItems=e.devices.length}))}}},m=g,y=r("2877"),h=Object(y["a"])(m,n,a,!1,null,null,null);t["default"]=h.exports},2532:function(e,t,r){"use strict";var n=r("23e7"),a=r("5a34"),s=r("1d80"),i=r("ab13");n({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~String(s(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,r){var n=r("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},"6f53":function(e,t,r){var n=r("83ab"),a=r("df75"),s=r("fc6a"),i=r("d1e7").f,c=function(e){return function(t){var r,c=s(t),o=a(c),u=o.length,l=0,f=[];while(u>l)r=o[l++],n&&!i.call(c,r)||f.push(e?[r,c[r]]:c[r]);return f}};e.exports={entries:c(!0),values:c(!1)}},ab13:function(e,t,r){var n=r("b622"),a=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[a]=!1,"/./"[e](t)}catch(n){}}return!1}},b2ad:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("5530"),a=r("d4ec"),s=r("bee2"),i=r("5f3e"),c=r("f645"),o=r("6d79"),u=function(){function e(){Object(a["a"])(this,e)}return Object(s["a"])(e,null,[{key:"getUsers",value:function(){return i["a"].post(c["apiUrl"]+c["adminApiUrl"]+"/getUsers").then((function(e){return e}))}},{key:"getTags",value:function(){return i["a"].post(c["apiUrl"]+c["adminApiUrl"]+"/getTags").then((function(e){return e}))}},{key:"getDevices",value:function(e){var t={};t.DeviceType=e;var r={};return r[o["a"].HTTP_HEADER]=JSON.stringify(Object(n["a"])({},t)),i["a"].post(c["apiUrl"]+c["adminApiUrl"]+"/getDevices",r).then((function(e){return e}))}},{key:"getConfig",value:function(e){var t={};t.DataType=e;var r={};return r[o["a"].HTTP_HEADER]=JSON.stringify(Object(n["a"])({},t)),i["a"].post(c["apiUrl"]+c["adminApiUrl"]+"/getConfig",r).then((function(e){return e}))}},{key:"setConfig",value:function(e){var t={};t.DeviceType=deviceType;var r={};return r[o["a"].HTTP_HEADER]=JSON.stringify(Object(n["a"])({},t)),i["a"].post(c["apiUrl"]+webApiUrl+"/getDevices"+(date?"?date="+date:""),r).then((function(e){return e.Devices}))}}]),e}()},caad:function(e,t,r){"use strict";var n=r("23e7"),a=r("4d64").includes,s=r("44d2"),i=r("ae40"),c=i("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!c},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),s("includes")}}]);