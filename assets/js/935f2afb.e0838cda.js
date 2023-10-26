"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":"unreleased","badge":true,"noIndex":false,"className":"docs-version-current","isLast":false,"docsSidebars":{"mainSidebar":[{"type":"category","label":"Introduction","collapsed":false,"items":[{"type":"link","label":"What is Jellyfish?","href":"/jellyfish-docs/next/","docId":"introduction/what_is_jellyfish"},{"type":"link","label":"Basic Concepts","href":"/jellyfish-docs/next/introduction/basic_concepts","docId":"introduction/basic_concepts"},{"type":"link","label":"Example Scenarios","href":"/jellyfish-docs/next/introduction/example_scenarios","docId":"introduction/example_scenarios"}],"collapsible":true},{"type":"category","label":"Getting Started","collapsed":true,"items":[{"type":"link","label":"Installation","href":"/jellyfish-docs/next/getting_started/installation","docId":"getting_started/installation"},{"type":"link","label":"Architecture","href":"/jellyfish-docs/next/getting_started/architecture","docId":"getting_started/architecture"},{"type":"link","label":"Authentication","href":"/jellyfish-docs/next/getting_started/authentication","docId":"getting_started/authentication"},{"type":"link","label":"Notifications","href":"/jellyfish-docs/next/getting_started/notifications","docId":"getting_started/notifications"},{"type":"link","label":"Metrics","href":"/jellyfish-docs/next/getting_started/metrics","docId":"getting_started/metrics"},{"type":"link","label":"SDKs","href":"/jellyfish-docs/next/getting_started/sdks","docId":"getting_started/sdks"},{"type":"category","label":"Peers","collapsed":true,"items":[{"type":"link","label":"WebRTC","href":"/jellyfish-docs/next/getting_started/peers/webrtc","docId":"getting_started/peers/webrtc"}],"collapsible":true},{"type":"category","label":"Components","collapsed":true,"items":[{"type":"link","label":"HLS","href":"/jellyfish-docs/next/getting_started/components/hls","docId":"getting_started/components/hls"},{"type":"link","label":"RTSP","href":"/jellyfish-docs/next/getting_started/components/rtsp","docId":"getting_started/components/rtsp"}],"collapsible":true}],"collapsible":true},{"type":"category","label":"Tutorials","collapsed":true,"items":[{"type":"category","label":"Minimal Working Examples","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Jellyfish Dashboard","href":"/jellyfish-docs/next/tutorials/dashboard","docId":"tutorials/dashboard"},{"type":"link","label":"Simple React App","href":"/jellyfish-docs/next/tutorials/simple-react-app","docId":"tutorials/simple-react-app"},{"type":"link","label":"React Native","href":"/jellyfish-docs/next/tutorials/react-native","docId":"tutorials/react-native"}]}],"collapsible":true},{"type":"link","label":"Cluster","href":"/jellyfish-docs/next/cluster","docId":"cluster"},{"type":"category","label":"Deploying","collapsed":true,"items":[{"type":"link","label":"Cloud VPS with cloud-init","href":"/jellyfish-docs/next/deploying/vps","docId":"deploying/vps"},{"type":"link","label":"Fly.io (experimental)","href":"/jellyfish-docs/next/deploying/fly_io","docId":"deploying/fly_io"}],"collapsible":true},{"type":"link","label":"Benchmarks","href":"/jellyfish-docs/next/benchmarks","docId":"benchmarks"},{"type":"category","label":"For Developers","items":[{"type":"link","label":"Design Docs","href":"/jellyfish-docs/next/for_developers/design_docs","docId":"for_developers/design_docs"},{"type":"category","label":"API Reference","collapsed":true,"items":[{"type":"link","label":"Rest API","href":"/jellyfish-docs/next/for_developers/api_reference/rest_api","docId":"for_developers/api_reference/rest_api"}],"collapsible":true,"href":"/jellyfish-docs/next/for_developers/api_reference"}],"collapsed":true,"collapsible":true}]},"docs":{"benchmarks":{"id":"benchmarks","title":"Benchmarks","description":"Performance tests for our Jellyfish media server were carried out with particular emphasis","sidebar":"mainSidebar"},"cluster":{"id":"cluster","title":"Cluster","description":"Jellyfish comes with a built-in clustering mechanism.","sidebar":"mainSidebar"},"deploying/fly_io":{"id":"deploying/fly_io","title":"Fly.io (experimental)","description":"This deployment guide is experimental and may not reliably work each time or for every user.","sidebar":"mainSidebar"},"deploying/vps":{"id":"deploying/vps","title":"Cloud VPS with cloud-init","description":"We\'re encouraging you to use VPS as the most customizable option.","sidebar":"mainSidebar"},"examples":{"id":"examples","title":"Examples","description":"Jellyfish usage examples utilising server SDKs can be found in the following locations:"},"for_developers/api_reference":{"id":"for_developers/api_reference","title":"API Reference","description":"Jellyfish API is composed of three layers","sidebar":"mainSidebar"},"for_developers/api_reference/rest_api":{"id":"for_developers/api_reference/rest_api","title":"Rest API","description":"","sidebar":"mainSidebar"},"for_developers/design_docs":{"id":"for_developers/design_docs","title":"Design Docs","description":"Crucial parts of Jellyfish architecture are always discussed and written down in the form","sidebar":"mainSidebar"},"getting_started/architecture":{"id":"getting_started/architecture","title":"Architecture","description":"Jellyfish ships with a couple of SDKs that make it easier to manage its state, as well as","sidebar":"mainSidebar"},"getting_started/authentication":{"id":"getting_started/authentication","title":"Authentication","description":"The Authentication mechanism is based on a bearer token.","sidebar":"mainSidebar"},"getting_started/components/hls":{"id":"getting_started/components/hls","title":"HLS","description":"Creates HLS playlist that is ready to be broadcasted via CDN.","sidebar":"mainSidebar"},"getting_started/components/rtsp":{"id":"getting_started/components/rtsp","title":"RTSP","description":"Consumes a remote RTSP stream (e.g. from an IP camera).","sidebar":"mainSidebar"},"getting_started/installation":{"id":"getting_started/installation","title":"Installation","description":"There are two ways of running Jellyfish:","sidebar":"mainSidebar"},"getting_started/metrics":{"id":"getting_started/metrics","title":"Metrics","description":"Jellyfish exports several metrics in the Prometheus format.","sidebar":"mainSidebar"},"getting_started/notifications":{"id":"getting_started/notifications","title":"Notifications","description":"Jellyfish sends server side notifications whenever some important event occurs, e.g.:","sidebar":"mainSidebar"},"getting_started/peers/webrtc":{"id":"getting_started/peers/webrtc","title":"WebRTC","description":"WebRTC peer allows you to connect to Jellyfish via WebRTC standard.","sidebar":"mainSidebar"},"getting_started/sdks":{"id":"getting_started/sdks","title":"SDKs","description":"See here for more information about client and server SDKs.","sidebar":"mainSidebar"},"introduction/basic_concepts":{"id":"introduction/basic_concepts","title":"Basic Concepts","description":"This section outlines Jellyfish building blocks. We suggest reading this before","sidebar":"mainSidebar"},"introduction/example_scenarios":{"id":"introduction/example_scenarios","title":"Example Scenarios","description":"Below, we present example scenarios that can be achieved with Jellyfish.","sidebar":"mainSidebar"},"introduction/what_is_jellyfish":{"id":"introduction/what_is_jellyfish","title":"What is Jellyfish?","description":"Jellyfish is an open-source, general-purpose media server that ships with support for multiple media protocols.","sidebar":"mainSidebar"},"tutorials/dashboard":{"id":"tutorials/dashboard","title":"Jellyfish Dashboard","description":"What is Jellyfish Dashboard?","sidebar":"mainSidebar"},"tutorials/react-native":{"id":"tutorials/react-native","title":"React Native","description":"This guide expects that you have read Basic Concepts and Example Scenarios","sidebar":"mainSidebar"},"tutorials/simple-react-app":{"id":"tutorials/simple-react-app","title":"Simple React App","description":"What you\'ll learn","sidebar":"mainSidebar"}}}')}}]);