import{B as _,a as v}from"./index.154dd2a5.js";/* empty css                        */import{k as y,l as w}from"./element-plus.b5b7f798.js";import{d as g,l as d,m as a,W as i,U as r,S as s,u as A,a5 as c,P as b,k as p,ad as $,ai as B,aj as E}from"./vue.b4a71da1.js";import"./vue-router.f4f73926.js";import"./vue-i18n.cf8f6641.js";const P=l=>(B("data-v-a3d76af2"),l=l(),E(),l),K={class:"logo"},k=["src"],V=["href"],R={class:"provider-abilities"},S=["href"],I={class:"commit-new-provider"},N=P(()=>a("a",{href:"https://github.com/JDArmy/BREAK/issues",target:"_blank"}," https://github.com/JDArmy/BREAK/issues ",-1)),C=g({__name:"AbilityProvidersView",setup(l){let n=Array();return Object.keys(_.abilityProviders).forEach(e=>{let o={..._.abilityProviders[e],apKey:e};n.push(o)}),(e,u)=>{const o=y,m=w;return p(),d(b,null,[a("h3",null,i(e.$t("abilityProviders")),1),r(m,{data:A(n),border:"",stripe:""},{default:s(()=>[r(o,{prop:"logo",width:"150",label:e.$t("logo")},{default:s(t=>[a("div",K,[a("img",{src:t.row.logo},null,8,k)])]),_:1},8,["label"]),r(o,{prop:"title",width:"120",label:e.$t("title")},{default:s(t=>[a("a",{href:t.row.site,target:"_blank"},i(t.row.apKey?e.$t(`BREAK.abilityProviders.${t.row.apKey}.title`):""),9,V)]),_:1},8,["label"]),r(o,{prop:"abilities",label:e.$t("supportAbilities")},{default:s(t=>[(p(!0),d(b,null,$(t.row.abilities,(h,f)=>(p(),d("span",R,[a("a",{href:h.url,target:"_blank"},i(e.$t(`BREAK.avoidances.${f}.title`)),9,S)]))),256))]),_:1},8,["label"]),r(o,{prop:"description",label:e.$t("description")},{default:s(t=>[c(i(t.row.apKey?e.$t(`BREAK.abilityProviders.${t.row.apKey}.description`):""),1)]),_:1},8,["label"])]),_:1},8,["data"]),a("div",I,[c(i(e.$t("commitNewProvider"))+": ",1),N])],64)}}});const O=v(C,[["__scopeId","data-v-a3d76af2"]]);export{O as default};