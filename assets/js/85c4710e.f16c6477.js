"use strict";(self.webpackChunkclients_tutorial=self.webpackChunkclients_tutorial||[]).push([[991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=a,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"quickstart/jellyfish-architecture",id:"quickstart/jellyfish-architecture",title:"jellyfish-architecture",description:"You can learn more about Jellyfish architecture in [Jellyfish",source:"@site/docs/quickstart/jellyfish-architecture.mdx",sourceDirName:"quickstart",slug:"/quickstart/jellyfish-architecture",permalink:"/jellyfish-clients-tutorials/docs/quickstart/jellyfish-architecture",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart/jellyfish-architecture.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"iOS Quickstart Guide",permalink:"/jellyfish-clients-tutorials/docs/quickstart/ios-quickstart"},next:{title:"React Native / Expo Quickstart Guide",permalink:"/jellyfish-clients-tutorials/docs/quickstart/react-native-quickstart"}},l={},c=[{value:"Connecting and joining the room",id:"connecting-and-joining-the-room",level:3}],u={toc:c},h="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(h,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can learn more about Jellyfish architecture in ",(0,a.kt)("a",{parentName:"p",href:"https://jellyfish-dev.github.io/jellyfish-docs/"},"Jellyfish\ndocs"),". This section provides a\nbrief description aimed at front-end developers")),(0,a.kt)("p",null,"Let's introduce some concepts first:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Peer")," - A peer is a client-side entity that connects to the server to\npublish, subscribe or publish and subscribe to tracks published by components\nor other peers. You can think of it as a participant in a room. At the moment,\nthere is only one type of peer - WebRTC."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Track")," - An object that represents an audio or video stream. A track can be\nassociated with a local media source, such as a camera or microphone, or a\nremote media source received from another user. Tracks are used to capture,\ntransmit, and receive audio and video data in WebRTC applications."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Room")," - In Jellyfish, a room serves as a holder for peers and components,\nits function varying based on application. From a front-end perspective, this will\nbe probably one meeting or a broadcast.")),(0,a.kt)("p",null,"For a better understanding of these concepts here is an example of a room that\nholds a standard WebRTC conference from a perspective of the User:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Room example",src:n(4291).Z,width:"1195",height:"1224"})),(0,a.kt)("p",null,"In this example, peers stream multiple video and audio tracks. Peer #1 streams\neven two video tracks (camera and screencast track). You can differentiate\nbetween them by using track metadata. The user gets info about peers and their\ntracks from the server using Jellyfish Client. The user is also informed in real\ntime about peers joining/leaving and tracks being added/removed."),(0,a.kt)("p",null,"To keep this tutorial short we'll simplify things a little. Every peer will stream just one\nvideo track."),(0,a.kt)("h3",{id:"connecting-and-joining-the-room"},"Connecting and joining the room"),(0,a.kt)("p",null,"The general flow of connecting to the server and joining the room in a standard\nWebRTC conference setup looks like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connecting and joing the room",src:n(1514).Z,width:"2668",height:"1031"})),(0,a.kt)("p",null,"The parts that you need to implement are marked in blue and things handled by\nJellyfish are marked in red."),(0,a.kt)("p",null,"Firstly, the user logs in. Then your backend authenticates the user and obtains\na peer token. It allows the user to authenticate and join the room in Jellyfish\nServer. The backend passes the token to your front-end, and your front-end passes\nit to Jellyfish Client. The client establishes the connection with Jellyfish\nServer. Then Jellyfish Client sets up tracks (camera, microphone) to stream and\njoins the room on Jellyfish Server. Finally, your front-end can display the room\nfor the user."),(0,a.kt)("p",null,"For this tutorial we simplified this process a bit - you don't have to implement\na backend or authentication. Jellyfish Dashboard will do this for you. It's also\na nice tool to test and play around with Jellyfish. The flow with Jellyfish\nDashboard looks like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connecting and joing the room with dashboard",src:n(4754).Z,width:"2668",height:"1031"})),(0,a.kt)("p",null,"You can see that the only things you need to implement are interactions with the\nuser and Jellyfish Client. This tutorial will show you how to do it."))}d.isMDXComponent=!0},1514:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/connection-ce8e7756cdcd65fe387cf34e617bea2e.png"},4754:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dashboard_connection-0c46d267a83447871297ff6f538dfc32.png"},4291:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/room_example-e9c6acb4df6063de5a8978dc6710b909.png"}}]);