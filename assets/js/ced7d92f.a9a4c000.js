"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[4604],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),h=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=h(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=h(a),p=r,m=c["".concat(i,".").concat(p)]||c[p]||u[p]||o;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var h=2;h<o;h++)s[h]=a[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),s=a(2466),l=a(6550),i=a(1980),h=a(7392),d=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,h.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=u(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,h]=m({queryString:a,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=i??c;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,o]),tabValues:o}}var b=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:h}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const t=e.currentTarget,a=d.indexOf(t),n=h[a].value;n!==l&&(c(t),i(n))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},h.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:u},s,{className:(0,o.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":l===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},5620:(e,t,a)=>{a.d(t,{f:()=>s});var n=a(7294),r=a(4996),o=a(941);const s=e=>{let{url:t,height:a,alt:s}=e;return n.createElement("p",{style:{display:"flex",justifyContent:"center"}},n.createElement(o.Z,{height:a,alt:s,sources:{light:(0,r.Z)(t),dark:(0,r.Z)(t)}}))}},7095:(e,t,a)=>{a.d(t,{ZP:()=>h});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),s=a(5162);const l={toc:[]},i="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(i,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are a couple of ways to start the dashboard:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"main",label:"Up-to-date version",mdxType:"TabItem"},(0,r.kt)("p",null,"The current version of the dashboard is ready to use and available\n",(0,r.kt)("a",{parentName:"p",href:"https://jellyfish-dev.github.io/jellyfish-dashboard/"},"here"),".\nEnsure that it is compatible with your Jellyfish server!\nPlease note that this dashboard only supports secure connections (https/wss)\nor connections to localhost. Any insecure requests (http/ws) will be automatically blocked by the browser.")),(0,r.kt)(s.Z,{value:"docker",label:"Docker container",mdxType:"TabItem"},(0,r.kt)("p",null,"The dashboard is also published as a docker image, you can pull it using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/jellyfish-dev/jellyfish-dashboard:v0.1.2\n"))),(0,r.kt)(s.Z,{value:"repo",label:"Official repository",mdxType:"TabItem"},(0,r.kt)("p",null,"You can also clone our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jellyfish-dev/jellyfish-dashboard"},"repo"),"\nand run dashboard locally"))))}h.isMDXComponent=!0},6782:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={toc:[]},s="wrapper";function l(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For testing, we'll run the Jellyfish Media Server locally using Docker image:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -p 50000-50050:50000-50050/udp \\\n           -p 5002:5002/tcp \\\n           -e JF_CHECK_ORIGIN=false \\\n           -e JF_HOST=<your ip address>:5002 \\\n           -e JF_PORT="5002" \\\n           -e JF_WEBRTC_USED=true \\\n           -e JF_WEBRTC_TURN_PORT_RANGE=50000-50050 \\\n           -e JF_WEBRTC_TURN_IP=<your ip address> \\\n           -e JF_WEBRTC_TURN_LISTEN_IP=0.0.0.0 \\\n           -e JF_SERVER_API_TOKEN=development \\\n           ghcr.io/jellyfish-dev/jellyfish:0.2.0\n')),(0,r.kt)("p",null,"Make sure to set ",(0,r.kt)("inlineCode",{parentName:"p"},"JF_WEBRTC_TURN_IP")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"JF_HOST")," to your local IP address. Without it, the mobile device won't be able to connect to the Jellyfish."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To check your local IP you can use this handy command (Linux/macOS):"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ifconfig | grep \"inet \" | grep -Fv 127.0.0.1 | awk '{print $2}'\n"))))}l.isMDXComponent=!0},8291:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>h,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),o=a(5620),s=a(6782),l=a(7095);const i={title:"Jellyfish Dashboard"},h="The Whats and Hows of Jellyfish Dashboard",d={unversionedId:"tutorials/dashboard",id:"version-0.2.0/tutorials/dashboard",title:"Jellyfish Dashboard",description:"What is Jellyfish Dashboard?",source:"@site/versioned_docs/version-0.2.0/tutorials/dashboard.mdx",sourceDirName:"tutorials",slug:"/tutorials/dashboard",permalink:"/jellyfish-docs/0.2.0/tutorials/dashboard",draft:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/versioned_docs/version-0.2.0/tutorials/dashboard.mdx",tags:[],version:"0.2.0",frontMatter:{title:"Jellyfish Dashboard"},sidebar:"mainSidebar",previous:{title:"RTSP",permalink:"/jellyfish-docs/0.2.0/getting_started/components/rtsp"},next:{title:"Simple React App",permalink:"/jellyfish-docs/0.2.0/tutorials/simple-react-app"}},c={},u=[{value:"What is Jellyfish Dashboard?",id:"what-is-jellyfish-dashboard",level:2},{value:"How to start Jellyfish Dashboard?",id:"how-to-start-jellyfish-dashboard",level:2},{value:"How to start Jellyfish Media Server?",id:"how-to-start-jellyfish-media-server",level:2},{value:"How to use Jellyfish Dashboard?",id:"how-to-use-jellyfish-dashboard",level:2},{value:"Connecting to the server",id:"connecting-to-the-server",level:3},{value:"Creating a room",id:"creating-a-room",level:3},{value:"Adding and connecting peers to the room",id:"adding-and-connecting-peers-to-the-room",level:3},{value:"Sending tracks",id:"sending-tracks",level:3},{value:"Receiving tracks",id:"receiving-tracks",level:3},{value:"A ton of information that the dashboard provides",id:"a-ton-of-information-that-the-dashboard-provides",level:2},{value:"Server logs in console",id:"server-logs-in-console",level:3},{value:"Server/Room/Client state",id:"serverroomclient-state",level:3},{value:"Server events",id:"server-events",level:3},{value:"HLS and RTSP streaming",id:"hls-and-rtsp-streaming",level:2},{value:"Loadbalancing in Dashboard",id:"loadbalancing-in-dashboard",level:2},{value:"Data collected by Jellyfish",id:"data-collected-by-jellyfish",level:2},{value:"Summary",id:"summary",level:2}],p={toc:u},m="wrapper";function f(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-whats-and-hows-of-jellyfish-dashboard"},"The Whats and Hows of Jellyfish Dashboard"),(0,r.kt)("h2",{id:"what-is-jellyfish-dashboard"},"What is Jellyfish Dashboard?"),(0,r.kt)("p",null,"Jellyfish Dashboard is a web application that allows you to manage your Jellyfish Media Server instance.\nIt is a React application that uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jellyfish-dev/react-client-sdk"},"Jellyfish React Client API"),"\nfor adding and receiving tracks and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jellyfish-dev/jellyfish/blob/main/openapi.yaml"},"Jellyfish Server API"),"\nfor adding peers, creating rooms etc."),(0,r.kt)("p",null,"It was created to help Jellyfish developers in testing but was later extended and adapted as a tool for tutorials and demos.\nHere, we present a short introduction to the dashboard and its features."),(0,r.kt)("h2",{id:"how-to-start-jellyfish-dashboard"},"How to start Jellyfish Dashboard?"),(0,r.kt)(l.ZP,{mdxType:"StartingJellyfishDashboard"}),(0,r.kt)("h2",{id:"how-to-start-jellyfish-media-server"},"How to start Jellyfish Media Server?"),(0,r.kt)(s.ZP,{mdxType:"StartingJellyfishMediaServer"}),(0,r.kt)("h2",{id:"how-to-use-jellyfish-dashboard"},"How to use Jellyfish Dashboard?"),(0,r.kt)("p",null,"Since we have Dashboard and Jellyfish Media Server up and running, we can dive into\nthe features."),(0,r.kt)("h3",{id:"connecting-to-the-server"},"Connecting to the server"),(0,r.kt)("p",null,"We started the dashboard and the Jellyfish Media Server separately, so we need to connect them."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the dashboard in your browser. Open the side menu and fill in the parameters:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dashboard server connection",src:a(8198).Z,width:"2436",height:"702"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Server token")," - a token necessary to authenticate the dashboard with the Jellyfish. For now, it's simply ",(0,r.kt)("inlineCode",{parentName:"li"},"development"),",\nbut it is meant to authenticate the dashboard to the Jellyfish, so the good practice is to use a token that is hard to guess."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WS/WSS")," - whether to use a secure or insecure connection. , it's ",(0,r.kt)("inlineCode",{parentName:"li"},"ws"),", but if the Jellyfish uses secure WebSocket, use ",(0,r.kt)("inlineCode",{parentName:"li"},"wss"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HTTP/HTTPS")," - whether to use a secure or insecure connection. By default, it's ",(0,r.kt)("inlineCode",{parentName:"li"},"http"),", but if the Jellyfish uses secure HTTP, use ",(0,r.kt)("inlineCode",{parentName:"li"},"https"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Server URL")," - URL of the Jellyfish server. Here, ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:5002")," would be a local build, but it can be any URL that points to the Jellyfish."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Socket Path")," - path to the WebSocket endpoint. The default value is ",(0,r.kt)("inlineCode",{parentName:"li"},"/socket/peer/websocket"),".")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Connect to server"),". If everything is correct, a server will appear in the list of connected servers:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Connected dashboard",src:a(4651).Z,width:"2028",height:"788"})),(0,r.kt)("h3",{id:"creating-a-room"},"Creating a room"),(0,r.kt)("p",null,"There are plenty of settings that You can adjust in a room:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adding Room",src:a(2304).Z,width:"2034",height:"454"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"h264 or vp8")," - video codec used in the room. If you want to use ",(0,r.kt)("inlineCode",{parentName:"li"},"HLS")," streaming, you need to use ",(0,r.kt)("inlineCode",{parentName:"li"},"h264"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Max Peers")," - maximum number of peers that can join to the room.")),(0,r.kt)("p",null,"When you select the settings, click the ",(0,r.kt)("strong",{parentName:"p"},"Add room")," button. If everything is correct, a room will appear in the list of rooms:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Room added",src:a(8616).Z,width:"1935",height:"1080"})),(0,r.kt)("h3",{id:"adding-and-connecting-peers-to-the-room"},"Adding and connecting peers to the room"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("strong",{parentName:"p"},"Create peer")," button, you can create a peer that will be ready to connect to the room."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Peer created",src:a(7011).Z,width:"1287",height:"405"})),(0,r.kt)("p",null,"The peer has its ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Token"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," is used to identify the peer in the Jellyfish Server, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Token")," is used to authenticate the peer with the Jellyfish Server."),(0,r.kt)("p",null,"Dashboard has an option to copy both of those values to the clipboard.\nYou can also create a QR code with the peer's ",(0,r.kt)("inlineCode",{parentName:"p"},"Token")," to make connecting to Jellyfish with a mobile device easier."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Peer copied",src:a(284).Z,width:"2578",height:"1594"})),(0,r.kt)("p",null,"To connect the peer to the room, you can either press the ",(0,r.kt)("strong",{parentName:"p"},"Connect")," button in the peer's row, or scan the QR code with your mobile app, and connect there."),(0,r.kt)("h3",{id:"sending-tracks"},"Sending tracks"),(0,r.kt)("p",null,"When the peer connects to the room, you will see the track menu.\nIt allows you to send tracks to the room."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Track menu",src:a(937).Z,width:"1257",height:"949"})),(0,r.kt)("p",null,"You can select the ",(0,r.kt)("em",{parentName:"p"},"audio or video track")," you want to create.\nCreated tracks will be visible in the list below.\nYou can select any track from the list and send it to the room.\nApart from your camera/microphone, you can easily share your screen with its audio or pick one from a list of ",(0,r.kt)("em",{parentName:"p"},"mock tracks")," that we prepared."),(0,r.kt)("p",null,"You can also select the ",(0,r.kt)("em",{parentName:"p"},"resolution")," of the video track or if you want, send the video as a ",(0,r.kt)("em",{parentName:"p"},"simulcast")," stream."),(0,r.kt)("p",null,"There is also an option to add custom ",(0,r.kt)("em",{parentName:"p"},"metadata")," (in JSON format) to the track.\nThe peer will send metadata with the track to the room. Each recipient will be able to see it."),(0,r.kt)("p",null,"When you select the track, click the ",(0,r.kt)("strong",{parentName:"p"},"Add track")," button.\nIf everything is correct, client will send the track to the room and other peers will be able to see and hear you."),(0,r.kt)("h3",{id:"receiving-tracks"},"Receiving tracks"),(0,r.kt)("p",null,"When the peer connects to the room, it will automatically receive tracks from other peers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Congrats! The basic utils of the dashboard are now covered. Next, we will dive into useful features that will help you with testing.")),(0,r.kt)("h2",{id:"a-ton-of-information-that-the-dashboard-provides"},"A ton of information that the dashboard provides"),(0,r.kt)("h3",{id:"server-logs-in-console"},"Server logs in console"),(0,r.kt)("p",null,"On the side menu, you can set up the dashboard to display React Client logs in the console.\nLogs are great for debugging purposes and provide insight into the various communications that occur between the dashboard and the Jellyfish Server.\nYou can also register your event handlers in your Jellyfish-based projects, both in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jellyfish-dev/react-client-sdk"},"React Client SDK")," and the",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jellyfish-dev/ts-client-sdk"},"TS Client SDK"),".\nThese logs can show you when particular events occur and provide data that you can use in your own handlers"),(0,r.kt)(o.f,{url:"/img/tutorials/dashboard/dashboard_server_logs.png",height:500,alt:"Server logs",mdxType:"ImageWrapper"}),(0,r.kt)("h3",{id:"serverroomclient-state"},"Server/Room/Client state"),(0,r.kt)("p",null,"Each server, room, and client has its state. You can see the state of each of them in the dashboard by clicking appropriate buttons."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Server state",src:a(6846).Z,width:"1870",height:"412"})),(0,r.kt)("h3",{id:"server-events"},"Server events"),(0,r.kt)("p",null,"Apart from the state, you can also see the events that occur on the server."),(0,r.kt)("p",null,"You can see them after clicking the ",(0,r.kt)("strong",{parentName:"p"},"Show Server Events")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Server events",src:a(7547).Z,width:"2422",height:"1026"})),(0,r.kt)("h2",{id:"hls-and-rtsp-streaming"},"HLS and RTSP streaming"),(0,r.kt)("p",null,"The dashboard allows adding HLS and RTSP streams in the room.\nYou can set up the streams and see them in the room. It will look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"HLS and RTSP",src:a(150).Z,width:"2492",height:"792"})),(0,r.kt)("h2",{id:"loadbalancing-in-dashboard"},"Loadbalancing in Dashboard"),(0,r.kt)("p",null,"Jellyfish Server supports load balancing.\nThis means you can run multiple instances of the server and use them simultaneously to distribute the load evenly among them.\nThe dashboard reflects this feature.\nIf you run multiple Jellyfish instances (which ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jellyfish-dev/jellyfish/blob/main/docker-compose.yaml"},"Docker Compose")," does by default),\nconnect one server to the dashboard.\nWhen a server opens a room on a different instance, the Dashboard will automatically connect to it and display the room.\nWhen Jellyfish runs in a cluster, and the Dashboard requests a new room, it's created on the Jellyfish instance with the lowest load.\nInformation about the specific Jellyfish instance that hosts the newly created room is returned in the HTTP response body."),(0,r.kt)("h2",{id:"data-collected-by-jellyfish"},"Data collected by Jellyfish"),(0,r.kt)("p",null,"For each server, Jellyfish collects WebRTC statistics about the rooms, clients and streamed tracks. You can see them in the dashboard using the ",(0,r.kt)("strong",{parentName:"p"},"Internals")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Internals button",src:a(3242).Z,width:"917",height:"211"})),(0,r.kt)("p",null,"The button opens a new tab with the panel to connect to the WebSocket of the Jellyfish of choice.\nYou can observe the data with the dynamically generated charts showing what flows through the Jellyfish."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Internals",src:a(6313).Z,width:"2508",height:"957"})),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Congrats on finishing the tutorial! You should now be able to use the dashboard to its full potential."),(0,r.kt)("p",null,"But this was just the beginning.\nJellyfish Client API is a powerful tool that allows you to create your own web or mobile multimedia application.\nCheck out the other tutorials to learn more about the Jellyfish Client API and how to use it in your projects."),(0,r.kt)("p",null,"You can also take a look at our fully featured ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jellyfish-dev/react-native-membrane-webrtc/tree/master/example"},"Videoroom Demo example"),":"),(0,r.kt)(o.f,{url:"/img/tutorials/videoroom.gif",alt:"Videoroom Demo",mdxType:"ImageWrapper"}),(0,r.kt)("p",null,"It's written in React Native, but it uses the same Jellyfish Client API as the dashboard, so you can learn a lot from it."))}f.isMDXComponent=!0},2304:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard_add_room-d09e37dceae1734f277028893754932f.png"},4651:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard_connected-1f7a5bcfc112cd85e1bfdf7ae8c15667.png"},150:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard_hls_rtsp-9909f408c674fdb9c35276d47e974975.png"},6313:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard_internals-e00e231291ccf014636c33f298e329c7.png"},3242:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard_internals_button-611979396784c147e7ed345524481303.png"},284:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard_peer_copied-1b2a8bd2a37f465697b25e60f746a6a5.png"},7011:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard_peer_created-1abebcebfe4df6eae62fab62d55fccbd.png"},8616:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard_room_added-e3c484faad570542c7a691069efb53f1.png"},8198:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard_server-d9bc9e3bd4aca156733601c5311efd8d.png"},7547:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard_server_events-38415cfd8d8a585de3648b105cbff15b.png"},6846:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard_states-f9cc48f3b48912a77f0d74d82e145144.png"},937:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard_track_menu-8a027e206f2ea8709c3dc125e619034b.png"}}]);