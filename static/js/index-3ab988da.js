import{l as e,v as a,w as s}from"./@vue.runtime-dom-90e9fdb1.js";import{d as t}from"./dayjs-dd470533.js";import{D as l}from"./vuedraggable-4149a334.js";import{J as o,u as r,P as i}from"./@element-plus.icons-vue-26cbeb7a.js";import{u as d,i as p,m as u,k as c,l as n}from"./index-bb4a3b00.js";import"./vue-echarts-f79e68f9.js";import{a as m}from"./element-plus-ad41b746.js";import{u as f}from"./index-6742aea9.js";import{f as v,a as b,b as g}from"./index-1626da80.js";import{j as h,v as j}from"./lodash-es-a085e596.js";import{d as y,q as _,p as k,R as w,o as x,c as z,a as S,b as V,J as $,E as U,I as B,M as C,G as q,F as A,N as D,K as F}from"./@vue.runtime-core-e50a2272.js";import{e as P,h as I,u as L}from"./@vue.reactivity-da630c06.js";import{o as M,L as O}from"./@vue.shared-5670d8a7.js";import{_ as N}from"./_plugin-vue_export-helper-c4cb8a60.js";import"./axios-966d6f38.js";import"./sortablejs-9236fa87.js";import"./vue-b5fce9d1.js";import"./store-96e17a43.js";import"./nprogress-6d1393d1.js";import"./vue-router-916993ce.js";import"./pinia-bb8d2f73.js";import"./vue-demi-5b9a0fa5.js";import"./@vueuse.core-2fa6d9e6.js";import"./@vueuse.shared-ca6b0f06.js";import"./mockjs-93ca2bc8.js";import"./mitt-dab1f1cb.js";import"./@popperjs.core-040feab9.js";import"./@ctrl.tinycolor-84ad98d6.js";import"./async-validator-efc2d198.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-da779ce4.js";import"./@floating-ui.dom-9d85c32a.js";import"./@floating-ui.core-c56fb7e8.js";import"./resize-detector-94afada7.js";import"./echarts-6943293a.js";import"./tslib-ed971494.js";import"./zrender-0d232395.js";const Y={class:"cl-upload__wrap"},E={class:"cl-upload__header"},K={key:0,class:"cl-upload__item"},R={class:"cl-upload__text"},G={key:1,class:"cl-upload__btn"},J={class:"cl-upload__name"},T={class:"cl-upload__size"},H={class:"cl-upload__actions"},Q=["onClick"],W=["onClick"],X={key:2,class:"cl-upload__progress"},Z={key:3,class:"cl-upload__error"},ee=["src"],ae=y({name:"cl-upload"}),se=N(y({...ae,props:{modelValue:{type:[String,Array],default:()=>[]},type:{type:String,default:"image"},accept:String,multiple:Boolean,limit:Number,limitSize:Number,size:[String,Number,Array],text:String,prefixPath:{type:String,default:"app"},showFileList:{type:Boolean,default:!0},drag:Boolean,disabled:Boolean,isEdit:null,scope:null},emits:["update:modelValue","upload","success","error","progress"],setup(y,{expose:N,emit:ae}){const se=y;e((e=>({"120a058e":L(de)[0],"120a0550":L(de)[1]})));const{service:te}=f(),{user:le}=d(),oe=p.exports.useForm(),{options:re}=u.get("upload"),ie=P(),de=_((()=>{const e=se.size||re.size;return(h(e)?e:[e,e]).map((e=>j(e)?e+"px":e))})),pe=_((()=>{var e;return(null==(e=oe.value)?void 0:e.disabled)||se.disabled})),ue=se.limit||re.limit.upload,ce=se.limitSize||re.limit.size,ne=se.text||re.text,me=_((()=>({Authorization:le.token}))),fe=I({visible:!1,url:""}),ve=P([]),be=I({options:{group:"Upload",animation:300,ghostClass:"Ghost",dragClass:"Drag",draggable:".is-drag",disabled:!se.drag}}),ge=_((()=>se.accept||("file"==se.type?"*":"image/*"))),he=_((()=>se.multiple?ue-ve.value.length>0:0==ve.value.length));function je(e){return"image"==se.type?"image":v(e).value}function ye(e,a){if(e.size/1024/1024>=ce)return m.error(`上傳文件大小不能超過 ${ce}MB!`),!1;const s={type:je(e.name),preload:"",progress:0,url:"",uid:e.uid,size:e.size};return s.preload="image"==s.type?window.webkitURL.createObjectURL(e):e.name,a?Object.assign(a,s):he.value?ve.value.push(s):ve.value=[s],ae("upload",s),!0}function _e(e){ve.value.splice(e,1),xe()}function ke(){ve.value=[]}async function we(e,a){a||(a=ve.value.find((a=>a.uid==e.file.uid)));try{let s=c()+"_"+e.file.name;const{mode:l,type:o}=await te.base.comm.uploadMode();return new Promise(((r,i)=>{async function d({host:o,preview:d,data:p}){const u=new FormData;for(const e in p)u.append(e,p[e]);"cloud"==l&&(s=[se.prefixPath,t().format("YYYY-MM-DD"),s].filter(Boolean).join("/")),u.append("key",s),u.append("file",e.file),await te.request({url:o,method:"POST",headers:{"Content-Type":"multipart/form-data"},timeout:6e5,data:u,onUploadProgress(e){a.progress=parseInt(String(e.loaded/e.total*100)),ae("progress",a)},proxy:"local"==l}).then((e=>{a.url="local"===l?e:`${d||o}/${s}`,ae("success",a),r(a.url),xe()})).catch((e=>{m.error(e.message),a.error=e.message,ae("error",a),i(e)}))}"local"==l?d({host:"/admin/base/comm/upload"}):te.base.comm.upload().then((e=>{switch(o){case"cos":d({host:e.url,data:e.credentials});break;case"oss":d({host:e.host,data:{OSSAccessKeyId:e.OSSAccessKeyId,policy:e.policy,signature:e.signature}});break;case"qiniu":d({host:e.uploadUrl,preview:e.publicDomain,data:{token:e.token}})}})).catch(i)}))}catch(s){m.error("上傳配置錯誤")}}function xe(){ve.value.find((e=>!e.url))||ae("update:modelValue",ve.value.map((e=>e.url)).join(","))}return k((()=>se.modelValue),(e=>{const a=(h(e)?e:(e||"").split(",")).filter(Boolean);ve.value=a.map((e=>{const a=ve.value.find((a=>e==a.url));return a||{type:je(e),progress:0,uid:c(),url:e,preload:e}})).filter(((e,a)=>!!se.multiple||0==a))}),{immediate:!0}),N({isAdd:he,list:ve,check:function(){return ve.value.find((e=>100!=e.progress))},clear:ke,remove:_e,upload(e){ke(),ie.value.clearFiles(),ie.value.handleStart(e),ie.value.submit()}}),(e,t)=>{const d=w("el-icon"),p=w("el-button"),u=w("el-upload"),c=w("el-image"),m=w("el-progress"),f=w("cl-dialog");return x(),z(A,null,[S("div",Y,[S("div",{class:M(["cl-upload",[`cl-upload--${y.type}`,{"is-slot":e.$slots.default,"is-custom":e.$slots.item,"is-disabled":L(pe)}]])},[S("div",E,[V(u,{ref_key:"Upload",ref:ie,action:"",accept:L(ge),"show-file-list":!1,"before-upload":ye,"http-request":we,headers:L(me),multiple:y.multiple,disabled:L(pe)},{default:$((()=>[U(e.$slots,"default",{},(()=>["image"==y.type&&L(he)?(x(),z("div",K,[V(d,{size:24},{default:$((()=>[V(L(o))])),_:1}),S("span",R,O(L(ne)),1)])):C("",!0),"file"==y.type?(x(),z("div",G,[V(p,{type:"success"},{default:$((()=>[D(O(L(ne)),1)])),_:1})])):C("",!0)]),!0)])),_:3},8,["accept","headers","multiple","disabled"])]),V(L(l),q({modelValue:ve.value,"onUpdate:modelValue":t[0]||(t[0]=e=>ve.value=e)},be.options,{"item-key":"uid",tag:"div",class:"cl-upload__list",onEnd:xe}),{item:$((({element:t,index:l})=>[y.showFileList?(x(),B(u,{key:0,action:"",class:"is-drag",accept:L(ge),"show-file-list":!1,"http-request":e=>we(e,t),"before-upload":e=>{ye(e,t)},headers:L(me),disabled:L(pe)},{default:$((()=>[U(e.$slots,"item",{item:t,index:l},(()=>[S("div",{class:M(["cl-upload__item",[`is-${t.type}`]])},["image"==t.type?(x(),B(c,{key:0,src:t.preload,fit:"cover"},null,8,["src"])):(x(),z(A,{key:1},[S("span",J,O(L(b)(t.preload))+"."+O(L(n)(t.preload)),1),S("span",T,O(L(g)(t.size)),1)],64)),S("div",H,[F(S("span",{onClick:s((e=>function(e){"image"==e.type?(fe.visible=!0,fe.url=e.url):window.open(e.url)}(t)),["stop"])},[V(d,null,{default:$((()=>[V(L(r))])),_:1})],8,Q),[[a,t.url]]),L(pe)?C("",!0):(x(),z("span",{key:0,onClick:s((e=>_e(l)),["stop"])},[V(d,null,{default:$((()=>[V(L(i))])),_:1})],8,W))]),t.progress>0&&t.progress<100?(x(),z("div",X,[V(m,{percentage:t.progress,"show-text":!1},null,8,["percentage"])])):C("",!0),t.error?(x(),z("div",Z,O(t.error),1)):C("",!0)],2)]),!0)])),_:2},1032,["accept","http-request","before-upload","headers","disabled"])):C("",!0)])),_:3},16,["modelValue"])],2)]),V(f,{modelValue:fe.visible,"onUpdate:modelValue":t[1]||(t[1]=e=>fe.visible=e),title:"預覽",width:"500px"},{default:$((()=>[S("img",{style:{width:"100%"},src:fe.url},null,8,ee)])),_:1},8,["modelValue"])],64)}}}),[["__scopeId","data-v-ea501134"]]);export{se as default};
