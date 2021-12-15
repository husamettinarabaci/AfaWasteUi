(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6591718e"],{b2ad:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("5530"),a=n("d4ec"),s=n("bee2"),i=n("5f3e"),o=n("f645"),l=n("6d79"),c=function(){function e(){Object(a["a"])(this,e)}return Object(s["a"])(e,null,[{key:"getUsers",value:function(){return i["a"].post(o["apiUrl"]+o["adminApiUrl"]+"/getUsers").then((function(e){return e}))}},{key:"setUser",value:function(e){var t={};return t[l["a"].HTTP_DATA]=JSON.stringify(e),i["a"].post(o["apiUrl"]+o["adminApiUrl"]+"/setUser",t).then((function(e){return e}))}},{key:"getTags",value:function(){return i["a"].post(o["apiUrl"]+o["adminApiUrl"]+"/getTags").then((function(e){return e}))}},{key:"getDevices",value:function(e){var t={};t.DeviceType=e;var n={};return n[l["a"].HTTP_HEADER]=JSON.stringify(Object(r["a"])({},t)),i["a"].post(o["apiUrl"]+o["adminApiUrl"]+"/getDevices",n).then((function(e){return e}))}},{key:"getConfig",value:function(e){var t={};t.DataType=e;var n={};return n[l["a"].HTTP_HEADER]=JSON.stringify(Object(r["a"])({},t)),i["a"].post(o["apiUrl"]+o["adminApiUrl"]+"/getConfig",n).then((function(e){return e}))}},{key:"setConfig",value:function(e,t){var n={};return n[l["a"].HTTP_HEADER]=JSON.stringify({DataType:e}),n[l["a"].HTTP_DATA]=JSON.stringify(Object(r["a"])({},t)),i["a"].post(o["apiUrl"]+o["adminApiUrl"]+"/setConfig",n).then((function(e){return e.Devices}))}}]),e}()},fd82:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",{attrs:{"no-body":""}},[n("b-card-body",[n("b-row",[n("b-col",{attrs:{lg:"12"}},[n("b-form-input",{attrs:{id:"floating-label1",placeholder:"Label Placeholder"},model:{value:e.table.searchQuery,callback:function(t){e.$set(e.table,"searchQuery",t)},expression:"table.searchQuery"}}),n("b-table",{staticClass:"position-relative",attrs:{items:e.filteredTags,"current-page":e.table.currentPage,"per-page":e.table.perPage,responsive:"","select-mode":"single",fields:e.table.fields,"primary-key":"id","sort-by":e.table.sortBy,"show-empty":"","empty-text":"No matching records found","sort-desc":e.table.isSortDirDesc},on:{"update:sortBy":function(t){return e.$set(e.table,"sortBy",t)},"update:sort-by":function(t){return e.$set(e.table,"sortBy",t)},"update:sortDesc":function(t){return e.$set(e.table,"isSortDirDesc",t)},"update:sort-desc":function(t){return e.$set(e.table,"isSortDirDesc",t)}},scopedSlots:e._u([{key:"cell(DeviceId)",fn:function(t){return[n("span",[e._v(e._s(t.value))])]}},{key:"cell(CustomerId)",fn:function(t){return[n("span",[e._v(e._s(t.value))])]}},{key:"cell(CustomerName)",fn:function(t){return[e.table.searchQuery.length>=3?n("span",{domProps:{innerHTML:e._s(e.$options.filters.highlight(t.value,e.table.searchQuery))}}):n("span",[e._v(e._s(t.value))])]}},{key:"cell(SerialNumber)",fn:function(t){return[n("b-badge",{attrs:{pill:"",variant:"light-primary",title:t.value}},[e._v(" "+e._s(t.value)+" ")])]}},{key:"cell(actions)",fn:function(){return[n("b-button",{staticClass:"btn-icon rounded-circle",attrs:{variant:"warning"}},[n("feather-icon",{attrs:{icon:"ArchiveIcon"}})],1)]},proxy:!0}])}),n("div",{staticClass:"mx-2 mb-2"},[n("b-row",[n("b-col",{staticClass:"d-flex align-items-center justify-content-center justify-content-sm-start",attrs:{cols:"12",sm:"6"}},[n("span",{staticClass:"text-muted"})]),n("b-col",{staticClass:"d-flex align-items-center justify-content-center justify-content-sm-end",attrs:{cols:"12",sm:"6"}},[n("b-pagination",{staticClass:"mb-0 mt-1 mt-sm-0",attrs:{"total-rows":e.table.totalItems,"per-page":e.table.perPage,"first-number":"","last-number":"","prev-class":"prev-item","next-class":"next-item"},scopedSlots:e._u([{key:"prev-text",fn:function(){return[n("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"18"}})]},proxy:!0},{key:"next-text",fn:function(){return[n("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"18"}})]},proxy:!0}]),model:{value:e.table.currentPage,callback:function(t){e.$set(e.table,"currentPage",t)},expression:"table.currentPage"}})],1)],1)],1)],1)],1)],1)],1)},a=[],s=n("205f"),i=n("6197"),o=n("a15b"),l=n("b28b"),c=n("29a1"),u=n("26d2"),f=n("4797"),b=n("e98b"),p=n("1947"),d=n("b2ad"),g=(n("6d79"),{components:{BCard:s["a"],BCardBody:i["a"],BRow:o["a"],BCol:l["a"],BTable:c["a"],BPagination:u["a"],BFormInput:f["a"],BBadge:b["a"],BButton:p["a"]},data:function(){return{devices:[],table:{currentPage:1,perPage:5,perPageOptions:[5,10,15,20,25,50],searchQuery:"",fields:[{key:"DeviceId",label:"Device ID"},{key:"CustomerId",label:"Customer ID"},{key:"CustomerName",label:"Customer Name"},{key:"SerialNumber",label:"Serial Number"},{key:"actions",label:"Edit"}],sortBy:"DeviceId",isSortDirDesc:!0,totalItems:0}}},computed:{filteredTags:function(){return this.tags}},mounted:function(){this.getTags()},methods:{getTags:function(){d["a"].getTags().then((function(e){console.log("geldi: ",e)}))}}}),m=g,y=n("2877"),v=Object(y["a"])(m,r,a,!1,null,null,null);t["default"]=v.exports}}]);