"use strict";(self.webpackChunkfishjam_docs=self.webpackChunkfishjam_docs||[]).push([[400],{17273:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=i(74848),s=i(28453);const r={},o="SIP",c={id:"getting_started/components/sip",title:"SIP",description:"Makes a SIP connection with the specified provider.",source:"@site/versioned_docs/version-0.6.3/getting_started/components/sip.md",sourceDirName:"getting_started/components",slug:"/getting_started/components/sip",permalink:"/fishjam-docs/getting_started/components/sip",draft:!1,unlisted:!1,editUrl:"https://github.com/fishjam-dev/fishjam-docs/versioned_docs/version-0.6.3/getting_started/components/sip.md",tags:[],version:"0.6.3",frontMatter:{},sidebar:"mainSidebar",previous:{title:"File",permalink:"/fishjam-docs/getting_started/components/file"},next:{title:"Recording",permalink:"/fishjam-docs/getting_started/components/recording"}},d={},a=[{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Env variables",id:"env-variables",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sip",children:"SIP"}),"\n",(0,t.jsxs)(n.p,{children:["Makes a SIP connection with the specified provider.\nFrom this connection it consumes a remote RTP stream with G711 A-law audio\nand publishes through this connection all audio tracks from the ",(0,t.jsx)(n.a,{href:"/fishjam-docs/getting_started/room",children:"Room"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Read more about SIP ",(0,t.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc3261.html",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/fishjam-docs/getting_started/peers/webrtc",children:"WebRTC"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/fishjam-docs/getting_started/components/hls",children:"HLS"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/fishjam-docs/getting_started/components/rtsp",children:"RTSP"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/fishjam-docs/getting_started/components/file",children:"File"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/fishjam-docs/getting_started/components/recording",children:"Recording"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The specified SIP provider needs to support G711 A-law as it will be a format in which audio from\nSIP Endpoint will be published."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration-options",children:"Configuration options"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Required"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"registrarCredentials"})," (object) - registrar credentials which allows to make a connection with a SIP provider.\nFor the exact credential structure see ",(0,t.jsx)(n.a,{href:"../../for_developers/api_reference/rest_api#tag/room/operation/add_component",children:"Configuration API"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"env-variables",children:"Env variables"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"FJ_COMPONENTS_USED"})," - has to contain ",(0,t.jsx)(n.code,{children:"sip"})," if SIP components will be used.",(0,t.jsx)("br",{}),"\nBy default set to an empty string (SIP components are disabled).",(0,t.jsx)("br",{}),"\nRefer ",(0,t.jsx)(n.a,{href:"/fishjam-docs/getting_started/installation#environment-variables",children:"here"})," for more info."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"FJ_SIP_IP"})," - the IP address on which SIP server will listen. It must be a public IP and reachable from the outside network."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);