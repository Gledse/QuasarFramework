(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"3f20":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"q-my-md text-center"},[e("base-cart-componet")],1)},n=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-left "},[e("div",{staticClass:"text-h5 q-my-md"},[t._v("\n      Carrinha\n  ")]),t._l(10,(function(t){return[e("ProductInCartComponent"),e("q-separator",{staticClass:"q-my-md"})]})),e("q-footer",{staticClass:"row",staticStyle:{background:"transparent"}},[e("div",{staticClass:"q-pa-md bg-grey-2 col-12 col-md-7"},[e("div",{staticClass:"q-pa-md text-grey-8 "},[e("div",{staticClass:"text-bold text-primary"},[t._v("Resumo da compra")]),e("div",{staticClass:"row q-pt-md"},[e("div",{staticClass:"col-6 text-bold"},[t._v("\n            Quantidade:\n          ")]),e("div",{staticClass:"col-6  text-h6 text-right"},[t._v("\n            10 Produtos\n          ")])]),e("div",{staticClass:"row q-pb-md"},[e("div",{staticClass:"col-6 text-bold"},[t._v("\n            Valor Total:\n          ")]),e("div",{staticClass:"col-6  text-h6 text-right"},[t._v("\n            89,00 MT\n          ")])])]),e("div",[e("q-btn",{staticClass:"full-width",attrs:{label:"Pagar (MPesa)",dense:"",color:"primary"}})],1)])])],2)},r=[],l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"q-my-md"},[e("q-list",[e("q-item",[e("q-item-section",{staticClass:"q-ml-none",attrs:{top:"",thumbnail:""}},[e("img",{attrs:{src:"https://cdn.quasar.dev/img/mountains.jpg"}}),e("q-btn",{staticClass:"q-mt-md",attrs:{label:"Remover","text-color":"red",size:"sm",flat:""}})],1),e("q-item-section",[e("q-item-label",{attrs:{caption:""}},[t._v("Prod Category")]),e("q-item-label",[t._v("Meus sapatos Velhos")]),e("q-item-label",{attrs:{caption:""}},[t._v("200 MT")]),e("q-item-label",[e("div",{staticClass:"col-6",staticStyle:{width:"130px"}},[e("q-input",{staticClass:"full-width",attrs:{"input-class":"text-center",outlined:"",dense:!0},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-btn",{attrs:{icon:"remove",color:"grey","text-color":"red",flat:"",dense:""},on:{click:function(a){t.qtd--}}})]},proxy:!0},{key:"append",fn:function(){return[e("q-btn",{attrs:{icon:"add",color:"grey","text-color":"primary",flat:"",dense:""},on:{click:function(a){t.qtd++}}})]},proxy:!0}]),model:{value:t.qtd,callback:function(a){t.qtd=a},expression:"qtd"}})],1)])],1)],1)],1)],1)},c=[],i={name:"ProductInCartComponent",data(){return{qtd:0}}},d=i,m=e("2877"),p=e("1c1c"),u=e("66e5"),v=e("4074"),C=e("9c40"),q=e("0170"),f=e("27f9"),b=e("eebe"),x=e.n(b),y=Object(m["a"])(d,l,c,!1,null,"0aa26f1e",null),_=y.exports;x()(y,"components",{QList:p["a"],QItem:u["a"],QItemSection:v["a"],QBtn:C["a"],QItemLabel:q["a"],QInput:f["a"]});var h={name:"BaseCartComponet",components:{ProductInCartComponent:_}},g=h,w=e("eb85"),Q=e("7ff0"),k=Object(m["a"])(g,o,r,!1,null,"cf0c4018",null),P=k.exports;x()(k,"components",{QSeparator:w["a"],QFooter:Q["a"],QBtn:C["a"]});var I={name:"CartPage",components:{BaseCartComponet:P}},S=I,j=Object(m["a"])(S,s,n,!1,null,"228cbe0a",null);a["default"]=j.exports}}]);