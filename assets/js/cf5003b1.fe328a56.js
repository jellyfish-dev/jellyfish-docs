"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[313],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(m,s(s({ref:t},f),{},{components:n})):r.createElement(m,s({ref:t},f))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={},s="Notifications",a={unversionedId:"getting_started/notifications",id:"getting_started/notifications",title:"Notifications",description:"Jellyfish sends server side notifications whenever some important event occurs, e.g.:",source:"@site/docs/getting_started/notifications.md",sourceDirName:"getting_started",slug:"/getting_started/notifications",permalink:"/jellyfish-docs/getting_started/notifications",draft:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/docs/getting_started/notifications.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Authentication",permalink:"/jellyfish-docs/getting_started/authentication"},next:{title:"Metrics",permalink:"/jellyfish-docs/getting_started/metrics"}},c={},l=[],f={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"notifications"},"Notifications"),(0,i.kt)("p",null,"Jellyfish sends server side notifications whenever some important event occurs, e.g.:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a room has been created"),(0,i.kt)("li",{parentName:"ul"},"some peer has connected"),(0,i.kt)("li",{parentName:"ul"},"component has crashed"),(0,i.kt)("li",{parentName:"ul"},"etc.")),(0,i.kt)("p",null,"A full list of available notifications is always present in specific server SDK documentation.\nHere, we present how you can subscribe for server side notifications using Elixir Server SDK:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'server_address = "localhost:5002"\nserver_api_token = "development"\n\n{:ok, notifier} =\n  Jellyfish.Notifier.start(server_address: server_address, server_api_token: server_api_token)\n\n:ok = Jellyfish.Notifier.subscribe_server_notifications(notifier)\n:ok = Jellyfish.Notifier.subscribe_metrics(notifier)\n')),(0,i.kt)("p",null,"As a result, you should see the following logs on the server side"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"07:45:02.684 [info] New incoming server WebSocket connection, accepting\n07:45:02.688 [info] Server WS authenticated.\n")))}u.isMDXComponent=!0}}]);