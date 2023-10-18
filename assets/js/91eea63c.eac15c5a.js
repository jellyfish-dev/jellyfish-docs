"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[6342],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=l.createContext({}),u=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return l.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return t?l.createElement(h,i(i({ref:n},p),{},{components:t})):l.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var l=t(7294),r=t(6010);const a={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>N});var l=t(7462),r=t(7294),a=t(6010),i=t(2466),o=t(6550),s=t(1980),u=t(7392),p=t(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:l,default:r}}=e;return{value:n,label:t,attributes:l,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const l=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})}),[a,l])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,a=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=t.find((e=>e.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:a}))),[s,u]=h({queryString:t,groupId:l}),[c,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,a]=(0,p.Nk)(t);return[l,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:l}),k=(()=>{const e=s??c;return m({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var k=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=p.indexOf(n),l=u[t].value;l!==o&&(c(n),s(l))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,a.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===n})}),t??n)})))}function g(e){let{lazy:n,children:t,selectedValue:l}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l}))))}function v(e){const n=f(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",b.tabList)},r.createElement(y,(0,l.Z)({},e,n)),r.createElement(g,(0,l.Z)({},e,n)))}function N(e){const n=(0,k.Z)();return r.createElement(v,(0,l.Z)({key:String(n)},e))}},1330:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var l=t(7462),r=(t(7294),t(3905)),a=t(4866),i=t(5162);const o={},s="Installation",u={unversionedId:"getting_started/installation",id:"version-0.2.0/getting_started/installation",title:"Installation",description:"There are two ways of running Jellyfish:",source:"@site/versioned_docs/version-0.2.0/getting_started/installation.md",sourceDirName:"getting_started",slug:"/getting_started/installation",permalink:"/jellyfish-docs/0.2.0/getting_started/installation",draft:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/versioned_docs/version-0.2.0/getting_started/installation.md",tags:[],version:"0.2.0",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Example Scenarios",permalink:"/jellyfish-docs/0.2.0/introduction/example_scenarios"},next:{title:"Architecture",permalink:"/jellyfish-docs/0.2.0/getting_started/architecture"}},p={},c=[{value:"Building from source",id:"building-from-source",level:2},{value:"Running with Docker",id:"running-with-docker",level:2},{value:"Environment variables",id:"environment-variables",level:2},{value:"Required in production:",id:"required-in-production",level:4},{value:"Optional:",id:"optional",level:4},{value:"Distribution:",id:"distribution",level:4}],d={toc:c},m="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,l.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"There are two ways of running Jellyfish:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"building from source (requires Elixir and native dependencies)"),(0,r.kt)("li",{parentName:"ul"},"using Jellyfish Docker images")),(0,r.kt)("p",null,"At the moment, Jellyfish doesn't provide pre-built binaries."),(0,r.kt)("h2",{id:"building-from-source"},"Building from source"),(0,r.kt)("p",null,"Make sure to have both Elixir and Rust installed. Check the links below for instructions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://elixir-lang.org/install.html"},"Elixir")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rustup.rs"},"Rust"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Clone the Jellyfish repo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/jellyfish-dev/jellyfish.git\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install native dependencies")),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mac-intel",label:"macOS Intel",default:!0,mdxType:"TabItem"},"These instructions assume you have Homebrew installed. You can get it ",(0,r.kt)("a",{href:"https://brew.sh"},"here"),".",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'brew install srtp libnice clang-format ffmpeg opus pkg-config\nexport LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"\nexport CFLAGS="-I/usr/local/opt/openssl@1.1/include/"\nexport CPPFLAGS="-I/usr/local/opt/openssl@1.1/include/"\nexport PKG_CONFIG_PATH="/usr/local/opt/openssl@1.1/lib/pkgconfig"\n'))),(0,r.kt)(i.Z,{value:"mac-m1",label:"macOS Apple Silicon",default:!0,mdxType:"TabItem"},"These instructions assume you have Homebrew installed. You can get it ",(0,r.kt)("a",{href:"https://brew.sh"},"here"),".",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install srtp libnice clang-format ffmpeg opus\nexport C_INCLUDE_PATH=/opt/homebrew/Cellar/libnice/0.1.18/include:/opt/homebrew/Cellar/opus/1.3.1/include:/opt/homebrew/Cellar/openssl@1.1/1.1.1l_1/include\nexport LIBRARY_PATH=/opt/homebrew/Cellar/opus/1.3.1/lib\nexport PKG_CONFIG_PATH=/opt/homebrew/Cellar/openssl@1.1/1.1.1l_1/lib/pkgconfig/\n"))),(0,r.kt)(i.Z,{value:"ubuntu",label:"Ubuntu",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt install pkg-config libsrtp2-dev libnice-dev libavcodec-dev libavformat-dev libavutil-dev libopus-dev libfdk-aac-dev\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install elixir dependencies")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mix deps.get\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Run the server in development")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mix phx.server\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create a binary")),(0,r.kt)("p",null,"You can also create Jellyfish binary with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MIX_ENV=prod mix release\n")),(0,r.kt)("p",null,"Then follow instructions printed in your terminal."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The difference between running with ",(0,r.kt)("inlineCode",{parentName:"p"},"mix phx.server")," and generating target\nbinary is that the latter is prepared for running in production so e.g.\nit includes some Erlang Virtual Machine tweaks.\nJellyfish Dockerfile always uses ",(0,r.kt)("inlineCode",{parentName:"p"},"mix release")," under the hood.")),(0,r.kt)("h2",{id:"running-with-docker"},"Running with Docker"),(0,r.kt)("p",null,"Docker images are built for production which means that you always\nneed to set a couple of ",(0,r.kt)("a",{parentName:"p",href:"#environment-variables"},"environment variables"),"."),(0,r.kt)("p",null,"An example docker command running bare Jellyfish HTTP service locally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 8080:8080/tcp -e JF_HOST=localhost:8080 JF_SERVER_API_TOKEN=token ghcr.io/jellyfish-dev/jellyfish:0.2.0\n")),(0,r.kt)("p",null,"Note that in real case scenarios, docker commands depend on peers/components you are going to use.\nTherefore, we don't present them here but rather in each peer/component's documentation.\nAs an example see ",(0,r.kt)("a",{parentName:"p",href:"./peers/webrtc#example-docker-commands"},"WebRTC Peer"),"."),(0,r.kt)("p",null,"For the full list of Jellyfish Docker images, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jellyfish-dev/jellyfish/pkgs/container/jellyfish"},"see this page"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Instead of passing environmental variables manually, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--env-file ./env-file")," flag,\nwhere the ",(0,r.kt)("inlineCode",{parentName:"p"},"env-file")," is a file containing the variables that the image expects,\nsee example file ",(0,r.kt)("inlineCode",{parentName:"p"},".env.sample")," in the Jellyfish repository.")),(0,r.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,r.kt)("p",null,"Environment variables are split into two groups:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"general ones - presented below"),(0,r.kt)("li",{parentName:"ul"},"peer/component-specific - each Peer and Component can expose its own environment variables.\nThey are always listed in a Peer/Component description.\nSee the list of ",(0,r.kt)("a",{parentName:"li",href:"/jellyfish-docs/0.2.0/getting_started/peers/webrtc"},"Peers")," and ",(0,r.kt)("a",{parentName:"li",href:"/jellyfish-docs/0.2.0/getting_started/components/hls"},"Components"),".")),(0,r.kt)("p",null,"Below there are general, Jellyfish environment variables.\nIf you are running Jellyfish in development, you don't need to\nset any of them."),(0,r.kt)("h4",{id:"required-in-production"},"Required in production:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JF_SERVER_API_TOKEN")," - token for authorizing HTTP requests.",(0,r.kt)("br",null),"\nDefaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"development")," for development builds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JF_HOST")," - defines how Jellyfish should be seen from the outside.",(0,r.kt)("br",null),"\nDefaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"JF_IP:JF_PORT"),".",(0,r.kt)("br",null),"\nIt can be in the form of ",(0,r.kt)("inlineCode",{parentName:"li"},"ip:port"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"domain:port")," or simply ",(0,r.kt)("inlineCode",{parentName:"li"},"domain"),".\nUseful when hosting Jellyfish behind proxy.\nIt is returned e.g. when creating a new room.\nWhen running with Docker, ",(0,r.kt)("inlineCode",{parentName:"li"},"JF_IP")," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0.0.0"),"\nmaking the default value of ",(0,r.kt)("inlineCode",{parentName:"li"},"JF_HOST")," incorrect.\nTherefore, for Docker, you have to set ",(0,r.kt)("inlineCode",{parentName:"li"},"JF_HOST")," manually.\nFor running Docker locally, it can simply be ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8080"),".")),(0,r.kt)("h4",{id:"optional"},"Optional:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JF_IP")," - an ip address to run the HTTP server on.",(0,r.kt)("br",null),"\nDefaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," when running from source or using ",(0,r.kt)("inlineCode",{parentName:"li"},"mix release"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0.0.0")," for Docker."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JF_PORT")," - port to run the HTTP server on.",(0,r.kt)("br",null),"\nDefaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"5002")," for development builds and ",(0,r.kt)("inlineCode",{parentName:"li"},"8080")," for production builds (",(0,r.kt)("inlineCode",{parentName:"li"},"mix release")," or Docker)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JF_SECRET_KEY_BASE")," - used to sign/encrypt tokens generated for Peers.\nGenerated if not provided."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JF_CHECK_ORIGIN")," - defines if Jellyfish will check origin of incoming requests and socket connection.",(0,r.kt)("br",null),"\nDefaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),".",(0,r.kt)("br",null),"\nCan be ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JF_OUTPUT_BASE_PATH")," - a base path where Jellyfish will save its artifacts.",(0,r.kt)("br",null),"\nDefaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"./jellyfish_output/"),".",(0,r.kt)("br",null),"\nWhen running via docker, the directory can be mounted as ",(0,r.kt)("inlineCode",{parentName:"li"},"-v $(pwd)/host_directory:/app/jellyfish_output"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JF_METRICS_IP")," - an IP address to run metrics endpoint on.",(0,r.kt)("br",null),"\nDefaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," when running from source or using ",(0,r.kt)("inlineCode",{parentName:"li"},"mix release"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0.0.0")," for Docker."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JF_METRICS_PORT")," - a port to run metrics endpoint on.",(0,r.kt)("br",null),"\nDefaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"9568"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MIX_ENV")," - defines compilation environment.\nThis variable takes effect only when running from the source.\nDocker images are always built with ",(0,r.kt)("inlineCode",{parentName:"li"},"MIX_ENV=prod"),".\nPossible values are:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dev")," - uses default values for environment variables\n(default option when running with ",(0,r.kt)("inlineCode",{parentName:"li"},"mix phx.server"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prod")," - requires that you provide values for environment variables"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test")," - used in tests")))),(0,r.kt)("h4",{id:"distribution"},"Distribution:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JF_DIST_ENABLED")," - whether to run Jellyfish in a cluster.",(0,r.kt)("br",null),"\nDefaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JF_DIST_NODE_NAME")," - Node name used in a cluster.\nIt consists of two parts - nodename@hostname.\nThe first part identifies a node on a single machine and can\nbe any string.\nThe second part identifies the host machine and has to be an\nip address or FQDN of a machine Jellyfish runs on.\nIf you run a cluster on a single machine or in the same docker network\nand you don't want to use IP addresses or FQDN as hostnames,\nyou can use short names (see ",(0,r.kt)("inlineCode",{parentName:"li"},"JF_DIST_MODE"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JF_DIST_MODE")," - distribution mode - can be ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"sname"),".",(0,r.kt)("br",null),"\nDefaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),".",(0,r.kt)("br",null),"\nWhen using ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),", your hostname has to be an IP address or FQDN of a machine Jellyfish runs on.\nWhen using ",(0,r.kt)("inlineCode",{parentName:"li"},"sname"),", your hostname can be any string.\nSee our ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/jellyfish-dev/jellyfish/blob/main/docker-compose.yaml"},"docker-compose.yaml"),", which we use in our integration tests for an example."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JF_DIST_COOKIE")," - used to group Jellyfishes in a cluster.",(0,r.kt)("br",null),"\nDefaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"jellyfish_cookie"),".",(0,r.kt)("br",null),"\nUse different cookies to create multiple clusters on the same machine.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"li"},"Important"),": cookie does not provide any cryptographic security.\nIts only purpose is to prevent a node from connecting to a cluster with which\nit is not intended to communicate."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JF_DIST_NODES")," - space-separated list of other Jellyfishes to connect to.",(0,r.kt)("br",null),"\nDefaults to ",(0,r.kt)("inlineCode",{parentName:"li"},'""'),".",(0,r.kt)("br",null),"\nExample: ",(0,r.kt)("inlineCode",{parentName:"li"},'JF_DIST_NODES="jellyfish1@127.0.0.1 jellyfish2@127.0.0.1"'),".",(0,r.kt)("br",null),"\nThis list can also include ourselves so that you can pass the same value\nto every Jellyfish.\nNote: Jellyfish connection to other Jellyfish is transitive meaning that\nwhen you connect to one Jellyfish you also connect to all other Jellyfishes\nthis one was connected to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JF_DIST_MIN_PORT"),"- minimal port used by Jellyfish when forming a cluster\n(connecting to other Jellyfishes).",(0,r.kt)("br",null),"\nDefaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"9000")," when running with Docker.",(0,r.kt)("br",null),"\nOnly available when running with Docker or ",(0,r.kt)("inlineCode",{parentName:"li"},"mix release"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JF_DIST_MAX_PORT"),"- maximal port used by Jellyfish when forming a cluster\n(connecting to other Jellyfishes).",(0,r.kt)("br",null),"\nDefaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"9000")," when running with Docker.",(0,r.kt)("br",null),"\nOnly available when running with Docker or ",(0,r.kt)("inlineCode",{parentName:"li"},"mix release"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use a single port to form a cluster, even if a cluster consists of\nmore than two Jellyfishes. ")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Besides ports specified using ",(0,r.kt)("inlineCode",{parentName:"p"},"JF_DIST_MIN_PORT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"JF_DIST_MAX_PORT"),", Jellyfish\nalso uses one more service called EPMD that runs on port 4369.\nThis port has to be explicitly exported when running with Docker.\nRead more in the ",(0,r.kt)("a",{parentName:"p",href:"/jellyfish-docs/0.2.0/cluster"},"Cluster")," section.")))}h.isMDXComponent=!0}}]);