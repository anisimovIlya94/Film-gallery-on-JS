(()=>{"use strict";var n,t,e,r,o,i,a,c,s,l,d,p,u,f,h={426:(n,t,e)=>{e.d(t,{Z:()=>c});var r=e(81),o=e.n(r),i=e(645),a=e.n(i)()(o());a.push([n.id,"body {\n  padding: 10px;\n  margin: 0;\n  background: #e9eefb;\n  min-height: 100vh;\n  max-height: 100vh;\n  height: 100vh;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 10px;\n  line-height: 10px;\n  font-family: 'Roboto', sans-serif;\n}\n\nbutton {\n  background: none;\n  border: none;\n  outline: none;\n}\n\n.film-cards-container__title {\n  font-size: 30px;\n  line-height: 35px;\n}\n\n.film-cards-container__favourite-films {\n  cursor: pointer;\n  font-size: 20px;\n  line-height: 25px;\n  margin-bottom: 50px;\n  border-radius: 5px;\n  transition: 0.2s;\n}\n\n.film-card__poster {\n  width: fit-content;\n  height: fit-content;\n  max-height: 350px;\n  height: 350px;\n  max-width: 235px;\n  width: 235px;\n  border-radius: 30px;\n  object-fit: cover;\n  margin-bottom: 30px;\n}\n\n.film-cards-container__favourite-films:hover {\n  background-color: rgb(197, 197, 197);\n}\n\n.film-cards-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 90px;\n  max-width: 900px;\n  gap: 50px 30px;\n  flex-wrap: wrap;\n  font-size: 2rem;\n  line-height: 2.1rem;\n  margin: 0 auto;\n}\n\n.film-cards-container .film-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 30%;\n  min-width: 235px;\n}\n\n@media (max-width: 700px) {\n  .film-cards-container {\n    justify-content: center;\n  }\n}\n\n.film-card__title {\n  cursor: pointer;\n  font-size: 2.5rem;\n  line-height: 3rem;\n  font-weight: 500;\n  text-decoration: none;\n  margin-bottom: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: center;\n  max-width: 80%;\n}\n\n.film-card__title:hover {\n  text-decoration: underline;\n}\n\n.modal .film-card__title:hover {\n  cursor: auto;\n  text-decoration: none;\n}\n\n.film-card__year {\n  font-size: 15px;\n  line-height: 20px;\n  font-style: italic;\n  margin-bottom: 10px;\n}\n\n.film-card__description {\n  font-size: 23px;\n  font-weight: 700;\n}\n\n.film-card__button {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.modal .film-card__button {\n  cursor: auto;\n}\n\n.film-card__button-img {\n  width: 30px;\n  height: 30px;\n}\n\n.modal {\n  position: fixed;\n  display: flex;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n  min-height: 100vh;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.close-modal {\n  cursor: pointer;\n  height: 40px;\n  width: 40px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  right: -50px;\n}\n.close-modal-icon {\n  height: 40px;\n  width: 40px;\n}\n\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  background-color: white;\n  height: 600px;\n  width: 600px;\n  margin: auto;\n  padding: 30px 0;\n  border-radius: 30px;\n  position: relative;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n}\n",""]);const c=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);t[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var d=e(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},m={};function x(n){var t=m[n];if(void 0!==t)return t.exports;var e=m[n]={id:n,exports:{}};return h[n](e,e.exports,x),e.exports}x.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return x.d(t,{a:t}),t},x.d=(n,t)=>{for(var e in t)x.o(t,e)&&!x.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},x.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),x.nc=void 0,n=x(379),t=x.n(n),e=x(795),r=x.n(e),o=x(569),i=x.n(o),a=x(565),c=x.n(a),s=x(216),l=x.n(s),d=x(589),p=x.n(d),u=x(426),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals})();