"use strict";(self["webpackChunkpet_demo"]=self["webpackChunkpet_demo"]||[]).push([[443],{699:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var l=a(6252),s=a(3577);const i={class:"about"},r=(0,l._)("h1",null,"我的收藏",-1),n={class:"ui four doubling stackable cards container"},c={class:"ui image"},o=["src"],u={class:"description"},d=["onClick"],m=(0,l._)("i",{class:"heart icon"},null,-1);function p(t,e,a,p,g,h){return(0,l.wg)(),(0,l.iD)("div",i,[r,(0,l._)("div",n,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(g.mypets,(t=>((0,l.wg)(),(0,l.iD)("div",{class:"ui attached card",key:t.n},[(0,l._)("div",c,[(0,l._)("img",{src:"https://loremflickr.com/320/240/pet?random="+t.i+"&lock="+t.i},null,8,o)]),(0,l._)("div",u,[(0,l._)("h3",null,(0,s.zw)(t.n),1),(0,l.Uk)(" 價格：$NTD"+(0,s.zw)(t.price),1)]),(0,l._)("a",{class:(0,s.C_)(["ui bottom attached button",{pink:!h.isMine(t),purple:h.isMine(t)}]),tabindex:"0",onClick:e=>h.toggle(t)},[(0,l.Uk)((0,s.zw)(h.isMine(t)?"從收藏中移除":"加入收藏")+" ",1),m],10,d)])))),128))])])}a(7658);var g={name:"AbOut",metaInfo:{title:"我的收藏"},methods:{toggle(t){var e=JSON.parse(localStorage.getItem("mypets")||"[]");if((e||[]).filter((function(e){return e.n===t.n})).length>0){const a=(e||[]).filter((function(e){return e.n!==t.n}));e=[...a],localStorage.setItem("mypets",JSON.stringify(e))}else e.push(t),localStorage.setItem("mypets",JSON.stringify(e));this.mypets=JSON.parse(localStorage.getItem("mypets")||"[]"),this.$forceUpdate()},isMine(t){const e=JSON.parse(localStorage.getItem("mypets")||"[]");return(e||[]).filter((function(e){return e.n===t.n})).length>0}},data(){return{mypets:[]}},mounted(){localStorage.mypets&&(this.mypets=JSON.parse(localStorage.getItem("mypets")||"[]"))}},h=a(3744);const y=(0,h.Z)(g,[["render",p]]);var f=y},8072:function(t,e,a){a.r(e),a.d(e,{default:function(){return j}});var l=a(6252),s=a(3577),i=a(9963);const r={class:"about"},n=(0,l._)("h1",null,"我的購物車",-1),c={class:"ui four doubling stackable cards container"},o={class:"ui image"},u=["src"],d={class:"description"},m=["onClick"],p=(0,l._)("i",{class:"cart icon"},null,-1),g=(0,l._)("br",null,null,-1),h=(0,l._)("br",null,null,-1),y={class:"ui form container"},f={class:"ui field"},_=(0,l._)("h4",{class:"ui dividing header"},"訂單資訊",-1),v={class:"field"},b={class:"two fields"},S={class:"field"},w={class:"ui labeled input"},k=(0,l._)("label",{class:"ui label"},"訂購人",-1),N={class:"field"},I={class:"ui labeled input"},O=(0,l._)("label",{class:"ui label"},"手機號碼",-1),C={class:"field"},D={class:"ui labeled input"},J=(0,l._)("label",{class:"ui label"},"地址",-1),U={class:"field"},z={class:"ui labeled input"},x=(0,l._)("label",{class:"ui label"},"帳號末五碼",-1),T=(0,l._)("br",null,null,-1),$=(0,l._)("br",null,null,-1),M={key:0,class:"ui list container"},V=(0,l._)("h2",null,"交易記錄",-1);function Y(t,e,a,Y,A,H){return(0,l.wg)(),(0,l.iD)("div",r,[n,(0,l._)("div",c,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(A.mycarts,(t=>((0,l.wg)(),(0,l.iD)("div",{class:"ui attached card",key:t.n},[(0,l._)("div",o,[(0,l._)("img",{src:"https://loremflickr.com/320/240/pet?random="+t.i+"&lock="+t.i},null,8,u)]),(0,l._)("div",d,[(0,l._)("h3",null,(0,s.zw)(t.n),1),(0,l.Uk)(" 價格：$NTD"+(0,s.zw)(t.price),1)]),(0,l._)("a",{class:(0,s.C_)(["ui button",{green:!H.inCart(t),blue:H.inCart(t)}]),tabindex:"0",onClick:e=>H.toggleCart(t)},[(0,l.Uk)((0,s.zw)(H.inCart(t)?"從購物車中移除":"加入購物車")+" ",1),p],10,m)])))),128))]),g,h,(0,l._)("div",y,[(0,l._)("div",f," 總金額 "+(0,s.zw)(H.countTotal()),1),_,(0,l._)("div",v,[(0,l._)("div",b,[(0,l._)("div",S,[(0,l._)("div",w,[k,(0,l.wy)((0,l._)("input",{type:"text",name:"shipping[first-name]",placeholder:"Name","onUpdate:modelValue":e[0]||(e[0]=t=>A.name=t)},null,512),[[i.nr,A.name]])])]),(0,l._)("div",N,[(0,l._)("div",I,[O,(0,l.wy)((0,l._)("input",{type:"text",name:"phone",placeholder:"Phone","onUpdate:modelValue":e[1]||(e[1]=t=>A.phone=t)},null,512),[[i.nr,A.phone]])])])])]),(0,l._)("div",C,[(0,l._)("div",D,[J,(0,l.wy)((0,l._)("input",{type:"text",name:"shipping[address]",placeholder:"Street Address","onUpdate:modelValue":e[2]||(e[2]=t=>A.addr=t)},null,512),[[i.nr,A.addr]])])]),(0,l._)("div",U,[(0,l._)("div",z,[x,(0,l.wy)((0,l._)("input",{type:"text",name:"five",placeholder:"帳號末五碼","onUpdate:modelValue":e[3]||(e[3]=t=>A.five=t)},null,512),[[i.nr,A.five]])])]),(0,l._)("a",{class:"ui large green button",onClick:e[4]||(e[4]=t=>H.submit())},"下訂單")]),T,$,A.myrecords[0]?((0,l.wg)(),(0,l.iD)("div",M,[V,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(A.myrecords,(t=>((0,l.wg)(),(0,l.iD)("div",{class:"ui item",key:t},(0,s.zw)(t),1)))),128))])):(0,l.kq)("",!0)])}a(7658);var A={name:"AbOut",metaInfo:{title:"我的收藏"},data(){return{mycarts:[],myrecords:[],name:"",phone:"",addr:"",five:""}},methods:{today(){const t=new Date;return t.getFullYear()+"/"+(t.getMonth()+1)+"/"+t.getDate()},submit(){for(var t=0,e=[],a=0;a<this.mycarts.length;a++)t+=this.mycarts[a].price;for(var l=0;l<this.mycarts.length;l++)e.push(this.mycarts[l].n+"/$NTD"+this.mycarts[l].price);var s=e.join(",");const i=this.today(),r="mailto:bestian@gmail.com?subject="+i+this.name+"訂購"+s+"&body="+i+this.name+"訂購"+s+" ===> 總金額$NTD"+t+"===> 寄送地址"+this.addr+" ===> 電話"+this.phone+"===> 末五碼"+this.five;window.open(r),this.mycarts=[],this.name="",this.phone="",this.five="",this.addr="",this.myrecords.push(r),localStorage.setItem("mycarts",JSON.stringify(this.mycarts)),localStorage.setItem("myrecords",JSON.stringify(this.myrecords))},countTotal(){for(var t=0,e=0;e<this.mycarts.length;e++)t+=this.mycarts[e].price;return t},toggleCart(t){var e=JSON.parse(localStorage.getItem("mycarts")||"[]");if((e||[]).filter((function(e){return e.n===t.n})).length>0){const a=(e||[]).filter((function(e){return e.n!==t.n}));e=[...a],localStorage.setItem("mycarts",JSON.stringify(e))}else e.push(t),localStorage.setItem("mycarts",JSON.stringify(e));this.mycarts=JSON.parse(localStorage.getItem("mycarts")||"[]"),this.$forceUpdate()},inCart(t){const e=JSON.parse(localStorage.getItem("mycarts")||"[]");return(e||[]).filter((function(e){return e.n===t.n})).length>0}},mounted(){localStorage.mycarts&&(this.mycarts=JSON.parse(localStorage.getItem("mycarts")||"[]")),localStorage.myrecords&&(this.myrecords=JSON.parse(localStorage.getItem("myrecords")||"[]"))}},H=a(3744);const K=(0,H.Z)(A,[["render",Y]]);var j=K}}]);
//# sourceMappingURL=about.0740bbd5.js.map