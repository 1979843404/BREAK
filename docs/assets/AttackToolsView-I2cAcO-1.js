import{A as a,R as e,_ as l}from"./index-O35wuDGn.js";/* empty css                        *//* empty css                    */import{B as t}from"./BREAK-Ye_sezs9.js";import{u as s,n as r,v as o,e as n,o as i}from"./element-plus-svN-En_q.js";import{a as u}from"./vue-router-Nb642-En.js";import{d,b as c,q as p,t as k,Z as m,l as w,W as f,u as h,F as b,m as v,a7 as y,ah as K,V as _}from"./vue-n1z6Fgex.js";import"./relation-graph-zKQxcUJx.js";import"./vue-i18n-kmt_8FQk.js";const $=["id"],j=["href"],A=l(d({__name:"AttackToolsView",setup(l){const d=u(),A=c(!1),C=c(""),g=Object.keys(t.attackTools).map((a=>({atKey:a,...t.attackTools[a]}))),B=c(!1),R=c(""),T=({row:a})=>d.hash.split("#")[1]===a.atKey?"anchor-row":"";return(l,t)=>{const u=o,c=n,E=i,x=s;return v(),p(b,null,[k("h3",null,m(l.$t("attackTools")),1),w(x,{height:d.hash.split("#")[1]?"unset":window.innerHeight-200,"scrollbar-always-on":!0,data:h(g),"row-class-name":T,border:"",stripe:""},{default:f((()=>[w(u,{prop:"atKey",label:"ID",width:120},{default:f((a=>[k("a",{id:a.row.atKey,class:"attack-tool-anchor"},null,8,$),y(" "+m(a.row.atKey),1)])),_:1}),w(u,{prop:"title",label:l.$t("title"),width:150},null,8,["label"]),w(u,{prop:"description",label:l.$t("description")},null,8,["label"]),w(u,{label:l.$t("references"),width:300},{default:f((a=>[k("ul",null,[(v(!0),p(b,null,K(a.row.references,((e,t)=>(v(),p("li",{key:t},[k("a",{href:e.link,target:"_blank"},[w(c,null,{default:f((()=>[w(h(r))])),_:1}),y(m(l.$t(`BREAK.attackTools.${a.row.atKey}.references[${t}].title`)),1)],8,j)])))),128))])])),_:1},8,["label"]),w(u,{label:l.$t("risk")},{default:f((a=>[(v(!0),p(b,null,K(a.row.risks,(a=>(v(),_(E,{size:"small",key:a,onClick:e=>(R.value=a)&&(B.value=!0),class:"relational-link",round:""},{default:f((()=>[y(m(a+": "+l.$t(`BREAK.risks.${a}.title`)),1)])),_:2},1032,["onClick"])))),128))])),_:1},8,["label"]),w(u,{label:l.$t("avoidance")},{default:f((a=>[(v(!0),p(b,null,K(a.row.avoidances,(a=>(v(),_(E,{size:"small",key:a,class:"relational-link",onClick:e=>{C.value=a,A.value=!0},round:""},{default:f((()=>[y(m(a+": "+l.$t(`BREAK.avoidances.${a}.title`)),1)])),_:2},1032,["onClick"])))),128))])),_:1},8,["label"])])),_:1},8,["height","data"]),w(a,{onDrawerClose:t[0]||(t[0]=a=>A.value=!1),drawer:A.value,aKey:C.value},null,8,["drawer","aKey"]),w(e,{onDrawerClose:t[1]||(t[1]=a=>(B.value=!1)&&(R.value="")),drawer:B.value,rKey:R.value},null,8,["drawer","rKey"])],64)}}}),[["__scopeId","data-v-67b6e41d"]]);export{A as default};
