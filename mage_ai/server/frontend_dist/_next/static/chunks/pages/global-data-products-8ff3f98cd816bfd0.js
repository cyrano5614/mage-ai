(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3928],{1210:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(82394),o=n(21831),i=n(82684),u=n(47999),c=n(49894),l=n(93461),s=n(57384),d=n(41424),a=n(72454),f=n(28598);function p(e,t){var n=e.children;return(0,f.jsx)(a.HS,{ref:t,children:n})}var v=i.forwardRef(p),h=n(32063),b=n(85019),j=n(82531),O=n(66166),w=n(3055),m=n(49125),_=n(91427),y=n(24141);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t,n=e.addProjectBreadcrumbToCustomBreadcrumbs,r=e.after,p=e.afterHidden,g=e.afterWidth,P=e.afterWidthOverride,Z=e.before,E=e.beforeWidth,k=e.breadcrumbs,C=e.children,I=e.errors,D=e.headerMenuItems,M=e.headerOffset,S=e.mainContainerHeader,H=e.navigationItems,N=e.setErrors,U=e.subheaderChildren,A=e.title,R=e.uuid,W=(0,y.i)().width,B="dashboard_after_width_".concat(R),T="dashboard_before_width_".concat(R),F=(0,i.useRef)(null),L=(0,i.useState)(P?g:(0,_.U2)(B,g)),z=L[0],G=L[1],X=(0,i.useState)(!1),K=X[0],q=X[1],J=(0,i.useState)(Z?Math.max((0,_.U2)(T,E),13*m.iI):null),Q=J[0],V=J[1],Y=(0,i.useState)(!1),$=Y[0],ee=Y[1],te=(0,i.useState)(null)[1],ne=j.ZP.projects.list({},{revalidateOnFocus:!1}).data,re=null===ne||void 0===ne?void 0:ne.projects,oe={label:function(){var e;return null===re||void 0===re||null===(e=re[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},ie=[];k?(n&&ie.push(oe),ie.push.apply(ie,(0,o.Z)(k))):(null===re||void 0===re?void 0:re.length)>=1&&ie.push.apply(ie,[oe,{bold:!0,label:function(){return A}}]),(0,i.useEffect)((function(){null===F||void 0===F||!F.current||K||$||null===te||void 0===te||te(F.current.getBoundingClientRect().width)}),[K,z,$,Q,F,te,W]),(0,i.useEffect)((function(){K||(0,_.t8)(B,z)}),[p,K,z,B]),(0,i.useEffect)((function(){$||(0,_.t8)(T,Q)}),[$,Q,T]);var ue=(0,O.Z)(g);return(0,i.useEffect)((function(){P&&ue!==g&&G(g)}),[P,g,ue]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.Z,{title:A}),(0,f.jsx)(d.Z,{breadcrumbs:ie,menuItems:D,project:null===re||void 0===re?void 0:re[0],version:null===re||void 0===re||null===(t=re[0])||void 0===t?void 0:t.version}),(0,f.jsxs)(a.Nk,{children:[0!==(null===H||void 0===H?void 0:H.length)&&(0,f.jsx)(a.lm,{showMore:!0,children:(0,f.jsx)(b.Z,{navigationItems:H,showMore:!0})}),(0,f.jsx)(l.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(h.Z,{after:r,afterHeightOffset:w.Mz,afterHidden:p,afterMousedownActive:K,afterWidth:z,before:Z,beforeHeightOffset:w.Mz,beforeMousedownActive:$,beforeWidth:a.k1+(Z?Q:0),headerOffset:M,hideAfterCompletely:!0,leftOffset:Z?a.k1:null,mainContainerHeader:S,mainContainerRef:F,setAfterMousedownActive:q,setAfterWidth:G,setBeforeMousedownActive:ee,setBeforeWidth:V,children:[U&&(0,f.jsx)(v,{children:U}),C]})})]}),I&&(0,f.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===N||void 0===N?void 0:N(null)},children:(0,f.jsx)(c.Z,x(x({},I),{},{onClose:function(){return null===N||void 0===N?void 0:N(null)}}))})]})}},30119:function(e,t,n){"use strict";var r;n.d(t,{b:function(){return r}}),function(e){e.BLOCK="block",e.PIPELINE="pipeline"}(r||(r={}))},61293:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(77837),o=n(38860),i=n.n(o),u=n(12691),c=n.n(u),l=n(82684),s=n(34376),d=n(1210),a=n(30119),f=n(10919),p=n(87815),v=n(19711),h=n(82531),b=n(66653),j=n(28598);var O=function(){var e=(0,s.useRouter)(),t=h.ZP.global_data_products.list().data,n=(0,l.useMemo)((function(){return(null===t||void 0===t?void 0:t.global_data_products)||[]}),[t]);return(0,j.jsx)(d.Z,{title:"Global data products",uuid:"GlobalDataProducts/index",children:(0,j.jsx)(p.Z,{columnFlex:[1,null,null],columns:[{uuid:"UUID"},{uuid:"Object type"},{uuid:"Object UUID"}],onClickRow:function(t){var r=null===n||void 0===n?void 0:n[t];r&&e.push("/global-data-products/[...slug]","/global-data-products/".concat(null===r||void 0===r?void 0:r.uuid))},rows:null===n||void 0===n?void 0:n.map((function(t){var n=t.object_type,r=t.object_uuid,o=t.uuid,i={as:null,href:null};return a.b.PIPELINE===n&&(i.as="/pipelines/".concat(r,"/edit"),i.href="/pipelines/[pipeline]/edit"),[(0,j.jsx)(v.ZP,{monospace:!0,children:o},"uuid"),(0,j.jsx)(v.ZP,{default:!0,monospace:!0,children:n},"objectType"),(0,j.jsx)(c(),{as:null===i||void 0===i?void 0:i.as,href:null===i||void 0===i?void 0:i.href,passHref:!0,children:(0,j.jsx)(f.Z,{default:!0,monospace:!0,onClick:function(t){(0,b.j)(t),e.push(i.href,i.as)},preventDefault:!0,children:r})},"objectUUID")]})),uuid:"global-data-products"})})},w=n(41788);function m(){return(0,j.jsx)(O,{})}m.getInitialProps=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var _=(0,w.Z)(m)},42692:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/global-data-products",function(){return n(61293)}])},80022:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},15544:function(e,t,n){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n.d(t,{Z:function(){return r}})},99177:function(e,t,n){"use strict";function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,{Z:function(){return o}})},93189:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(12539),o=n(80022);function i(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}}},function(e){e.O(0,[844,1424,1005,7815,9774,2888,179],(function(){return t=42692,e(e.s=t);var t}));var t=e.O();_N_E=t}]);