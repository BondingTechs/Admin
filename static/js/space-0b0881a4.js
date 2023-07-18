import{S as e,$ as a,m as l,a0 as s}from"./@element-plus.icons-vue-26cbeb7a.js";import{u as o,i,l as t,m as c}from"./index-3566ab55.js";import"./vue-echarts-f79e68f9.js";import{a as n,b as r}from"./element-plus-ad41b746.js";import"./store-96e17a43.js";import{u as p}from"./index-29a77919.js";import{w as u,v as d}from"./@vue.runtime-dom-90e9fdb1.js";import{k as m}from"./lodash-es-a085e596.js";import{d as f,y as v,q as b,e as g,R as y,o as _,c as h,a as j,b as k,J as x,N as w,F as C,V,I as z,M as I,K as M,p as S,Y as B,E as D,z as E}from"./@vue.runtime-core-e50a2272.js";import{e as U,u as $,h as F}from"./@vue.reactivity-da630c06.js";import{o as O,L as q,p as N}from"./@vue.shared-5670d8a7.js";import{_ as R}from"./_plugin-vue_export-helper-c4cb8a60.js";import{a as T,f as J}from"./index-6625ff1f.js";import{h as K}from"./@vueuse.core-2fa6d9e6.js";import"./axios-966d6f38.js";import"./nprogress-6d1393d1.js";import"./vue-router-916993ce.js";import"./pinia-bb8d2f73.js";import"./vue-demi-5b9a0fa5.js";import"./vue-b5fce9d1.js";import"./mockjs-93ca2bc8.js";import"./mitt-dab1f1cb.js";import"./@vueuse.shared-ca6b0f06.js";import"./@popperjs.core-040feab9.js";import"./@ctrl.tinycolor-84ad98d6.js";import"./dayjs-dd470533.js";import"./async-validator-efc2d198.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-da779ce4.js";import"./@floating-ui.dom-9d85c32a.js";import"./@floating-ui.core-c56fb7e8.js";import"./resize-detector-94afada7.js";import"./echarts-6943293a.js";import"./tslib-ed971494.js";import"./zrender-0d232395.js";const L={class:"cl-upload-space-category__search"},Y={class:"cl-upload-space-category__list"},A=["onClick","onContextmenu"],G=f({name:"undefined"}),H=R(f({...G,setup(a){const{service:l}=p(),{app:s}=o(),t=v("space"),c=U([]),f=U(""),S=b((()=>c.value.filter((e=>e.name.includes(f.value)))));async function B(){return l.space.type.list().then((e=>{e.unshift({name:"全部文件",id:null}),c.value=e,m(e)||t.category.id||(t.category.id=e[0].id)}))}const D=i.exports.useForm();function E(e={}){var a;null==(a=D.value)||a.open({title:"添加分類",width:"400px",items:[{label:"分類名稱",prop:"name",value:"",required:!0,component:{name:"el-input"}}],form:{...e},on:{submit(a,{done:s,close:o}){let i=null;i=e.id?l.space.type.update({...a,id:e.id}):l.space.type.add(a),i.then((()=>{B(),o()})).catch((e=>{n.error(e.message),s()}))}}})}return g((()=>{B()})),(a,o)=>{const c=y("el-input"),p=y("el-button"),m=y("el-icon"),v=y("el-empty"),b=y("el-scrollbar"),g=y("cl-form");return _(),h(C,null,[j("div",{class:O(["cl-upload-space-category",{"is-position":$(s).browser.isMini,"is-show":$(t).category.visible}])},[j("div",L,[k(c,{modelValue:f.value,"onUpdate:modelValue":o[0]||(o[0]=e=>f.value=e),placeholder:"搜尋",clearable:""},null,8,["modelValue"]),k(p,{type:"success",onClick:o[1]||(o[1]=e=>E())},{default:x((()=>[w("添加")])),_:1})]),j("div",Y,[k(b,null,{default:x((()=>[j("ul",null,[(_(!0),h(C,null,V($(S),((a,o)=>(_(),h("li",{key:o,class:O(["item",{"is-active":a.id==$(t).category.id}]),onClick:e=>{return l=a.id,s.browser.isMini&&(t.category.visible=!1),t.category.id=l,void t.refresh({page:1});var l},onContextmenu:u((e=>function(e,{id:a,name:s}){if(!a)return!1;i.exports.ContextMenu.open(e,{hover:{target:"item"},list:[{label:"刷新",callback(e){B(),e()}},{label:"編輯",callback(e){E({id:a,name:s}),e()}},{label:"刪除",callback(e){r.confirm(`此操作將刪除【${s}】下的文件, 是否繼續?`,"提示",{type:"warning"}).then((()=>{l.space.type.delete({ids:[a]}).then((()=>{n.success("刪除成功"),a==t.category.id&&(t.category.id=null),B()})).catch((e=>{n.error(e.message)}))})).catch((()=>null)),e()}}]})}(e,a)),["stop","prevent"])},[j("span",null,q(a.name),1),M(k(m,null,{default:x((()=>[k($(e))])),_:2},1536),[[d,$(t).category.id==a.id]])],42,A)))),128)),0==$(S).length?(_(),z(v,{key:0,"image-size":80})):I("",!0)])])),_:1})])],2),k(g,{ref_key:"Form",ref:D},null,512)],64)}}}),[["__scopeId","data-v-42a291f3"]]),P={class:"cl-upload-space-file__wrap"},Q=["onContextmenu"],W={key:0,class:"cl-upload-space-file__error"},X={class:"image-error"},Z={key:1,class:"cl-upload-space-file__name"},ee={key:2,class:"cl-upload-space-file__progress"},ae={key:2,class:"cl-upload-space-file__mask"},le=f({name:"undefined"}),se=R(f({...le,props:{data:Object},emits:["select","remove"],setup(e,{emit:a}){const l=e,{copy:s}=K(),o=v("space"),c=b((()=>l.data||{})),r=b((()=>o.selection.value.findIndex((e=>e.id===c.value.id)))),p=b((()=>r.value>=0)),d=b((()=>c.value.preload||c.value.url)),m=b((()=>J(c.value.url)));function f(){a("select",c.value)}function g(e){i.exports.ContextMenu.open(e,{hover:{target:"cl-upload-space-file__wrap"},list:[{label:"預覽",callback(e){window.open(c.value.url),e()}},{label:"複製地址",callback(e){s(c.value.url),n.success("複製成功"),e()}},{label:p.value?"取消選中":"選中",callback(e){f(),e()}},{label:"刪除",callback(e){a("remove",c.value),e()}}]})}return(e,a)=>{const l=y("el-image"),s=y("el-progress");return _(),h("div",P,[j("div",{class:O(["cl-upload-space-file",[`is-${$(c).type}`]]),onClick:f,onContextmenu:u(g,["stop","prevent"])},[$(c).error?(_(),h("div",W,"上傳失敗："+q($(c).error),1)):(_(),h(C,{key:1},["image"===$(c).type?(_(),z(l,{key:0,fit:"contain",src:$(d),lazy:""},{error:x((()=>[j("div",X,[j("span",null,q($(d)),1)])])),_:1},8,["src"])):(_(),h("span",Z,q($(T)($(d)))+"."+q($(t)($(d))),1)),j("span",{class:"cl-upload-space-file__type",style:N({backgroundColor:$(m).color})},q($(m).label),5),$(c).progress>0&&$(c).progress<100?(_(),h("div",ee,[k(s,{percentage:$(c).progress,"show-text":!1},null,8,["percentage"])])):I("",!0)],64)),$(p)?(_(),h("div",ae,[j("span",null,q($(r)+1),1)])):I("",!0)],42,Q)])}}}),[["__scopeId","data-v-fe8ae329"]]),oe={class:"cl-upload-space__wrap"},ie={class:"cl-upload-space__content"},te={class:"cl-upload-space__header scroller1"},ce={style:{margin:"0px 10px"}},ne={class:"cl-upload-space__file scroller1"},re={key:0,class:"cl-upload-space__file-list"},pe={key:1,class:"cl-upload-space__file-empty"},ue=j("p",null,"將文件拖到此处，或点击按钮上传",-1),de={class:"cl-dialog__controls-icon"},me=f({name:"cl-upload-space"}),fe=f({...me,props:{modelValue:String,limit:Number,disabled:Boolean,accept:String,showBtn:{type:Boolean,default:!0}},emits:["update:modelValue","confirm"],setup(e,{expose:i,emit:t}){var u;const d=e,{service:f}=p(),{app:v}=o(),{options:N}=c.get("upload"),R=U(),T=d.limit||(null==(u=N.limit)?void 0:u.select),J=U(!1),K=U(!1),L=U([]),Y=U([]),A=F({id:null,visible:!0}),G=F({page:1,size:20,total:0});S((()=>v.browser.isMini),(e=>{A.visible=!e}),{immediate:!0});const P=b((()=>!m(L.value)));function Q(){J.value=!0}function W(){L.value=[]}function X(){J.value=!1,W()}function Z(e){f.space.info.add({classifyId:A.id,...e}).then((a=>{e.id=a.id})).catch((e=>{n.error(e.message)}))}function ee(e){Y.value.unshift(e)}const ae={page:1};async function le(e={}){var a;W(),Object.assign(ae,{type:null==(a=d.accept)?void 0:a.split("/")[0],...G,...e,classifyId:A.id}),1==ae.page&&(K.value=!0),await f.space.info.page(ae).then((e=>{Object.assign(G,e.pagination),1==ae.page&&(Y.value=[]),Y.value.push(...e.list)})),K.value=!1}function me(e){const a=L.value.findIndex((a=>a.id===e.id));a>=0?L.value.splice(a,1):L.value.length<T&&L.value.push(e)}function fe(e){const a=e?[e.id]:L.value.map((e=>e.id));r.confirm("此操作將刪除文件, 是否繼續?","提示",{type:"warning"}).then((()=>{n.success("刪除成功"),a.forEach((e=>{[Y.value,L.value].forEach((a=>{const l=a.findIndex((a=>a.id===e));a.splice(l,1)}))})),f.space.info.delete({ids:a}).catch((e=>{n.error(e.message)}))})).catch((()=>null))}function ve(e){e.preventDefault()}function be(e){e.preventDefault(),e.dataTransfer.files.forEach(((e,a)=>{setTimeout((()=>{R.value.upload(e)}),10*a)}))}function ge(){Y.value.length&&Y.value.length<G.total&&le({page:G.page+1})}return E("space",{category:A,selection:L,refresh:le,loading:K}),g((()=>{le()})),i({open:Q,close:X,clear:W,refresh:le}),(o,i)=>{const c=y("el-button"),n=y("cl-upload"),r=y("el-icon"),p=y("cl-dialog"),u=B("infinite-scroll"),d=B("loading");return _(),h("div",oe,[D(o.$slots,"default",{},(()=>[e.showBtn?(_(),z(c,{key:0,onClick:Q},{default:x((()=>[w("點擊上傳")])),_:1})):I("",!0)])),k(p,{modelValue:J.value,"onUpdate:modelValue":i[5]||(i[5]=e=>J.value=e),title:"文件空间",height:"650px",width:"1080px","keep-alive":"","custom-class":"cl-upload-space__dialog","close-on-click-modal":!1,"append-to-body":"",controls:["slot-expand","cl-flex1","fullscreen","close"]},{"slot-expand":x((()=>[j("button",de,[A.visible?(_(),z(r,{key:0,onClick:i[3]||(i[3]=e=>A.visible=!1)},{default:x((()=>[k($(a))])),_:1})):(_(),z(r,{key:1,onClick:i[4]||(i[4]=e=>A.visible=!0)},{default:x((()=>[k($(l))])),_:1}))])])),default:x((()=>[j("div",{class:O(["cl-upload-space",{"is-mini":$(v).browser.isMini}]),onDragover:ve,onDrop:be},[k(H),j("div",ie,[j("div",te,[k(c,{onClick:i[0]||(i[0]=e=>le({page:1}))},{default:x((()=>[w("刷新")])),_:1}),j("div",ce,[k(n,{ref_key:"Upload",ref:R,type:"file","show-file-list":!1,disabled:e.disabled,limit:9999,accept:e.accept,multiple:"",onSuccess:Z,onUpload:ee},{default:x((()=>[k(c,{type:"primary"},{default:x((()=>[w("點擊上傳")])),_:1})])),_:1},8,["disabled","accept"])]),k(c,{type:"success",disabled:!$(P),onClick:i[1]||(i[1]=e=>(t("update:modelValue",L.value.map((e=>e.url)).join(",")),t("confirm",L.value),void X()))},{default:x((()=>[w("使用選中文件 "+q(L.value.length)+"/"+q($(T)),1)])),_:1},8,["disabled"]),k(c,{type:"danger",disabled:!$(P),onClick:i[2]||(i[2]=e=>fe())},{default:x((()=>[w("刪除選中文件")])),_:1},8,["disabled"])]),M((_(),h("div",ne,[Y.value.length>0?(_(),h("div",re,[(_(!0),h(C,null,V(Y.value,(e=>(_(),h("div",{class:"cl-upload-space__file-item",key:e.preload||e.url},[k(se,{data:e,onSelect:me,onRemove:fe},null,8,["data"])])))),128))])):(_(),h("div",pe,[k(r,{class:"el-icon--upload"},{default:x((()=>[k($(s))])),_:1}),ue]))])),[[u,ge],[d,K.value]])])],34)])),_:1},8,["modelValue"])])}}});export{fe as default};
