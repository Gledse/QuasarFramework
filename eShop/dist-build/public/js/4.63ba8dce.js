(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"3f20":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-my-md text-center"},[t.productInCart.length?a("base-cart-componet"):a("div",{staticClass:"flex flex-center",staticStyle:{height:"500px"}},[a("div",{staticClass:"text-grey-7"},[t._v("\n      Carrinha vazia.\n    ")])])],1)},o=[],c=a("7053"),s=a.n(c),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-left "},[a("div",{staticClass:"text-h5 q-my-md"},[t._v("\n      Carrinha\n  ")]),t._l(t.productInCart,(function(t){return[a("ProductInCartComponent",{attrs:{productCarted:t}}),a("q-separator",{staticClass:"q-my-md"})]})),a("q-footer",{staticClass:"row",staticStyle:{background:"transparent"}},[a("div",{staticClass:"q-pa-md bg-grey-2 col-12 col-md-7"},[a("div",{staticClass:"q-pa-md text-grey-8 "},[a("div",{staticClass:"text-bold text-primary"},[t._v("Resumo da compra")]),a("div",{staticClass:"row q-pt-md"},[a("div",{staticClass:"col-6 text-bold"},[t._v("\n            Quantidade:\n          ")]),a("div",{staticClass:"col-6  text-h6 text-right"},[t._v("\n            "+t._s(t.totalProduct)+" Produtos\n          ")])]),a("div",{staticClass:"row q-pb-md"},[a("div",{staticClass:"col-6 text-bold"},[t._v("\n            Valor Total:\n          ")]),a("div",{staticClass:"col-6  text-h6 text-right"},[t._v("\n            "+t._s(t.totalSumProduct)+" MT\n          ")])])]),a("div",[a("q-btn",{staticClass:"full-width",attrs:{label:"Pagar (MPesa)",dense:"",color:"primary"}})],1)])])],2)},i=[],d=a("2f62"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-my-md"},[a("q-list",[t.product?a("q-item",[a("q-item-section",{staticClass:"q-ml-none",attrs:{top:"",thumbnail:""}},[a("img",{attrs:{src:t.productImage(t.product)}}),a("q-btn",{staticClass:"q-mt-md",attrs:{label:"Remover","text-color":"red",size:"sm",flat:""},on:{click:function(e){return t.confirmremoveFromCart()}}})],1),a("q-item-section",[a("q-item-label",{attrs:{caption:""}},[t._v("Prod Category ")]),a("q-item-label",[t._v("\n        "+t._s(t.product.name)+"\n      ")]),a("q-item-label",[t._v("\n        "+t._s(t.product.price)+"\n      ")]),a("q-item-label",[a("div",{staticClass:"col-6",staticStyle:{width:"130px"}},[a("q-input",{staticClass:"full-width",attrs:{"input-class":"text-center",outlined:"",dense:!0},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-btn",{attrs:{icon:"remove",color:"grey","text-color":"red",flat:"",dense:""},on:{click:function(e){t.qtd--}}})]},proxy:!0},{key:"append",fn:function(){return[a("q-btn",{attrs:{icon:"add",color:"grey","text-color":"primary",flat:"",dense:""},on:{click:function(e){t.qtd++}}})]},proxy:!0}],null,!1,1195795815),model:{value:t.qtd,callback:function(e){t.qtd=e},expression:"qtd"}})],1)])],1)],1):t._e()],1)],1)},u=[],p={name:"ProductInCartComponent",props:["productCarted"],data(){return{qtd:0}},computed:s()(s()({},Object(d["c"])("product",["getProductById","productImage"])),{},{product(){return this.getProductById(this.productCarted.id)}}),methods:s()(s()({},Object(d["b"])("product",["addToCart","removeFromCart"])),{},{initialize(){this.qtd=this.productCarted.qtd},confirmremoveFromCart(){this.$q.dialog({title:"Remover da carrinha",message:"Deseja remover o produto '"+this.product.name+"', da carrinha?",cancel:!0,persistent:!0}).onOk((()=>{this.removeFromCart(this.product)}))}}),mounted(){this.initialize()},watch:{qtd(t){this.addToCart({id:this.productCarted.id,qtd:t})}}},m=p,C=a("2877"),h=a("1c1c"),v=a("66e5"),q=a("4074"),b=a("9c40"),f=a("0170"),x=a("27f9"),g=a("eebe"),y=a.n(g),_=Object(C["a"])(m,l,u,!1,null,"90c91958",null),I=_.exports;y()(_,"components",{QList:h["a"],QItem:v["a"],QItemSection:q["a"],QBtn:b["a"],QItemLabel:f["a"],QInput:x["a"]});var P={name:"BaseCartComponet",components:{ProductInCartComponent:I},computed:s()(s()(s()({},Object(d["d"])("product",["productInCart","products"])),Object(d["c"])("product",["getProductById"])),{},{totalProduct(){let t=0;return this.productInCart.forEach((e=>{t+=e.qtd})),t},totalSumProduct(){let t=0;return this.productInCart.forEach((e=>{let a=this.getProductById(e.id);a&&(t+=e.qtd*a.price)})),t}}),methods:s()(s()({},Object(d["b"])("product",["getProducts"])),{},{initialize(){0===Object.keys(this.products).length&&this.getProducts()}}),mounted(){this.initialize()}},w=P,j=a("eb85"),k=a("7ff0"),O=Object(C["a"])(w,n,i,!1,null,"d723564a",null),Q=O.exports;y()(O,"components",{QSeparator:j["a"],QFooter:k["a"],QBtn:b["a"]});var B={name:"CartPage",components:{BaseCartComponet:Q},computed:s()({},Object(d["d"])("product",["productInCart"]))},S=B,z=Object(C["a"])(S,r,o,!1,null,"3883050a",null);e["default"]=z.exports}}]);