"use strict";(self["webpackChunk_22_project_20240328"]=self["webpackChunk_22_project_20240328"]||[]).push([[666],{4666:function(t,e,l){l.r(e),l.d(e,{default:function(){return $}});var a=l(6768),i=l(5130),c=l(4232);const r={class:"article-list"},s=(0,a.Lk)("h2",{class:"fw-bold text-primary mb-5"},"最新文章列表",-1),n={class:"p-0"},o={class:"row py-3"},u={class:"col-md-6 mb-3 mb-0-md"},d=["onClick"],k=["src","alt"],p={class:"col-md-6 ps-5-md p-auto text-dark d-flex flex-column justify-content-center"},m={class:"fs-6"},v={class:"me-3 article__sort text-primary"},L={class:"text-primary lh-sm"},f=["onClick"],h={class:"m-0"};function g(t,e,l,g,_,C){const b=(0,a.g2)("LoadingSpinner"),x=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(b,{active:t.isLoading},null,8,["active"]),(0,a.Lk)("div",r,[s,(0,a.Lk)("ul",n,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.articles,(e=>((0,a.uX)(),(0,a.CE)("li",{key:e.id},[(0,a.Lk)("div",null,[(0,a.Lk)("div",o,[(0,a.Lk)("div",u,[(0,a.Lk)("a",{href:"#","aria-label":"article",onClick:(0,i.D$)((t=>C.toArticle(e.id)),["prevent"])},[(0,a.Lk)("img",{src:e.image,class:"img-fluid w-100",alt:e.title,style:{"max-height":"200px","object-fit":"cover"}},null,8,k)],8,d)]),(0,a.Lk)("div",p,[(0,a.Lk)("p",m,[(0,a.Lk)("span",v,(0,c.v_)(e.author),1),(0,a.eW)((0,c.v_)(t.$filters.date(e.create_at)),1)]),(0,a.Lk)("h5",L,[(0,a.Lk)("a",{href:"#","aria-label":"article",class:"fw-bold",onClick:(0,i.D$)((t=>C.toArticle(e.id)),["prevent"])},(0,c.v_)(e.title),9,f)]),(0,a.Lk)("p",h,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.tag,((e,l)=>((0,a.uX)(),(0,a.Wv)(x,{class:"me-3 text-dark text-opacity-50",key:`${e}${l+1}`,to:"/article/search_tag",onClick:(0,i.D$)((l=>t.searchTag(e)),["prevent"])},{default:(0,a.k6)((()=>[(0,a.eW)((0,c.v_)(`#${e}`),1)])),_:2},1032,["onClick"])))),128))])])])])])))),128))])])],64)}l(4114);var _=l(3367),C=l(2647),b={data(){return{}},computed:{...(0,_.aH)(C.A,["articles","isLoading"])},inject:["emitter"],methods:{...(0,_.i0)(C.A,["getArticleList","searchTag"]),toArticle(t){this.$router.push(`/article/new/${t}`)}},created(){this.getArticleList()},mounted(){}},x=l(1241);const y=(0,x.A)(b,[["render",g]]);var $=y}}]);
//# sourceMappingURL=666.39a8aad8.js.map