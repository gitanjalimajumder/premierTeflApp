(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{aYbf:function(e,t,n){"use strict";n.r(t),n.d(t,"startInputShims",(function(){return startInputShims}));var o=n("W6o/");const r=new WeakMap,relocateInput=(e,t,n,o=0)=>{r.has(e)!==n&&(n?addClone(e,t,o):removeClone(e,t))},isFocused=e=>e===e.getRootNode().activeElement,addClone=(e,t,n)=>{const o=t.parentNode,i=t.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o.appendChild(i),r.set(e,i);const s="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${s}px,${n}px,0) scale(0)`},removeClone=(e,t)=>{const n=r.get(e);n&&(r.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},i="input, textarea, [no-blur], [contenteditable]",calcScrollData=(e,t,n,o)=>{const r=e.top,i=e.bottom,s=t.top,a=s+15,c=.75*Math.min(t.bottom,o-n)-i,l=a-r,d=Math.round(c<0?-c:l>0?-l:0),u=Math.min(d,r-s),m=Math.abs(u);return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,m/.3)),scrollPadding:n,inputSafeY:4-(r-a)}},jsSetFocus=async(e,t,n,r,i)=>{if(!n&&!r)return;const s=((e,t,n)=>{const o=e.closest("ion-item,[ion-item]")||e;return calcScrollData(o.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)})(e,n||r,i);if(n&&Math.abs(s.scrollAmount)<4)return t.focus(),void 0;if(relocateInput(e,t,!0,s.inputSafeY),t.focus(),Object(o.r)((()=>e.click())),"undefined"!=typeof window){let o;const scrollContent=async()=>{void 0!==o&&clearTimeout(o),window.removeEventListener("ionKeyboardDidShow",doubleKeyboardEventListener),window.removeEventListener("ionKeyboardDidShow",scrollContent),n&&await n.scrollByPoint(0,s.scrollAmount,s.scrollDuration),relocateInput(e,t,!1,s.inputSafeY),t.focus()},doubleKeyboardEventListener=()=>{window.removeEventListener("ionKeyboardDidShow",doubleKeyboardEventListener),window.addEventListener("ionKeyboardDidShow",scrollContent)};if(n){const e=await n.getScrollElement();if(s.scrollAmount>e.scrollHeight-e.clientHeight-e.scrollTop)return"password"===t.type?(s.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",doubleKeyboardEventListener)):window.addEventListener("ionKeyboardDidShow",scrollContent),o=setTimeout(scrollContent,1e3),void 0}scrollContent()}},hasPointerMoved=(e,t,n)=>{if(t&&n){const o=t.x-n.x,r=t.y-n.y;return o*o+r*r>e*e}return!1},s="$ionPaddingTimer",setScrollPadding=(e,t)=>{if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if(e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)return;const n=e.closest("ion-content");if(null===n)return;const o=n[s];o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset",`${t}px`):n[s]=setTimeout((()=>{n.style.setProperty("--keyboard-offset","0px")}),120)},startInputShims=e=>{const t=document,n=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),s=e.getBoolean("hideCaretOnScroll",!0),a=e.getBoolean("inputBlurring",!0),c=e.getBoolean("scrollPadding",!0),l=Array.from(t.querySelectorAll("ion-input, ion-textarea")),d=new WeakMap,u=new WeakMap,registerInput=async e=>{await new Promise((t=>Object(o.c)(e,t)));const t=e.shadowRoot||e,i=t.querySelector("input")||t.querySelector("textarea"),a=e.closest("ion-content"),c=a?null:e.closest("ion-footer");if(i){if(a&&s&&!d.has(e)){const t=((e,t,n)=>{if(!n||!t)return()=>{};const scrollHideCaret=n=>{isFocused(t)&&relocateInput(e,t,n)},onBlur=()=>relocateInput(e,t,!1),hideCaret=()=>scrollHideCaret(!0),showCaret=()=>scrollHideCaret(!1);return Object(o.a)(n,"ionScrollStart",hideCaret),Object(o.a)(n,"ionScrollEnd",showCaret),t.addEventListener("blur",onBlur),()=>{Object(o.b)(n,"ionScrollStart",hideCaret),Object(o.b)(n,"ionScrollEnd",showCaret),t.addEventListener("ionBlur",onBlur)}})(e,i,a);d.set(e,t)}if((a||c)&&r&&!u.has(e)){const t=((e,t,n,r,i)=>{let s;const touchStart=e=>{s=Object(o.p)(e)},touchEnd=a=>{if(!s)return;const c=Object(o.p)(a);hasPointerMoved(6,s,c)||isFocused(t)||(a.stopPropagation(),jsSetFocus(e,t,n,r,i))};return e.addEventListener("touchstart",touchStart,!0),e.addEventListener("touchend",touchEnd,!0),()=>{e.removeEventListener("touchstart",touchStart,!0),e.removeEventListener("touchend",touchEnd,!0)}})(e,i,a,c,n);u.set(e,t)}}};a&&(()=>{let e=!0,t=!1;const n=document,onScroll=()=>{t=!0},onFocusin=()=>{e=!0},onTouchend=o=>{if(t)return t=!1,void 0;const r=n.activeElement;if(!r)return;if(r.matches(i))return;const s=o.target;s!==r&&(s.matches(i)||s.closest(i)||(e=!1,setTimeout((()=>{e||r.blur()}),50)))};return Object(o.a)(n,"ionScrollStart",onScroll),n.addEventListener("focusin",onFocusin,!0),n.addEventListener("touchend",onTouchend,!1),()=>{Object(o.b)(n,"ionScrollStart",onScroll,!0),n.removeEventListener("focusin",onFocusin,!0),n.removeEventListener("touchend",onTouchend,!1)}})(),c&&(e=>{const t=document,onFocusin=t=>{setScrollPadding(t.target,e)},onFocusout=e=>{setScrollPadding(e.target,0)};t.addEventListener("focusin",onFocusin),t.addEventListener("focusout",onFocusout)})(n);for(const e of l)registerInput(e);t.addEventListener("ionInputDidLoad",(e=>{registerInput(e.detail)})),t.addEventListener("ionInputDidUnload",(e=>{(e=>{if(s){const t=d.get(e);t&&t(),d.delete(e)}if(r){const t=u.get(e);t&&t(),u.delete(e)}})(e.detail)}))}}}]);