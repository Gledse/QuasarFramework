(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{6919:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md text-center"},[a("ProductDetailsComponent")],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.product?a("div",[a("ProductDetailsImage",{attrs:{product:t.product}}),a("product-details-prices",{attrs:{product:t.product}}),a("q-separator",{staticClass:"q-my-md"}),t.totalValue?a("div",{staticClass:"q-mt-md q-pt-md text-left"},[t._v("\n\n      "+t._s(t.product.price)+" x "+t._s(t.qtd)+" = "),a("span",{staticStyle:{"font-size":"25pt","font-weight":"bold"}},[t._v(t._s(t.totalValue))]),a("span",{staticClass:"text-bold"},[t._v("Valor Total")])]):t._e(),a("Product-details-add-to-cart",{attrs:{product:t.product},on:{newQtd:function(e){t.qtd=parseInt(e)}}}),a("q-separator",{staticClass:"q-my-md"}),a("Product-details-other-products",{attrs:{product:t.product}})],1):a("div",{staticClass:"flex flex-center text-grey-7",staticStyle:{height:"500px"}},[t._m(0)])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("div",{staticClass:"text h6"},[t._v("\n        Carregando dados do produto...\n      ")]),a("div",[t._v("\n        Aguarde\n      ")])])}],d=a("7053"),i=a.n(d),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-card",{staticClass:"my-card",staticStyle:{"min-height":"210px"}},[a("q-img",{attrs:{src:t.productImage(t.product),basic:""}})],1),a("div",{staticClass:"row"},[a("q-scroll-area",{staticClass:"bg-grey-1 q-mt-sm rounded-borders",style:"height: 60px; width: "+(t.$q.screen.width-30.5)+"px;",attrs:{horizontal:""}},[a("div",{staticClass:" row no-wrap "},t._l(10,(function(e){return a("div",{key:e,staticClass:"q-pa-sm",staticStyle:{width:"80px"}},[a("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.productImage(t.product),alt:""}})])})),0)])],1)],1)},l=[],u=a("2f62"),p={name:"ProductDetailsImage",props:["product"],computed:i()({},Object(u["c"])("product",["productImage"]))},m=p,h=a("2877"),f=a("f09f"),v=a("068f"),g=a("4983"),b=a("eebe"),C=a.n(b),_=Object(h["a"])(m,n,l,!1,null,"993cca60",null),x=_.exports;C()(_,"components",{QCard:f["a"],QImg:v["a"],QScrollArea:g["a"]});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-left text-grey-7"},[a("div",{staticClass:"text-h6"},[t._v("\n    "+t._s(t.product.name)+"\n  ")]),a("div",{staticClass:"text-bold text-grey-9"},[t._v("\n    "+t._s(t.product.price)+" MT\n  ")]),a("div",{staticStyle:{"min-height":"50px"}},[t._v("\n    "+t._s(t.product.description)+"\n  ")])])},q=[],P={name:"ProductDetailsPrices",props:["product"]},I=P,w=Object(h["a"])(I,y,q,!1,null,"0040683f",null),O=w.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-8"},[a("q-select",{attrs:{dense:"",outlined:"",options:t.options,label:"Quantidade"},on:{input:function(e){return t.$emit("newQtd",t.model)}},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1),a("div",{staticClass:"col-4 q-pl-sm"},[a("q-btn",{staticClass:"full-width full-height",attrs:{label:"Adicionar",dense:"",color:"grey",unelevated:""},on:{click:function(e){t.addToCart({id:t.product.id,qtd:parseInt(t.model)})}}})],1)])])},D=[],Q={name:"ProductDetailsAddToCart",props:["product"],data(){return{model:"",options:[1,2,3,4,5,6,7,8,9,10]}},computed:i()({},Object(u["d"])("product",["productInCart"])),methods:i()(i()({},Object(u["b"])("product",["addToCart"])),{},{initialize(){if(this.productInCart.length){let t=this.productInCart.find((t=>t.id===this.product.id));t&&(this.model=""+t.qtd,this.$emit("newQtd",this.model))}},mounted(){this.initialize()}})},S=Q,$=a("ddd8"),k=a("9c40"),E=Object(h["a"])(S,j,D,!1,null,"59ee5ef9",null),z=E.exports;C()(E,"components",{QSelect:$["a"],QBtn:k["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-my-md",staticStyle:{height:"200px"}},[a("div",{staticClass:"q-pa-md "},[a("q-carousel",{attrs:{animated:"",navigation:"",infinite:"",autoplay:t.autoplay,arrows:"","transition-prev":"slide-right","transition-next":"slide-left"},on:{mouseenter:function(e){t.autoplay=!1},mouseleave:function(e){t.autoplay=!0}},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.composeImage,(function(t,e){return a("q-carousel-slide",{key:e,attrs:{name:e,"img-src":t}})})),1)],1)])},A=[],V={name:"ProductDetailsOtherProducts",props:["product"],data(){return{slide:1,autoplay:!0}},computed:i()(i()(i()({},Object(u["d"])("product",["products"])),Object(u["c"])("product",["productImage"])),{},{composeImage(){let t=[];return Object.keys(this.products).forEach((e=>{let a=this.products[e];t.push(this.productImage(a))})),t}})},B=V,J=a("880c"),M=a("62cd"),F=Object(h["a"])(B,T,A,!1,null,"7b473f44",null),G=F.exports;C()(F,"components",{QCarousel:J["a"],QCarouselSlide:M["a"]});var H={name:"ProductDetailsComponent",components:{ProductDetailsOtherProducts:G,ProductDetailsAddToCart:z,ProductDetailsPrices:O,ProductDetailsImage:x},data(){return{qtd:0}},computed:i()(i()(i()({},Object(u["d"])("product",["products"])),Object(u["c"])("product",["getProductById"])),{},{totalValue(){return this.product.price*this.qtd},product(){return this.getProductById(this.productId)},productId(){return this.$route.params.productId}}),methods:i()(i()({},Object(u["b"])("product",["getProducts"])),{},{initialize(){0===Object.keys(this.products).length&&this.getProducts()}}),mounted(){this.initialize()}},K=H,L=a("eb85"),N=Object(h["a"])(K,o,c,!1,null,"f4bfe3e8",null),R=N.exports;C()(N,"components",{QSeparator:L["a"]});var U={name:"ProductDetailsPage",components:{ProductDetailsComponent:R}},W=U,X=Object(h["a"])(W,s,r,!1,null,"35b97614",null);e["default"]=X.exports}}]);