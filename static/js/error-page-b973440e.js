import{u as e}from"./index-de3f2a71.js";import"./vue-echarts-f79e68f9.js";import"./element-plus-ad41b746.js";import"./store-96e17a43.js";import{u as s}from"./index-c518ddff.js";import{d as a,R as o,o as r,c as t,a as c,b as u,J as i,N as n}from"./@vue.runtime-core-e50a2272.js";import{e as d,u as p}from"./@vue.reactivity-da630c06.js";import{L as m}from"./@vue.shared-5670d8a7.js";import{_ as l}from"./_plugin-vue_export-helper-c4cb8a60.js";const f={class:"error-page"},v={class:"code"},j={class:"desc"},y={key:0,class:"btns"},_={key:1,class:"btns"},b=a({name:"undefined"}),h=l(a({...b,props:{code:Number,desc:String},setup(a){const{router:l}=s(),{user:b}=e(),h=d(!1);function k(){l.push("/login")}async function g(){h.value=!0,b.logout()}function x(){l.push("/")}return(e,s)=>{const d=o("el-button");return r(),t("div",f,[c("h1",v,m(a.code),1),c("p",j,m(a.desc),1),p(b).token||h.value?(r(),t("div",y,[u(d,{onClick:x},{default:i((()=>[n("回到首页")])),_:1}),u(d,{type:"primary",onClick:g},{default:i((()=>[n("重新登录")])),_:1})])):(r(),t("div",_,[u(d,{type:"primary",onClick:k},{default:i((()=>[n("返回登录页")])),_:1})]))])}}}),[["__scopeId","data-v-24892f46"]]);export{h as E};
