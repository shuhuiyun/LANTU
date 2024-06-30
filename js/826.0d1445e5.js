"use strict";(self["webpackChunk_22_project_20240328"]=self["webpackChunk_22_project_20240328"]||[]).push([[826],{7826:function(t,e,o){o.r(e),o.d(e,{default:function(){return yt}});var a=o(6768),l=o(4232);const s={class:"g-5 products-list__content"},i={class:"row mt-5 border-bottom border-primary pb-4 border-1"},d=(0,a.Lk)("div",{class:"col-6 text-start h3 fw-bold m-0 text-dark"},"文章管理",-1),c={class:"col-6 text-end"},n={class:"table mt-2 table-borderless"},r=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",{class:"table-light"},[(0,a.Lk)("th",{width:"120 "},"建立時間"),(0,a.Lk)("th",{width:"100"},"文章標題"),(0,a.Lk)("th",{width:"120"},"作者"),(0,a.Lk)("th",{width:"120"},"公開"),(0,a.Lk)("th",{width:"200"},"編輯")])],-1),u={class:"tr-style"},p={class:"py-2"},m={class:"text-right"},h={key:0,class:"text-success"},b={key:1,class:"text-muted"},g={class:"pe-3"},k=["onClick"],L=(0,a.Lk)("i",{class:"bi bi-pen-fill"},null,-1),f=[L],P=["onClick"],v=(0,a.Lk)("i",{class:"bi bi-trash-fill"},null,-1),y=[v];function x(t,e,o,L,v,x){const C=(0,a.g2)("LoadingSpinner"),M=(0,a.g2)("PageNavigation"),w=(0,a.g2)("ArticlesModal"),$=(0,a.g2)("DelModal");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(C,{active:v.isLoading},null,8,["active"]),(0,a.Lk)("div",s,[(0,a.Lk)("div",i,[d,(0,a.Lk)("div",c,[(0,a.Lk)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=t=>x.openModal(!0))}," 新增文章 ")])]),(0,a.Lk)("table",n,[r,(0,a.Lk)("tbody",u,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(v.products,(e=>((0,a.uX)(),(0,a.CE)("tr",{key:e.id},[(0,a.Lk)("td",p,(0,l.v_)(t.$filters.date(e.create_at)),1),(0,a.Lk)("td",null,(0,l.v_)(e.title),1),(0,a.Lk)("td",m,(0,l.v_)(e.author),1),(0,a.Lk)("td",null,[e.isPublic?((0,a.uX)(),(0,a.CE)("span",h,"啟用")):((0,a.uX)(),(0,a.CE)("span",b,"未啟用"))]),(0,a.Lk)("td",g,[(0,a.Lk)("button",{type:"button",class:"product__button edit",onClick:t=>x.openModal(!1,e)},f,8,k),(0,a.Lk)("button",{type:"button",class:"product__button del",onClick:t=>x.openDelModal(e)},y,8,P)])])))),128))])]),(0,a.bF)(M,{onEmitPage:x.getProducts,pages:v.pagination},null,8,["onEmitPage","pages"])]),(0,a.bF)(w,{onUpdateProduct:x.updateProduct,product:v.tempProduct,content:v.tempContent,ref:"productModal"},null,8,["onUpdateProduct","product","content"]),(0,a.bF)($,{product:v.tempProduct,title:v.title,onDelProduct:x.delProduct,ref:"delProductModal"},null,8,["product","title","onDelProduct"])],64)}var C=o(5130);const M={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},w={class:"modal-dialog modal-xl"},$={class:"modal-content"},_=(0,a.Lk)("div",{class:"modal-header"},[(0,a.Lk)("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"新增文章"),(0,a.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),F={class:"modal-body container"},I={class:"row"},E={class:"col-sm-4"},D={class:"input-group mb-3"},U={for:"img-url",class:"form-label text-start col"},A={class:"input-group mb-3"},V={class:"form-label text-start col",for:"img-file"},W={type:"file",class:"form-control",id:"img-file",ref:"fileInput"},X={class:"mb-3 input-group"},T=["value"],S={class:"col-sm-8"},j={class:"input-group mb-3"},N={for:"title",class:"form-label text-start col"},J={class:"row"},K={class:"col-6"},O={class:"input-group mb-3"},H={for:"author",class:"form-label text-start col"},q={class:"col-6"},z={for:"author",class:"form-label text-start col"},B={class:"input-group mb-3"},G={class:"input-group mb-3"},Q={for:"tag",class:"form-label text-start col"},R={class:"row ps-3"},Y=["onClick"],Z=(0,a.Lk)("i",{class:"bi bi-x-lg px-0"},null,-1),tt=[Z],et={class:"input-group mb-3"},ot={type:"text",class:"form-control",id:"tag",ref:"tagInput",placeholder:"請輸入標籤","aria-label":"tag","aria-describedby":"button-addon2"},at={class:"mb-3"},lt={class:"form-check text-start"},st={class:"form-check-label",for:"isPublic"},it={class:"modal-footer"},dt=(0,a.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ct(t,e,o,s,i,d){const c=(0,a.g2)("Ckeditor");return(0,a.uX)(),(0,a.CE)("div",M,[(0,a.Lk)("div",w,[(0,a.Lk)("div",$,[_,(0,a.Lk)("div",F,[(0,a.Lk)("div",I,[(0,a.Lk)("div",E,[(0,a.Lk)("div",D,[(0,a.Lk)("label",U,[(0,a.eW)("輸入圖片網址 "),(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>i.tempProduct.image=t),type:"text",class:"form-control",id:"img-url",placeholder:"請輸入圖片連結"},null,512),[[C.Jo,i.tempProduct.image]])])]),(0,a.Lk)("div",A,[(0,a.Lk)("label",V,[(0,a.eW)(" 或 上傳圖片 "),(0,a.Lk)("input",W,null,512)])]),(0,a.Lk)("div",null,[(0,a.Lk)("button",{type:"button",class:"btn btn-outline-primary d-block w-100 mb-5",onClick:e[1]||(e[1]=(...t)=>d.uploadFile&&d.uploadFile(...t))}," 新增圖片 ")]),(0,a.Lk)("div",X,[(0,a.Lk)("input",{type:"url",class:"form-control form-control",value:i.tempProduct.image},null,8,T),(0,a.Lk)("button",{type:"button",class:"btn btn-outline-danger",onClick:e[2]||(e[2]=t=>d.delImage())}," 移除 ")])]),(0,a.Lk)("div",S,[(0,a.Lk)("div",j,[(0,a.Lk)("label",N,[(0,a.eW)("標題 "),(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>i.tempProduct.title=t),type:"text",class:"form-control",id:"title",placeholder:"請輸入標題"},null,512),[[C.Jo,i.tempProduct.title]])])]),(0,a.Lk)("div",J,[(0,a.Lk)("div",K,[(0,a.Lk)("div",O,[(0,a.Lk)("label",H,[(0,a.eW)("作者 "),(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>i.tempProduct.author=t),type:"text",class:"form-control",id:"author",placeholder:"請輸入作者"},null,512),[[C.Jo,i.tempProduct.author]])])])]),(0,a.Lk)("div",q,[(0,a.Lk)("label",z,[(0,a.eW)("時間 "),(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":e[5]||(e[5]=t=>i.date=t),type:"text",class:"form-control",id:"author",disabled:""},null,512),[[C.Jo,i.date]])])])]),(0,a.Lk)("div",B,[(0,a.bF)(c,{editor:i.editor,modelValue:i.tempProduct.content,"onUpdate:modelValue":e[6]||(e[6]=t=>i.tempProduct.content=t)},null,8,["editor","modelValue"])]),(0,a.Lk)("div",G,[(0,a.Lk)("label",Q,[(0,a.eW)("標籤 "),(0,a.Lk)("div",R,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.tempProduct.tag,((t,e)=>((0,a.uX)(),(0,a.CE)("div",{key:e,class:"col-auto bg-light border-1 border rounded-pill ps-3 m-1"},[(0,a.eW)((0,l.v_)(t)+" ",1),(0,a.Lk)("button",{type:"button",class:"btn btn-sm border-0 pe-0",onClick:t=>d.delTag(e)},tt,8,Y)])))),128))]),(0,a.Lk)("div",et,[(0,a.Lk)("input",ot,null,512),(0,a.Lk)("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:e[7]||(e[7]=(...t)=>d.addTags&&d.addTags(...t))}," 確認 ")])])]),(0,a.Lk)("div",at,[(0,a.Lk)("div",lt,[(0,a.Lk)("label",st,[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":e[8]||(e[8]=t=>i.tempProduct.isPublic=t),class:"form-check-input",type:"checkbox","true-value":!0,"false-value":!1,id:"isPublic"},null,512),[[C.lH,i.tempProduct.isPublic]]),(0,a.eW)(" 是否公開 ")])])])])])]),(0,a.Lk)("div",it,[dt,(0,a.Lk)("button",{type:"button",class:"btn btn-primary",onClick:e[9]||(e[9]=e=>t.$emit("update-product",i.tempProduct))}," 上傳 ")])])])],512)}o(4114);var nt=o(8282),rt=o(4139),ut=o.n(rt),pt=o(8252),mt=o.n(pt),ht={props:{product:{type:Object,default(){return{}}},content:{}},watch:{product(){this.tempProduct=this.product,this.tempProduct.image?this.image=this.tempProduct.image:this.image="",this.tempProduct.tag?this.tag=this.tempProduct.tag:this.tag=[],this.tempProduct.image=this.image;const t=new Date(1e3*this.tempProduct.create_at).toISOString().split("T");[this.date]=t},content(){this.tempProduct.content=this.content}},data(){return{tempArticle:{},editor:mt(),modal:{},tempProduct:{},image:"",date:"",tag:[],data:{}}},components:{Ckeditor:ut().component},inject:["emitter","$httpMessageState"],methods:{delTag(t){this.tempProduct.tag.splice(t,1)},addTags(){if(this.tag.length<=5){const t=this.$refs.tagInput.value;this.tag.push(t),this.tempProduct.tag=this.tag}this.$refs.tagInput.value=""},uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const o="https://vue3-course-api.hexschool.io/api/patty-api/admin/upload";this.$http.post(o,e).then((t=>{t.data.success&&(this.tempProduct.image=t.data.imageUrl,this.$refs.fileInput.value="")})).catch((()=>{this.emitter.emit("push-message",{style:"danger",title:"取得文章失敗",content:"抱歉，出現系統問題，請聯絡我們！"})}))},delImage(){this.tempProduct.image=""}},mixins:[nt.A]},bt=o(1241);const gt=(0,bt.A)(ht,[["render",ct]]);var kt=gt,Lt=o(7836),ft=o(557),Pt={data(){return{tempContent:"",products:[],pagination:{},tempProduct:{},isNew:!1,title:"文章",isLoading:!1}},components:{ArticlesModal:kt,DelModal:Lt.A,PageNavigation:ft.A},inject:["emitter","$httpMessageState"],methods:{getProducts(t=1){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/patty-api/admin/articles/?page=${t}`;this.$http.get(e).then((t=>{this.isLoading=!1,this.products=t.data.articles,this.pagination=t.data.pagination})).catch((()=>{this.emitter.emit("push-message",{style:"danger",title:"取得文章失敗",content:"抱歉，出現系統問題，請聯絡我們！"})}))},openModal(t,e){if(t)this.tempProduct={create_at:(new Date).getTime()/1e3};else{this.tempProduct={...e};const t=`https://vue3-course-api.hexschool.io/api/patty-api/admin/article/${e.id}`;this.$http.get(t).then((t=>{this.tempProduct.content=t.data.article.content})).catch((()=>{this.emitter.emit("push-message",{style:"danger",title:"取得文章失敗",content:"抱歉，出現系統問題，請聯絡我們！"})}))}this.isNew=t;const o=this.$refs.productModal;o.showModal()},updateProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/patty-api/admin/article",o="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/patty-api/admin/article/${t.id}`,o="put");const a=this.$refs.productModal;this.$http[o](e,{data:this.tempProduct}).then((t=>{this.$httpMessageState(t,"更新文章狀態"),this.getProducts(),a.hideModal()})).catch((()=>{this.emitter.emit("push-message",{style:"danger",title:"取得文章失敗",content:"抱歉，出現系統問題，請聯絡我們！"})}))},openDelModal(t){this.tempProduct={...t};const e=this.$refs.delProductModal;e.showModal()},delProduct(t){const e=this.$refs.delProductModal;this.tempProduct=t;const o=`https://vue3-course-api.hexschool.io/api/patty-api/admin/article/${t.id}`;this.$http.delete(o,this.tempProduct).then((()=>{e.hideModal(),this.getProducts()})).catch((()=>{this.emitter.emit("push-message",{style:"danger",title:"取得文章失敗",content:"抱歉，出現系統問題，請聯絡我們！"})}))}},created(){this.getProducts()}};const vt=(0,bt.A)(Pt,[["render",x]]);var yt=vt}}]);
//# sourceMappingURL=826.0d1445e5.js.map