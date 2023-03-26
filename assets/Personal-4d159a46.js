import{d as j,O as w,P,Q as U,g as e,R as k,S as N,U as J,V as K,W as F,X as q,Y as H,Z as L,$ as D,a0 as V,a1 as Q,r as X,c as Y,e as Z,f as I,w as g,K as z,a2 as G,a3 as ee,p as ae,l as te,i as C,a4 as re,q as ne}from"./index-c850ec96.js";import{_ as se}from"./face-1-f916127c.js";import oe from"./Conversation-e466143b.js";import le from"./PlatformSetting-72fd40a1.js";import ce from"./ProfileInfo-32b45201.js";import ue from"./Projects-3b73b001.js";import"./index-e9ef0489.js";import"./index-9f4fd89c.js";import"./EditableCell-b0e9ca50.js";import"./AvatarList-d02a3e9e.js";import"./useBreakpoint-6ad1bd68.js";import"./eagerComputed-9296d99b.js";var ie=["class","style"],de=function(){return{prefixCls:String,href:String,separator:N.any,overlay:N.any,onClick:Function}};const R=j({compatConfig:{MODE:3},name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:de(),slots:["separator","overlay"],setup:function(a,d){var n=d.slots,s=d.attrs,m=w("breadcrumb",a),o=m.prefixCls,_=function(p,l){var r=P(n,a,"overlay");return r?e(K,{overlay:r,placement:"bottom"},{default:function(){return[e("span",{class:"".concat(l,"-overlay-link")},[p,e(J,null,null)])]}}):p};return function(){var v,p=(v=P(n,a,"separator"))!==null&&v!==void 0?v:"/",l=P(n,a),r=s.class,u=s.style,c=U(s,ie),i;return a.href!==void 0?i=e("a",k({class:"".concat(o.value,"-link"),onClick:a.onClick},c),[l]):i=e("span",k({class:"".concat(o.value,"-link"),onClick:a.onClick},c),[l]),i=_(i,o.value),l?e("span",{class:r,style:u},[i,p&&e("span",{class:"".concat(o.value,"-separator")},[p])]):null}}});var me=function(){return{prefixCls:String,routes:{type:Array},params:N.any,separator:N.any,itemRender:{type:Function}}};function pe(t,a){if(!t.breadcrumbName)return null;var d=Object.keys(a).join("|"),n=t.breadcrumbName.replace(new RegExp(":(".concat(d,")"),"g"),function(s,m){return a[m]||s});return n}function $(t){var a=t.route,d=t.params,n=t.routes,s=t.paths,m=n.indexOf(a)===n.length-1,o=pe(a,d);return m?e("span",null,[o]):e("a",{href:"#/".concat(s.join("/"))},[o])}const h=j({compatConfig:{MODE:3},name:"ABreadcrumb",props:me(),slots:["separator","itemRender"],setup:function(a,d){var n=d.slots,s=w("breadcrumb",a),m=s.prefixCls,o=s.direction,_=function(r,u){return r=(r||"").replace(/^\//,""),Object.keys(u).forEach(function(c){r=r.replace(":".concat(c),u[c])}),r},v=function(r,u,c){var i=Q(r),b=_(u||"",c);return b&&i.push(b),i},p=function(r){var u=r.routes,c=u===void 0?[]:u,i=r.params,b=i===void 0?{}:i,S=r.separator,x=r.itemRender,A=x===void 0?$:x,B=[];return c.map(function(f){var y=_(f.path,b);y&&B.push(y);var T=[].concat(B),M=null;return f.children&&f.children.length&&(M=e(V,null,{default:function(){return[f.children.map(function(E){return e(V.Item,{key:E.path||E.breadcrumbName},{default:function(){return[A({route:E,params:b,routes:c,paths:v(T,E.path,b)})]}})})]}})),e(R,{overlay:M,separator:S,key:y||f.breadcrumbName},{default:function(){return[A({route:f,params:b,routes:c,paths:T})]}})})};return function(){var l,r,u,c=a.routes,i=a.params,b=i===void 0?{}:i,S=F(P(n,a)),x=(l=P(n,a,"separator"))!==null&&l!==void 0?l:"/",A=a.itemRender||n.itemRender||$;c&&c.length>0?u=p({routes:c,params:b,separator:x,itemRender:A}):S.length&&(u=S.map(function(f,y){return q(H(f.type)==="object"&&(f.type.__ANT_BREADCRUMB_ITEM||f.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),L(f,{separator:x,key:y})}));var B=(r={},D(r,m.value,!0),D(r,"".concat(m.value,"-rtl"),o.value==="rtl"),r);return e("div",{class:B},[u])}}});var fe=["separator","class"],_e=function(){return{prefixCls:String}};const O=j({compatConfig:{MODE:3},name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:_e(),setup:function(a,d){var n=d.slots,s=d.attrs,m=w("breadcrumb",a),o=m.prefixCls;return function(){var _;s.separator;var v=s.class,p=U(s,fe),l=F((_=n.default)===null||_===void 0?void 0:_.call(n));return e("span",k({class:["".concat(o.value,"-separator"),v]},p),[l.length>0?l:"/"])}}});h.Item=R;h.Separator=O;h.install=function(t){return t.component(h.name,h),t.component(R.name,R),t.component(O.name,O),t};const ve=t=>(ae("data-v-9bb2e62a"),t=t(),te(),t),be={class:"personal"},ge={class:"banner w-full rounded-xl p-base items-baseline"},he=ve(()=>I("div",{class:"mt-0.5 text-text-inverse text-xl font-semibold"},"Overview",-1)),xe={class:"profile flex items-center justify-between p-base bg-container rounded-2xl absolute -bottom-16 left-6 shadow-lg"},ye=z('<div class="info flex items-center" data-v-9bb2e62a><img class="w-20 rounded-lg" src="'+se+'" data-v-9bb2e62a><div class="flex flex-col justify-around ml-4" data-v-9bb2e62a><span class="text-title text-xl font-bold" data-v-9bb2e62a>Sarah Jacob</span><span class="text-subtext font-semibold" data-v-9bb2e62a>CEO / Co-Founder</span></div></div>',1),Ce={class:"mt-24 flex justify-evenly"},Pe=j({__name:"Personal",setup(t){const a=X("overview");return(d,n)=>{const s=R,m=h,o=re,_=G,v=ee;return Y(),Z("div",be,[I("div",ge,[e(m,{class:"navi"},{default:g(()=>[e(s,{class:"text-text-inverse"},{default:g(()=>[C("Home")]),_:1}),e(s,null,{default:g(()=>[C("Personal")]),_:1})]),_:1}),he,I("div",xe,[ye,e(_,{value:a.value,"onUpdate:value":n[0]||(n[0]=p=>a.value=p)},{default:g(()=>[e(o,{value:"overview"},{default:g(()=>[C("OVERVIEW")]),_:1}),e(o,{value:"teams"},{default:g(()=>[C("TEAMS")]),_:1}),e(o,{value:"projects"},{default:g(()=>[C("PROJECTS")]),_:1})]),_:1},8,["value"])])]),I("div",Ce,[e(le,{class:"flex-1"}),e(ce,{class:"flex-1 ml-lg"}),e(oe,{class:"flex-1 ml-lg"})]),e(v,{class:"my-10"}),e(ue,{class:"mt-lg"})])}}});const De=ne(Pe,[["__scopeId","data-v-9bb2e62a"]]);export{De as default};
//# sourceMappingURL=Personal-4d159a46.js.map
