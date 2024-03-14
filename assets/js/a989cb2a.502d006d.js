"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[92],{89840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=t(17624),r=t(4552);const s={},o="Recording",l={id:"getting_started/components/recording",title:"Recording",description:"This feature saves RTP streams (all streams going through a room) to an S3 bucket, while simultaneously creating a report.json file that contains all necessary information to depayload and decode the saved streams.",source:"@site/docs/getting_started/components/recording.md",sourceDirName:"getting_started/components",slug:"/getting_started/components/recording",permalink:"/jellyfish-docs/next/getting_started/components/recording",draft:!1,unlisted:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/docs/getting_started/components/recording.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"SIP",permalink:"/jellyfish-docs/next/getting_started/components/sip"},next:{title:"WebRTC",permalink:"/jellyfish-docs/next/getting_started/peers/webrtc"}},c={},a=[{value:"Compatibility",id:"compatibility",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Environment variables",id:"environment-variables",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"recording",children:"Recording"}),"\n",(0,i.jsxs)(n.p,{children:["This feature saves RTP streams (all streams going through a room) to an S3 bucket, while simultaneously creating a ",(0,i.jsx)(n.code,{children:"report.json"})," file that contains all necessary information to depayload and decode the saved streams."]}),"\n",(0,i.jsx)(n.p,{children:"To utilize the output of the Recording Component:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The streams are serialized using the  ",(0,i.jsx)(n.a,{href:"https://github.com/membraneframework/membrane_stream_plugin",children:"Membrane Stream Plugin"}),". Use the deserializer from this plugin to obtain the plain RTP."]}),"\n",(0,i.jsx)(n.li,{children:"In order to depayload RTP packets to the codecs, use the RTP depayloader bin from the Membrane RTP Plugin."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For an example pipeline, please refer to the ",(0,i.jsx)(n.a,{href:"https://github.com/jellyfish-dev/recording-converter",children:"Recording Converter"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/jellyfish-docs/next/getting_started/peers/webrtc",children:"WebRTC"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/jellyfish-docs/next/getting_started/components/rtsp",children:"RTSP"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/jellyfish-docs/next/getting_started/components/sip",children:"SIP"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/jellyfish-docs/next/getting_started/components/file",children:"File"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration-options",children:"Configuration options"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Optional"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"path_prefix"}),' (String, default: "") - This option defines the path prefix under which all streams will be stored.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"credentials"})," (Object, default: null) - Here you can provide your AWS S3 credentials.\nIf this is set to null, you will need to provide these credentials via environment variables.\nOnce uploaded, the stream will be accessible in the ",(0,i.jsx)(n.code,{children:"<path-prefix>/<room-id>"})," directory in the S3 bucket.\nPlease refer to the ",(0,i.jsx)(n.a,{href:"../../for_developers/api_reference/rest_api#tag/room/operation/add_component",children:"Configuration API"})," for exact structure of the AWS S3 credentials."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,i.jsx)(n.p,{children:"If you prefer not to pass these through the REST API, you should declare the following environment variables for the S3 bucket:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"JF_S3_BUCKET"})," - The name of the S3 bucket where the RTP streams will be stored."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"JF_S3_REGION"})," - The AWS region where your S3 bucket is located."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"JF_S3_ACCESS_KEY_ID"})," - Your AWS access key ID."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"JF_S3_SECRET_ACCESS_KEY"})," - Your secret access key for AWS."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>o});var i=t(11504);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);