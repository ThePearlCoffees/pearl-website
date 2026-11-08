(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,19304,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(22016),o=e.i(18566),n=e.i(32181),i=e.i(73422),l=e.i(94208),s=e.i(30028);function c(e,t){return new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",hourCycle:"h23",timeZone:e}).format(t)}function u({className:e=""}){let[r,o]=(0,a.useState)(null);return((0,a.useEffect)(()=>{o(new Date);let e=window.setInterval(()=>o(new Date),3e4);return()=>clearInterval(e)},[]),r)?(0,t.jsxs)("span",{className:`tracked tabular-nums ${e}`,children:[i.j.clockIndia," ",c("Asia/Kolkata",r)," · ",i.j.clockBerlin," ",c("Europe/Berlin",r)]}):(0,t.jsx)("span",{className:e})}function d({className:e=""}){let[r,o]=(0,a.useState)(!1);return(0,t.jsx)("button",{type:"button","aria-pressed":r,onClick:()=>o(!r),className:`tracked cursor-pointer transition-opacity hover:opacity-100 ${e}`,children:r?i.j.soundOn:i.j.soundOff})}var h=e.i(20032);let f=(e,t,a)=>{let r=Math.min(Math.max((a-e)/(t-e),0),1);return r*r*(3-2*r)},m=(e,t,a)=>[e[0]+(t[0]-e[0])*a,e[1]+(t[1]-e[1])*a,e[2]+(t[2]-e[2])*a],p=(e,t,a)=>(Math.sin(3.1*e+2.3*t+1.7*a)*Math.sin(1.9*e-3.7*t+2.9*a)+Math.sin(5.3*e+4.1*a)*Math.sin(6.1*t-3.3*a))*.5,v=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},x=(e,t)=>{let a=Math.cos(t),r=Math.sin(t);return[e[0]*a-e[1]*r,e[0]*r+e[1]*a,e[2]]};function g(e,t,a){let r=t.a*e[0],o=t.b*e[1],n=[r,o,t.c*e[2]],i=v([e[0]/t.a,e[1]/t.b,e[2]/t.c]),l=f(.05,.55,e[2]),s=1-f(.62,.95,Math.abs(e[0])),c=(o-t.sAmp*Math.sin(r*t.k))/t.sigma,u=Math.exp(-.5*c*c)*l*s;n[2]-=t.depth*u;let d=-u*c/t.sigma,h=v([i[0],i[1]+t.depth*d*i[2],i[2]]),m=t.rough*p(9*e[0],9*e[1],9*e[2]);return{p:x(n=[n[0]+h[0]*m,n[1]+h[1]*m,n[2]+h[2]*m],a),n:x(h,a),G:u}}let y=[function(e){let t=.97+.03*p(5*e[0],5*e[1],5*e[2]);return{p:e,n:e,c:[.985*t,.955*t,.895*t]}},function(e){let t,a=1-.16*f(.8,1,-e[1])-.1*f(.85,1,e[1]),r=[e[0]*a,e[1]*a*.95-.1,e[2]*a],o=e;if(e[1]>.965){let a=(e[1]-.965)/.035,n=Math.atan2(e[2],e[0]),i=.05*(1-.35*a);r=[i*Math.cos(n)+.07*a*a,.78+.46*a,i*Math.sin(n)],o=v([Math.cos(n),.2,Math.sin(n)]),t=m([.34,.26,.15],[.52,.42,.24],.5+.5*p(40*e[0],40*e[2],6*a))}else{t=m([.52,.06,.08],[.9,.17,.13],.8*(.5+.5*p(3*e[0],3*e[1],3*e[2]))+.1);let a=.92+.12*e[1];t=[t[0]*a,t[1]*a,t[2]*a],e[1]<-.93&&(t=m(t,[.22,.1,.07],f(-.93,-.985,e[1])))}return{p:r,n:o,c:t}},function(e){let t=g(e,{a:1.22,b:.9,c:.66,depth:.05,sigma:.2,sAmp:.06,k:2.2,rough:.014},.26),a=.9+.1*p(7*e[0],7*e[1],7*e[2])+.05*Math.sin(38*e[1]+3*p(3*e[0],3*e[1],3*e[2])),r=1+.1*(1-Math.abs(e[2]));return{p:t.p,n:t.n,c:[.72*a*r,.82*a*r,.56*a*r]}},function(e){let t=g(e,{a:1.16,b:.82,c:.58,depth:.16,sigma:.075,sAmp:.1,k:2.4,rough:.006},.26),a=.93+.1*p(6*e[0],6*e[1],6*e[2]),r=[.36*a,.56*a,.28*a];return t.G>.35&&(r=m(r,[.62,.74,.5],Math.min(1,(t.G-.35)*1.4)*(.5+.5*p(25*e[0],25*e[1],25*e[2])))),{p:t.p,n:t.n,c:r}},function(e){let t=g(e,{a:1.21,b:.88,c:.65,depth:.21,sigma:.07,sAmp:.11,k:2.4,rough:.01},.26),a=.88+.22*(.5+.5*p(5*e[0],5*e[1],5*e[2])),r=[.4*a,.24*a,.14*a];return r=m(r,[.6,.4,.22],Math.min(1,.9*t.G)),{p:t.p,n:t.n,c:r}}],w=[[1,1,0,0],[1.15,0,.18,0],[.12,0,.3,0],[.38,0,.3,0],[.7,0,.5,0]],b=e=>Math.min(Math.max(e,0),1);function A(e,t){var a;let r,o=4*b((e-t.scrollStart)/(t.scrollEnd-t.scrollStart));if(o>=4)return 4;let n=Math.floor(o);return n+(a=t.hold,(r=b((o-n-a)/(1-t.hold-a)))*r*(3-2*r))}let M=`
precision highp float;
const vec3 GOLD = vec3(0.90,0.68,0.32);
const vec3 ROSE = vec3(1.00,0.76,0.78);
const vec3 SAGE = vec3(0.74,0.88,0.74);
mat3 rot(vec2 a){
  float cy=cos(a.x), sy=sin(a.x), cx=cos(a.y), sx=sin(a.y);
  mat3 ry = mat3(cy,0.,-sy, 0.,1.,0., sy,0.,cy);
  mat3 rx = mat3(1.,0.,0., 0.,cx,sx, 0.,-sx,cx);
  return rx*ry;
}`,S=`
precision mediump float;
uniform float uPass;
varying vec3 vCol; varying float vA;
void main(){
  float d = length(gl_PointCoord - 0.5);
  float s = uPass < 0.5 ? exp(-d*d*14.0)*(1.0 - smoothstep(0.38,0.5,d)) : 1.0 - smoothstep(0.22,0.5,d);
  float a = vA * s;
  gl_FragColor = vec4(vCol * a, a);
}`,j=M+`
attribute vec3 aPos; attribute float aSeed;
uniform vec2 uView; uniform float uR; uniform vec2 uCentre; uniform float uDpr; uniform float uTime;
uniform vec2 uRot; uniform float uEnter; uniform float uBreath; uniform float uMotion; uniform float uVis;
varying vec3 vCol; varying float vA;
void main(){
  float t = uTime*uMotion; float L = length(aPos); mat3 R = rot(uRot);
  vec3 drift = vec3(sin(t*0.27+aSeed*40.0), cos(t*0.23+aSeed*33.0), sin(t*0.19+aSeed*57.0))*0.03;
  vec3 pos = R*(aPos*(1.0+0.05*uBreath) + drift) * mix(0.88,1.0,uEnter);
  float persp = 1.0/(1.0 - pos.z*0.10);
  vec2 px = uCentre + vec2(pos.x,-pos.y)*uR*persp;
  gl_Position = vec4(px.x/uView.x*2.0-1.0, 1.0-px.y/uView.y*2.0, 0.0, 1.0);
  gl_PointSize = (1.4 + aSeed)*uDpr*1.4;
  vCol = mix(GOLD, vec3(0.985,0.955,0.895), 0.25 + 0.2*aSeed);
#ifdef INK
  vCol = GOLD * 0.8;
#endif
  vA = (0.07 + 0.12*uBreath)*(0.45+0.55*aSeed)*(1.0 - L*0.6)*uEnter*uVis*1.3;
}`,F=`precision mediump float; varying vec3 vCol; varying float vA;
void main(){ float d=length(gl_PointCoord-0.5); float a=vA*(1.0-smoothstep(0.22,0.5,d)); gl_FragColor=vec4(vCol*a,a); }`;async function P(e,t){var a;let r,o=t.settings,n=t.reduced,i=e.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!1,powerPreference:"high-performance"});if(!i)return null;let l=!1,s=()=>l||!!t.cancelled?.(),c=()=>new Promise(e=>setTimeout(e,0)),u=(e,t)=>{let a=i.createShader(e);return i.shaderSource(a,t),i.compileShader(a),i.getShaderParameter(a,i.COMPILE_STATUS)||console.error(i.getShaderInfoLog(a)),a},d=(e,t)=>{let a=i.createProgram();return(i.attachShader(a,u(i.VERTEX_SHADER,e)),i.attachShader(a,u(i.FRAGMENT_SHADER,t)),i.linkProgram(a),i.getProgramParameter(a,i.LINK_STATUS))?a:(console.error(i.getProgramInfoLog(a)),null)},h=d((a=o.rippleSpeed,M+`
attribute vec3 aPosA; attribute vec3 aNrmA; attribute vec3 aColA;
attribute vec3 aPosB; attribute vec3 aNrmB; attribute vec3 aColB;
attribute vec4 aDS;
uniform vec2 uView; uniform float uR; uniform vec2 uCentre; uniform float uDpr; uniform float uTime;
uniform vec2 uRot; uniform vec4 uPtr; uniform vec3 uHitDir[3]; uniform vec2 uHit[3]; uniform float uRipOn;
uniform float uEnter; uniform float uMotion; uniform vec2 uHover;
uniform float uMix; uniform vec4 uMatA; uniform vec4 uMatB; uniform mediump float uPass; uniform float uFill;
uniform float uSizeK; uniform float uFillFrac; uniform float uInk;
uniform vec3 uTrail[8]; uniform vec3 uHead; uniform float uTrailOn;
varying vec3 vCol; varying float vA;

// How far the cursor (and its fading trail) has opened this dot.
float softRev(vec2 xy, float seed){
  vec2 d0 = xy - uHead.xy;
  float acc = uHead.z * exp(-dot(d0,d0)/0.085);
  for (int i = 0; i < 8; i++) { vec2 d = xy - uTrail[i].xy; acc += uTrail[i].z * exp(-dot(d,d)/0.085); }
  return smoothstep(0.12, 0.95, acc*(0.85 + 0.3*seed));
}

void main(){
  vec3 dir = aDS.xyz; float seed = aDS.w; float t = uTime * uMotion;

  // The soft body under the dots is drawn from a third of the dots only.
  if (uPass < 0.5 && seed > uFillFrac) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 1.0; vCol = vec3(0.0); vA = 0.0;
    return;
  }

  mat3 R = rot(uRot);

  // The flow: dots leave from the top first, like a pour; paths curve and swirl a little.
  float stg = 0.32 * (0.5 + 0.5*dir.y);
  float e = smoothstep(0.0, 1.0, clamp(uMix*1.32 - stg, 0.0, 1.0));
  float flow = sin(3.14159265 * e);

  // Cursor reveal: the dots under the cursor glide into the next stage, then glide back
  // as the cursor leaves. Only the shape and colour change, softly.
  if (uTrailOn > 0.5) {
    float gate = 1.0 - smoothstep(0.0, 0.12, uMix);
    if (gate > 0.001) {
      vec3 pA = R * aPosA; vec3 nA = R * aNrmA;
      e = max(e, softRev(pA.xy, seed) * smoothstep(-0.25, 0.30, nA.z) * gate);
    }
  }
  vec3 nObj = normalize(mix(aNrmA, aNrmB, e));
  vec3 pObj = mix(aPosA, aPosB, e);
  pObj += vec3(-dir.z, 0.0, dir.x) * 0.16 * flow * (0.4 + 0.9*seed) + nObj * 0.06 * flow * (0.2 + 0.8*seed);

  vec3 n = R * nObj;
  vec3 alb = mix(aColA, aColB, e);
  vec4 m = mix(uMatA, uMatB, e);

  // Calm shimmer: smooth in space and time.
  float sh = sin(dot(dir, vec3(6.1,8.7,5.3)) + t*0.55) * sin(dot(dir, vec3(9.2,5.4,7.7)) - t*0.41);
  float shimmer = sh*0.005 + sin(seed*61.0 + t*0.9)*0.0025;

  // Ripples (a soft wave that crosses the surface now and then, or where you tap).
  float wave = 0.0, blush = 0.0;
  if (uRipOn > 0.5) {
    for (int i=0;i<3;i++){
      float age = max(0.0, uTime - uHit[i].x);
      float ang = acos(clamp(dot(dir, uHitDir[i]), -1.0, 1.0));
      float ph = ang - age*${a.toFixed(2)};
      float env = (1.0 - exp(-age*24.0)) * exp(-age*0.95) * uHit[i].y;
      float band = exp(-ph*ph/0.05);
      wave += cos(ph*13.0)*band*env;
      blush += band*env;
    }
    wave = clamp(wave,-1.0,1.0); blush = 1.0 - exp(-blush);
  }

  // Cursor patch: the surface lifts a touch under the pointer.
  vec3 pv = R * pObj;
  vec2 dp = pv.xy - uPtr.xy;
  float hov = exp(-dot(dp,dp)/uHover.x) * uPtr.z * smoothstep(-0.15,0.45,n.z);

  // Slow dust patch round the rim.
  float da = 0.6 + t*0.105; vec2 dd = vec2(cos(da), sin(da));
  float patch = smoothstep(0.55,0.95,dot(n.xy,dd)) * (1.0 - smoothstep(0.2,0.7,abs(n.z)));
  float dust = smoothstep(0.82,1.0,seed) * patch;

  vec3 pos = R * (pObj + nObj * (shimmer + wave*0.04 + dust*(0.02 + 0.025*sin(seed*40.0+t*0.4)))) + n * (hov*uHover.y);
  pos.xy += normalize(dp + 0.0001) * hov * uPtr.w * 0.03;

  // Light stays in view space, so the highlight stays put as the object sways.
  vec3 Ld = normalize(vec3(-0.55 + uPtr.x*0.42*uPtr.z, 0.62 + uPtr.y*0.42*uPtr.z, 0.58));
  float diff = pow(clamp(dot(n, Ld)*0.5 + 0.5, 0.0, 1.0), 1.15);
  vec3 H = normalize(Ld + vec3(0.0,0.0,1.0));
  float nh = max(dot(n, H), 0.0);
  float spec = (pow(nh, 70.0)*1.3 + pow(nh, 12.0)*0.40);
  float facing = max(n.z, 0.0);
  float fres = pow(1.0 - facing, 2.3);
  float grain = 0.93 + 0.07*sin(dir.x*23.0 + dir.z*11.0)*cos(dir.y*19.0 - dir.z*13.0);
  float sweep = exp(-pow(dot(dir, normalize(vec3(0.4,0.8,0.45))) - sin(t*0.12)*0.6, 2.0)/0.03) * 0.12;

  // Pearl colour: rose, gold and sage drifting with the angle. No blue.
  float phase = fract(fres*1.3 + n.y*0.25 + n.x*0.2 + t*0.015);
  vec3 w = 0.5 + 0.5*cos(6.2832*(phase - vec3(0.0,0.3333,0.6667)));
  w /= (w.x + w.y + w.z);
  vec3 iri = ROSE*w.x + GOLD*w.y + SAGE*w.z;

  vec3 body = alb * mix(vec3(0.93,0.85,0.77), vec3(1.0), diff) * grain;
  vec3 col = mix(body, iri*(0.92 + 0.2*diff), clamp((fres*0.62 + 0.16)*m.y, 0.0, 0.8));
  float bounce = pow(max(dot(n, normalize(vec3(0.55,-0.65,0.35))), 0.0), 3.0);
  col += GOLD*bounce*0.22;
  col += vec3(1.0,0.98,0.94)*spec*m.x;
  col += GOLD*sweep*m.y;
  col += GOLD*fres*m.z*0.55;
  col = mix(col, GOLD, clamp(blush*0.5 + hov*0.3 + flow*0.30, 0.0, 1.0));

  float front = smoothstep(-0.05, 0.35, n.z);
  float edgeThin = mix(0.38, 1.0, smoothstep(0.0, 0.65, facing));
  float alpha = (0.80 + 0.20*diff)*grain + fres*(0.16 + m.z*0.25) + spec*m.x*0.9 + sweep*0.4*m.y;
  alpha *= mix(0.17, 1.0, front) * edgeThin;
  alpha *= mix(0.78, 1.0, seed);
  alpha *= 1.0 + hov*0.7 + blush*0.7 + flow*0.35;
  col = mix(col, mix(alb*0.7, GOLD, 0.3), (1.0 - front)*0.6);
  float size = (1.25 + front*seed*0.3 + fres*(0.2 + seed*0.4)) * (1.0 + hov*0.35 + blush*0.3) * (1.0 + flow*0.25);

  float al = alpha * 0.70;
  if (uPass < 0.5) { al *= uFill; }
  size *= uSizeK;

  pos *= mix(0.88, 1.0, uEnter);
  float persp = 1.0 / (1.0 - pos.z*0.10);
  vec2 px = uCentre + vec2(pos.x, -pos.y) * uR * persp;
  gl_Position = vec4(px.x/uView.x*2.0 - 1.0, 1.0 - px.y/uView.y*2.0, 0.0, 1.0);
  gl_PointSize = size * uDpr;
  // Light page: the same light model, printed in warm ink so it reads on white (uInk = 1).
  // White page: keep each stage's true colour (white pearl, red cherry, green parchment, green bean,
  // brown roast) and only add shading and a soft edge, so it reads against the paper.
  float shade = mix(0.62, 1.0, diff) * mix(1.0, 0.74, fres);
  col = mix(col, col * shade, uInk * (1.0 - spec*m.x*0.7));
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(col, clamp(mix(vec3(lum), col, 1.35), 0.0, 1.0), uInk); // richer colour on paper
  // the pearl's own nacre: a clear rose-gold-sage sheen at the rim, so a white pearl never merges with white paper
  col = mix(col, iri * 0.82, uInk * m.y * smoothstep(0.35, 0.95, fres) * 0.75);
  al *= mix(1.0, 1.55, uInk);
  vCol = col;
  vA = clamp(al, 0.0, 1.0) * uEnter;
}`),S),f=d(o.light?j.replace("void main(){","#define INK\nvoid main(){"):j,F);if(!h||!f||(t.onLoad(.1),await c(),s()))return null;let m=(e,t)=>{let a={};return t.forEach(t=>a[t]=i.getUniformLocation(e,t)),a},p=m(h,["uView","uR","uCentre","uDpr","uTime","uRot","uPtr","uHitDir","uHit","uRipOn","uEnter","uMotion","uHover","uMix","uMatA","uMatB","uPass","uFill","uSizeK","uFillFrac","uTrail","uHead","uTrailOn","uInk"]),x=m(f,["uView","uR","uCentre","uDpr","uTime","uRot","uEnter","uBreath","uMotion","uVis"]),g={pA:i.getAttribLocation(h,"aPosA"),nA:i.getAttribLocation(h,"aNrmA"),cA:i.getAttribLocation(h,"aColA"),pB:i.getAttribLocation(h,"aPosB"),nB:i.getAttribLocation(h,"aNrmB"),cB:i.getAttribLocation(h,"aColB"),ds:i.getAttribLocation(h,"aDS")},b={p:i.getAttribLocation(f,"aPos"),s:i.getAttribLocation(f,"aSeed")},P=o.dots,T=(r=0x13528a0,()=>{let e=Math.imul((r=r+0x6d2b79f5|0)^r>>>15,1|r);return(((e=e+Math.imul(e^e>>>7,61|e)^e)^e>>>14)>>>0)/0x100000000}),{dirs:E,list:N}=function(e,t){let a=new Float32Array(4*e),r=Array(e),o=Math.PI*(3-Math.sqrt(5)),n=.35*Math.sqrt(4*Math.PI/e);for(let i=0;i<e;i++){let l=1-2*(i+.5)/e,s=Math.sqrt(1-l*l),c=i*o,u=v([Math.cos(c)*s+(t()-.5)*2*n,l+(t()-.5)*2*n,Math.sin(c)*s+(t()-.5)*2*n]);r[i]=u,a.set([u[0],u[1],u[2],t()],4*i)}return{dirs:a,list:r}}(P,T),L=[];for(let e=0;e<y.length;e++){let a=function(e,t){let a=new Float32Array(9*t.length);for(let r=0;r<t.length;r++){let o=e(t[r]);a.set(o.p,9*r),a.set(o.n,9*r+3),a.set(o.c,9*r+6)}return a}(y[e],N),r=i.createBuffer();if(i.bindBuffer(i.ARRAY_BUFFER,r),i.bufferData(i.ARRAY_BUFFER,a,i.STATIC_DRAW),L.push(r),t.onLoad(.22+.13*(e+1)),await c(),s())return null}let C=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,C),i.bufferData(i.ARRAY_BUFFER,E,i.STATIC_DRAW);let R=i.createBuffer();{let e=new Float32Array(4*o.coreDots);for(let t=0;t<o.coreDots;t++){let a=2*T()-1,r=T()*Math.PI*2,o=Math.sqrt(1-a*a),n=.62*Math.pow(T(),.7);e.set([Math.cos(r)*o*n,a*n,Math.sin(r)*o*n,T()],4*t)}i.bindBuffer(i.ARRAY_BUFFER,R),i.bufferData(i.ARRAY_BUFFER,e,i.STATIC_DRAW)}if(t.onLoad(.95),await c(),s())return null;let k=()=>{for(let e=0;e<8;e++)i.disableVertexAttribArray(e)},z=(e,t,a,r)=>{i.bindBuffer(i.ARRAY_BUFFER,r),i.enableVertexAttribArray(e),i.vertexAttribPointer(e,3,i.FLOAT,!1,36,0),i.enableVertexAttribArray(t),i.vertexAttribPointer(t,3,i.FLOAT,!1,36,12),i.enableVertexAttribArray(a),i.vertexAttribPointer(a,3,i.FLOAT,!1,36,24)},O=1,D=1,U=1,I=1,B=0,$=0,q=1,_=0,H=0,V=()=>{let t=e.clientWidth||window.innerWidth,a=e.clientHeight||window.innerHeight;O=Math.max(1,Math.round(t*(U=Math.min(window.devicePixelRatio||1,o.dprCap)*q))),D=Math.max(1,Math.round(a*U)),(e.width!==O||e.height!==D)&&(e.width=O,e.height=D),i.viewport(0,0,O,D);let r=t>1.05*a;I=r?Math.min(.2*O,.3*D):Math.min(.27*O,.18*D),B=O*(r?.34:.5),$=D*(r?.5:.31);let n=e.getBoundingClientRect();_=n.left,H=n.top},G={x:0,y:0,tx:0,ty:0,s:0,ts:0,e:0,lx:0,ly:0,lt:0},W=e=>{let t=performance.now()/1e3,a=((e.clientX-_)*U-B)/I,r=-(((e.clientY-H)*U-$)/I);if(G.lt){let a=Math.max(t-G.lt,.001);G.e=Math.max(G.e,Math.min(Math.hypot(e.clientX-G.lx,e.clientY-G.ly)/a/1800,1))}G.lx=e.clientX,G.ly=e.clientY,G.lt=t,G.tx=a,G.ty=r,G.ts=+(1.35>Math.hypot(a,r))},K=e=>{!e.target?.closest?.("a,button")&&(W(e),1>Math.hypot(G.tx,G.ty)&&eu(G.tx,G.ty))},Y=()=>{G.ts=0,G.lt=0},Z=e=>{"mouse"!==e.pointerType&&(G.ts=0)};n||(window.addEventListener("pointermove",W,{passive:!0}),window.addEventListener("pointerdown",K,{passive:!0}),window.addEventListener("pointerup",Z,{passive:!0}),window.addEventListener("pointercancel",Y,{passive:!0}),document.documentElement.addEventListener("pointerleave",Y));let X=new Float32Array(8),Q=new Float32Array(8),J=new Float32Array(8).fill(-100),ee=new Float32Array(24),et=0,ea=99,er=99,eo=new Float32Array(9),en=new Float32Array(6);for(let e=0;e<3;e++)en[2*e]=-100;let ei=0,el=0,es=o.tilt,ec=performance.now()/1e3;function eu(e,t,a){var r,o,n;let i,l,s,c,u,d,h,f,m,p,v=e*e+t*t;if(v>1){let a=Math.sqrt(v);e/=a,t/=a}let x=Math.sqrt(Math.max(0,1-e*e-t*t)),g=(r=[e,t,x],o=el,i=Math.cos(-(n=es)),l=Math.sin(-n),s=r[0],c=r[1]*i-r[2]*l,u=r[1]*l+r[2]*i,f=s*(d=Math.cos(-o))+u*(h=Math.sin(-o)),p=Math.hypot(f,c,m=-s*h+u*d)||1,[f/p,c/p,m/p]),y=ei++%3;eo.set(g,3*y),en[2*y]=void 0!==a?a:performance.now()/1e3-ec,en[2*y+1]=1}i.enable(i.BLEND),o.light?i.blendFunc(i.ONE,i.ONE_MINUS_SRC_ALPHA):i.blendFunc(i.ONE,i.ONE),i.clearColor(0,0,0,0);let ed=null,eh=1/0,ef=performance.now()/1e3,em=0,ep=!1,ev=0,ex=0,eg=0,ey=()=>{if(ev=0,l)return;let e=performance.now()/1e3,a=Math.min(e-ef,.05);ef=e;let r=n?3.2:e-ec,s=t.getProgress(),c=A(s,o),u=1-Math.exp(-(12*a)),d=1-Math.exp(-(6*a));G.x+=(G.tx-G.x)*u,G.y+=(G.ty-G.y)*u,G.s+=(G.ts-G.s)*d,G.e*=Math.exp(-(3.5*a)),em=n?Math.round(c):em+(c-em)*(1-Math.exp(-(4.5*a))),5e-4>Math.abs(c-em)&&(em=c);let m=null===ed?-1:e-ed;n?el=.5:(el=o.sway*Math.sin(.22*r)+.05*G.x*G.s,es=o.tilt+.03*Math.sin(.2*r)-.05*G.y*G.s,r>eh&&(eu(-.28,.42,r),eh=r+o.rippleEvery));let v=n?+(m>=0):Math.min(Math.max(m/o.enter,0),1),y=1-Math.pow(1-v,3),M=n?.5:.5+.5*Math.sin(r*Math.PI*2/6);if(i.clear(i.COLOR_BUFFER_BIT),y>.001){var S,j,F;G.ts>.5&&Math.hypot(G.x-ea,G.y-er)>.15&&(X[et]=G.x,Q[et]=G.y,J[et]=e,et=(et+1)%8,ea=G.x,er=G.y);for(let t=0;t<8;t++){let a=e-J[t];ee[3*t]=X[t],ee[3*t+1]=Q[t],ee[3*t+2]=a>2.5?0:Math.exp(-(1.7*a))}let t=Math.min(Math.max(em,0),4),a=Math.min(Math.floor(t),3),l=!1;for(let e=0;e<3;e++)r-en[2*e]<4.5&&(l=!0);S=a+1,j=1-Math.min(t,1),F=l,j>.002&&(i.useProgram(f),k(),i.bindBuffer(i.ARRAY_BUFFER,R),i.enableVertexAttribArray(b.p),i.vertexAttribPointer(b.p,3,i.FLOAT,!1,16,0),i.enableVertexAttribArray(b.s),i.vertexAttribPointer(b.s,1,i.FLOAT,!1,16,12),i.uniform2f(x.uView,O,D),i.uniform1f(x.uR,I),i.uniform2f(x.uCentre,B,$),i.uniform1f(x.uDpr,U),i.uniform1f(x.uTime,r),i.uniform2f(x.uRot,el,es),i.uniform1f(x.uEnter,y),i.uniform1f(x.uBreath,M),i.uniform1f(x.uMotion,+!n),i.uniform1f(x.uVis,j),i.drawArrays(i.POINTS,0,o.coreDots)),i.useProgram(h),k(),z(g.pA,g.nA,g.cA,L[a]),z(g.pB,g.nB,g.cB,L[S]),i.bindBuffer(i.ARRAY_BUFFER,C),i.enableVertexAttribArray(g.ds),i.vertexAttribPointer(g.ds,4,i.FLOAT,!1,16,0),i.uniform2f(p.uView,O,D),i.uniform1f(p.uR,I),i.uniform2f(p.uCentre,B,$),i.uniform1f(p.uDpr,U),i.uniform1f(p.uTime,r),i.uniform2f(p.uRot,el,es),i.uniform4f(p.uPtr,G.x,G.y,G.s,G.e),i.uniform3fv(p.uHitDir,eo),i.uniform2fv(p.uHit,en),i.uniform1f(p.uRipOn,+!!F),i.uniform1f(p.uEnter,y),i.uniform1f(p.uMotion,+!n),i.uniform2f(p.uHover,o.hoverRadius,o.hoverLift),i.uniform3fv(p.uTrail,ee),i.uniform3f(p.uHead,G.x,G.y,G.s),i.uniform1f(p.uTrailOn,+!n),i.uniform1f(p.uMix,t-a),i.uniform4fv(p.uMatA,w[a]),i.uniform4fv(p.uMatB,w[S]),i.uniform1f(p.uFill,o.light?1.25*o.fill:o.fill),i.uniform1f(p.uInk,+!!o.light),i.uniform1f(p.uFillFrac,o.fillFraction),i.uniform1f(p.uPass,0),i.uniform1f(p.uSizeK,o.fillSize),i.drawArrays(i.POINTS,0,P),i.uniform1f(p.uPass,1),i.uniform1f(p.uSizeK,o.dotSize),i.drawArrays(i.POINTS,0,P)}t.onFrame({sf:em,enter:y,p:s}),!n&&!1!==t.adaptive&&v>=1&&(eg++,a>.03&&ex++,eg>=90&&(ex>40&&q>.6&&(q*=.82,V()),ex=0,eg=0)),ep||(ep=!0,t.onLoad(1)),n||ew()};function ew(){ev||l||(ev=requestAnimationFrame(ey))}let eb=()=>{V(),ew()},eA="u">typeof ResizeObserver?new ResizeObserver(eb):null;eA?.observe(e),window.addEventListener("resize",eb);let eM=()=>{ef=performance.now()/1e3,document.hidden||ew()};document.addEventListener("visibilitychange",eM);let eS=e=>{e.preventDefault(),t.onLost?.()};return e.addEventListener("webglcontextlost",eS),V(),ew(),{start(e){eh=(ed=e)-ec+1.8,ew()},requestDraw(){ew()},destroy(){l=!0,ev&&cancelAnimationFrame(ev),eA?.disconnect(),window.removeEventListener("resize",eb),window.removeEventListener("pointermove",W),window.removeEventListener("pointerdown",K),window.removeEventListener("pointerup",Z),window.removeEventListener("pointercancel",Y),document.documentElement.removeEventListener("pointerleave",Y),document.removeEventListener("visibilitychange",eM),e.removeEventListener("webglcontextlost",eS),i.getExtension("WEBGL_lose_context")?.loseContext()}}}var T=e.i(93209),E=e.i(90072),N=e.i(8560);function L(e){if(e<=0||e>=1)return 0;let t=e<.42?Math.pow(Math.sin(e/.42*Math.PI*.5),1.25):Math.cos((e-.42)/.58*Math.PI*.5),a=e>.82?.55*Math.pow(1-(e-.82)/.18,1.6)+.45*(1-(e-.82)/.18):1,r=1+.016*Math.sin(e*Math.PI*9+.6)*Math.sin(Math.PI*e);return .205*t*(e>.82?Math.min(1,a):1)*r}let C=e=>.018*Math.sin(Math.PI*e*.9);function R(e,t,a,r,o){let n=[0];for(let t=1;t<e.length;t++)n.push(n[t-1]+Math.hypot(e[t][0]-e[t-1][0],e[t][1]-e[t-1][1]));return{pts:e,len:n[n.length-1],cum:n,w:t,a,t0:r,t1:o}}let k="176, 122, 42",z=e=>e<0?0:e>1?1:e,O=e=>1-Math.pow(1-e,3),D=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,U=`
float hash(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1,0)), u.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y);
}
float fbm(vec2 p, int oct){
  float a = 0.5, s = 0.0;
  mat2 r = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 7; i++){ if (i >= oct) break; s += a*vnoise(p); p = r*p*2.03 + 17.1; a *= 0.5; }
  return s;
}`,I=`
attribute float aDense;
attribute float aSeed;
uniform float uTime, uDpr, uSize, uDense, uFade, uNear;
uniform vec3 uTarget;      // Araku, object space (unit vector)
varying float vA;
varying vec3 vCol;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vec3 n = normalize((modelMatrix * vec4(position, 0.0)).xyz);
  vec3 toCam = normalize(cameraPosition - (modelMatrix * vec4(position, 1.0)).xyz);
  float facing = dot(n, toCam);
  float limb = smoothstep(0.0, 0.35, facing);
  float d = acos(clamp(dot(normalize(position), uTarget), -1.0, 1.0)); // angle from Araku
  // a soft pulse travelling outwards from Araku
  float ring = exp(-pow((d - fract(uTime*0.22)*0.03)*600.0, 2.0)) * (1.0 - fract(uTime*0.22));
  float near = exp(-d*d*400000.0); // only Araku itself glows gold (about 0.3 degrees), not the neighbouring states
  float twinkle = 0.75 + 0.25*sin(uTime*1.7 + aSeed*40.0);
  vA = limb * mix(1.0, uDense * 0.5, aDense) * uFade * (0.7 + 0.3*twinkle); // the fine patch is lighter, so it never reads as a blob
  // close to the ground the sparse cover thins away and only the fine patch stays
  vA *= mix(1.0, 1.0 - uNear*0.85, 1.0 - aDense);
  vec3 ink = vec3(0.180, 0.090, 0.063), gold = vec3(0.690, 0.478, 0.165);
  vCol = mix(ink, gold, clamp(near*1.2 + ring*1.0, 0.0, 1.0));
  vA *= (0.82 + near*0.18 + ring*0.4);
  float sz = uSize * mix(1.0, 0.55, aDense) * (1.0 + near * 1.6); // Araku: one larger gold point
  gl_PointSize = clamp(sz * uDpr * (4.2 / -mv.z), 1.0, mix(9.0, 5.0, aDense) * uDpr);
  gl_Position = projectionMatrix * mv;
}`,B=`
varying float vA;
varying vec3 vCol;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float r = length(c);
  float a = smoothstep(0.5, 0.3, r) * min(vA, 1.0);
  if (a < 0.01) discard;
  gl_FragColor = vec4(vCol * a, a);
}`,$=`
varying vec3 vN; varying vec3 vV;
void main(){
  vec4 w = modelMatrix * vec4(position, 1.0);
  vN = normalize(mat3(modelMatrix) * normal);
  vV = normalize(cameraPosition - w.xyz);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,q=`
uniform float uFade;
varying vec3 vN; varying vec3 vV;
void main(){
  float f = 1.0 - abs(dot(vN, vV));
  float a = pow(f, 3.0) * 0.32 * uFade;
  vec3 gold = vec3(0.690, 0.478, 0.165);
  gl_FragColor = vec4(gold * a, a);
}`,_=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,H=`
uniform float uOpacity, uZoom, uTime, uAspect, uTilt, uRelief, uFog, uChart;
uniform int uOct;
varying vec2 vUv;
${U}
float height(vec2 p){
  float h = fbm(p*3.2 + vec2(3.1, 7.7), uOct);
  h += 0.45*fbm(p*0.9 - 4.0, 3);
  return h;
}
void main(){
  vec2 uv = vUv - 0.5; uv.x *= uAspect;
  // gentle perspective: the top of the screen is further away
  float persp = 1.0 - (vUv.y - 0.5) * uTilt;
  vec2 q = uv / max(persp, 0.35);
  vec2 p = q / uZoom + vec2(0.0, uTime*0.004);
  float h = height(p);
  float v = h * 26.0;
  float w = fwidth(v);
  float dl = abs(fract(v + 0.5) - 0.5);
  float lineM = 1.0 - smoothstep(0.0, w*1.3, dl);
  float dm = abs(fract(v/5.0 + 0.5) - 0.5) * 5.0;
  float major = 1.0 - smoothstep(0.0, w*1.8, dm);
  vec3 ink = vec3(0.180, 0.090, 0.063), gold = vec3(0.690, 0.478, 0.165), paper = vec3(1.0, 0.988, 0.973);
  // high ground is shaded a touch warmer, like a printed relief map
  vec3 col = mix(paper, mix(paper, vec3(0.953, 0.906, 0.835), 1.0), smoothstep(0.35, 0.95, h) * 0.7);
  float r = length(uv);
  float fade = smoothstep(1.05, 0.15, r);
  col = mix(col, ink, lineM * 0.32 * fade);
  col = mix(col, ink, major * 0.55 * fade);
  // survey grid and tick marks
  vec2 g = abs(fract(q * 6.0) - 0.5);
  float gw = fwidth(q.x * 6.0);
  float grid = 1.0 - smoothstep(0.0, gw*1.2, min(0.5 - g.x, 0.5 - g.y));
  col = mix(col, ink, grid * 0.06 * fade);
  col = mix(col, gold, smoothstep(0.66, 0.95, h) * 0.18 * fade);
  // radar sweep around the centre
  float ang = atan(uv.y, uv.x);
  float sw = fract((ang / 6.28318) + uTime*0.06);
  col = mix(col, gold, pow(sw, 40.0) * 0.35 * smoothstep(0.9, 0.0, r) * (1.0 - uChart));
  // target rings
  float rw = fwidth(r);
  float hud = 1.0 - uChart;
  col = mix(col, gold, (1.0 - smoothstep(0.0, rw*1.5, abs(r - 0.12))) * 0.9 * hud);
  col = mix(col, ink, (1.0 - smoothstep(0.0, rw*1.2, abs(r - 0.3))) * 0.25 * hud);
  col = mix(col, ink, (1.0 - smoothstep(0.0, rw*1.2, abs(r - 0.55))) * 0.12 * hud);
  // crosshair
  float ch = (1.0 - smoothstep(0.0, rw*1.2, abs(uv.x))) * step(0.14, abs(uv.y)) * step(abs(uv.y), 0.24);
  ch += (1.0 - smoothstep(0.0, rw*1.2, abs(uv.y))) * step(0.14, abs(uv.x)) * step(abs(uv.x), 0.24);
  col = mix(col, gold, clamp(ch, 0.0, 1.0) * 0.85 * hud);
  // the contour lines rise into hills: light from the upper left shades every slope
  vec3 nrm = normalize(vec3(-dFdx(h) * 900.0, -dFdy(h) * 900.0, 1.0));
  float sh = clamp(dot(nrm, normalize(vec3(-0.6, 0.55, 0.6))), 0.0, 1.0);
  col = mix(col, mix(vec3(0.80, 0.69, 0.55), paper, sh), uRelief * 0.42);
  col = mix(col, ink, (lineM * 0.3 + major * 0.35) * uRelief * fade); // contour lines stay drawn on the hills
  // flying low: the far hills fade into haze, then the mist rises from the valley
  float far = smoothstep(0.35, 1.0, vUv.y);
  col = mix(col, paper, far * uRelief * 0.6);
  float m = fbm(vUv * vec2(uAspect, 1.0) * 2.4 + vec2(uTime * 0.04, 0.0), 4);
  float fog = clamp(uFog * 1.6 - (vUv.y * 0.7) + (m - 0.5) * 0.6, 0.0, 1.0);
  col = mix(col, paper, fog);
  col = mix(paper, col, smoothstep(1.3, 0.4, r)); // edges melt into the white page
  gl_FragColor = vec4(col * uOpacity, uOpacity);
}`,V=`
uniform sampler2D uTex;
uniform float uOpacity, uZoom, uScan, uMist, uDim, uTime, uAspect, uTexAspect, uIris;
varying vec2 vUv;
${U}
void main(){
  // the forest opens from inside the map's target ring, like a lens iris
  float rr = length((vUv - 0.5) * vec2(uAspect, 1.0));
  float rw = fwidth(rr);
  float iris = 1.0 - smoothstep(uIris - rw*1.5, uIris + rw*1.5, rr);
  vec2 uv = vUv - 0.5;
  if (uAspect > uTexAspect) uv.y *= uTexAspect / uAspect; else uv.x *= uAspect / uTexAspect;
  uv = uv / uZoom + 0.5;
  vec3 tex = texture2D(uTex, uv).rgb;
  float l = dot(tex, vec3(0.299, 0.587, 0.114));
  vec3 forest = vec3(0.180, 0.090, 0.063), gold = vec3(0.690, 0.478, 0.165), cream = vec3(1.0, 0.988, 0.973);
  vec3 duo = mix(forest, mix(gold, cream, smoothstep(0.55, 1.0, l)), smoothstep(0.02, 0.8, l));
  duo *= 0.85 + 0.15*step(0.5, fract(vUv.y*240.0)); // fine scan texture
  // warm true colour (no blue: pull the cool channel down)
  vec3 warm = tex; // true colour, untouched
  float y = 1.0 - vUv.y; // 0 at top
  float revealed = smoothstep(uScan + 0.004, uScan - 0.004, y);
  vec3 col = mix(duo, warm, revealed);
  float line = exp(-pow((y - uScan)*90.0, 2.0)) * step(0.001, uScan) * step(uScan, 0.999);
  col += gold * line * 0.9;
  // mist
  float m = fbm(vUv*vec2(uAspect, 1.0)*2.2 + vec2(uTime*0.03, uTime*0.012), 5);
  col = mix(col, cream, clamp(uMist * smoothstep(0.2, 0.8, m) * 1.4, 0.0, 1.0));
  col = mix(col, cream, uDim); // the forest washes to white, not to black
  float vig = smoothstep(1.2, 0.4, length((vUv - 0.5)*vec2(uAspect, 1.0)));
  col = mix(cream, col, mix(0.86, 1.0, vig));

  // the iris edge: a fine gold ring while it opens
  float edge = (1.0 - smoothstep(0.0, rw*2.0, abs(rr - uIris))) * step(uIris, 1.3);
  float a = uOpacity * max(iris, edge);
  col = mix(col, gold, edge);
  gl_FragColor = vec4(col * a, a);
}`,G=`
attribute vec2 aHome;   // where the marker sits on the slopes (0..1 screen space, y up)
attribute float aIndex;
uniform float uShown, uGather, uDpr, uSize;
uniform vec2 uAnchor;   // the point they gather into: where the pearl appears
varying float vA; varying float vPulse; varying float vG;
float ease(float t){ return t*t*(3.0 - 2.0*t); }
void main(){
  float k = aIndex / 57.0;
  float appear = clamp((uShown - k*0.94) / 0.06, 0.0, 1.0);
  float g = ease(clamp(uGather*1.3 - k*0.3, 0.0, 1.0));
  vec2 pos = mix(aHome, uAnchor, g);
  vA = step(0.001, appear) * (1.0 - smoothstep(0.92, 1.0, g) * 0.6);
  vPulse = appear;
  vG = g;
  gl_PointSize = uSize * uDpr * mix(1.0, 0.45, g);
  gl_Position = vec4(pos*2.0 - 1.0, 0.0, 1.0);
}`,W=`
varying float vA; varying float vPulse; varying float vG;
void main(){
  vec2 c = gl_PointCoord - 0.5; float r = length(c);
  vec3 gold = vec3(0.690, 0.478, 0.165), ink = vec3(0.180, 0.090, 0.063), paper = vec3(1.0, 0.988, 0.973);
  float aa = fwidth(r);
  float core = 1.0 - smoothstep(0.085 - aa, 0.085 + aa, r);
  float halo = 1.0 - smoothstep(0.1, 0.16, r);
  float ring = 1.0 - smoothstep(0.0, aa*1.6, abs(r - 0.21));
  // landing pulse: a ring that opens once and fades as the marker settles
  float pr = mix(0.08, 0.48, vPulse);
  float pulse = (1.0 - smoothstep(0.0, aa*2.0, abs(r - pr))) * (1.0 - vPulse) * step(0.001, vPulse);
  vec3 col = paper;
  float a = 0.0;
  col = mix(col, paper, halo); a = max(a, halo*0.6);          // fine white keyline
  col = mix(col, gold, ring); a = max(a, ring*(1.0 - vG));     // gold ring
  col = mix(col, ink, core); a = max(a, core);                 // ink centre
  col = mix(col, gold, pulse); a = max(a, pulse*0.9);
  a *= vA;
  if (a < 0.01) discard;
  gl_FragColor = vec4(col * a, a);
}`,K=`
attribute vec2 aHome;
attribute float aT;     // 0 at the farmer, 1 at the point
attribute float aIndex;
uniform vec2 uAnchor;
varying float vT; varying float vK;
void main(){
  vT = aT; vK = aIndex / 57.0;
  gl_Position = vec4(mix(aHome, uAnchor, aT)*2.0 - 1.0, 0.0, 1.0);
}`,Y=`
uniform float uConnect, uGather;
varying float vT; varying float vK;
float ease(float t){ return t*t*(3.0 - 2.0*t); }
void main(){
  float draw = ease(clamp(uConnect*1.35 - vK*0.35, 0.0, 1.0));   // line grows from farmer to point
  float g = ease(clamp(uGather*1.3 - vK*0.3, 0.0, 1.0));          // marker position along the line
  if (vT > draw || vT < g) discard;
  float a = 0.55 * (0.55 + 0.45*vT);
  vec3 gold = vec3(0.690, 0.478, 0.165);
  gl_FragColor = vec4(gold * a, a);
}`,Z=e=>Math.min(Math.max(e,0),1),X=(e,t)=>{let a=Z((t-e[0])/(e[1]-e[0]));return a*a*(3-2*a)},Q=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;function J(e,t,a=1){let r=e*Math.PI/180,o=t*Math.PI/180;return new E.cE(Math.cos(r)*Math.cos(o)*a,Math.sin(r)*a,-Math.cos(r)*Math.sin(o)*a)}async function ee(e,t){let a,r=t.settings,o=r.timeline;try{a=new N.T({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"})}catch{return null}a.setClearColor(0xfffcf8,1),a.autoClear=!1;let n=await fetch((0,T.f)("/data/land.bin")).then(e=>e.ok?e.arrayBuffer():null).catch(()=>null);if(!n)return a.dispose(),null;let i=new Int16Array(n),l=i[0],s=i.subarray(2),c=s.length/2,u=new Float32Array(3*c),d=new Float32Array(c),h=new Float32Array(c);for(let e=0;e<c;e++){let t=J(s[2*e]/100,s[2*e+1]/100);u.set([t.x,t.y,t.z],3*e),d[e]=+(e>=l),h[e]=0x9e3779b1*e%1e3/1e3}let f=new E.ld;f.setAttribute("position",new E.f5(u,3)),f.setAttribute("aDense",new E.f5(d,1)),f.setAttribute("aSeed",new E.f5(h,1));let m=J(r.target.lat,r.target.lon).normalize(),p={blending:E.UM,blendSrc:E.Vt,blendDst:E.oL},v=new E.Zg({vertexShader:I,fragmentShader:B,transparent:!0,depthWrite:!1,...p,uniforms:{uTime:{value:0},uDpr:{value:1},uSize:{value:r.dotSize},uDense:{value:0},uFade:{value:1},uTarget:{value:m},uNear:{value:0}}}),x=new E.sy(f,v);x.frustumCulled=!1;let g=new E.kE(new E.Gu(.985,64,48),new E.p$({colorWrite:!1}));g.renderOrder=-1;let y=[];for(let e=-75;e<=75;e+=15)for(let t=0;t<360;t+=3){let a=J(e,t,1.001),r=J(e,t+3,1.001);y.push(a.x,a.y,a.z,r.x,r.y,r.z)}for(let e=0;e<360;e+=15)for(let t=-84;t<84;t+=3){let a=J(t,e,1.001),r=J(t+3,e,1.001);y.push(a.x,a.y,a.z,r.x,r.y,r.z)}let w=new E.ld;w.setAttribute("position",new E.ki(y,3));let b=new E.NQ({color:3020560,transparent:!0,opacity:.09,depthWrite:!1}),A=new E.a1(w,b),M=new E.Zg({vertexShader:$,fragmentShader:q,transparent:!0,depthWrite:!1,...p,uniforms:{uFade:{value:1}}}),S=new E.kE(new E.Gu(1.07,64,48),M),j=new E.C9;j.add(g,A,x);let F=new E.P6;F.add(j,S);let P=r.target.lat*Math.PI/180,U=r.target.lon*Math.PI/180,ee=new E.as().setFromAxisAngle(new E.cE(1,0,0),P).multiply(new E.as().setFromAxisAngle(new E.cE(0,1,0),-Math.PI/2-U)),et=J(25.5,76.5).normalize(),ea=new E.zm(30,1,.005,50),er=new E.CQ(2,2),eo={transparent:!0,depthTest:!1,depthWrite:!1,blending:E.UM,blendSrc:E.Vt,blendDst:E.oL},en=new E.Zg({vertexShader:_,fragmentShader:H,...eo,uniforms:{uOpacity:{value:0},uZoom:{value:1},uTime:{value:0},uAspect:{value:1},uTilt:{value:0},uOct:{value:r.mapOctaves},uRelief:{value:0},uFog:{value:0},uChart:{value:0}}}),ei=new E.Zg({vertexShader:_,fragmentShader:V,...eo,uniforms:{uTex:{value:null},uOpacity:{value:0},uZoom:{value:1},uScan:{value:0},uMist:{value:1},uDim:{value:0},uTime:{value:0},uAspect:{value:1},uTexAspect:{value:4/3},uIris:{value:0}}}),el=function(){let e,t=[],a=(e=57,()=>(e=1664525*e+0x3c6ef35f>>>0)/0x100000000),r=[[.004,.09]];for(let e=0;e<=120;e++){let t=e/120;r.push([C(t),-t])}for(let e of(t.push(R(r,1.5,.95,0,.42)),[-1,1])){let a=[];for(let t=0;t<=120;t++){let r=t/120;a.push([C(r)+e*L(r),-r])}t.push(R(a,1.2,.9,.06,.5))}let o=[],n={[-1]:[],1:[]};for(let e=0;e<9;e++)for(let a of[-1,1]){let r=.08+e/8*.74+.018*(a>0),i=.8-.01*e,l=.13+.02*(1-e/9),s=[],c=[0,0];for(let e=0;e<=40;e++){let t=e/40,o=r+l*(.55*t+.45*t*t),n=L(Math.min(.995,o)),u=C(o)+a*n*i*Math.pow(Math.sin(t*Math.PI*.5),.85);s.push([u,-o]),c=[u,-o]}let u=r+l;for(let e=1;e<=12;e++){let t=e/12,r=u+.045*t,o=L(Math.min(.995,r));s.push([C(r)+a*o*(i+.035*Math.sin(t*Math.PI)),-r])}let d=.2+.035*e+.012*(a>0);t.push(R(s,.9,.75,d,d+.32)),o.push(c),n[a].push(s)}for(let e of[-1,1]){let r=n[e];for(let o=0;o<r.length-1;o++)for(let n of[.38+.06*a(),.68+.08*a()]){let i=r[o][Math.round(40*n)],l=r[o+1][Math.round((n-.12)*40)],s=(i[0]+l[0])/2+.006*e*(a()-.3),c=(i[1]+l[1])/2+.004*(a()-.5),u=[];for(let e=0;e<=8;e++){let t=e/8,a=1-t;u.push([a*a*i[0]+2*a*t*s+t*t*l[0],a*a*i[1]+2*a*t*c+t*t*l[1]])}let d=.5+.03*o+.08*n;t.push(R(u,.5,.24,d,d+.18))}}let i=o[11]??[.12,-.55];return{strokes:t,tips:o,dive:i}}(),es=document.createElement("canvas");es.setAttribute("aria-hidden","true"),es.style.cssText="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;opacity:1",e.insertAdjacentElement("afterend",es);let ec=es.getContext("2d"),eu=1,ed=new E.kE(er,en),eh=new E.kE(er,ei);ed.frustumCulled=eh.frustumCulled=!1,ed.renderOrder=1,eh.renderOrder=0;let ef=new E.P6;ef.add(eh,ed);let em=new E.Sc(-1,1,1,-1,0,1),ep=new Float32Array(114),ev=new Float32Array(114),ex=new Float32Array(57),eg=5701,ey=()=>(eg=16807*eg%0x7fffffff)/0x7fffffff;for(let e=0;e<57;e++)ev[2*e]=ey(),ev[2*e+1]=ey(),ex[e]=e;let ew=new E.ld;ew.setAttribute("position",new E.f5(new Float32Array(171),3)),ew.setAttribute("aHome",new E.f5(ep,2)),ew.setAttribute("aIndex",new E.f5(ex,1));let eb=new E.Zg({vertexShader:G,fragmentShader:W,transparent:!0,depthTest:!1,depthWrite:!1,...p,uniforms:{uShown:{value:0},uGather:{value:0},uDpr:{value:1},uSize:{value:r.phone?34:46},uAnchor:{value:new E.wq(.34,.5)}}}),eA=new E.sy(ew,eb);eA.frustumCulled=!1;let eM=new Float32Array(228),eS=new Float32Array(114),ej=new Float32Array(114);for(let e=0;e<57;e++)eS[2*e]=0,eS[2*e+1]=1,ej[2*e]=ej[2*e+1]=e;let eF=new E.ld;eF.setAttribute("position",new E.f5(new Float32Array(342),3)),eF.setAttribute("aHome",new E.f5(eM,2)),eF.setAttribute("aT",new E.f5(eS,1)),eF.setAttribute("aIndex",new E.f5(ej,1));let eP=new E.Zg({vertexShader:K,fragmentShader:Y,transparent:!0,depthTest:!1,depthWrite:!1,...p,uniforms:{uConnect:{value:0},uGather:{value:0},uAnchor:eb.uniforms.uAnchor}}),eT=new E.a1(eF,eP);eT.frustumCulled=!1,eT.renderOrder=0,eA.renderOrder=1;let eE=new E.P6;eE.add(eT,eA);let eN=1,eL=1,eC=!0,eR=[],ek=()=>{eR.length=0,eN=e.clientWidth||window.innerWidth,eL=e.clientHeight||window.innerHeight,eC=eN>1.05*eL;let t=Math.min(window.devicePixelRatio||1,r.dprCap);a.setPixelRatio(t),a.setSize(eN,eL,!1),eu=Math.min(window.devicePixelRatio||1,2),es.width=Math.round(eN*eu),es.height=Math.round(eL*eu),ea.aspect=eN/eL,ea.updateProjectionMatrix();let o=eN/eL;en.uniforms.uAspect.value=o,ei.uniforms.uAspect.value=o,v.uniforms.uDpr.value=t,eb.uniforms.uDpr.value=t,eb.uniforms.uAnchor.value.set(eC?.34:.5,eC?.5:.69);let n=0;for(let e of r.mandals){let t=eC?.47+.34*e.cx:.14+.72*e.cx,a=eC?.27+.42*e.cy:.4+.3*e.cy,r=eC?.0165:.013,o=eL/eN,i=r*Math.sqrt(e.count+.5);eR.push([t,e.below?a-i-.025:a+i+.03]);for(let i=0;i<e.count&&n<57;i++,n++){let e=2.39996323*i+.15*ev[2*n],l=r*Math.sqrt(i+.5);ep[2*n]=t+Math.cos(e)*l*o,ep[2*n+1]=a+Math.sin(e)*l,eM.set([ep[2*n],ep[2*n+1],ep[2*n],ep[2*n+1]],4*n)}}ew.attributes.aHome.needsUpdate=!0,eF.attributes.aHome.needsUpdate=!0};ek();let ez=()=>{ek(),eK()};window.addEventListener("resize",ez);let eO=new E.cE,eD=new E.as,eU=new E.as,eI=new E.cE(0,1,0),eB=new E.cE(1,0,0),e$=performance.now()/1e3,eq=!1,e_=0,eH=!0,eV=Z(t.getProgress()),eG=0,eW=()=>{eq||(e_=requestAnimationFrame(eW),t.isActive()&&(!t.reduced||eH)&&(eH=!1,(e=>{var n;let i,l,s,c,u,d,h=Z(t.getProgress()),f=eG?Math.min(.05,e-eG):.016;eG=e,eV=t.reduced?h:eV+(h-eV)*(1-Math.exp(-(9*f))),2e-4>Math.abs(h-eV)&&(eV=h);let p=eV,x=t.reduced?0:e-e$,g=eC?1:Math.max(1,eL/eN*.76),y=6.2*g,w=1.9*Math.sqrt(g),A=p<o.orbitEnd?y+(w-y)*Q(p/o.orbitEnd):w+(1.035-w)*Math.pow(Z((p-o.orbitEnd)/(o.diveEnd-o.orbitEnd)),1.6);ea.position.set(0,0,A),ea.lookAt(0,0,0);let P=X([.16,.34],p),T=eC?.17*(1-P):0,E=eC?-.03*(1-P):-.15*(1-P);ea.setViewOffset(eN,eL,-T*eN,-E*eL,eN,eL);let N=1-Q(Z(p/.28)),L=t.reduced?0:.025*x*(1-X([0,.12],p));eD.setFromAxisAngle(eI,-(.45*N)-L),eU.setFromAxisAngle(eB,.18*N),j.quaternion.copy(eU).multiply(eD).multiply(ee);let C=1-X(o.globeOut,p);v.uniforms.uTime.value=x,v.uniforms.uFade.value=C,v.uniforms.uDense.value=X([.12,.3],p),v.uniforms.uNear.value=X([.3,o.globeOut[0]],p),M.uniforms.uFade.value=C*(1-X([.3,.42],p)),b.opacity=.08*C*(1-X([.25,.4],p)),j.visible=C>.001,S.visible=j.visible;let R=X([o.lights[0]-.008,o.lights[0]+.014],p)*(1-X([o.gather[0]+.02,o.gather[1]-.01],p)),U=Math.max(X(o.mapIn,p)*(1-X(o.mapOut,p)),.55*R);en.uniforms.uOpacity.value=U,en.uniforms.uTime.value=x,en.uniforms.uChart.value=R;let I=X([o.mapIn[0],o.mapOut[1]],p);if(en.uniforms.uZoom.value=R>.001?2.2:Math.exp(Math.log(1.1)+(Math.log(14)-Math.log(1.1))*I),en.uniforms.uTilt.value=R>.001?0:.9*X([o.mapIn[0],.52],p)+.75*X([.52,o.mapOut[0]],p),en.uniforms.uRelief.value=R>.001?0:X([.5,.6],p),en.uniforms.uFog.value=R>.001?0:X([o.photoIn[0]-.03,o.photoIn[0]+.02],p),ed.visible=U>.001,eh.visible=eh.visible,ei.uniforms.uOpacity.value=0,ei.uniforms.uTime.value=x,ei.uniforms.uIris.value=2,ei.uniforms.uZoom.value=1,ei.uniforms.uScan.value=1,ei.uniforms.uMist.value=.8*(1-X([o.photoIn[0]+.02,o.photoIn[1]+.01],p))+.05,ei.uniforms.uDim.value=X([o.lights[0]-.04,o.lights[0]-.005],p),eh.visible=!1,ec){let e=X([o.photoIn[0]-.005,o.photoIn[0]+.03],p)*(1-X([o.scan[1]-.022,o.lights[0]-.002],p));!function(e,t,a,r,o,n,i){if(e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,e.canvas.width,e.canvas.height),n.opacity<=.001)return;e.scale(i,i);let l=o?.74*r:Math.min(.44*r,1.15*a),s=Math.exp(Math.log(1)+Math.log(3.6)*D(n.dive)),c=-.42+.12*n.dive,u=D(n.dive),d=t.dive[0]*u,h=-.5+(t.dive[1]+.5)*u;for(let i of(e.translate(o?.67*a:.5*a,o?.5*r:.44*r),e.rotate(c),e.scale(s,s),e.translate(-d*l,-h*l),e.lineCap="round",e.lineJoin="round",t.strokes)){let t=z((n.draw-i.t0)/(i.t1-i.t0));if(t<=0)continue;let a=i.len*O(t);e.beginPath(),e.moveTo(i.pts[0][0]*l,i.pts[0][1]*l);for(let t=1;t<i.pts.length;t++)if(i.cum[t]<=a)e.lineTo(i.pts[t][0]*l,i.pts[t][1]*l);else{let r=i.cum[t]-i.cum[t-1]||1,o=(a-i.cum[t-1])/r;e.lineTo((i.pts[t-1][0]+(i.pts[t][0]-i.pts[t-1][0])*o)*l,(i.pts[t-1][1]+(i.pts[t][1]-i.pts[t-1][1])*o)*l);break}e.strokeStyle=`rgba(46, 23, 16, ${(i.a*n.opacity*(1-.5*n.dive)).toFixed(3)})`,e.lineWidth=i.w/s,e.stroke()}if(n.glow>.001&&t.strokes.slice(3,3+t.tips.length).forEach((t,a)=>{let r=z((n.glow-a%9*.035)/.6);if(r<=0)return;let o=Math.min(t.pts.length-1,Math.round(40*O(r))),[i,c]=t.pts[o],u=(2.2+1.4*r)/s;e.beginPath(),e.arc(i*l,c*l,3*u,0,2*Math.PI),e.fillStyle=`rgba(${k}, ${(.16*r*n.opacity).toFixed(3)})`,e.fill(),e.beginPath(),e.arc(i*l,c*l,u,0,2*Math.PI),e.fillStyle=`rgba(${k}, ${(.95*r*n.opacity).toFixed(3)})`,e.fill()}),o){e.save(),e.setTransform(i,0,0,i,0,0),e.globalCompositeOperation="destination-out";let t=e.createLinearGradient(.3*a,0,.5*a,0);t.addColorStop(0,"rgba(0,0,0,1)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,.5*a,r),e.restore()}else{e.save(),e.setTransform(i,0,0,i,0,0),e.globalCompositeOperation="destination-out";let t=e.createLinearGradient(0,.64*r,0,.74*r);t.addColorStop(0,"rgba(0,0,0,0)"),t.addColorStop(1,"rgba(0,0,0,1)"),e.fillStyle=t,e.fillRect(0,.64*r,a,.36*r),e.restore()}}(ec,el,eN,eL,eC,{draw:X([o.photoIn[0]-.01,o.scan[0]+.02],p),dive:X([o.scan[0],o.scan[1]],p),glow:X([o.scan[1]-.05,o.scan[1]-.012],p),opacity:e},eu)}let B=X(o.lights,p);eb.uniforms.uShown.value=B;let $=Z((p-o.gather[0])/(o.gather[1]-o.gather[0]));eb.uniforms.uGather.value=$,eP.uniforms.uGather.value=$,eP.uniforms.uConnect.value=Z((p-o.connect[0])/(o.connect[1]-o.connect[0])),eA.visible=B>.001,a.clear(),a.render(ef,em),j.visible&&a.render(F,ea),eA.visible&&a.render(eE,em),eO.copy(m).applyQuaternion(j.quaternion);let q=eO.z;eO.project(ea);let _=(.5*eO.x+.5)*eN,H=(-(.5*eO.y)+.5)*eL,V=Z((q-.35)/.3)*(1-X([.3,.4],p));eO.copy(et).applyQuaternion(j.quaternion);let G=eO.z;eO.project(ea);let W=(.5*eO.x+.5)*eN,K=(-(.5*eO.y)+.5)*eL,Y=Z((G-.35)/.25)*X([.02,.1],p)*(1-X([.27,.34],p));t.onFrame({q:p,altitude:(n=function(e,t){if(e<=t[0][0])return t[0][1];for(let a=1;a<t.length;a++)if(e<=t[a][0]){let[r,o]=t[a-1],[n,i]=t[a];return Math.exp(Math.log(o)+(Math.log(i)-Math.log(o))*Q(Z((e-r)/(n-r))))}return t[t.length-1][1]}(p,o.altitude))>=1e4?`${Math.round(n/1e3).toLocaleString("en-US")} km`:`${(10*Math.round(n/10)).toLocaleString("en-US")} m`,reticle:{x:_,y:H,o:V},india:{x:W,y:K,o:Y},lights:B>0?Math.min(57,Math.floor(B/.94*57)+1):0,tag:(l=(i=Math.min(57,Math.floor(B/.94*57)+1))-1,s=X([o.lights[0],o.lights[0]+.01],p)*(1-X([o.connect[0],o.connect[0]+.015],p)),{x:ep[2*l]*eN,y:(1-ep[2*l+1])*eL,o:s,n:i}),mandals:(c=B>0?Math.min(57,Math.floor(B/.94*57)+1):0,u=1-X([o.connect[0]+.01,o.connect[0]+.03],p),d=0,r.mandals.map((e,t)=>{let a=Math.max(0,Math.min(e.count,c-d));d+=e.count;let[r,o]=eR[t]??[0,0];return{x:r*eN,y:(1-o)*eL,o:(a>0)*u,n:a}})),node:{x:eb.uniforms.uAnchor.value.x*eN,y:(1-eb.uniforms.uAnchor.value.y)*eL,o:X([o.connect[0]+.004,o.connect[0]+.02],p)*(1-X([o.gather[0]+.02,o.gather[0]+.05],p))}})})(performance.now()/1e3)))},eK=()=>{eH=!0};e_=requestAnimationFrame(eW);let eY=e=>{e.preventDefault(),t.onLost?.()};return e.addEventListener("webglcontextlost",eY),{requestDraw:eK,destroy(){eq=!0,cancelAnimationFrame(e_),window.removeEventListener("resize",ez),e.removeEventListener("webglcontextlost",eY),[f,w,ew,eF,er,g.geometry,S.geometry].forEach(e=>e.dispose()),[v,b,M,en,ei,eb,eP,g.material].forEach(e=>e.dispose()),es.remove(),a.dispose()}}}let et=e=>Math.min(Math.max(e,0),1),ea=(e,t,a)=>{let r=et((a-e)/(t-e));return r*r*(3-2*r)},er={rest:{scale:1,y:0},hover:{scale:1.08,y:-3},tap:{scale:.96,y:0}},eo={type:"spring",stiffness:260,damping:18,mass:.6},en=i.U.handoff;function ei(e,t,a){e.style.opacity=t.toFixed(3),e.style.visibility=t<.01?"hidden":"visible",e.style.transform=`translate3d(0, ${((1-t)*a).toFixed(1)}px, 0)`}e.s(["default",0,function(){let e=(0,a.useRef)(null),c=(0,a.useRef)(null),f=(0,a.useRef)(null),m=(0,a.useRef)(null),p=(0,a.useRef)(null),v=(0,a.useRef)(null),x=(0,a.useRef)(0),g=(0,a.useRef)(0),y=(0,a.useRef)({top:0,descentPx:1,journeyLen:1}),w=(0,a.useRef)(-1);(0,a.useRef)(-1);let b=(0,o.useRouter)(),[M,S]=(0,a.useState)(!1),[j,F]=(0,a.useState)(!1),E=(0,a.useCallback)(()=>{(0,s.z)().washing||((0,s.Z)({washing:!0}),window.setTimeout(()=>b.push(i.r),i.$.washMs))},[b]),N=(0,a.useCallback)(({sf:e,enter:t,p:a})=>{let r,o=f.current;if(!o)return;let n=g.current,l=ea(en[1]-.012,en[1],n),s=ea(i.$.offerFadeStart,i.$.offerFadeEnd,a)*l;o.stories.forEach(e=>{let r=t*l*(1-ea(i.$.offerFadeStart-.01,i.$.offerFadeStart+.04,a));e.style.setProperty("--o",r.toFixed(3))});let c=Math.round(e),u=n<1?(r=0,i.U.stories.forEach((e,t)=>{Math.abs(e.at-n)<Math.abs(i.U.stories[r].at-n)&&(r=t)}),r):i.U.stories.length;if(u!==w.current&&(w.current=u,o.navButtons.forEach((e,t)=>{e.classList.toggle("on",t===u),t===u?e.setAttribute("aria-current","step"):e.removeAttribute("aria-current")}),o.fallback?.setAttribute("data-stage",String(c)),o.chapter)){let e=n<1?i.U.stories[u].nav:"Araku Pearl";o.chapter.textContent=`${String(u+1).padStart(2,"0")} / ${String(i.U.stories.length+1).padStart(2,"0")} \xb7 ${e}`,o.chapter.classList.remove("tick"),o.chapter.offsetWidth,o.chapter.classList.add("tick")}if(o.specimen&&(o.specimen.style.opacity=(l*t).toFixed(3)),o.specimenLabel){let e=a>i.$.offerFadeStart?"Specimen 06 · Araku Pearl":`Specimen ${String(c+1).padStart(2,"0")} \xb7 ${i.y[c].nav}`;o.specimenLabel.textContent!==e&&(o.specimenLabel.textContent=e)}o.hint&&(o.hint.style.opacity=(1-ea(.015,.04,n)).toFixed(3));let d=o.doors.length,h=i.$.doorsFadeEnd-i.$.doorsFadeStart-i.$.doorsStagger*(d-1);o.doors.forEach((e,t)=>{let r=i.$.doorsFadeStart+t*i.$.doorsStagger;ei(e,ea(r,r+h,a)*l,18)}),o.offer&&ei(o.offer,s,16),o.button&&ei(o.button,ea(i.$.buttonFadeStart,i.$.buttonFadeEnd,a)*l,12)},[]),L=(0,a.useCallback)(e=>{let t=f.current;if(!t)return;let a=e.q;t.dStories.forEach((e,t)=>{let r=i.U.stories[t].at,o=Math.abs(a-r),n=1-ea(i.U.storyWidth,i.U.storyWidth+i.U.storyFade,o);t===i.U.stories.length-1&&(n=ea(r-i.U.storyWidth-i.U.storyFade,r-i.U.storyWidth,a)*(1-ea(i.U.timeline.connect[0],i.U.timeline.connect[0]+.02,a))),e.style.setProperty("--o",(0===t&&a<r?1:n).toFixed(3))}),t.alt&&(t.alt.textContent=e.altitude),t.altTape&&(t.altTape.style.transform=`translate3d(0, ${(900*a).toFixed(1)}px, 0)`),t.reticle&&(e.reticle.o>.5?t.reticle.classList.add("locked"):e.reticle.o<.05&&t.reticle.classList.remove("locked"),t.reticle.style.opacity=e.reticle.o.toFixed(3),t.reticle.style.transform=`translate3d(${e.reticle.x.toFixed(1)}px, ${e.reticle.y.toFixed(1)}px, 0)`),t.india&&(t.india.style.opacity=e.india.o.toFixed(3),t.india.style.transform=`translate3d(${e.india.x.toFixed(1)}px, ${e.india.y.toFixed(1)}px, 0)`),t.ftag&&(t.ftag.style.opacity=e.tag.o.toFixed(3),t.ftag.classList.toggle("flip",e.tag.x>.62*window.innerWidth),t.ftag.style.transform=`translate3d(${e.tag.x.toFixed(1)}px, ${e.tag.y.toFixed(1)}px, 0)`,t.ftagN&&(t.ftagN.textContent=String(e.tag.n).padStart(2,"0"))),t.mandals.forEach((t,a)=>{let r=e.mandals[a];if(!r)return;t.style.opacity=r.o.toFixed(3),t.style.transform=`translate3d(${r.x.toFixed(1)}px, ${r.y.toFixed(1)}px, 0)`;let o=t.querySelector("b");o&&(o.textContent=String(r.n))}),t.node&&(t.node.style.opacity=e.node.o.toFixed(3),t.node.style.transform=`translate3d(${e.node.x.toFixed(1)}px, ${e.node.y.toFixed(1)}px, 0)`);let r=e.mandals.length?e.mandals.reduce((e,t)=>e+t.n,0):e.lights;t.counter&&(t.counter.textContent=String(r).padStart(2,"0"))},[]);(0,a.useEffect)(()=>{let t=e.current;return f.current={stories:Array.from(t.querySelectorAll("[data-story]")),navButtons:Array.from(t.querySelectorAll("[data-nav]")),hint:t.querySelector("[data-hint]"),doors:Array.from(t.querySelectorAll("[data-door]")),button:t.querySelector("[data-descent]"),offer:t.querySelector("[data-offer]"),fallback:t.querySelector("[data-fallback]"),dStories:Array.from(t.querySelectorAll("[data-dstory]")),dLayer:t.querySelector("[data-dlayer]"),jLayer:t.querySelector("[data-jlayer]"),alt:t.querySelector("[data-alt]"),altTape:t.querySelector("[data-alt-tape]"),reticle:t.querySelector("[data-reticle]"),india:t.querySelector("[data-india]"),ftag:t.querySelector("[data-ftag]"),node:t.querySelector("[data-node]"),mandals:Array.from(t.querySelectorAll("[data-mandal]")),ftagN:t.querySelector("[data-ftag-n]"),counter:t.querySelector("[data-counter]"),chapter:t.querySelector("[data-chapter]"),specimen:t.querySelector("[data-specimen]"),specimenLabel:t.querySelector("[data-specimen-label]"),hud:t.querySelector("[data-hud]")},()=>{f.current=null}},[M,j]),(0,a.useEffect)(()=>{let t=e.current?.querySelector("[data-hud]");if(!t)return;let a=()=>{"pending"!==(0,s.z)().loader&&t.classList.add("hud-in")};return a(),(0,s.G)(a)},[]),(0,a.useEffect)(()=>{let t=e.current,a=(0,l.d)(),r=i.U.lengthVh/(i.U.lengthVh+i.$.lengthVh),o=()=>{let e=t.getBoundingClientRect().top+window.scrollY,a=Math.max(1,t.offsetHeight*r),o=Math.max(1,t.offsetHeight-a-window.innerHeight);y.current={top:e,descentPx:a,journeyLen:o}},n=()=>{let{top:e,descentPx:t,journeyLen:r}=y.current,o=window.scrollY-e;g.current=et(o/t),x.current=et((o-t)/r),(0,s.Z)({scrollProgress:x.current});let n=f.current;if(n){let e=g.current;if(n.dLayer){let t=1-ea(en[0]+.015,1,e);n.dLayer.style.opacity=t.toFixed(3),n.dLayer.style.visibility=t<.002?"hidden":"visible"}n.jLayer&&(n.jLayer.style.opacity=ea(en[0],en[1],e).toFixed(3)),n.hud&&n.hud.style.setProperty("--hud",(1-ea(.96,1,e)).toFixed(3))}M?N({sf:A(x.current,i.s),enter:1,p:x.current}):a&&m.current?.requestDraw(),j?L({q:g.current,altitude:"",reticle:{x:0,y:0,o:0},india:{x:0,y:0,o:0},tag:{x:0,y:0,o:0,n:0},node:{x:0,y:0,o:0},mandals:[],lights:57*(g.current>.85)}):v.current?.requestDraw()};o(),n();let c=new ResizeObserver(()=>{o(),n()});return c.observe(t),window.addEventListener("scroll",n,{passive:!0}),window.addEventListener("resize",n),()=>{c.disconnect(),window.removeEventListener("scroll",n),window.removeEventListener("resize",n)}},[N,L,M,j]),(0,a.useEffect)(()=>{let e=p.current;if(!(0,l.e)())return void F(!0);let t=document.createElement("canvas");t.className="jr-canvas",e.appendChild(t);let a=!1,r=(0,l.u)();return ee(t,{settings:{phone:r,dprCap:r?i.s.dprPhone:i.s.dprDesktop,dotSize:r?i.U.dotSizePhone:i.U.dotSize,mapOctaves:r?i.U.mapOctavesPhone:i.U.mapOctaves,target:i.U.target,mandals:i.U.mandals,timeline:i.U.timeline},reduced:(0,l.d)(),getProgress:()=>g.current,isActive:()=>g.current<1,onFrame:L,onLost:()=>F(!0)}).then(e=>{a?e?.destroy():e?v.current=e:F(!0)}).catch(()=>{a||F(!0)}),()=>{a=!0,v.current?.destroy(),v.current=null,t.remove()}},[L]),(0,a.useEffect)(()=>{var e;let t=c.current,a=(0,l.d)(),r=()=>{(0,s.Z)({loadProgress:1}),S(!0)};if(!(0,l.e)())return void r();let o=document.createElement("canvas");o.className="jr-canvas",t.appendChild(o);let n=!1,u=!1,d=null;return(0,s.Z)({loadProgress:0}),P(o,{settings:{dots:(e=(0,l.u)())?i.s.dotsPhone:i.s.dotsDesktop,coreDots:e?i.s.coreDotsPhone:i.s.coreDotsDesktop,dprCap:e?i.s.dprPhone:i.s.dprDesktop,tilt:i.s.tilt,sway:i.s.sway,hoverRadius:i.s.hoverRadius,hoverLift:i.s.hoverLift,rippleEvery:i.s.rippleEvery,rippleSpeed:i.s.rippleSpeed,fill:e?i.s.phone.fill:i.s.fill,fillFraction:i.s.fillFraction,fillSize:e?i.s.phone.fillSize:i.s.fillSize,dotSize:e?i.s.phone.dotSize:i.s.dotSize,enter:i.s.enter,scrollStart:i.s.scrollStart,scrollEnd:i.s.scrollEnd,hold:i.s.hold,light:!0},reduced:a,getProgress:()=>x.current,onFrame:N,onLoad:e=>(0,s.Z)({loadProgress:e}),onLost:r,cancelled:()=>n}).then(e=>{if(n)return void e?.destroy();if(!e)return void r();m.current=e;let t=()=>{if(u)return;let t=(0,s.z)();"out"===t.loader?(u=!0,e.start(t.loaderOutAt)):"done"===t.loader&&(u=!0,e.start(performance.now()/1e3+.1))};t(),d=(0,s.G)(t)}).catch(()=>{n||r()}),()=>{n=!0,d?.(),m.current?.destroy(),m.current=null,o.remove()}},[N]),(0,a.useEffect)(()=>{let e=()=>window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-4,t=0,a=0,r=r=>{if(r.deltaY<=0||!e()){t=0;return}t+=r.deltaY,clearTimeout(a),a=window.setTimeout(()=>t=0,900),t>i.$.pastEndPixels&&(t=0,E())},o=0,n=!1,l=t=>{o=t.touches[0].clientY,n=e()},s=e=>{n&&o-e.touches[0].clientY>.5*i.$.pastEndPixels&&(n=!1,E())};return window.addEventListener("wheel",r,{passive:!0}),window.addEventListener("touchstart",l,{passive:!0}),window.addEventListener("touchmove",s,{passive:!0}),()=>{clearTimeout(a),window.removeEventListener("wheel",r),window.removeEventListener("touchstart",l),window.removeEventListener("touchmove",s)}},[E]);let C=i.U.stories.length+1;return(0,t.jsx)("section",{ref:e,className:"relative",style:{height:`${i.U.lengthVh+i.$.lengthVh}svh`},children:(0,t.jsxs)("div",{className:"jr-stage sticky top-0 h-svh overflow-hidden",style:{"--canopy":`url(${(0,T.f)("/photos/tex-canopy.jpg")})`},children:[(0,t.jsxs)("div",{"data-dlayer":!0,className:"absolute inset-0",children:[(0,t.jsx)("div",{ref:p,"aria-hidden":!0,className:"absolute inset-0"}),j&&(0,t.jsx)("div",{"aria-hidden":!0,className:"ds-fallback"}),(0,t.jsx)("div",{"aria-hidden":!0,className:"ds-scrim"}),i.U.mandals.map(e=>(0,t.jsxs)("div",{"data-mandal":!0,"aria-hidden":!0,className:"below"in e&&e.below?"hud-mandal is-below":"hud-mandal",style:{opacity:0},children:[(0,t.jsx)("span",{className:"mandal-name",children:e.name}),(0,t.jsxs)("span",{className:"mandal-n",children:[(0,t.jsx)("b",{children:"0"})," / ",e.count]})]},e.name)),(0,t.jsxs)("div",{"data-node":!0,"aria-hidden":!0,className:"hud-node",style:{opacity:0},children:[(0,t.jsx)("span",{className:"node-ring"}),(0,t.jsxs)("span",{className:"node-label",children:[(0,t.jsx)("b",{children:"57 farmers · One MOU"}),(0,t.jsx)("span",{children:"Araku Tribal Development and Sustainable Agriculture Society"})]})]}),(0,t.jsxs)("div",{"data-ftag":!0,"aria-hidden":!0,className:"hud-ftag",style:{opacity:0},children:[(0,t.jsx)("span",{className:"hud-k",children:"Farmer"})," ",(0,t.jsx)("b",{"data-ftag-n":!0,children:"01"})," / 57"]}),(0,t.jsx)("div",{"data-india":!0,"aria-hidden":!0,className:"hud-india",style:{opacity:0},children:"India"}),(0,t.jsxs)("div",{"data-reticle":!0,"aria-hidden":!0,className:"hud-reticle",style:{opacity:0},children:[(0,t.jsx)("span",{className:"ret-ring"}),(0,t.jsx)("span",{className:"ret-tick"}),(0,t.jsxs)("span",{className:"ret-label",children:[(0,t.jsx)("b",{children:i.U.target.label}),(0,t.jsx)("span",{children:i.U.coords}),(0,t.jsx)("span",{children:i.U.target.place})]})]}),i.U.stories.map((e,a)=>(0,t.jsxs)("div",{"data-dstory":!0,className:"ds-story",style:{"--o":+(0===a)},children:[(0,t.jsx)("div",{className:"n",children:e.n}),(0,t.jsx)(0===a?"h1":"h2",{children:e.h}),(0,t.jsx)("p",{children:e.p}),a===i.U.stories.length-1&&(0,t.jsxs)("div",{className:"ds-count","aria-hidden":!0,children:[(0,t.jsx)("b",{"data-counter":!0,children:"00"}),(0,t.jsx)("span",{children:"/ 57 · Farmers onboarded"})]}),(0,t.jsx)("div",{className:"rule"})]},e.nav))]}),(0,t.jsxs)("div",{"data-jlayer":!0,className:"absolute inset-0",style:{opacity:0},children:[(0,t.jsx)("div",{"aria-hidden":!0,className:"jr-plate"}),(0,t.jsx)("div",{"aria-hidden":!0,className:"jr-shadow"}),(0,t.jsx)("div",{ref:c,"aria-hidden":!0,className:"absolute inset-0"}),M&&(0,t.jsx)("div",{"aria-hidden":!0,"data-fallback":!0,"data-stage":"0",className:"jr-fallback"})]}),(0,t.jsx)("p",{className:"sr-only",children:i.j.sceneDescription}),(0,t.jsxs)("div",{"data-hud":!0,"aria-hidden":!0,className:"hud",children:[(0,t.jsx)("span",{className:"hud-corner tl"}),(0,t.jsx)("span",{className:"hud-corner tr"}),(0,t.jsx)("span",{className:"hud-corner bl"}),(0,t.jsx)("span",{className:"hud-corner br"}),(0,t.jsxs)("div",{className:"hud-chapter",children:[(0,t.jsx)("span",{className:"hud-dot"}),(0,t.jsx)("span",{"data-chapter":!0,children:`01 / ${String(C).padStart(2,"0")} \xb7 ${i.U.stories[0].nav}`})]}),(0,t.jsxs)("div",{className:"hud-alt",children:[(0,t.jsx)("span",{className:"hud-k",children:"View alt."}),(0,t.jsx)("b",{"data-alt":!0,children:"400 km"}),(0,t.jsx)("div",{className:"hud-tape",children:(0,t.jsx)("i",{"data-alt-tape":!0})})]}),(0,t.jsxs)("div",{className:"hud-coords",children:[(0,t.jsx)("span",{className:"hud-k",children:i.U.target.label}),(0,t.jsx)("span",{children:i.U.coords}),(0,t.jsx)("span",{children:i.U.target.place})]})]}),(0,t.jsxs)("div",{"data-specimen":!0,"aria-hidden":!0,className:"hud-specimen",style:{opacity:0},children:[(0,t.jsx)("span",{className:"br tl"}),(0,t.jsx)("span",{className:"br tr"}),(0,t.jsx)("span",{className:"br bl"}),(0,t.jsx)("span",{className:"br brr"}),(0,t.jsx)("span",{className:"spec-axis"}),(0,t.jsx)("span",{"data-specimen-label":!0,className:"spec-label",children:"Specimen 01 · Pearl"})]}),(0,t.jsxs)("div",{"data-story":!0,className:"jr-story",children:[(0,t.jsx)("div",{className:"n",children:i.V.n}),(0,t.jsx)("h2",{children:i.V.h}),(0,t.jsx)("p",{children:i.V.p}),(0,t.jsx)("div",{className:"rule"})]}),(0,t.jsxs)("div",{className:"jr-end",children:[(0,t.jsxs)("div",{"data-offer":!0,className:"jr-offer js-reveal",children:[(0,t.jsx)("div",{className:"n",children:i.T.n}),(0,t.jsx)("h2",{children:i.T.h}),(0,t.jsx)("p",{children:i.T.p}),(0,t.jsx)("ul",{className:"jr-facts",children:i.T.facts.map(e=>(0,t.jsx)("li",{children:e},e))})]}),(0,t.jsxs)("div",{className:"jr-actions",children:[(0,t.jsx)(r.default,{href:i.r,"data-descent":!0,onClick:e=>{e.metaKey||e.ctrlKey||e.shiftKey||0!==e.button||(e.preventDefault(),E())},className:"descent-button js-reveal tracked",children:i.j.endButton}),(0,t.jsx)(r.default,{href:i.T.wholesale.href,"data-door":!0,className:"jr-wholesale js-reveal tracked",children:i.T.wholesale.label})]}),(0,t.jsx)("nav",{"aria-label":"Explore",children:(0,t.jsx)("ul",{className:"jr-doors",children:i.X.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(r.default,{href:e.href,"data-door":!0,className:"door js-reveal",children:(0,t.jsxs)(n.m.span,{className:"door-inner",initial:"rest",animate:"rest",whileHover:"hover",whileTap:"tap",children:[(0,t.jsx)(n.m.span,{"aria-hidden":!0,className:"door-pearl",variants:er,transition:eo}),(0,t.jsx)("span",{className:"door-label tracked",children:e.label})]})})},e.href))})})]}),(0,t.jsxs)("div",{"aria-hidden":!0,"data-hint":!0,className:"jr-hint",children:[(0,t.jsx)("span",{className:"scroll-line"}),(0,t.jsx)("span",{className:"tracked",children:i.j.scrollHint})]}),(0,t.jsx)("div",{className:"jr-nav tracked",children:[...i.U.stories.map(e=>e.nav),"Araku Pearl"].map((e,a)=>(0,t.jsx)("button",{type:"button","data-nav":!0,onClick:()=>(e=>{let{top:t,descentPx:a,journeyLen:r}=y.current,o=e<i.U.stories.length?t+(0===e?0:i.U.stories[e].at)*a:t+a+i.$.offerFadeEnd*r;(0,l.d)()?window.scrollTo(0,o):h.lenis?h.lenis.scrollTo(o,{duration:2.2}):window.scrollTo({top:o,behavior:"smooth"})})(a),className:0===a?"on":"",children:e},e))}),(0,t.jsxs)("div",{className:"absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 pb-5 pt-14 text-[11px] text-forest/60 md:px-10 md:pb-7",style:{background:"linear-gradient(to top, rgba(255,252,248,0.85), rgba(255,252,248,0))"},children:[(0,t.jsx)(d,{className:"text-forest/60 hover:text-forest"}),(0,t.jsx)(u,{})]})]})})}],19304)}]);