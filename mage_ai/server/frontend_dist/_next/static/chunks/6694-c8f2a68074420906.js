"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6694],{44162:function(n,t,e){e.d(t,{HC:function(){return T},Kf:function(){return s},Nk:function(){return f},PY:function(){return p},gE:function(){return E},jv:function(){return b},nz:function(){return A},oh:function(){return d},qn:function(){return l},t1:function(){return O},y9:function(){return R}});var r=e(38626),o=e(23831),i=e(86422),c=e(73942),a=e(49125),u=e(90880),d=68;function l(n,t){var e,r,c=((null===t||void 0===t||null===(e=t.theme)||void 0===e?void 0:e.borders)||o.Z.borders).light,a=((null===t||void 0===t||null===(r=t.theme)||void 0===r?void 0:r.monotone)||o.Z.monotone).grey500,u=t||{},d=u.blockColor,l=u.isSelected,s=u.theme;return l?c=(s||o.Z).content.active:i.tf.TRANSFORMER===n||d===i.Lq.PURPLE?(c=(s||o.Z).accent.purple,a=(s||o.Z).accent.purpleLight):i.tf.DATA_EXPORTER===n||d===i.Lq.YELLOW?(c=(s||o.Z).accent.yellow,a=(s||o.Z).accent.yellowLight):i.tf.DATA_LOADER===n||d===i.Lq.BLUE?(c=(s||o.Z).accent.blue,a=(s||o.Z).accent.blueLight):i.tf.MARKDOWN===n?(c=(s||o.Z).accent.sky,a=(s||o.Z).accent.skyLight):i.tf.SENSOR===n||d===i.Lq.PINK?(c=(s||o.Z).accent.pink,a=(s||o.Z).accent.pinkLight):i.tf.DBT===n?(c=(s||o.Z).accent.dbt,a=(s||o.Z).accent.dbtLight):i.tf.EXTENSION===n||d===i.Lq.TEAL?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).teal,a=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).tealLight):i.tf.CALLBACK===n?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).rose,a=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).roseLight):(i.tf.CONDITIONAL===n||i.tf.SCRATCHPAD===n||d===i.Lq.GREY||i.tf.CUSTOM===n&&!d)&&(c=(s||o.Z).content.default,a=(s||o.Z).accent.contentDefaultTransparent),{accent:c,accentLight:a}}var s=(0,r.css)([""," "," "," "," "," "," ",""],(0,u.eR)(),(function(n){return!n.selected&&!n.hasError&&"\n    border-color: ".concat(l(n.blockType,n).accentLight,";\n  ")}),(function(n){return n.selected&&!n.hasError&&"\n    border-color: ".concat(l(n.blockType,n).accent,";\n  ")}),(function(n){return!n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.accent||o.Z.accent).negativeTransparent,";\n  ")}),(function(n){return n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.borders||o.Z.borders).danger,";\n  ")}),(function(n){return n.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(n){return n.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),f=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],c.n_),p=r.default.div.withConfig({displayName:"indexstyle__HiddenBlockContainerStyle",componentId:"sc-s5rj34-1"})([""," border-radius:","px;border-style:",";border-width:","px;",""],s,c.n_,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme||o.Z).background.content,";\n\n    &:hover {\n      border-color: ").concat(l(n.blockType,n).accent,";\n    }\n  ")})),A=r.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-2"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding:","px;position:sticky;top:-5px;"," "," ",""],s,c.n_,c.n_,c.M8,c.mP,c.M8,c.mP,c.M8,c.mP,a.iI,(function(n){return"\n    background-color: ".concat((n.theme||o.Z).background.content,";\n  ")}),(function(n){return n.bottomBorder&&"\n    border-bottom: ".concat(c.YF,"px ").concat(c.M8," ").concat((n.theme||o.Z).borders.medium2,";\n  ")}),(function(n){return n.zIndex&&"\n    z-index: ".concat(6+(n.zIndex||0),";\n  ")})),b=r.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-3"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding-bottom:","px;padding-top:","px;position:relative;"," "," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],s,c.M8,c.mP,c.M8,c.mP,a.iI,a.iI,(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).codeTextarea,";\n  ")}),(function(n){return n.lightBackground&&"\n    background-color: ".concat((n.theme||o.Z).background.content,";\n  ")}),(function(n){return!n.hasOutput&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom-style: ").concat(c.M8,";\n    border-bottom-width: ").concat(c.mP,"px;\n  ")})),E=r.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-4"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:8;bottom:","px;&:hover{"," .block-divider-inner{","}}"],2*a.iI,.5*a.iI,(function(n){return n.additionalZIndex>0&&"\n      z-index: ".concat(8+n.additionalZIndex,";\n    ")}),(function(n){return"\n        background-color: ".concat((n.theme.text||o.Z.text).fileBrowser,";\n      ")})),O=r.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-5"})(["height 1px;width:100%;position:absolute;z-index:-1;top:","px;"],1.5*a.iI),R=r.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-6"})(["margin-bottom:","px;padding-bottom:","px;",""],1*a.iI,1*a.iI,(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.borders||o.Z.borders).medium,";\n    padding-left: ").concat(n.normalPadding?a.iI:d,"px;\n  ")})),T=r.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-7"})(["bottom:","px;left:","px;position:absolute;"],1*a.iI,d)},60701:function(n,t,e){e.d(t,{Qq:function(){return f},Z7:function(){return p},cH:function(){return o},du:function(){return l},fp:function(){return d},j5:function(){return s},uM:function(){return u}});var r,o,i=e(82394),c=e(10503),a=e(24224),u="sideview",d=90;!function(n){n.ADDON_BLOCKS="addon_blocks",n.CALLBACKS="callbacks",n.CHARTS="charts",n.DATA="data",n.EXTENSIONS="power_ups",n.FILE_VERSIONS="file_versions",n.GRAPHS="graphs",n.REPORTS="reports",n.SECRETS="secrets",n.SETTINGS="settings",n.TERMINAL="terminal",n.TREE="tree",n.VARIABLES="variables"}(o||(o={}));o.CALLBACKS,o.CHARTS,o.DATA,o.EXTENSIONS,o.REPORTS,o.TREE;var l=[o.DATA,o.REPORTS,o.GRAPHS],s=[{key:o.TREE,label:"Tree"},{buildLabel:function(n){var t=(n.pipeline||{}).widgets,e=void 0===t?[]:t;return(null===e||void 0===e?void 0:e.length)>=1?"Charts (".concat(e.length,")"):"Charts"},key:o.CHARTS},{buildLabel:function(n){var t=n.variables;return(null===t||void 0===t?void 0:t.length)>=1?"Variables (".concat(t.length,")"):"Variables"},key:o.VARIABLES},{buildLabel:function(n){var t=n.secrets;return(null===t||void 0===t?void 0:t.length)>=1?"Secrets (".concat(t.length,")"):"Secrets"},key:o.SECRETS},{buildLabel:function(n){n.pipeline;return"Add-on blocks"},key:o.ADDON_BLOCKS},{buildLabel:function(n){var t=(n.pipeline||{}).extensions,e=void 0===t?{}:t,r=0;return Object.values(e).forEach((function(n){var t=n.blocks;r+=(null===t||void 0===t?void 0:t.length)||0})),r>=1?"Power ups (".concat(r,")"):"Power ups"},key:o.EXTENSIONS},{key:o.DATA,label:"Data"},{key:o.TERMINAL,label:"Terminal"}],f=(0,a.HK)(s,(function(n){return n.key})),p=(r={},(0,i.Z)(r,o.ADDON_BLOCKS,c.EJ),(0,i.Z)(r,o.CALLBACKS,c.AQ),(0,i.Z)(r,o.CHARTS,c.GQ),(0,i.Z)(r,o.DATA,c.iA),(0,i.Z)(r,o.EXTENSIONS,c.Bf),(0,i.Z)(r,o.GRAPHS,c.GQ),(0,i.Z)(r,o.REPORTS,c.Do),(0,i.Z)(r,o.SECRETS,c.Yo),(0,i.Z)(r,o.SETTINGS,c.Zr),(0,i.Z)(r,o.TERMINAL,c.oI),(0,i.Z)(r,o.TREE,c.mp),(0,i.Z)(r,o.VARIABLES,c.LO),r)},86422:function(n,t,e){e.d(t,{$W:function(){return A},DA:function(){return p},HX:function(){return O},J8:function(){return E},L8:function(){return c},Lq:function(){return s},M5:function(){return f},Qj:function(){return R},Ut:function(){return m},V4:function(){return g},VZ:function(){return b},dO:function(){return l},f2:function(){return h},iZ:function(){return T},t6:function(){return a},tf:function(){return d}});var r,o,i,c,a,u=e(82394);!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(c||(c={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(a||(a={}));var d,l=(r={},(0,u.Z)(r,a.MARKDOWN,"MD"),(0,u.Z)(r,a.PYTHON,"PY"),(0,u.Z)(r,a.R,"R"),(0,u.Z)(r,a.SQL,"SQL"),(0,u.Z)(r,a.YAML,"YAML"),r);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(d||(d={}));var s,f=[d.CALLBACK,d.CONDITIONAL,d.EXTENSION];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(s||(s={}));var p,A=[d.CHART,d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.SCRATCHPAD,d.SENSOR,d.MARKDOWN,d.TRANSFORMER],b=[d.DATA_EXPORTER,d.DATA_LOADER],E=[d.DATA_EXPORTER,d.DATA_LOADER,d.TRANSFORMER],O=[d.DATA_EXPORTER,d.DATA_LOADER,d.DBT,d.TRANSFORMER],R=[d.CHART,d.SCRATCHPAD,d.SENSOR,d.MARKDOWN],T=[d.CALLBACK,d.CHART,d.EXTENSION,d.SCRATCHPAD,d.MARKDOWN];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(p||(p={}));var h=[d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.TRANSFORMER],g=(o={},(0,u.Z)(o,d.CALLBACK,"Callback"),(0,u.Z)(o,d.CUSTOM,"Custom"),(0,u.Z)(o,d.DATA_EXPORTER,"Data exporter"),(0,u.Z)(o,d.DATA_LOADER,"Data loader"),(0,u.Z)(o,d.EXTENSION,"Extension"),(0,u.Z)(o,d.SCRATCHPAD,"Scratchpad"),(0,u.Z)(o,d.SENSOR,"Sensor"),(0,u.Z)(o,d.MARKDOWN,"Markdown"),(0,u.Z)(o,d.TRANSFORMER,"Transformer"),o),m=[d.DATA_LOADER,d.TRANSFORMER,d.DATA_EXPORTER,d.SENSOR];i={},(0,u.Z)(i,d.DATA_EXPORTER,"DE"),(0,u.Z)(i,d.DATA_LOADER,"DL"),(0,u.Z)(i,d.SCRATCHPAD,"SP"),(0,u.Z)(i,d.SENSOR,"SR"),(0,u.Z)(i,d.MARKDOWN,"MD"),(0,u.Z)(i,d.TRANSFORMER,"TF")},66176:function(n,t,e){var r=e(82394),o=e(91835),i=(e(82684),e(38626)),c=e(23831),a=e(73942),u=e(49125),d=e(28598);function l(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){(0,r.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var f=i.default.div.withConfig({displayName:"ProgressBar__ProgressBarContainerStyle",componentId:"sc-10x9ojc-0"})(["border-radius:","px;height:","px;overflow:hidden;position:relative;width:100%;",""],a.BG,.75*u.iI,(function(n){return"\n    background-color: ".concat((n.theme.monotone||c.Z.monotone).grey200,";\n  ")})),p=i.default.div.withConfig({displayName:"ProgressBar__ProgressBarStyle",componentId:"sc-10x9ojc-1"})(["height:inherit;position:absolute;"," "," "," ",""],(function(n){return!n.danger&&"\n    background-color: ".concat((n.theme.progress||c.Z.progress).positive,";\n  ")}),(function(n){return n.progress&&"\n    width: ".concat(n.progress,"%;\n  ")}),(function(n){return n.danger&&"\n    background-color: ".concat((n.theme.progress||c.Z.progress).negative,";\n  ")}),(function(n){return n.animateProgress&&"\n    animation: animate-progress ".concat(n.animateProgress.duration,"ms linear forwards;\n\n    @keyframes animate-progress {\n      0% {\n        width: ").concat(n.animateProgress.start,"%;\n      }\n\n      100% {\n        width: ").concat(n.animateProgress.end,"%;\n      }\n    }\n  ")}));t.Z=function(n){var t=(0,o.Z)({},n);return(0,d.jsx)(f,s(s({},t),{},{children:(0,d.jsx)(p,s({},t))}))}},33766:function(n,t,e){e.d(t,{O2:function(){return s},g_:function(){return p},u7:function(){return f}});var r=e(75582),o=e(82394),i=e(34376),c=e.n(i),a=e(59e3),u=e(24224);function d(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?d(Object(e),!0).forEach((function(t){(0,o.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var s="_offset";function f(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.preserveParams,o=t.pushHistory,i=t.replaceParams,u=(0,a.iV)(),d={};e&&e.forEach((function(n){u[n]&&(d[n]=u[n])}));var s,f=i?d:u;s=window.location.pathname;var p=o?c().push:c().replace,A=l(l({},f),n);Object.entries(n).forEach((function(n){var t=(0,r.Z)(n,2),e=t[0],o=t[1];"undefined"!==typeof o&&null!==o||delete A[e]}));var b=(0,a.uM)(A);b.length>=1&&(b="?".concat(b));var E="".concat(s.split("?")[0]).concat(b);return p(c().router.pathname,E,{shallow:!0})}function p(n,t,e){var o=e.addingMultipleValues,i=e.isList,c=e.itemsPerPage,a=e.pushHistory,d=void 0!==a&&a,p=e.resetLimitParams,A=l({},n);o?Object.entries(t).forEach((function(n){var t=(0,r.Z)(n,2),e=t[0],o=t[1];if(Array.isArray(o)){var i="".concat(e,"[]");A[i]=o.map(String)}})):i?Object.entries(t).forEach((function(n){var t=(0,r.Z)(n,2),e=t[0],o=t[1],i=String(o),c="".concat(e,"[]"),a=A[c];a&&Array.isArray(a)?(a=a.map(String)).includes(i)?A[c]=(0,u.Od)(a,(function(n){return n===i})):A[c]=a.concat(i):A[c]=[i]})):A=l(l({},A),t),p&&(A._limit=c||20,A[s]=0),f(A,{pushHistory:d})}}}]);