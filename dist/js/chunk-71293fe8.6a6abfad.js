(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71293fe8"],{"03d1":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("layout-vertical",{scopedSlots:e._u([{key:"navbar",fn:function(e){var t=e.toggleVerticalMenuActive;return[a("navbar",{attrs:{"toggle-vertical-menu-active":t}})]}},{key:"footer",fn:function(){return[a("div",{staticClass:"footer-text"},[e._v(" Afatek © "+e._s(e.$moment().year())+" ")])]},proxy:!0}])},[a("router-view")],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vertical-layout h-100",class:[e.layoutClasses],attrs:{"data-col":e.isNavMenuHidden?"1-column":null}},[a("b-navbar",{staticClass:"header-navbar navbar navbar-shadow align-items-center",class:[e.navbarTypeClass],attrs:{toggleable:!1,variant:e.navbarBackgroundColor}},[e._t("navbar",(function(){return[a("app-navbar-vertical-layout",{attrs:{"toggle-vertical-menu-active":e.toggleVerticalMenuActive}})]}),{toggleVerticalMenuActive:e.toggleVerticalMenuActive,navbarBackgroundColor:e.navbarBackgroundColor,navbarTypeClass:e.navbarTypeClass.concat(["header-navbar navbar navbar-shadow align-items-center"])})],2),e.isNavMenuHidden?e._e():a("vertical-nav-menu",{attrs:{"is-vertical-menu-active":e.isVerticalMenuActive,"toggle-vertical-menu-active":e.toggleVerticalMenuActive},scopedSlots:e._u([{key:"header",fn:function(t){return[e._t("vertical-menu-header",null,null,t)]}}],null,!0)}),a("div",{staticClass:"sidenav-overlay",class:e.overlayClasses,on:{click:function(t){e.isVerticalMenuActive=!1}}}),a("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[a(e.layoutContentRenderer,{key:"layout-content-renderer-left"===e.layoutContentRenderer?e.$route.meta.navActiveLink||e.$route.name:null,tag:"component",scopedSlots:e._u([e._l(e.$scopedSlots,(function(t,a){return{key:a,fn:function(t){return[e._t(a,null,null,t)]}}}))],null,!0)})],1),a("footer",{staticClass:"footer footer-light",class:[e.footerTypeClass]},[e._t("footer",(function(){return[a("app-footer")]}))],2),e._t("customizer")],2)},l=[],i=a("a6f4"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-container d-flex content align-items-center"},[a("ul",{staticClass:"nav navbar-nav d-xl-none"},[a("li",{staticClass:"nav-item"},[a("b-link",{staticClass:"nav-link",on:{click:e.toggleVerticalMenuActive}},[a("feather-icon",{attrs:{icon:"MenuIcon",size:"21"}})],1)],1)]),a("div",{staticClass:"bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex"},[a("bookmarks")],1),a("b-navbar-nav",{staticClass:"nav align-items-center ml-auto"},[a("locale"),a("dark-Toggler",{staticClass:"d-none d-lg-block"}),a("search-bar"),a("cart-dropdown"),a("notification-dropdown"),a("user-dropdown")],1)],1)},c=[],u=a("aa59"),v=a("042b"),d=a("6957"),f=a("e2f5"),b=a("809a"),p=a("9f5c"),g=a("8a2e"),y=a("5c02"),C=a("eef9"),m={components:{BLink:u["a"],BNavbarNav:v["a"],Bookmarks:d["a"],Locale:f["a"],SearchBar:b["a"],DarkToggler:p["a"],CartDropdown:g["a"],NotificationDropdown:y["a"],UserDropdown:C["a"]},props:{toggleVerticalMenuActive:{type:Function,default:function(){}}}},k=m,h=a("2877"),w=Object(h["a"])(k,s,c,!1,null,null,null),M=w.exports,V=a("62cb"),A=a("b8f2"),_=a("d0b9"),T=a("1ae3"),L=a("e08f"),x=a("0d19"),N=a("2c28"),B=a("32b8"),$=a("1dff"),R={watch:{$route:function(){this.$store.state.app.windowWidth<$["a"].xl&&(this.isVerticalMenuActive=!1)}}},j={components:{AppNavbarVerticalLayout:M,AppFooter:V["a"],VerticalNavMenu:N["a"],BNavbar:_["a"],LayoutContentRendererLeftDetached:x["a"],LayoutContentRendererLeft:L["a"],LayoutContentRendererDefault:T["a"]},mixins:[R],computed:{layoutContentRenderer:function(){var e=this.$route.meta.contentRenderer;return"sidebar-left"===e?"layout-content-renderer-left":"sidebar-left-detached"===e?"layout-content-renderer-left-detached":"layout-content-renderer-default"}},setup:function(){var e=Object(A["a"])(),t=e.routerTransition,a=e.navbarBackgroundColor,n=e.navbarType,r=e.footerType,o=e.isNavMenuHidden,l=Object(B["a"])(n,r),s=l.isVerticalMenuActive,c=l.toggleVerticalMenuActive,u=l.isVerticalMenuCollapsed,v=l.layoutClasses,d=l.overlayClasses,f=l.resizeHandler,b=l.navbarTypeClass,p=l.footerTypeClass;return f(),window.addEventListener("resize",f),Object(i["onUnmounted"])((function(){window.removeEventListener("resize",f)})),{isVerticalMenuActive:s,toggleVerticalMenuActive:c,isVerticalMenuCollapsed:u,overlayClasses:d,layoutClasses:v,navbarTypeClass:b,footerTypeClass:p,routerTransition:t,navbarBackgroundColor:a,isNavMenuHidden:o}}},D=j,O=(a("15ae"),Object(h["a"])(D,o,l,!1,null,null,null)),z=O.exports,E=a("cb50"),H={components:{LayoutVertical:z,Navbar:E["a"]},data:function(){return{}}},S=H,F=(a("38f4"),Object(h["a"])(S,n,r,!1,null,"e4a2330e",null));t["default"]=F.exports},"15ae":function(e,t,a){"use strict";a("9427")},"38f4":function(e,t,a){"use strict";a("eba3")},9427:function(e,t,a){},eba3:function(e,t,a){}}]);