import{l as e,v as a,w as s}from"./@vue.runtime-dom-90e9fdb1.js";import{u as t,i as l,m as o,k as r,l as i}from"./index-30f14e36.js";import{J as d,u,P as p}from"./@element-plus.icons-vue-26cbeb7a.js";import{d as n}from"./dayjs-dd470533.js";import{D as c}from"./vuedraggable-4149a334.js";import{f as m,a as f,b as g}from"./index-3c195693.js";import"./vue-echarts-f79e68f9.js";import{a as b}from"./element-plus-ad41b746.js";import{u as v}from"./index-219fe374.js";import{j as h,v as y}from"./lodash-es-a085e596.js";import{d as j,q as _,t as w,p as k,R as x,o as z,c as S,a as U,b as V,J as $,E as B,I as C,M as F,G as L,F as A,N as D,K as I}from"./@vue.runtime-core-e50a2272.js";import{e as R,h as q,u as O}from"./@vue.reactivity-da630c06.js";import{o as P,L as M}from"./@vue.shared-5670d8a7.js";import{_ as E}from"./_plugin-vue_export-helper-c4cb8a60.js";import"./store-96e17a43.js";import"./axios-966d6f38.js";import"./nprogress-6d1393d1.js";import"./vue-router-916993ce.js";import"./pinia-bb8d2f73.js";import"./vue-demi-5b9a0fa5.js";import"./@vueuse.core-2fa6d9e6.js";import"./@vueuse.shared-ca6b0f06.js";import"./vue-b5fce9d1.js";import"./mockjs-93ca2bc8.js";import"./mitt-dab1f1cb.js";import"./@popperjs.core-040feab9.js";import"./@ctrl.tinycolor-84ad98d6.js";import"./async-validator-efc2d198.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-da779ce4.js";import"./@floating-ui.dom-9d85c32a.js";import"./@floating-ui.core-c56fb7e8.js";import"./resize-detector-94afada7.js";import"./echarts-6943293a.js";import"./tslib-ed971494.js";import"./zrender-0d232395.js";import"./sortablejs-9236fa87.js";const N={class:"cl-upload__wrap"},Y={class:"cl-upload__header"},K={key:0,class:"cl-upload__item"},G={class:"cl-upload__text"},J={key:1,class:"cl-upload__btn"},T={class:"cl-upload__name"},H={class:"cl-upload__size"},Q={class:"cl-upload__actions"},W=["onClick"],X=["onClick"],Z={key:2,class:"cl-upload__progress"},ee={key:3,class:"cl-upload__error"},ae=["src"],se=j({name:"cl-upload"}),te=E(j({...se,props:{modelValue:{type:[String,Array],default:()=>[]},type:{type:String,default:"image"},accept:String,multiple:Boolean,limit:Number,limitSize:Number,size:[String,Number,Array],text:String,prefixPath:{type:String,default:"app"},showFileList:{type:Boolean,default:!0},drag:Boolean,disabled:Boolean,isEdit:null,scope:null},emits:["update:modelValue","upload","success","error","progress"],setup(j,{expose:E,emit:se}){const te=j;e((e=>({"02d6d6aa":O(ue)[0],"02d6d6c9":O(ue)[1]})));const{service:le}=v(),{user:oe}=t(),re=l.exports.useForm(),{options:ie}=o.get("upload"),de=R(),ue=_((()=>{const e=te.size||ie.size;return(h(e)?e:[e,e]).map((e=>y(e)?e+"px":e))})),pe=_((()=>{var e;return(null==(e=re.value)?void 0:e.disabled)||te.disabled})),ne=te.limit||ie.limit.upload,ce=te.limitSize||ie.limit.size,me=te.text||ie.text,fe=_((()=>({Authorization:oe.token}))),ge=q({visible:!1,url:""}),be=R([]),ve=q({options:{group:"Upload",animation:300,ghostClass:"Ghost",dragClass:"Drag",draggable:".is-drag",disabled:!te.drag}}),he=_((()=>te.accept||("file"==te.type?"*":"image/*"))),ye=_((()=>te.multiple?ne-be.value.length>0:0==be.value.length));function je(e){return"image"==te.type?"image":m(e).value}R(null);async function _e(e,a){if(e.size/1024/1024>=ce)return b.error(`上傳文件大小不能超過 ${ce}MB!`),!1;const s={type:je(e.name),preload:"",progress:0,url:"",uid:e.uid,size:e.size};return s.preload="image"==s.type?window.webkitURL.createObjectURL(e):e.name,a?Object.assign(a,s):ye.value?be.value.push(s):be.value=[s],se("upload",s),!0}function we(e){be.value.splice(e,1),Se()}function ke(){be.value=[]}async function xe(e,a){const s=e.file,t=1024,l=1024,o=s.size/1024/1024;if(a||(a=be.value.find((a=>a.uid==e.file.uid))),o<1)ze(s,a);else{const e=new FileReader;e.onload=e=>{const o=new Image;o.onload=()=>{const e=document.createElement("canvas"),r=e.getContext("2d");let i=o.width,d=o.height;i>d?i>t&&(d*=t/i,i=t):d>l&&(i*=l/d,d=l),e.width=i,e.height=d,r.drawImage(o,0,0,i,d),e.toBlob((async e=>{const t=URL.createObjectURL(e),l=await async function(e,a){try{const s=await fetch(e),t=await s.blob();return new File([t],a,{type:t.type})}catch(s){return null}}(t,s.name);ze(l,a)}),s.type)},o.src=e.target.result},e.readAsDataURL(s)}}async function ze(e,a){try{let s=r();const{mode:t,type:l}=await le.base.comm.uploadMode();return new Promise(((o,r)=>{async function i({host:l,preview:i,data:d}){const u=new FormData;for(const e in d)u.append(e,d[e]);"cloud"==t&&(s=[te.prefixPath,n().format("YYYY-MM-DD"),s].filter(Boolean).join("/")),u.append("key",s),u.append("file",e),await le.request({url:l,method:"POST",headers:{"Content-Type":"multipart/form-data"},timeout:6e5,data:u,onUploadProgress(e){a.progress=parseInt(String(e.loaded/e.total*100)),se("progress",a)},proxy:"local"==t}).then((e=>{a.url="local"===t?e:`${i||l}/${s}`,se("success",a),o(a.url),Se()})).catch((e=>{b.error(e.message),a.error=e.message,se("error",a),r(e)}))}"local"==t?i({host:"/admin/base/comm/upload"}):le.base.comm.upload().then((e=>{switch(l){case"cos":i({host:e.url,data:e.credentials});break;case"oss":i({host:e.host,data:{OSSAccessKeyId:e.OSSAccessKeyId,policy:e.policy,signature:e.signature}});break;case"qiniu":i({host:e.uploadUrl,preview:e.publicDomain,data:{token:e.token}})}})).catch(r)}))}catch(s){b.error("上傳配置錯誤")}}function Se(){be.value.find((e=>!e.url))||se("update:modelValue",be.value.map((e=>e.url)).join(","))}return w((()=>{})),k((()=>te.modelValue),(e=>{const a=(h(e)?e:(e||"").split(",")).filter(Boolean);be.value=a.map((e=>{const a=be.value.find((a=>e==a.url));return a||{type:je(e),progress:0,uid:r(),url:e,preload:e}})).filter(((e,a)=>!!te.multiple||0==a))}),{immediate:!0}),E({isAdd:ye,list:be,check:function(){return be.value.find((e=>100!=e.progress))},clear:ke,remove:we,upload(e){ke(),de.value.clearFiles(),de.value.handleStart(e),de.value.submit()}}),(e,t)=>{const l=x("el-icon"),o=x("el-button"),r=x("el-upload"),n=x("el-image"),m=x("el-progress"),b=x("cl-dialog");return z(),S(A,null,[U("div",N,[U("div",{class:P(["cl-upload",[`cl-upload--${j.type}`,{"is-slot":e.$slots.default,"is-custom":e.$slots.item,"is-disabled":O(pe)}]])},[U("div",Y,[V(r,{ref_key:"Upload",ref:de,action:"",accept:O(he),"show-file-list":!1,"before-upload":_e,"http-request":xe,headers:O(fe),multiple:j.multiple,disabled:O(pe)},{default:$((()=>[B(e.$slots,"default",{},(()=>["image"==j.type&&O(ye)?(z(),S("div",K,[V(l,{size:24},{default:$((()=>[V(O(d))])),_:1}),U("span",G,M(O(me)),1)])):F("",!0),"file"==j.type?(z(),S("div",J,[V(o,{type:"success"},{default:$((()=>[D(M(O(me)),1)])),_:1})])):F("",!0)]),!0)])),_:3},8,["accept","headers","multiple","disabled"])]),V(O(c),L({modelValue:be.value,"onUpdate:modelValue":t[0]||(t[0]=e=>be.value=e)},ve.options,{"item-key":"uid",tag:"div",class:"cl-upload__list",onEnd:Se}),{item:$((({element:t,index:o})=>[j.showFileList?(z(),C(r,{key:0,action:"",class:"is-drag",accept:O(he),"show-file-list":!1,"http-request":e=>xe(e,t),"before-upload":e=>{_e(e,t)},headers:O(fe),disabled:O(pe)},{default:$((()=>[B(e.$slots,"item",{item:t,index:o},(()=>[U("div",{class:P(["cl-upload__item",[`is-${t.type}`]])},["image"==t.type?(z(),C(n,{key:0,src:t.preload,fit:"cover"},null,8,["src"])):(z(),S(A,{key:1},[U("span",T,M(O(f)(t.preload))+"."+M(O(i)(t.preload)),1),U("span",H,M(O(g)(t.size)),1)],64)),U("div",Q,[I(U("span",{onClick:s((e=>function(e){"image"==e.type?(ge.visible=!0,ge.url=e.url):window.open(e.url)}(t)),["stop"])},[V(l,null,{default:$((()=>[V(O(u))])),_:1})],8,W),[[a,t.url]]),O(pe)?F("",!0):(z(),S("span",{key:0,onClick:s((e=>we(o)),["stop"])},[V(l,null,{default:$((()=>[V(O(p))])),_:1})],8,X))]),t.progress>0&&t.progress<100?(z(),S("div",Z,[V(m,{percentage:t.progress,"show-text":!1},null,8,["percentage"])])):F("",!0),t.error?(z(),S("div",ee,M(t.error),1)):F("",!0)],2)]),!0)])),_:2},1032,["accept","http-request","before-upload","headers","disabled"])):F("",!0)])),_:3},16,["modelValue"])],2)]),V(b,{modelValue:ge.visible,"onUpdate:modelValue":t[1]||(t[1]=e=>ge.visible=e),title:"預覽",width:"500px"},{default:$((()=>[U("img",{style:{width:"100%"},src:ge.url},null,8,ae)])),_:1},8,["modelValue"])],64)}}}),[["__scopeId","data-v-c96eb64b"]]);export{te as default};
