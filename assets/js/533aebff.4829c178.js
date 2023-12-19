"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[7041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function _(e){const t=(0,b.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},8461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={},s="HLS",u={unversionedId:"getting_started/components/hls",id:"getting_started/components/hls",title:"HLS",description:"Creates HLS playlist that is ready to be broadcasted via CDN.",source:"@site/docs/getting_started/components/hls.md",sourceDirName:"getting_started/components",slug:"/getting_started/components/hls",permalink:"/jellyfish-docs/next/getting_started/components/hls",draft:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/docs/getting_started/components/hls.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"WebRTC",permalink:"/jellyfish-docs/next/getting_started/peers/webrtc"},next:{title:"RTSP",permalink:"/jellyfish-docs/next/getting_started/components/rtsp"}},c={},p=[{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Env variables",id:"env-variables",level:2},{value:"Output",id:"output",level:2},{value:"Example Docker commands",id:"example-docker-commands",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hls"},"HLS"),(0,a.kt)("p",null,"Creates HLS playlist that is ready to be broadcasted via CDN.\nRead more about HLS ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/streaming/"},"here"),"."),(0,a.kt)("h2",{id:"compatibility"},"Compatibility"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/jellyfish-docs/next/getting_started/peers/webrtc"},"WebRTC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/jellyfish-docs/next/getting_started/components/rtsp"},"RTSP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/jellyfish-docs/next/getting_started/components/file"},"File"))),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"../../introduction/basic_concepts#room"},"Room")," in which the HLS component is created must have the video codec set to H264.\nSee ",(0,a.kt)("a",{parentName:"li",href:"../../for_developers/api_reference/rest_api#tag/room/operation/create_room"},"API")," for more information."),(0,a.kt)("li",{parentName:"ul"},"Max 1 HLS component allowed per room.")),(0,a.kt)("h2",{id:"configuration-options"},"Configuration options"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Optional")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lowLatency")," (boolean, default: false) - whether the component should use LL-HLS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"persistent")," (boolean, default: false) - whether the stream should be saved or not.\nAfter a meeting that integrates an HLS component (with the persistent option set to true) ends, the meeting is preserved as a recording.\nTo manage this recording, use the ",(0,a.kt)("a",{parentName:"li",href:"../../for_developers/api_reference/rest_api#tag/recording"},"Recording API"),".\nThe recording is also available as ",(0,a.kt)("a",{parentName:"li",href:"../../for_developers/api_reference/rest_api#tag/recording/operation/getRecordingContent"},"HLS Video On Demand (VOD) API"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"targetWindowDuration")," (positive integer, default: null) - represents the duration, in seconds, of the live streaming content to be\nmaintained in a rolling window. If set to null (default), the entire stream will be available."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s3")," (object, default: null) - AWS S3 credentials. If credentials are set, the stream will be saved to the specified bucket.\nThis solution will automatically send your streams to an AWS bucket right after the end of your meeting.\nThe uploaded stream will be accessible in the ",(0,a.kt)("inlineCode",{parentName:"li"},"/<room-id>")," folder within the S3 bucket.\nFor the exact credential structure see ",(0,a.kt)("a",{parentName:"li",href:"../../for_developers/api_reference/rest_api#tag/room/operation/add_component"},"Configuration API"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"subscribeMode"),' (string "manual" or "auto", default: "auto") - whether HLS component should automatically start consuming available tracks.\nWhen set to ',(0,a.kt)("inlineCode",{parentName:"li"},"manual"),", HLS component has to be explicitly told to subscribe to a specific peer/component tracks using\nthe ",(0,a.kt)("a",{parentName:"li",href:"../../for_developers/api_reference/rest_api#tag/hls/operation/subscribe_hls_to"},"Subscription API"),".")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"elixir",label:"Elixir",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-elixir"},'server_address = "localhost:5002"\nserver_api_token = "development"\n\nclient = Jellyfish.Client.new(server_address: server_address, server_api_token: server_api_token)\n\n{:ok, room, _jellyfish_address} = Jellyfish.Room.create(client, video_codec: :h264)\n{:ok, peer, _peer_token} = Jellyfish.Room.add_peer(client, room.id, Jellyfish.Peer.WebRTC)\n\nhls_options = %Jellyfish.Component.HLS{subscribe_mode: :manual}\n{:ok, _component} = Jellyfish.Room.add_component(client, room.id, hls_options)\n\n:ok = Jellyfish.Room.hls_subscribe(client, room.id, [peer.id])\n'))),(0,a.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"TODO\n")))),(0,a.kt)("h2",{id:"env-variables"},"Env variables"),(0,a.kt)("p",null,"Currently, there are no environment variables related to this component."),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"After adding a WebRTC peer (and at least one track) or an RTSP component, the HLS stream will be available\nunder ",(0,a.kt)("inlineCode",{parentName:"p"},"http://<jellyfish-address>/hls/<room_id>/index.m3u8")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"https://"),", if using TLS)."),(0,a.kt)("h2",{id:"example-docker-commands"},"Example Docker commands"),(0,a.kt)("p",null,"The HLS playlist will be created inside the Docker container. To access it from the host,\nyou need to create a volume, e.g. by adding the option ",(0,a.kt)("inlineCode",{parentName:"p"},"-v $(pwd)/jellyfish_output:/app/jellyfish_output"),"\nto your Docker command."),(0,a.kt)("p",null,"Other than that, your Docker commands shouldn't be affected by adding this component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 8080:8080/tcp \\\n           -e JF_SERVER_API_TOKEN=token \\\n           -e JF_HOST=localhost:8080 \\\n           -v $(pwd)/jellyfish_output:/app/jellyfish_output \\\n           ghcr.io/jellyfish-dev/jellyfish:0.2.0\n")))}h.isMDXComponent=!0}}]);