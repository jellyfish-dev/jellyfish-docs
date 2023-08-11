"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},a="RTSP",l={unversionedId:"getting_started/components/rtsp",id:"getting_started/components/rtsp",title:"RTSP",description:"Consumes a remote RTSP stream (e.g. from an IP camera).",source:"@site/docs/getting_started/components/rtsp.md",sourceDirName:"getting_started/components",slug:"/getting_started/components/rtsp",permalink:"/jellyfish-docs/getting_started/components/rtsp",draft:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/docs/getting_started/components/rtsp.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"HLS",permalink:"/jellyfish-docs/getting_started/components/hls"},next:{title:"Fly.io (experimental)",permalink:"/jellyfish-docs/deploying/fly_io"}},s={},p=[{value:"Compatibility",id:"compatibility",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Required",id:"required",level:3},{value:"Optional",id:"optional",level:3},{value:"Env variables",id:"env-variables",level:2},{value:"Example Docker commands",id:"example-docker-commands",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rtsp"},"RTSP"),(0,o.kt)("p",null,"Consumes a remote RTSP stream (e.g. from an IP camera).\nThe RTSP component initializes communication by connecting to\na remote source and requesting its stream."),(0,o.kt)("h2",{id:"compatibility"},"Compatibility"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/jellyfish-docs/getting_started/components/hls"},"HLS"))),(0,o.kt)("h2",{id:"configuration-options"},"Configuration options"),(0,o.kt)("h3",{id:"required"},"Required"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sourceUri")," (string) - URI of RTSP source stream, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},'"rtsp://mysite.net:554/stream"'))),(0,o.kt)("h3",{id:"optional"},"Optional"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rtpPort")," (integer 1..65535, default: 20000) - Local port RTP stream will be received at"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reconnectDelay")," (integer 0.., default: 15000) - Delay (in ms) between successive reconnect attempts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"keepAliveInterval")," (integer 0.., default: 15000) - Interval (in ms) in which keep-alive\nRTSP messages will be sent to the remote stream source"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pierceNat")," (boolean, default: true) - Whether to attempt to create client-side NAT binding\nby sending an empty datagram from client to source, after the completion of RTSP setup")),(0,o.kt)("h2",{id:"env-variables"},"Env variables"),(0,o.kt)("p",null,"Currently, there are no environment variables related to this component."),(0,o.kt)("h2",{id:"example-docker-commands"},"Example Docker commands"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If the client is behind NAT, the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--network=host")," is necessary\nsince Docker can change the source port of UDP packets for routing reasons,\nwhich breaks the ",(0,o.kt)("inlineCode",{parentName:"p"},"pierceNat")," functionality."),(0,o.kt)("p",{parentName:"admonition"},"This means that users on macOS will most likely be unable to access any\nRTSP stream source outside of their network when running Jellyfish using Docker."),(0,o.kt)("p",{parentName:"admonition"},"If you're on macOS and want to receive RTSP streams from behind NAT,\nright now the only way is to ",(0,o.kt)("a",{parentName:"p",href:"/jellyfish-docs/getting_started/installation#building-from-source"},"build Jellyfish natively from source"),".")),(0,o.kt)("p",null,"Explicit port exposure (macOS compatible)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 20000:20000/udp \\\n           -p 4000:4000/tcp \\\n           -e SERVER_API_TOKEN=token \\\n           -e VIRTUAL_HOST=localhost \\\n           -e SECRET_KEY_BASE=secret \\\n           ghcr.io/jellyfish-dev/jellyfish:latest\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure that the exposed UDP port matches the one used by the RTSP component\n(option ",(0,o.kt)("inlineCode",{parentName:"p"},"rtpPort"),", default: 20000)."),(0,o.kt)("p",{parentName:"admonition"},"If using multiple RTSP components, more ports will need to be exposed.")),(0,o.kt)("p",null,"Using host network (Linux only)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --network=host \\\n           -e SERVER_API_TOKEN=token \\\n           -e VIRTUAL_HOST=localhost \\\n           -e SECRET_KEY_BASE=secret \\\n           ghcr.io/jellyfish-dev/jellyfish:latest\n")))}u.isMDXComponent=!0}}]);