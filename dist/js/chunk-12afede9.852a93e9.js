(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12afede9"],{8229:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Donasiku")]),t._m(0),e("div",{staticClass:"form-inline"},[null!=t.dataUser.name?e("div",[e("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",text:t.dataUser.name,variant:"success"}},[e("b-dropdown-item",{on:{click:function(a){return t.logout()}}},[t._v("Logout")]),e("b-dropdown-item",[e("router-link",{staticClass:"text-black",attrs:{to:"/account/myfunding"}},[t._v("Funding Saya")])],1)],1)],1):e("div",[e("router-link",{staticClass:"btn btn-success px-4 my-2 my-sm-0",staticStyle:{"border-radius":"30px"},attrs:{to:"/login"}},[t._v(" Login ")]),e("router-link",{staticClass:"btn btn-success px-4 my-2 my-sm-0 ml-2",staticStyle:{"border-radius":"30px"},attrs:{to:"/register"}},[t._v(" Register ")])],1)])],1)])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],o={name:"NavbarTop",data:function(){return{dataUser:{}}},methods:{userFetch:function(){var t=JSON.parse(localStorage.getItem("data_donasiku"));null==t?(localStorage.removeItem("data_donasiku"),localStorage.removeItem("token")):this.dataUser=t},logout:function(){localStorage.removeItem("token"),localStorage.removeItem("data_donasiku"),location.reload()}},beforeMount:function(){this.userFetch()}},s=o,l=e("2877"),i=Object(l["a"])(s,n,r,!1,null,null,null);a["a"]=i.exports},c66d:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("navbar-top")],1)},r=[],o=e("8229"),s={components:{NavbarTop:o["a"]}},l=s,i=e("2877"),c=Object(i["a"])(l,n,r,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-12afede9.852a93e9.js.map