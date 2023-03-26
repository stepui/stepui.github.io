import{d as U,r as m,v as C,x as X,y as D,o as O,z as Y,c as E,j as R,f as a,A as $,k as w,C as Z,g as W,w as k,i as H,T as tt,B as F,p as et,l as ot,q as J,D as st,E as nt,e as N,G as V,H as it}from"./index-c850ec96.js";function K(c){let{offsetLeft:u,offsetTop:n}=c;if(c.offsetParent){const[p,g]=K(c.offsetParent);u+=p,n+=g}return[u,n]}const lt=c=>(et("data-v-7d02193c"),c=c(),ot(),c),at={class:"guider-content"},rt=lt(()=>a("h1",null,"第一步",-1)),ct={class:"guider-footer flex justify-between w-full"},ut=U({__name:"Guider",props:{current:[HTMLElement,Object,String],options:{required:!0,type:Array},show:Boolean},emits:["close","update:show","update:current"],setup(c,{emit:u}){const n=c,p=m(0),g=C({get(){return n.current&&(p.value=n.options.findIndex(t=>t.target===n.current)),p.value},set(t){const o=n.options[t];o?(p.value=t,u("update:current",o.target)):(p.value=0,u("close"),u("update:current",n.options[0].target),u("update:show",!1))}}),i=m(),b=m(n.show),e=X({width:0,height:0,left:0,top:0,right:0,bottom:0}),y=C(()=>{var o;const t=n.current??((o=n.options[p.value])==null?void 0:o.target);if(t)return typeof t=="string"?document.querySelector(t):t instanceof HTMLElement?t:t.$el}),_=C(()=>{const{offsetWidth:t,offsetHeight:o}=i.value||{offsetWidth:0,offsetHeight:0},{left:l,top:h,right:v,bottom:f,height:x,width:d}=e,s={main:"horizontal",sub:"vertical",horizontal:"left",vertical:"top"};return Math.max(l,v)>=Math.max(h,f)?(s.main="horizontal",s.sub="vertical",s.horizontal=l>v?"left":"right",h+x/2<o/2&&f+x/2>o/2?s.vertical="top":h+x/2>o/2&&f+x/2<o/2?s.vertical="bottom":s.vertical="center"):(s.main="vertical",s.sub="horizontal",s.vertical=h>f?"top":"bottom",l+d/2<t/2&&v+d/2>t/2?s.horizontal="left":l+d/2>t/2&&v+d/2<t/2?s.horizontal="right":s.horizontal="center"),s}),T=C(()=>{var j,A,G,M,P,q;const t={left:0,top:0};if(!n.show||!i.value||!b.value)return t;const{top:o,left:l,right:h,bottom:v,height:f,width:x}=e,d=_.value,s=d[d.main],I=d[d.sub],L=10,Q=(d.main==="horizontal"?(j=i.value)==null?void 0:j.offsetWidth:(A=i.value)==null?void 0:A.offsetHeight)??0;return t[s]=e[s]-Q-L,s==="right"?t.left=l+x+L:s==="bottom"&&(t.top=o+f+L),I==="center"?d.main==="horizontal"?t.top=o+f/2-(((G=i.value)==null?void 0:G.offsetHeight)??0)/2:t.left=l+x/2-(((M=i.value)==null?void 0:M.offsetWidth)??0)/2:t[I]=e[I],t.left===void 0&&(t.left=window.innerWidth-t.right-((P=i.value)==null?void 0:P.offsetWidth)),t.top===void 0&&(t.top=window.innerHeight-t.bottom-((q=i.value)==null?void 0:q.offsetHeight)),t}),z=C(()=>{const t={left:-16,top:-16};if(!n.show||!i.value||!b.value)return t;const o=_.value,l=o[o.main],h=o[o.sub],{offsetHeight:v=0,offsetWidth:f=0}=i.value??{};return l==="left"?t.left=(f??0)-4:l==="top"&&(t.top=(v??0)-4),o.main==="horizontal"&&(h==="center"?t.top=v/2-10:h==="bottom"?t.top=v-e.height/2-10:t.top=e.height/2-10),o.main==="vertical"&&(h==="center"?t.left=f/2-10:h==="right"?t.left=f-e.width/2-10:t.left=e.width/2-10),t});function r(){const t=y.value;if(!t)return;const o=K(t);e.left=o[0],e.top=o[1],e.width=t.offsetWidth,e.height=t.offsetHeight,e.right=window.innerWidth-e.width-e.left,e.bottom=window.innerHeight-e.height-e.top}D(()=>[y.value,n.show],r),D(()=>n.show,t=>{b.value=t},{flush:"post"}),O(()=>{window.addEventListener("resize",r)}),Y(()=>{window.removeEventListener("resize",r)});function S(){g.value+=1}function B(){u("close"),u("update:show",!1)}return(t,o)=>{const l=F;return E(),R(tt,{to:"body"},[a("div",{class:"guider",style:$(`display: ${c.show?"static":"none"}`)},[a("div",{class:"guider-left",style:$(`border-left: ${e.left-2}px solid rgba(0, 0, 0, 0.25);`)},null,4),a("div",{class:"guider-top",style:$(`left: ${e.left-2}px; width: ${e.width+4}px; border-top: ${e.top-2}px solid rgba(0, 0, 0, 0.25);`)},null,4),a("div",{class:"guider-right",style:$(`left: ${e.left+e.width+2}px; background-color: rgba(0, 0, 0, 0.25)`)},null,4),a("div",{class:"guider-bottom",style:$(`left: ${e.left-2}px; width: ${e.width+4}px; top: ${e.top+e.height+2}px`)},null,4),a("div",{ref_key:"doc",ref:i,class:"guider-doc flex flex-col justify-between rounded-md",style:$(`left: ${w(T).left}px;top:${w(T).top}px`)},[a("div",{class:"arrow",style:$(`left: ${w(z).left}px; top: ${w(z).top}px; border-${w(_)[w(_).main]}-color: white`)},null,4),a("div",at,[rt,a("div",null,[Z(t.$slots,"default",{},void 0,!0)])]),a("div",ct,[W(l,{onClick:B},{default:k(()=>[H("关闭")]),_:1}),W(l,{type:"primary",onClick:S},{default:k(()=>[H("下一步")]),_:1})])],4)],4)])}}});const ft=J(ut,[["__scopeId","data-v-7d02193c"]]),dt={class:"test-page"},pt=U({__name:"Test",setup(c){const u=it("personal:edit",z=>console.log("hi, "+z));st().setAuthorities(["personal:edit","personal:remove"]);const p=()=>console.log("say hi");u("jack");const g=m(),i=m(),b=m();let e=[];const y=m(),_=m(!1);function T(){console.log("hello")}return O(()=>{y.value=g.value,e.push({target:g.value,doc:b.value},{target:i.value,doc:b.value})}),(z,r)=>{const S=F,B=nt("auth");return E(),N("div",dt,[a("div",null,[V((E(),R(S,{onClick:r[0]||(r[0]=t=>_.value=!0)},{default:k(()=>[H("新手引导1")]),_:1})),[[B,"personal:edit"]]),W(S,{class:"btn1",ref_key:"btn1",ref:g,type:"primary",onClick:r[1]||(r[1]=t=>y.value=i.value)},{default:k(()=>[H("button 1")]),_:1},512),W(S,{class:"btn2",ref_key:"btn2",ref:i,type:"primary",onClick:r[2]||(r[2]=t=>y.value=g.value)},{default:k(()=>[H("button 2")]),_:1},512),V((E(),N("span",{onClick:p,class:"ml-40 p-2"},[H("test")])),[[B,"hello"]])]),W(w(ft),{current:y.value,options:w(e),show:_.value,"onUpdate:show":r[3]||(r[3]=t=>_.value=t)},{default:k(()=>[a("div",{ref_key:"doc",ref:b,onClick:T},"功能指引",512)]),_:1},8,["current","options","show"])])}}});const vt=J(pt,[["__scopeId","data-v-a876ded5"]]);export{vt as default};
//# sourceMappingURL=Test-4b1fbc25.js.map
