System.register(["./index-legacy-DeNtW0lD.js"],(function(t,e){"use strict";var r,n,o;return{setters:[t=>{r=t.G,n=t.i,o=t.c}],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
const e=(t,e,r,n)=>{const o=!!s(t)&&{capture:!1,passive:!!n.passive};let c,i;return t.__zone_symbol__addEventListener?(c="__zone_symbol__addEventListener",i="__zone_symbol__removeEventListener"):(c="addEventListener",i="removeEventListener"),t[c](e,r,o),()=>{t[i](e,r,o)}},s=t=>{if(void 0===c)try{const e=Object.defineProperty({},"passive",{get:()=>{c=!0}});t.addEventListener("optsTest",(()=>{}),e)}catch(e){c=!1}return!!c};let c;const i=t=>t instanceof Document?t:t.ownerDocument,a=t=>{let n=!1,o=!1,s=!0,c=!1;const a=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),v=a.canStart,m=a.onWillStart,y=a.onStart,X=a.onEnd,h=a.notCaptured,p=a.onMove,Y=a.threshold,g=a.passive,b=a.blurOnStart,f={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},_=((t,e,r)=>{const n=r*(Math.PI/180),o="x"===t,s=Math.cos(n),c=e*e;let i=0,a=0,u=!1,l=0;return{start(t,e){i=t,a=e,l=0,u=!0},detect(t,e){if(!u)return!1;const r=t-i,n=e-a,d=r*r+n*n;if(d<c)return!1;const v=Math.sqrt(d),m=(o?r:n)/v;return l=m>s?1:m<-s?-1:0,u=!1,!0},isGesture:()=>0!==l,getDirection:()=>l}})(a.direction,a.threshold,a.maxAngle),S=r.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),T=()=>{n&&(c=!1,p&&p(f))},w=()=>!!S.capture()&&(n=!0,s=!1,f.startX=f.currentX,f.startY=f.currentY,f.startTime=f.currentTime,m?m(f).then(E):E(),!0),E=()=>{b&&(()=>{if("undefined"!=typeof document){const t=document.activeElement;(null==t?void 0:t.blur)&&t.blur()}})(),y&&y(f),s=!0},D=()=>{n=!1,o=!1,c=!1,s=!0,S.release()},M=t=>{const e=n,r=s;D(),r&&(u(f,t),e?X&&X(f):h&&h(f))},x=((t,r,n,o,s)=>{let c,a,u,l,d,v,m,y=0;const X=o=>{y=Date.now()+2e3,r(o)&&(!a&&n&&(a=e(t,"touchmove",n,s)),u||(u=e(o.target,"touchend",p,s)),l||(l=e(o.target,"touchcancel",p,s)))},h=o=>{y>Date.now()||r(o)&&(!v&&n&&(v=e(i(t),"mousemove",n,s)),m||(m=e(i(t),"mouseup",Y,s)))},p=t=>{g(),o&&o(t)},Y=t=>{b(),o&&o(t)},g=()=>{a&&a(),u&&u(),l&&l(),a=u=l=void 0},b=()=>{v&&v(),m&&m(),v=m=void 0},f=()=>{g(),b()},_=(r=!0)=>{r?(c||(c=e(t,"touchstart",X,s)),d||(d=e(t,"mousedown",h,s))):(c&&c(),d&&d(),c=d=void 0,f())};return{enable:_,stop:f,destroy:()=>{_(!1),o=n=r=void 0}}})(a.el,(t=>{const e=d(t);return!(o||!s)&&(l(t,f),f.startX=f.currentX,f.startY=f.currentY,f.startTime=f.currentTime=e,f.velocityX=f.velocityY=f.deltaX=f.deltaY=0,f.event=t,(!v||!1!==v(f))&&(S.release(),!!S.start()&&(o=!0,0===Y?w():(_.start(f.startX,f.startY),!0))))}),(t=>{n?!c&&s&&(c=!0,u(f,t),requestAnimationFrame(T)):(u(f,t),_.detect(f.currentX,f.currentY)&&(_.isGesture()&&w()||L()))}),M,{passive:g}),L=()=>{D(),x.stop(),h&&h(f)};return{enable(t=!0){t||(n&&M(void 0),D()),x.enable(t)},destroy(){S.destroy(),x.destroy()}}},u=(t,e)=>{if(!e)return;const r=t.currentX,n=t.currentY,o=t.currentTime;l(e,t);const s=t.currentX,c=t.currentY,i=(t.currentTime=d(e))-o;if(i>0&&i<100){const e=(s-r)/i,o=(c-n)/i;t.velocityX=.7*e+.3*t.velocityX,t.velocityY=.7*o+.3*t.velocityY}t.deltaX=s-t.startX,t.deltaY=c-t.startY,t.event=e},l=(t,e)=>{let r=0,n=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];r=t.clientX,n=t.clientY}else void 0!==t.pageX&&(r=t.pageX,n=t.pageY)}e.currentX=r,e.currentY=n},d=t=>t.timeStamp||Date.now();t("createSwipeBackGesture",((t,e,r,s,c)=>{const i=t.ownerDocument.defaultView;let u=n(t);const l=t=>u?-t.deltaX:t.deltaX;return a({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:r=>(u=n(t),(t=>{const{startX:e}=t;return u?e>=i.innerWidth-50:e<=50})(r)&&e()),onStart:r,onMove:t=>{const e=l(t)/i.innerWidth;s(e)},onEnd:t=>{const e=l(t),r=i.innerWidth,n=e/r,s=(t=>u?-t.velocityX:t.velocityX)(t),a=s>=0&&(s>.2||e>r/2),d=(a?1-n:n)*r;let v=0;if(d>5){const t=d/Math.abs(s);v=Math.min(t,540)}c(a,n<=0?.01:o(0,n,.9999),v)}})}))}}}));
