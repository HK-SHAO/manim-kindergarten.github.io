import{_ as h}from"./PureCard.c34623ac.js";import{d as f,a as _,o as n,m as p,w as r,e as t,c as a,l as d,f as c,t as s,n as y,F as u,p as k}from"./app.66841b5c.js";const b={flex:""},v=["href","title"],g={"display-none":"","sm:block":"","mr-1":""},x={"p-4":"","bg-zinc-50":"","dark:bg-zinc-900":""},w={key:0,"p-4":""},C=["href"],V=f({__name:"Card",props:{title:null,description:null,action:null,previous:null,delay:null},setup(l){const{t:o}=_();return(B,z)=>{const m=h;return n(),p(m,{title:l.title,delay:l.delay,ma:""},{"header-extra":r(()=>[t("div",b,[(n(!0),a(u,null,d(l.action,(e,i)=>(n(),a("a",{key:i,flex:"",btn:"","text-sm":"","ml-2":"",href:e.url,title:c(o)(e.label)},[t("div",g,s(c(o)(e.label)),1),t("div",{class:y(e.icon)},null,2)],8,v))),128))])]),footer:r(()=>[l.previous?(n(),a("details",w,[t("summary",null,s(c(o)("docs.previous")),1),t("ul",null,[(n(!0),a(u,null,d(l.previous,(e,i)=>(n(),a("li",{key:i,"ml-4":""},[t("a",{href:e.link,underline:"","hover:color-teal-600":""},s(e.label),9,C)]))),128))])])):k("",!0)]),default:r(()=>[t("p",x,s(l.description),1)]),_:1},8,["title","delay"])}}}),j="https://fastly.jsdelivr.net/gh/widcardw/manim-kindergarten.github.io@master/public";export{V as _,j as d};