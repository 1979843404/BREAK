import{_ as e}from"./index-Scp0eJmA.js";/* empty css                        */import{B as t}from"./BREAK-BdPse9W9.js";import{s as a,e as i,l,t as s}from"./element-plus-atOn5eVu.js";import{d as r,q as o,t as d,Z as p,l as u,W as n,u as b,a7 as m,F as f,m as c,ah as v,ak as h,al as y}from"./vue-n1z6Fgex.js";import"./vue-router-Nb642-En.js";import"./vue-i18n-kmt_8FQk.js";const _={class:"aLogo"},w=["src"],g=["href"],A=["href"],K={class:"commit-new-provider"},$={href:"https://github.com/JDArmy/BREAK/issues",target:"_blank"},j=(e=>(h("data-v-f08a7737"),e=e(),y(),e))((()=>d("div",null,"参考：src/BREAK/ability-providers/AP****.json 文件格式。",-1))),B=e(r({__name:"AbilityProvidersView",setup(e){let r=Object.keys(t.abilityProviders).map((e=>({apKey:e,...t.abilityProviders[e]}))),h=()=>window.innerHeight;return(e,t)=>{const y=s,B=a;return c(),o(f,null,[d("h3",null,p(e.$t("abilityProviders")),1),u(B,{height:b(h)()-200,data:b(r),border:"",stripe:""},{default:n((()=>[u(y,{prop:"logo",width:"150",label:e.$t("logo")},{default:n((e=>[d("div",_,[d("img",{src:e.row.logoBase64},null,8,w)])])),_:1},8,["label"]),u(y,{prop:"title",width:"120",label:e.$t("title")},{default:n((t=>[d("a",{href:t.row.site,target:"_blank"},[u(b(i),null,{default:n((()=>[u(b(l))])),_:1}),m(p(t.row.apKey?e.$t(`BREAK.abilityProviders.${t.row.apKey}.title`):""),1)],8,g)])),_:1},8,["label"]),u(y,{prop:"abilities",label:e.$t("supportAbilities")},{default:n((t=>[(c(!0),o(f,null,v(t.row.abilities,((t,a)=>(c(),o("span",{class:"provider-abilities",key:a},[d("a",{href:t.url,target:"_blank"},[u(b(i),null,{default:n((()=>[u(b(l))])),_:1}),m(p(e.$t(`BREAK.avoidances.${a}.title`)),1)],8,A)])))),128))])),_:1},8,["label"]),u(y,{prop:"description",label:e.$t("description")},{default:n((t=>[m(p(t.row.apKey?e.$t(`BREAK.abilityProviders.${t.row.apKey}.description`):""),1)])),_:1},8,["label"])])),_:1},8,["height","data"]),d("div",K,[m(p(e.$t("commitNewProvider"))+": ",1),d("a",$,[u(b(i),null,{default:n((()=>[u(b(l))])),_:1}),m("https://github.com/JDArmy/BREAK/issues ")]),j])],64)}}}),[["__scopeId","data-v-f08a7737"]]);export{B as default};