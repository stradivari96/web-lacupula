(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{302:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,s,u,l;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(!a(e[s],i[s]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!a(s.value[1],i.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,u[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!a(e[u[s]],i[u[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},866:function(e,t,r){"use strict";var n,o=r(294),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):r&&(s=r(s))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},76:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Te}});var n,o,a,i,c=r(294),s=r(444),u=function(e){var t=e.children;return c.createElement(c.Fragment,null,c.createElement("div",{className:"mx-10 sm:mx-20 md:mx-30 lg:mx-40 py-5 max-w-full"},c.createElement("div",{className:"sm:flex items-center flex-wrap"},c.createElement(s.rU,{className:"font-bold text-3xl flex-grow",to:"/"},"Restaurante Hong Kong"),c.createElement("div",{className:"flex sm:flex-row sm:w-64 flex-wrap text-center"},c.createElement("a",{className:"font-light text-xl hover:text-yellow-600",href:"tel:618085634"},"Tel: 618 08 56 34"),c.createElement("a",{className:"font-light text-xl hover:text-yellow-600 w-5 my-auto mx-2",href:"https://wa.me/34618085634"},c.createElement("svg",{className:"fill-current text-green-500",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},c.createElement("title",null,"WhatsApp"),c.createElement("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"}))))),c.createElement("main",{className:"py-2"},t)))},l=r(697),f=r.n(l),p=r(866),m=r.n(p),d=r(302),h=r.n(d),y=r(494),b=r.n(y),g="bodyAttributes",w="htmlAttributes",T="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(v).map((function(e){return v[e]})),"charset"),x="cssText",A="href",C="http-equiv",O="innerHTML",S="itemprop",j="name",N="property",k="rel",P="src",L="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",R="defer",_="encodeSpecialCharacters",D="onChangeClientState",H="titleTemplate",B=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),q=[v.NOSCRIPT,v.SCRIPT,v.STYLE],F="data-react-helmet",Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},K=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},$=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=ee(e,v.TITLE),r=ee(e,H);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=ee(e,M);return t||n||void 0},G=function(e){return ee(e,D)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},X=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+Y(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],s=c.toLowerCase();-1===t.indexOf(s)||r===k&&"canonical"===e[r].toLowerCase()||s===k&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==O&&c!==x&&c!==S||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],s=b()({},n[c],o[c]);n[c]=s}return e}),[]).reverse()},ee=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},te=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){te(e)}),0)}),re=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||te:r.g.requestAnimationFrame||te,oe="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||re:r.g.cancelAnimationFrame||re,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ce=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;le(v.BODY,n),le(v.HTML,o),ue(f,p);var m={baseTag:fe(v.BASE,r),linkTags:fe(v.LINK,a),metaTags:fe(v.META,i),noscriptTags:fe(v.NOSCRIPT,c),scriptTags:fe(v.SCRIPT,u),styleTags:fe(v.STYLE,l)},d={},h={};Object.keys(m).forEach((function(e){var t=m[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=m[e].oldTags)})),t&&t(),s(e,d,h)},se=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=se(e)),le(v.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(F),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";r.getAttribute(s)!==u&&r.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var l=a.indexOf(s);-1!==l&&a.splice(l,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute(F):r.getAttribute(F)!==i.join(",")&&r.setAttribute(F,i.join(","))}},fe=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===x)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(F,"true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},pe=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[I[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[F]=!0,o=me(r,n),[c.createElement(v.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=pe(r),a=se(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+$(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+$(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case w:return{toComponent:function(){return me(t)},toString:function(){return pe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[F]=!0,n);return Object.keys(t).forEach((function(e){var r=I[e]||e;if(r===O||r===x){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===O||e===x)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+$(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},he=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:de(v.BASE,t,n),bodyAttributes:de(g,r,n),htmlAttributes:de(w,o,n),link:de(v.LINK,a,n),meta:de(v.META,i,n),noscript:de(v.NOSCRIPT,c,n),script:de(v.SCRIPT,s,n),style:de(v.STYLE,u,n),title:de(v.TITLE,{title:f,titleAttributes:p},n)}},ye=m()((function(e){return{baseTag:Q([A,L],e),bodyAttributes:J(g,e),defer:ee(e,R),encode:ee(e,_),htmlAttributes:J(w,e),linkTags:X(v.LINK,[k,A],e),metaTags:X(v.META,[j,E,C,N,S],e),noscriptTags:X(v.NOSCRIPT,[O],e),onChangeClientState:G(e),scriptTags:X(v.SCRIPT,[P,O],e),styleTags:X(v.STYLE,[x],e),title:Z(e),titleAttributes:J(T,e)}}),(function(e){ie&&oe(ie),e.defer?ie=ne((function(){ce(e,(function(){ie=null}))})):(ce(e),ie=null)}),he)((function(){return null})),be=(o=ye,i=a=function(e){function t(){return U(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!h()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return z({},n,((t={})[r.type]=[].concat(n[r.type]||[],[z({},o,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case v.TITLE:return z({},o,((t={})[n.type]=i,t.titleAttributes=z({},a),t));case v.BODY:return z({},o,{bodyAttributes:z({},a)});case v.HTML:return z({},o,{htmlAttributes:z({},a)})}return z({},o,((r={})[n.type]=z({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=z({},t);return Object.keys(e).forEach((function(t){var n;r=z({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[B[r]||r]=e[r],t}),t)}(W(o,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=W(e,["children"]),n=z({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},K(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:f().object,bodyAttributes:f().object,children:f().oneOfType([f().arrayOf(f().node),f().node]),defaultTitle:f().string,defer:f().bool,encodeSpecialCharacters:f().bool,htmlAttributes:f().object,link:f().arrayOf(f().object),meta:f().arrayOf(f().object),noscript:f().arrayOf(f().object),onChangeClientState:f().func,script:f().arrayOf(f().object),style:f().arrayOf(f().object),title:f().string,titleAttributes:f().object,titleTemplate:f().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=he({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);be.renderStatic=be.rewind;function ge(e){var t=e.description,r=e.lang,n=e.meta,o=e.title,a=(0,s.K2)("63159454").site,i=t||a.siteMetadata.description;return c.createElement(be,{htmlAttributes:{lang:r},title:o,titleTemplate:"%s | "+a.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(n)})}ge.defaultProps={lang:"en",meta:[],description:""};var we=ge,Te=function(){var e,t,r="bg-white inline-block py-2 px-4 font-semibold",n="border-l border-t border-r rounded-t text-gray-700",o="text-gray-500 hover:text-gray-800";return"undefined"!=typeof window&&(t=window.location.hash),["#es","#en","#de","#dim","#dessert","#wines"].includes(t)||(t="#es"),t=t.substring(1),c.createElement(u,null,c.createElement(we,{title:"Home"}),c.createElement("ul",{className:"flex border-b flex-wrap"},c.createElement("li",{className:("es"===t?"-mb-px":"")+" mr-1"},c.createElement("a",{className:r+" "+("es"===t?n:o),href:"#es"},"Español")),c.createElement("li",{className:("en"===t?"-mb-px":"")+" mr-1"},c.createElement("a",{className:r+" "+("en"===t?n:o),href:"#en"},"English")),c.createElement("li",{className:("de"===t?"-mb-px":"")+" mr-1"},c.createElement("a",{className:r+" "+("de"===t?n:o),href:"#de"},"Deutsch")),c.createElement("li",{className:("dim"===t?"-mb-px":"")+" mr-1"},c.createElement("a",{className:r+" "+("dim"===t?n:o),href:"#dim"},"Dim sum")),c.createElement("li",{className:("wines"===t?"-mb-px":"")+" mr-1"},c.createElement("a",{className:r+" "+("wines"===t?n:o),href:"#wines"},"Wines/Vinos")),c.createElement("li",{className:("dessert"===t?"-mb-px":"")+" mr-1"},c.createElement("a",{className:r+" "+("dessert"===t?n:o),href:"#dessert"},"Desserts"))),["es","en","de"].includes(t)&&c.createElement("img",((e={className:"mx-auto"}).className="xl:w-2/3 mx-auto",e.alt="",e.src="/drinks.jpg",e)),[1,2,3,4].map((function(e){return c.createElement("img",{alt:"",key:e,className:"xl:w-2/3 mx-auto",src:"/menu-"+t+"-"+e+".jpg"})})),["es","en","de"].includes(t)&&c.createElement("img",{className:"mx-auto",alt:"",src:"/allergens.jpg"}),"dim"===t&&[1,2,3,4].map((function(e){return c.createElement("img",{alt:"",className:"xl:w-2/3 mx-auto",key:e,src:"/dim-"+e+".jpg"})})),"wines"===t&&c.createElement("img",{alt:"",className:"xl:w-2/3 mx-auto",src:"/wines.jpg"}),"dessert"===t&&[1,2,3,4,5].map((function(e){return c.createElement("img",{alt:"",className:"xl:w-2/3 mx-auto",key:e,src:"/dessert-"+e+".jpg"})})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-02d372a08688bfc9236b.js.map