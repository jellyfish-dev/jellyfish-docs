"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(7462),a=n(7294),l=n(6010),i=n(2466),o=n(6550),s=n(1980),u=n(7392),p=n(12);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:n,groupId:r}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),b=(()=>{const e=s??c;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var b=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),r=u[n].value;r!==o&&(c(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=h(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),l=n(4866),i=n(5162);const o={},s="Installation",u={unversionedId:"getting_started/installation",id:"getting_started/installation",title:"Installation",description:"There are two ways of running Jellyfish:",source:"@site/docs/getting_started/installation.md",sourceDirName:"getting_started",slug:"/getting_started/installation",permalink:"/jellyfish-docs/getting_started/installation",draft:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/docs/getting_started/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Example Scenarios",permalink:"/jellyfish-docs/introduction/example_scenarios"},next:{title:"Architecture",permalink:"/jellyfish-docs/getting_started/architecture"}},p={},c=[{value:"Building from source",id:"building-from-source",level:2},{value:"Running with Docker",id:"running-with-docker",level:2},{value:"Env variables",id:"env-variables",level:2}],d={toc:c},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"There are two ways of running Jellyfish:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"building from source (requires Elixir and native dependencies)"),(0,a.kt)("li",{parentName:"ul"},"using Jellyfish Docker images")),(0,a.kt)("p",null,"At the moment, Jellyfish doesn't provide pre-built binaries."),(0,a.kt)("h2",{id:"building-from-source"},"Building from source"),(0,a.kt)("p",null,"Make sure to have Elixir installed. If not, you can do it ",(0,a.kt)("a",{parentName:"p",href:"https://elixir-lang.org/install.html"},"here"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Clone the Jellyfish repo")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/jellyfish-dev/jellyfish.git\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Install native dependencies")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"mac-intel",label:"macOS Intel",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'brew install srtp libnice clang-format ffmpeg opus pkg-config\nexport LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"\nexport CFLAGS="-I/usr/local/opt/openssl@1.1/include/"\nexport CPPFLAGS="-I/usr/local/opt/openssl@1.1/include/"\nexport PKG_CONFIG_PATH="/usr/local/opt/openssl@1.1/lib/pkgconfig"\n'))),(0,a.kt)(i.Z,{value:"mac-m1",label:"macOS Apple Silicon",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew install srtp libnice clang-format ffmpeg opus\nexport C_INCLUDE_PATH=/opt/homebrew/Cellar/libnice/0.1.18/include:/opt/homebrew/Cellar/opus/1.3.1/include:/opt/homebrew/Cellar/openssl@1.1/1.1.1l_1/include\nexport LIBRARY_PATH=/opt/homebrew/Cellar/opus/1.3.1/lib\nexport PKG_CONFIG_PATH=/opt/homebrew/Cellar/openssl@1.1/1.1.1l_1/lib/pkgconfig/\n"))),(0,a.kt)(i.Z,{value:"ubuntu",label:"Ubuntu",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt-get install libsrtp2-dev libnice-dev libavcodec-dev libavformat-dev libavutil-dev libopus-dev\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Install elixir dependencies")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mix deps.get\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Run the server in development")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mix phx.server\n")),(0,a.kt)("h2",{id:"running-with-docker"},"Running with Docker"),(0,a.kt)("p",null,"Docker images are built for production which means that you always\nneed to set a couple of environment variables.\nSee ",(0,a.kt)("a",{parentName:"p",href:"#env-variables"},"Env variables")," for more."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -e VIRTUAL_HOST=localhost \\\n           -e SECRET_KEY_BASE=secret \\\n           -e TOKEN=token \\\n           ghcr.io/jellyfish-dev/jellyfish:latest\n")),(0,a.kt)("p",null,"For the full list of Jellyfish Docker images, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jellyfish-dev/jellyfish/pkgs/container/jellyfish"},"see this page"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Instead of passing environmental variables manually, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--env-file ./env-file")," flag, where the ",(0,a.kt)("inlineCode",{parentName:"p"},"env-file")," is a file containing the variables that the image expects, see example file ",(0,a.kt)("inlineCode",{parentName:"p"},".env.sample")," in the Jellyfish repository.")),(0,a.kt)("h2",{id:"env-variables"},"Env variables"),(0,a.kt)("p",null,"Below there are general, Jellyfish environment variables.\nIf you are running Jellyfish in development, you don't need to\nset any of them."),(0,a.kt)("p",null,"Besides Jellyfish environment variables, each Peer and Component\ncan expose its own environment variables.\nThey are always listed in a Peer/Component description.\nSee the list of ",(0,a.kt)("a",{parentName:"p",href:"/jellyfish-docs/getting_started/peers/webrtc"},"Peers")," and ",(0,a.kt)("a",{parentName:"p",href:"/jellyfish-docs/getting_started/components/hls"},"Components"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MIX_ENV")," - defines compilation mode.\nThis variable takes effect only when running from source.\nDocker images are built with ",(0,a.kt)("inlineCode",{parentName:"li"},"MIX_ENV=prod"),".\nPossible values are:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dev")," - uses default values for environment variables\n(default option when running with ",(0,a.kt)("inlineCode",{parentName:"li"},"mix phx.server"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prod")," - requires you to provide values for environment variables"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test")," - used in tests"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TOKEN")," - token for authorizing HTTP requests. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"development")," for\ndevelopment builds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AUTH_SALT")," - used to sign/encrypt tokens generated for Peers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SECRET_KEY_BASE")," - used to sign/encrypt cookies and other secrets."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"VIRTUAL_HOST")," - host passed to the endpoint config. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"example.com")," for production builds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PORT")," - port to run the HTTP server. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"4000")," both for development and production builds.")))}f.isMDXComponent=!0}}]);