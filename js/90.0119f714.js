"use strict";(self["webpackChunk_22_project_20240328"]=self["webpackChunk_22_project_20240328"]||[]).push([[90],{4106:function(t,e,a){a.d(e,{A:function(){return C}});var o=a(6768),s=a(4232),l=a(5130);const n={class:"modal",ref:"modal",tabindex:"-1",style:{"margin-top":"8%"}},d={class:"modal-dialog modal-sm"},i={class:"modal-content"},r={class:"modal-header"},p={class:"modal-title"},c=(0,o.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),u={class:"modal-body"},m=["textContent"],b={class:"modal-footer"},h=(0,o.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function k(t,e,a,k,L,g){return(0,o.uX)(),(0,o.CE)("div",n,[(0,o.Lk)("div",d,[(0,o.Lk)("div",i,[(0,o.Lk)("div",r,[(0,o.Lk)("h5",p,(0,s.v_)(`刪除${a.title}`),1),c]),(0,o.Lk)("div",u,[(0,o.Lk)("p",null,[(0,o.eW)(" 確定要刪除 "),(0,o.Lk)("span",{class:"fw-bold",textContent:(0,s.v_)(a.product.title||a.product.id)},null,8,m),(0,o.eW)(" "+(0,s.v_)(`這項${a.title}嗎？`),1)])]),(0,o.Lk)("div",b,[h,(0,o.Lk)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(0,l.D$)((e=>t.$emit("del-product",a.product)),["prevent"]))}," 確認 ")])])])],512)}var L=a(8282),g={data(){return{Mtitle:""}},props:["product","title"],mixins:[L.A]},v=a(1241);const f=(0,v.A)(g,[["render",k]]);var C=f},8789:function(t,e,a){a.d(e,{A:function(){return m}});var o=a(6768),s=a(4232),l=a(5130);const n={"aria-label":"Page navigation example "},d={class:"pagination justify-content-center"},i=["onClick"];function r(t,e,a,r,p,c){return(0,o.uX)(),(0,o.CE)("nav",n,[(0,o.Lk)("ul",d,[(0,o.Lk)("li",{class:(0,s.C4)(["page-item",{disabled:!a.pages.has_pre}])},[(0,o.Lk)("a",{class:"page-link",href:"#",onClick:e[0]||(e[0]=(0,l.D$)((t=>c.prePage(a.pages.current_page)),["prevent"]))},"Previous")],2),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.pages.total_pages,(t=>((0,o.uX)(),(0,o.CE)("li",{class:(0,s.C4)(["page-item",{active:t===a.pages.current_page}]),style:{"border-radius":"5px"},key:t},[(0,o.Lk)("a",{class:"page-link",href:"#",onClick:(0,l.D$)((e=>c.updatePage(t)),["prevent"])},(0,s.v_)(t),9,i)],2)))),128)),(0,o.Lk)("li",{class:(0,s.C4)(["page-item",{disabled:!a.pages.has_next}])},[(0,o.Lk)("a",{class:"page-link",href:"#",onClick:e[1]||(e[1]=(0,l.D$)((t=>c.nextPage(a.pages.current_page)),["prevent"]))},"Next")],2)])])}var p={props:["pages"],methods:{updatePage(t){this.$emit("emit-page",t)},nextPage(t){this.$emit("emit-page",`${t+1}`)},prePage(t){this.$emit("emit-page",""+(t-1))}}},c=a(1241);const u=(0,c.A)(p,[["render",r]]);var m=u},8090:function(t,e,a){a.r(e),a.d(e,{default:function(){return et}});var o=a(6768),s=a(5130),l=a(4232);const n={class:"g-5 products-list__content"},d={class:"row mt-5 border-bottom border-primary pb-4 border-1"},i=(0,o.Lk)("div",{class:"col-6 text-start h3 fw-bold m-0 text-dark"},"折價券",-1),r={class:"col-6 text-end"},p={class:"table mt-2 table-borderless"},c=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",{class:"table-light"},[(0,o.Lk)("th",{width:"120 "},"名稱"),(0,o.Lk)("th",{width:"100"},"折扣百分比"),(0,o.Lk)("th",{width:"120"},"到期日"),(0,o.Lk)("th",{width:"120"},"是否啟用"),(0,o.Lk)("th",{width:"200"},"編輯")])],-1),u={class:"tr-style"},m={class:"py-2"},b={class:"text-right"},h={key:0,class:"text-success"},k={key:1,class:"text-muted"},L={class:"pe-3"},g=["onClick"],v=(0,o.Lk)("i",{class:"bi bi-pen-fill"},null,-1),f=[v],C=["onClick"],_=(0,o.Lk)("i",{class:"bi bi-trash-fill"},null,-1),y=[_];function x(t,e,a,v,_,x){const $=(0,o.g2)("LoadingSpinner"),O=(0,o.g2)("Pagination"),M=(0,o.g2)("CunponsModal"),w=(0,o.g2)("DelOrderModal");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)($,{active:_.isLoading},null,8,["active"]),(0,o.Lk)("div",n,[(0,o.Lk)("div",d,[i,(0,o.Lk)("div",r,[(0,o.Lk)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=(0,s.D$)((t=>x.openModal(!0)),["prevent"]))}," 新增折價券 ")])]),(0,o.Lk)("table",p,[c,(0,o.Lk)("tbody",u,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(_.coupons,(e=>((0,o.uX)(),(0,o.CE)("tr",{key:e.id},[(0,o.Lk)("td",m,(0,l.v_)(e.title),1),(0,o.Lk)("td",null,(0,l.v_)(e.percent),1),(0,o.Lk)("td",b,(0,l.v_)(t.$filters.date(e.due_date)),1),(0,o.Lk)("td",null,[e.is_enabled?((0,o.uX)(),(0,o.CE)("span",h,"啟用")):((0,o.uX)(),(0,o.CE)("span",k,"未啟用"))]),(0,o.Lk)("td",L,[(0,o.Lk)("button",{type:"button",class:"product__button edit",onClick:(0,s.D$)((t=>x.openModal(!1,e)),["prevent"])},f,8,g),(0,o.Lk)("button",{type:"button",class:"product__button del",onClick:(0,s.D$)((t=>x.openDelModal(e)),["prevent"])},y,8,C)])])))),128))])]),(0,o.bF)(O,{onEmitPage:x.getProducts,pages:_.pagination},null,8,["onEmitPage","pages"])]),(0,o.bF)(M,{onUpdateOrder:x.updateOrder,coupon:_.tempOrder,ref:"OrderModal"},null,8,["onUpdateOrder","coupon"]),(0,o.bF)(w,{product:_.tempOrder,title:_.title,onDelProduct:x.delOrder,ref:"delOrderModal"},null,8,["product","title","onDelProduct"])],64)}const $={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},O={class:"modal-dialog modal-sm"},M={class:"modal-content"},w=(0,o.Lk)("div",{class:"modal-header"},[(0,o.Lk)("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"新增折價券"),(0,o.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),P={class:"modal-body container"},D={class:"row"},E={class:"col-12"},A={class:"input-group mb-3"},X={for:"title",class:"form-label text-start col"},F={class:"input-group mb-3"},U={for:"percent",class:"form-label text-start col"},W={class:"input-group mb-3"},j={for:"due_date",class:"form-label text-start col"},V={class:"input-group mb-3"},J={for:"code",class:"form-label text-start col"},N={class:"mb-3"},S={class:"form-check text-start"},I={class:"form-check-label",for:"is_enabled"},K={class:"modal-footer"},T=(0,o.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function H(t,e,a,l,n,d){return(0,o.uX)(),(0,o.CE)("div",$,[(0,o.Lk)("div",O,[(0,o.Lk)("div",M,[w,(0,o.Lk)("div",P,[(0,o.Lk)("div",D,[(0,o.Lk)("div",E,[(0,o.Lk)("div",A,[(0,o.Lk)("label",X,[(0,o.eW)("標題 "),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>n.tempCoupons.title=t),type:"text",class:"form-control",id:"title",placeholder:"請輸入標題"},null,512),[[s.Jo,n.tempCoupons.title]])])]),(0,o.Lk)("div",F,[(0,o.Lk)("label",U,[(0,o.eW)("折扣 "),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>n.tempCoupons.percent=t),type:"number",class:"form-control",id:"percent",placeholder:"請輸入折扣"},null,512),[[s.Jo,n.tempCoupons.percent]])])]),(0,o.Lk)("div",W,[(0,o.Lk)("label",j,[(0,o.eW)("到期日 "),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>n.due_date=t),type:"date",class:"form-control",id:"due_date"},null,512),[[s.Jo,n.due_date]])])]),(0,o.Lk)("div",V,[(0,o.Lk)("label",J,[(0,o.eW)("內容 "),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>n.tempCoupons.code=t),type:"text",class:"form-control",id:"code",placeholder:"請輸入內容"},null,512),[[s.Jo,n.tempCoupons.code]])])]),(0,o.Lk)("div",N,[(0,o.Lk)("div",S,[(0,o.Lk)("label",I,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>n.tempCoupons.is_enabled=t),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},null,512),[[s.lH,n.tempCoupons.is_enabled]]),(0,o.eW)(" 是否啟用 ")])])])])])]),(0,o.Lk)("div",K,[T,(0,o.Lk)("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=(0,s.D$)((e=>t.$emit("update-order",n.tempCoupons)),["prevent"]))}," 上傳 ")])])])],512)}var q=a(8282),z={props:{coupon:{type:Object,default(){return{}}}},watch:{coupon(){this.tempCoupons=this.coupon;const t=new Date(1e3*this.tempCoupons.due_date).toISOString().split("T");[this.due_date]=t},due_date(){this.tempCoupons.due_date=Math.floor(new Date(this.due_date)/1e3)}},data(){return{modal:{},tempCoupons:{},due_date:""}},methods:{},mixins:[q.A]},B=a(1241);const G=(0,B.A)(z,[["render",H]]);var Q=G,R=a(4106),Y=a(8789),Z={data(){return{title:"優惠券",coupons:[],pagination:{},tempOrder:{},isNew:!1,isLoading:!1}},components:{CunponsModal:Q,DelOrderModal:R.A,Pagination:Y.A},inject:["emitter","$httpMessageState"],methods:{getProducts(t=1){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/patty-api/admin/coupons/?page=${t}`;this.$http.get(e).then((t=>{this.isLoading=!1,this.coupons=t.data.coupons,this.pagination=t.data.pagination})).catch((t=>{console.error("錯誤:",t)}))},openModal(t,e){this.tempOrder=t?{due_date:(new Date).getTime()/1e3}:{...e},this.isNew=t;const a=this.$refs.OrderModal;a.showModal()},updateOrder(t){this.tempOrder=t;let e="https://vue3-course-api.hexschool.io/api/patty-api/admin/coupon",a="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/patty-api/admin/coupon/${t.id}`,a="put");const o=this.$refs.OrderModal;this.$http[a](e,{data:this.tempOrder}).then((t=>{t.data.success?(this.getProducts(),this.emitter.emit("push-message",{style:"success",title:"更新成功"}).catch((t=>{console.error("錯誤:",t)}))):this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.data.message.join("、")}),o.hideModal()}))},openDelModal(t){this.tempOrder={...t};const e=this.$refs.delOrderModal;e.showModal()},delOrder(t){const e=this.$refs.delOrderModal;this.tempOrder=t;const a=`https://vue3-course-api.hexschool.io/api/patty-api/admin/coupon/${t.id}`;this.$http.delete(a,this.tempOrder).then((()=>{e.hideModal(),this.getProducts()})).catch((t=>{console.error("錯誤:",t)}))}},created(){this.getProducts()}};const tt=(0,B.A)(Z,[["render",x]]);var et=tt}}]);
//# sourceMappingURL=90.0119f714.js.map