(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,19304,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(22016),o=e.i(18566),i=e.i(32181),n=e.i(73422),l=e.i(94208),s=e.i(30028);function u(e,t){return new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",hourCycle:"h23",timeZone:e}).format(t)}function c({className:e=""}){let[r,o]=(0,a.useState)(null);return((0,a.useEffect)(()=>{o(new Date);let e=window.setInterval(()=>o(new Date),3e4);return()=>clearInterval(e)},[]),r)?(0,t.jsxs)("span",{className:`tracked tabular-nums ${e}`,children:[n.j.clockIndia," ",u("Asia/Kolkata",r)," · ",n.j.clockBerlin," ",u("Europe/Berlin",r)]}):(0,t.jsx)("span",{className:e})}function d({className:e=""}){let[r,o]=(0,a.useState)(!1);return(0,t.jsx)("button",{type:"button","aria-pressed":r,onClick:()=>o(!r),className:`tracked cursor-pointer transition-opacity hover:opacity-100 ${e}`,children:r?n.j.soundOn:n.j.soundOff})}var m=e.i(20032);let f=(e,t,a)=>{let r=Math.min(Math.max((a-e)/(t-e),0),1);return r*r*(3-2*r)},h=(e,t,a)=>[e[0]+(t[0]-e[0])*a,e[1]+(t[1]-e[1])*a,e[2]+(t[2]-e[2])*a],p=(e,t,a)=>(Math.sin(3.1*e+2.3*t+1.7*a)*Math.sin(1.9*e-3.7*t+2.9*a)+Math.sin(5.3*e+4.1*a)*Math.sin(6.1*t-3.3*a))*.5,v=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},x=(e,t)=>{let a=Math.cos(t),r=Math.sin(t);return[e[0]*a-e[1]*r,e[0]*r+e[1]*a,e[2]]};function g(e,t,a){let r=t.a*e[0],o=t.b*e[1],i=[r,o,t.c*e[2]],n=v([e[0]/t.a,e[1]/t.b,e[2]/t.c]),l=f(.05,.55,e[2]),s=1-f(.62,.95,Math.abs(e[0])),u=(o-t.sAmp*Math.sin(r*t.k))/t.sigma,c=Math.exp(-.5*u*u)*l*s;i[2]-=t.depth*c;let d=-c*u/t.sigma,m=v([n[0],n[1]+t.depth*d*n[2],n[2]]),h=t.rough*p(9*e[0],9*e[1],9*e[2]);return{p:x(i=[i[0]+m[0]*h,i[1]+m[1]*h,i[2]+m[2]*h],a),n:x(m,a),G:c}}let y=[function(e){let t=.97+.03*p(5*e[0],5*e[1],5*e[2]);return{p:e,n:e,c:[.985*t,.955*t,.895*t]}},function(e){let t,a=1-.16*f(.8,1,-e[1])-.1*f(.85,1,e[1]),r=[e[0]*a,e[1]*a*.95-.1,e[2]*a],o=e;if(e[1]>.965){let a=(e[1]-.965)/.035,i=Math.atan2(e[2],e[0]),n=.05*(1-.35*a);r=[n*Math.cos(i)+.07*a*a,.78+.46*a,n*Math.sin(i)],o=v([Math.cos(i),.2,Math.sin(i)]),t=h([.34,.26,.15],[.52,.42,.24],.5+.5*p(40*e[0],40*e[2],6*a))}else{t=h([.52,.06,.08],[.9,.17,.13],.8*(.5+.5*p(3*e[0],3*e[1],3*e[2]))+.1);let a=.92+.12*e[1];t=[t[0]*a,t[1]*a,t[2]*a],e[1]<-.93&&(t=h(t,[.22,.1,.07],f(-.93,-.985,e[1])))}return{p:r,n:o,c:t}},function(e){let t=g(e,{a:1.22,b:.9,c:.66,depth:.05,sigma:.2,sAmp:.06,k:2.2,rough:.014},.26),a=.9+.1*p(7*e[0],7*e[1],7*e[2])+.05*Math.sin(38*e[1]+3*p(3*e[0],3*e[1],3*e[2])),r=1+.1*(1-Math.abs(e[2]));return{p:t.p,n:t.n,c:[.72*a*r,.82*a*r,.56*a*r]}},function(e){let t=g(e,{a:1.16,b:.82,c:.58,depth:.16,sigma:.075,sAmp:.1,k:2.4,rough:.006},.26),a=.93+.1*p(6*e[0],6*e[1],6*e[2]),r=[.36*a,.56*a,.28*a];return t.G>.35&&(r=h(r,[.62,.74,.5],Math.min(1,(t.G-.35)*1.4)*(.5+.5*p(25*e[0],25*e[1],25*e[2])))),{p:t.p,n:t.n,c:r}},function(e){let t=g(e,{a:1.21,b:.88,c:.65,depth:.21,sigma:.07,sAmp:.11,k:2.4,rough:.01},.26),a=.88+.22*(.5+.5*p(5*e[0],5*e[1],5*e[2])),r=[.4*a,.24*a,.14*a];return r=h(r,[.6,.4,.22],Math.min(1,.9*t.G)),{p:t.p,n:t.n,c:r}}],w=[[1,1,0,0],[1.15,0,.18,0],[.12,0,.3,0],[.38,0,.3,0],[.7,0,.5,0]],b=e=>Math.min(Math.max(e,0),1);function A(e,t){var a;let r,o=4*b((e-t.scrollStart)/(t.scrollEnd-t.scrollStart));if(o>=4)return 4;let i=Math.floor(o);return i+(a=t.hold,(r=b((o-i-a)/(1-t.hold-a)))*r*(3-2*r))}let M=`
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
void main(){ float d=length(gl_PointCoord-0.5); float a=vA*(1.0-smoothstep(0.22,0.5,d)); gl_FragColor=vec4(vCol*a,a); }`;async function T(e,t){var a;let r,o=t.settings,i=t.reduced,n=e.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!1,powerPreference:"high-performance"});if(!n)return null;let l=!1,s=()=>l||!!t.cancelled?.(),u=()=>new Promise(e=>setTimeout(e,0)),c=(e,t)=>{let a=n.createShader(e);return n.shaderSource(a,t),n.compileShader(a),n.getShaderParameter(a,n.COMPILE_STATUS)||console.error(n.getShaderInfoLog(a)),a},d=(e,t)=>{let a=n.createProgram();return(n.attachShader(a,c(n.VERTEX_SHADER,e)),n.attachShader(a,c(n.FRAGMENT_SHADER,t)),n.linkProgram(a),n.getProgramParameter(a,n.LINK_STATUS))?a:(console.error(n.getProgramInfoLog(a)),null)},m=d((a=o.rippleSpeed,M+`
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
}`),S),f=d(o.light?j.replace("void main(){","#define INK\nvoid main(){"):j,F);if(!m||!f||(t.onLoad(.1),await u(),s()))return null;let h=(e,t)=>{let a={};return t.forEach(t=>a[t]=n.getUniformLocation(e,t)),a},p=h(m,["uView","uR","uCentre","uDpr","uTime","uRot","uPtr","uHitDir","uHit","uRipOn","uEnter","uMotion","uHover","uMix","uMatA","uMatB","uPass","uFill","uSizeK","uFillFrac","uTrail","uHead","uTrailOn","uInk"]),x=h(f,["uView","uR","uCentre","uDpr","uTime","uRot","uEnter","uBreath","uMotion","uVis"]),g={pA:n.getAttribLocation(m,"aPosA"),nA:n.getAttribLocation(m,"aNrmA"),cA:n.getAttribLocation(m,"aColA"),pB:n.getAttribLocation(m,"aPosB"),nB:n.getAttribLocation(m,"aNrmB"),cB:n.getAttribLocation(m,"aColB"),ds:n.getAttribLocation(m,"aDS")},b={p:n.getAttribLocation(f,"aPos"),s:n.getAttribLocation(f,"aSeed")},T=o.dots,E=(r=0x13528a0,()=>{let e=Math.imul((r=r+0x6d2b79f5|0)^r>>>15,1|r);return(((e=e+Math.imul(e^e>>>7,61|e)^e)^e>>>14)>>>0)/0x100000000}),{dirs:P,list:N}=function(e,t){let a=new Float32Array(4*e),r=Array(e),o=Math.PI*(3-Math.sqrt(5)),i=.35*Math.sqrt(4*Math.PI/e);for(let n=0;n<e;n++){let l=1-2*(n+.5)/e,s=Math.sqrt(1-l*l),u=n*o,c=v([Math.cos(u)*s+(t()-.5)*2*i,l+(t()-.5)*2*i,Math.sin(u)*s+(t()-.5)*2*i]);r[n]=c,a.set([c[0],c[1],c[2],t()],4*n)}return{dirs:a,list:r}}(T,E),L=[];for(let e=0;e<y.length;e++){let a=function(e,t){let a=new Float32Array(9*t.length);for(let r=0;r<t.length;r++){let o=e(t[r]);a.set(o.p,9*r),a.set(o.n,9*r+3),a.set(o.c,9*r+6)}return a}(y[e],N),r=n.createBuffer();if(n.bindBuffer(n.ARRAY_BUFFER,r),n.bufferData(n.ARRAY_BUFFER,a,n.STATIC_DRAW),L.push(r),t.onLoad(.22+.13*(e+1)),await u(),s())return null}let R=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,R),n.bufferData(n.ARRAY_BUFFER,P,n.STATIC_DRAW);let k=n.createBuffer();{let e=new Float32Array(4*o.coreDots);for(let t=0;t<o.coreDots;t++){let a=2*E()-1,r=E()*Math.PI*2,o=Math.sqrt(1-a*a),i=.62*Math.pow(E(),.7);e.set([Math.cos(r)*o*i,a*i,Math.sin(r)*o*i,E()],4*t)}n.bindBuffer(n.ARRAY_BUFFER,k),n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW)}if(t.onLoad(.95),await u(),s())return null;let C=()=>{for(let e=0;e<8;e++)n.disableVertexAttribArray(e)},z=(e,t,a,r)=>{n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e),n.vertexAttribPointer(e,3,n.FLOAT,!1,36,0),n.enableVertexAttribArray(t),n.vertexAttribPointer(t,3,n.FLOAT,!1,36,12),n.enableVertexAttribArray(a),n.vertexAttribPointer(a,3,n.FLOAT,!1,36,24)},D=1,O=1,U=1,I=1,B=0,q=0,_=1,H=0,$=0,V=()=>{let t=e.clientWidth||window.innerWidth,a=e.clientHeight||window.innerHeight;D=Math.max(1,Math.round(t*(U=Math.min(window.devicePixelRatio||1,o.dprCap)*_))),O=Math.max(1,Math.round(a*U)),(e.width!==D||e.height!==O)&&(e.width=D,e.height=O),n.viewport(0,0,D,O);let r=t>1.05*a;I=r?Math.min(.2*D,.3*O):Math.min(.27*D,.18*O),B=D*(r?.34:.5),q=O*(r?.5:.31);let i=e.getBoundingClientRect();H=i.left,$=i.top},G={x:0,y:0,tx:0,ty:0,s:0,ts:0,e:0,lx:0,ly:0,lt:0},W=e=>{let t=performance.now()/1e3,a=((e.clientX-H)*U-B)/I,r=-(((e.clientY-$)*U-q)/I);if(G.lt){let a=Math.max(t-G.lt,.001);G.e=Math.max(G.e,Math.min(Math.hypot(e.clientX-G.lx,e.clientY-G.ly)/a/1800,1))}G.lx=e.clientX,G.ly=e.clientY,G.lt=t,G.tx=a,G.ty=r,G.ts=+(1.35>Math.hypot(a,r))},K=e=>{!e.target?.closest?.("a,button")&&(W(e),1>Math.hypot(G.tx,G.ty)&&ec(G.tx,G.ty))},Y=()=>{G.ts=0,G.lt=0},Z=e=>{"mouse"!==e.pointerType&&(G.ts=0)};i||(window.addEventListener("pointermove",W,{passive:!0}),window.addEventListener("pointerdown",K,{passive:!0}),window.addEventListener("pointerup",Z,{passive:!0}),window.addEventListener("pointercancel",Y,{passive:!0}),document.documentElement.addEventListener("pointerleave",Y));let X=new Float32Array(8),Q=new Float32Array(8),J=new Float32Array(8).fill(-100),ee=new Float32Array(24),et=0,ea=99,er=99,eo=new Float32Array(9),ei=new Float32Array(6);for(let e=0;e<3;e++)ei[2*e]=-100;let en=0,el=0,es=o.tilt,eu=performance.now()/1e3;function ec(e,t,a){var r,o,i;let n,l,s,u,c,d,m,f,h,p,v=e*e+t*t;if(v>1){let a=Math.sqrt(v);e/=a,t/=a}let x=Math.sqrt(Math.max(0,1-e*e-t*t)),g=(r=[e,t,x],o=el,n=Math.cos(-(i=es)),l=Math.sin(-i),s=r[0],u=r[1]*n-r[2]*l,c=r[1]*l+r[2]*n,f=s*(d=Math.cos(-o))+c*(m=Math.sin(-o)),p=Math.hypot(f,u,h=-s*m+c*d)||1,[f/p,u/p,h/p]),y=en++%3;eo.set(g,3*y),ei[2*y]=void 0!==a?a:performance.now()/1e3-eu,ei[2*y+1]=1}n.enable(n.BLEND),o.light?n.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA):n.blendFunc(n.ONE,n.ONE),n.clearColor(0,0,0,0);let ed=null,em=1/0,ef=performance.now()/1e3,eh=0,ep=!1,ev=0,ex=0,eg=0,ey=()=>{if(ev=0,l)return;let e=performance.now()/1e3,a=Math.min(e-ef,.05);ef=e;let r=i?3.2:e-eu,s=t.getProgress(),u=A(s,o),c=1-Math.exp(-(12*a)),d=1-Math.exp(-(6*a));G.x+=(G.tx-G.x)*c,G.y+=(G.ty-G.y)*c,G.s+=(G.ts-G.s)*d,G.e*=Math.exp(-(3.5*a)),eh=i?Math.round(u):eh+(u-eh)*(1-Math.exp(-(4.5*a))),5e-4>Math.abs(u-eh)&&(eh=u);let h=null===ed?-1:e-ed;i?el=.5:(el=o.sway*Math.sin(.22*r)+.05*G.x*G.s,es=o.tilt+.03*Math.sin(.2*r)-.05*G.y*G.s,r>em&&(ec(-.28,.42,r),em=r+o.rippleEvery));let v=i?+(h>=0):Math.min(Math.max(h/o.enter,0),1),y=1-Math.pow(1-v,3),M=i?.5:.5+.5*Math.sin(r*Math.PI*2/6);if(n.clear(n.COLOR_BUFFER_BIT),y>.001){var S,j,F;G.ts>.5&&Math.hypot(G.x-ea,G.y-er)>.15&&(X[et]=G.x,Q[et]=G.y,J[et]=e,et=(et+1)%8,ea=G.x,er=G.y);for(let t=0;t<8;t++){let a=e-J[t];ee[3*t]=X[t],ee[3*t+1]=Q[t],ee[3*t+2]=a>2.5?0:Math.exp(-(1.7*a))}let t=Math.min(Math.max(eh,0),4),a=Math.min(Math.floor(t),3),l=!1;for(let e=0;e<3;e++)r-ei[2*e]<4.5&&(l=!0);S=a+1,j=1-Math.min(t,1),F=l,j>.002&&(n.useProgram(f),C(),n.bindBuffer(n.ARRAY_BUFFER,k),n.enableVertexAttribArray(b.p),n.vertexAttribPointer(b.p,3,n.FLOAT,!1,16,0),n.enableVertexAttribArray(b.s),n.vertexAttribPointer(b.s,1,n.FLOAT,!1,16,12),n.uniform2f(x.uView,D,O),n.uniform1f(x.uR,I),n.uniform2f(x.uCentre,B,q),n.uniform1f(x.uDpr,U),n.uniform1f(x.uTime,r),n.uniform2f(x.uRot,el,es),n.uniform1f(x.uEnter,y),n.uniform1f(x.uBreath,M),n.uniform1f(x.uMotion,+!i),n.uniform1f(x.uVis,j),n.drawArrays(n.POINTS,0,o.coreDots)),n.useProgram(m),C(),z(g.pA,g.nA,g.cA,L[a]),z(g.pB,g.nB,g.cB,L[S]),n.bindBuffer(n.ARRAY_BUFFER,R),n.enableVertexAttribArray(g.ds),n.vertexAttribPointer(g.ds,4,n.FLOAT,!1,16,0),n.uniform2f(p.uView,D,O),n.uniform1f(p.uR,I),n.uniform2f(p.uCentre,B,q),n.uniform1f(p.uDpr,U),n.uniform1f(p.uTime,r),n.uniform2f(p.uRot,el,es),n.uniform4f(p.uPtr,G.x,G.y,G.s,G.e),n.uniform3fv(p.uHitDir,eo),n.uniform2fv(p.uHit,ei),n.uniform1f(p.uRipOn,+!!F),n.uniform1f(p.uEnter,y),n.uniform1f(p.uMotion,+!i),n.uniform2f(p.uHover,o.hoverRadius,o.hoverLift),n.uniform3fv(p.uTrail,ee),n.uniform3f(p.uHead,G.x,G.y,G.s),n.uniform1f(p.uTrailOn,+!i),n.uniform1f(p.uMix,t-a),n.uniform4fv(p.uMatA,w[a]),n.uniform4fv(p.uMatB,w[S]),n.uniform1f(p.uFill,o.light?1.25*o.fill:o.fill),n.uniform1f(p.uInk,+!!o.light),n.uniform1f(p.uFillFrac,o.fillFraction),n.uniform1f(p.uPass,0),n.uniform1f(p.uSizeK,o.fillSize),n.drawArrays(n.POINTS,0,T),n.uniform1f(p.uPass,1),n.uniform1f(p.uSizeK,o.dotSize),n.drawArrays(n.POINTS,0,T)}t.onFrame({sf:eh,enter:y,p:s}),!i&&!1!==t.adaptive&&v>=1&&(eg++,a>.03&&ex++,eg>=90&&(ex>40&&_>.6&&(_*=.82,V()),ex=0,eg=0)),ep||(ep=!0,t.onLoad(1)),i||ew()};function ew(){ev||l||(ev=requestAnimationFrame(ey))}let eb=()=>{V(),ew()},eA="u">typeof ResizeObserver?new ResizeObserver(eb):null;eA?.observe(e),window.addEventListener("resize",eb);let eM=()=>{ef=performance.now()/1e3,document.hidden||ew()};document.addEventListener("visibilitychange",eM);let eS=e=>{e.preventDefault(),t.onLost?.()};return e.addEventListener("webglcontextlost",eS),V(),ew(),{start(e){em=(ed=e)-eu+1.8,ew()},requestDraw(){ew()},destroy(){l=!0,ev&&cancelAnimationFrame(ev),eA?.disconnect(),window.removeEventListener("resize",eb),window.removeEventListener("pointermove",W),window.removeEventListener("pointerdown",K),window.removeEventListener("pointerup",Z),window.removeEventListener("pointercancel",Y),document.documentElement.removeEventListener("pointerleave",Y),document.removeEventListener("visibilitychange",eM),e.removeEventListener("webglcontextlost",eS),n.getExtension("WEBGL_lose_context")?.loseContext()}}}var E=e.i(93209),P=e.i(90072),N=e.i(8560);let L=`
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
}`,R=`
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
}`,k=`
varying float vA;
varying vec3 vCol;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float r = length(c);
  float a = smoothstep(0.5, 0.3, r) * min(vA, 1.0);
  if (a < 0.01) discard;
  gl_FragColor = vec4(vCol * a, a);
}`,C=`
varying vec3 vN; varying vec3 vV;
void main(){
  vec4 w = modelMatrix * vec4(position, 1.0);
  vN = normalize(mat3(modelMatrix) * normal);
  vV = normalize(cameraPosition - w.xyz);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,z=`
uniform float uFade;
varying vec3 vN; varying vec3 vV;
void main(){
  float f = 1.0 - abs(dot(vN, vV));
  float a = pow(f, 3.0) * 0.32 * uFade;
  vec3 gold = vec3(0.690, 0.478, 0.165);
  gl_FragColor = vec4(gold * a, a);
}`,D=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,O=`
uniform float uOpacity, uZoom, uTime, uAspect, uTilt, uRelief, uFog, uChart;
uniform int uOct;
varying vec2 vUv;
${L}
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
}`,U=`
uniform sampler2D uTex;
uniform float uOpacity, uZoom, uScan, uMist, uDim, uTime, uAspect, uTexAspect, uIris;
varying vec2 vUv;
${L}
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
  vec3 warm = tex * vec3(1.06, 1.0, 0.82);
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
  col += (hash(vUv*vec2(1733.0, 977.0) + fract(uTime)) - 0.5) * 0.03;
  // the iris edge: a fine gold ring while it opens
  float edge = (1.0 - smoothstep(0.0, rw*2.0, abs(rr - uIris))) * step(uIris, 1.3);
  float a = uOpacity * max(iris, edge);
  col = mix(col, gold, edge);
  gl_FragColor = vec4(col * a, a);
}`,I=`
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
}`,B=`
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
}`,q=`
attribute vec2 aHome;
attribute float aT;     // 0 at the farmer, 1 at the point
attribute float aIndex;
uniform vec2 uAnchor;
varying float vT; varying float vK;
void main(){
  vT = aT; vK = aIndex / 57.0;
  gl_Position = vec4(mix(aHome, uAnchor, aT)*2.0 - 1.0, 0.0, 1.0);
}`,_=`
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
}`,H=e=>Math.min(Math.max(e,0),1),$=(e,t)=>{let a=H((t-e[0])/(e[1]-e[0]));return a*a*(3-2*a)},V=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;function G(e,t,a=1){let r=e*Math.PI/180,o=t*Math.PI/180;return new P.cE(Math.cos(r)*Math.cos(o)*a,Math.sin(r)*a,-Math.cos(r)*Math.sin(o)*a)}async function W(e,t){let a,r=t.settings,o=r.timeline;try{a=new N.T({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"})}catch{return null}a.setClearColor(0xfffcf8,1),a.autoClear=!1;let i=await fetch((0,E.f)("/data/land.bin")).then(e=>e.ok?e.arrayBuffer():null).catch(()=>null);if(!i)return a.dispose(),null;let n=new Int16Array(i),l=n[0],s=n.subarray(2),u=s.length/2,c=new Float32Array(3*u),d=new Float32Array(u),m=new Float32Array(u);for(let e=0;e<u;e++){let t=G(s[2*e]/100,s[2*e+1]/100);c.set([t.x,t.y,t.z],3*e),d[e]=+(e>=l),m[e]=0x9e3779b1*e%1e3/1e3}let f=new P.ld;f.setAttribute("position",new P.f5(c,3)),f.setAttribute("aDense",new P.f5(d,1)),f.setAttribute("aSeed",new P.f5(m,1));let h=G(r.target.lat,r.target.lon).normalize(),p={blending:P.UM,blendSrc:P.Vt,blendDst:P.oL},v=new P.Zg({vertexShader:R,fragmentShader:k,transparent:!0,depthWrite:!1,...p,uniforms:{uTime:{value:0},uDpr:{value:1},uSize:{value:r.dotSize},uDense:{value:0},uFade:{value:1},uTarget:{value:h},uNear:{value:0}}}),x=new P.sy(f,v);x.frustumCulled=!1;let g=new P.kE(new P.Gu(.985,64,48),new P.p$({colorWrite:!1}));g.renderOrder=-1;let y=[];for(let e=-75;e<=75;e+=15)for(let t=0;t<360;t+=3){let a=G(e,t,1.001),r=G(e,t+3,1.001);y.push(a.x,a.y,a.z,r.x,r.y,r.z)}for(let e=0;e<360;e+=15)for(let t=-84;t<84;t+=3){let a=G(t,e,1.001),r=G(t+3,e,1.001);y.push(a.x,a.y,a.z,r.x,r.y,r.z)}let w=new P.ld;w.setAttribute("position",new P.ki(y,3));let b=new P.NQ({color:3020560,transparent:!0,opacity:.09,depthWrite:!1}),A=new P.a1(w,b),M=new P.Zg({vertexShader:C,fragmentShader:z,transparent:!0,depthWrite:!1,...p,uniforms:{uFade:{value:1}}}),S=new P.kE(new P.Gu(1.07,64,48),M),j=new P.C9;j.add(g,A,x);let F=new P.P6;F.add(j,S);let T=r.target.lat*Math.PI/180,L=r.target.lon*Math.PI/180,W=new P.as().setFromAxisAngle(new P.cE(1,0,0),T).multiply(new P.as().setFromAxisAngle(new P.cE(0,1,0),-Math.PI/2-L)),K=G(25.5,76.5).normalize(),Y=new P.zm(30,1,.005,50),Z=new P.CQ(2,2),X={transparent:!0,depthTest:!1,depthWrite:!1,blending:P.UM,blendSrc:P.Vt,blendDst:P.oL},Q=new P.Zg({vertexShader:D,fragmentShader:O,...X,uniforms:{uOpacity:{value:0},uZoom:{value:1},uTime:{value:0},uAspect:{value:1},uTilt:{value:0},uOct:{value:r.mapOctaves},uRelief:{value:0},uFog:{value:0},uChart:{value:0}}}),J=new P.Zg({vertexShader:D,fragmentShader:U,...X,uniforms:{uTex:{value:null},uOpacity:{value:0},uZoom:{value:1},uScan:{value:0},uMist:{value:1},uDim:{value:0},uTime:{value:0},uAspect:{value:1},uTexAspect:{value:4/3},uIris:{value:0}}}),ee=!1,et=document.createElement("video");et.src=(0,E.f)("/video/forest.mp4"),et.muted=!0,et.playsInline=!0,et.preload="auto",et.crossOrigin="anonymous";let ea=!1,er=null;et.addEventListener("loadeddata",()=>{(er=new P.TS(et)).colorSpace=P.Ik,er.minFilter=P.VV,er.generateMipmaps=!1,J.uniforms.uTex.value=er,J.uniforms.uTexAspect.value=et.videoWidth/et.videoHeight,ea=ee=!0,eB()}),et.load();let eo=-1;new P.H5().load((0,E.f)("/video/forest-poster.jpg"),e=>{ea||(e.colorSpace=P.Ik,e.minFilter=P.VV,e.generateMipmaps=!1,J.uniforms.uTex.value=e,J.uniforms.uTexAspect.value=e.image.width/e.image.height,ee=!0,eB())});let ei=new P.kE(Z,Q),en=new P.kE(Z,J);ei.frustumCulled=en.frustumCulled=!1,ei.renderOrder=1,en.renderOrder=0;let el=new P.P6;el.add(en,ei);let es=new P.Sc(-1,1,1,-1,0,1),eu=new Float32Array(114),ec=new Float32Array(114),ed=new Float32Array(57),em=5701,ef=()=>(em=16807*em%0x7fffffff)/0x7fffffff;for(let e=0;e<57;e++)ec[2*e]=ef(),ec[2*e+1]=ef(),ed[e]=e;let eh=new P.ld;eh.setAttribute("position",new P.f5(new Float32Array(171),3)),eh.setAttribute("aHome",new P.f5(eu,2)),eh.setAttribute("aIndex",new P.f5(ed,1));let ep=new P.Zg({vertexShader:I,fragmentShader:B,transparent:!0,depthTest:!1,depthWrite:!1,...p,uniforms:{uShown:{value:0},uGather:{value:0},uDpr:{value:1},uSize:{value:r.phone?34:46},uAnchor:{value:new P.wq(.34,.5)}}}),ev=new P.sy(eh,ep);ev.frustumCulled=!1;let ex=new Float32Array(228),eg=new Float32Array(114),ey=new Float32Array(114);for(let e=0;e<57;e++)eg[2*e]=0,eg[2*e+1]=1,ey[2*e]=ey[2*e+1]=e;let ew=new P.ld;ew.setAttribute("position",new P.f5(new Float32Array(342),3)),ew.setAttribute("aHome",new P.f5(ex,2)),ew.setAttribute("aT",new P.f5(eg,1)),ew.setAttribute("aIndex",new P.f5(ey,1));let eb=new P.Zg({vertexShader:q,fragmentShader:_,transparent:!0,depthTest:!1,depthWrite:!1,...p,uniforms:{uConnect:{value:0},uGather:{value:0},uAnchor:ep.uniforms.uAnchor}}),eA=new P.a1(ew,eb);eA.frustumCulled=!1,eA.renderOrder=0,ev.renderOrder=1;let eM=new P.P6;eM.add(eA,ev);let eS=1,ej=1,eF=!0,eT=[],eE=()=>{eT.length=0,eS=e.clientWidth||window.innerWidth,ej=e.clientHeight||window.innerHeight,eF=eS>1.05*ej;let t=Math.min(window.devicePixelRatio||1,r.dprCap);a.setPixelRatio(t),a.setSize(eS,ej,!1),Y.aspect=eS/ej,Y.updateProjectionMatrix();let o=eS/ej;Q.uniforms.uAspect.value=o,J.uniforms.uAspect.value=o,v.uniforms.uDpr.value=t,ep.uniforms.uDpr.value=t,ep.uniforms.uAnchor.value.set(eF?.34:.5,eF?.5:.69);let i=0;for(let e of r.mandals){let t=eF?.45+.5*e.cx:.1+.8*e.cx,a=eF?.15+.43*e.cy:.45+.3*e.cy,r=.016+.014*Math.sqrt(e.count);eT.push([t,a+r+.012]);for(let o=0;o<e.count&&i<57;o++,i++){let e=ec[2*i]*Math.PI*2,o=Math.sqrt(ec[2*i+1])*r;eu[2*i]=t+Math.cos(e)*o*(eF?ej/eS:1.6),eu[2*i+1]=a+Math.sin(e)*o,ex.set([eu[2*i],eu[2*i+1],eu[2*i],eu[2*i+1]],4*i)}}eh.attributes.aHome.needsUpdate=!0,ew.attributes.aHome.needsUpdate=!0};eE();let eP=()=>{eE(),eB()};window.addEventListener("resize",eP);let eN=new P.cE,eL=new P.as,eR=new P.as,ek=new P.cE(0,1,0),eC=new P.cE(1,0,0),ez=performance.now()/1e3,eD=!1,eO=0,eU=!0,eI=()=>{eD||(eO=requestAnimationFrame(eI),t.isActive()&&(!t.reduced||eU)&&(eU=!1,(e=>{var i;let n,l,s,u,c,d,m=H(t.getProgress()),f=t.reduced?0:e-ez,p=eF?1:Math.max(1,ej/eS*.76),x=6.2*p,g=1.9*Math.sqrt(p),y=m<o.orbitEnd?x+(g-x)*V(m/o.orbitEnd):g+(1.035-g)*Math.pow(H((m-o.orbitEnd)/(o.diveEnd-o.orbitEnd)),1.6);Y.position.set(0,0,y),Y.lookAt(0,0,0);let w=$([.16,.34],m),A=eF?.17*(1-w):0,T=eF?-.03*(1-w):-.15*(1-w);Y.setViewOffset(eS,ej,-A*eS,-T*ej,eS,ej);let E=1-V(H(m/.28)),P=t.reduced?0:.025*f*(1-$([0,.12],m));eL.setFromAxisAngle(ek,-(.45*E)-P),eR.setFromAxisAngle(eC,.18*E),j.quaternion.copy(eR).multiply(eL).multiply(W);let N=1-$(o.globeOut,m);v.uniforms.uTime.value=f,v.uniforms.uFade.value=N,v.uniforms.uDense.value=$([.12,.3],m),v.uniforms.uNear.value=$([.3,o.globeOut[0]],m),M.uniforms.uFade.value=N*(1-$([.3,.42],m)),b.opacity=.08*N*(1-$([.25,.4],m)),j.visible=N>.001,S.visible=j.visible;let L=$([o.lights[0]-.035,o.lights[0]-.005],m)*(1-$([o.gather[0]+.02,o.gather[1]-.01],m)),R=Math.max($(o.mapIn,m)*(1-$(o.mapOut,m)),.55*L);Q.uniforms.uOpacity.value=R,Q.uniforms.uTime.value=f,Q.uniforms.uChart.value=L;let k=$([o.mapIn[0],o.mapOut[1]],m);Q.uniforms.uZoom.value=L>.001?2.2:Math.exp(Math.log(1.1)+(Math.log(14)-Math.log(1.1))*k),Q.uniforms.uTilt.value=L>.001?0:.9*$([o.mapIn[0],.52],m)+.75*$([.52,o.mapOut[0]],m),Q.uniforms.uRelief.value=L>.001?0:$([.5,.6],m),Q.uniforms.uFog.value=L>.001?0:$([o.photoIn[0]-.03,o.photoIn[0]+.02],m),ei.visible=R>.001,en.visible=en.visible;let C=ee?$(o.photoIn,m):0;J.uniforms.uOpacity.value=C,J.uniforms.uTime.value=f;let z=$(o.photoIn,m);if(J.uniforms.uIris.value=2,J.uniforms.uZoom.value=1.35-.3*z+.14*$([o.photoIn[1],1],m),J.uniforms.uScan.value=$(o.scan,m),J.uniforms.uMist.value=.8*(1-$([o.photoIn[0]+.02,o.photoIn[1]+.01],m))+.05,J.uniforms.uDim.value=$([o.lights[0]-.04,o.lights[0]-.005],m),en.visible=C>.001,ea&&en.visible&&et.duration){let e=$([o.photoIn[0],o.lights[0]-.01],m)*(et.duration-.05);Math.abs(e-eo)>1/30&&!et.seeking&&(eo=e,et.currentTime=e)}let D=$(o.lights,m);ep.uniforms.uShown.value=D;let O=H((m-o.gather[0])/(o.gather[1]-o.gather[0]));ep.uniforms.uGather.value=O,eb.uniforms.uGather.value=O,eb.uniforms.uConnect.value=H((m-o.connect[0])/(o.connect[1]-o.connect[0])),ev.visible=D>.001,a.clear(),a.render(el,es),j.visible&&a.render(F,Y),ev.visible&&a.render(eM,es),eN.copy(h).applyQuaternion(j.quaternion);let U=eN.z;eN.project(Y);let I=(.5*eN.x+.5)*eS,B=(-(.5*eN.y)+.5)*ej,q=H((U-.35)/.3)*(1-$([.3,.4],m));eN.copy(K).applyQuaternion(j.quaternion);let _=eN.z;eN.project(Y);let G=(.5*eN.x+.5)*eS,Z=(-(.5*eN.y)+.5)*ej,X=H((_-.35)/.25)*$([.02,.1],m)*(1-$([.27,.34],m));t.onFrame({q:m,altitude:(i=function(e,t){if(e<=t[0][0])return t[0][1];for(let a=1;a<t.length;a++)if(e<=t[a][0]){let[r,o]=t[a-1],[i,n]=t[a];return Math.exp(Math.log(o)+(Math.log(n)-Math.log(o))*V(H((e-r)/(i-r))))}return t[t.length-1][1]}(m,o.altitude))>=1e4?`${Math.round(i/1e3).toLocaleString("en-US")} km`:`${(10*Math.round(i/10)).toLocaleString("en-US")} m`,reticle:{x:I,y:B,o:q},india:{x:G,y:Z,o:X},lights:D>0?Math.min(57,Math.floor(D/.94*57)+1):0,tag:(l=(n=Math.min(57,Math.floor(D/.94*57)+1))-1,s=$([o.lights[0],o.lights[0]+.01],m)*(1-$([o.connect[0],o.connect[0]+.015],m)),{x:eu[2*l]*eS,y:(1-eu[2*l+1])*ej,o:s,n}),mandals:(u=D>0?Math.min(57,Math.floor(D/.94*57)+1):0,c=1-$([o.connect[0]+.01,o.connect[0]+.03],m),d=0,r.mandals.map((e,t)=>{let a=Math.max(0,Math.min(e.count,u-d));d+=e.count;let[r,o]=eT[t]??[0,0];return{x:r*eS,y:(1-o)*ej,o:(a>0)*c,n:a}})),node:{x:ep.uniforms.uAnchor.value.x*eS,y:(1-ep.uniforms.uAnchor.value.y)*ej,o:$([o.connect[0]+.004,o.connect[0]+.02],m)*(1-$([o.gather[0]+.02,o.gather[0]+.05],m))}})})(performance.now()/1e3)))},eB=()=>{eU=!0};eO=requestAnimationFrame(eI);let eq=e=>{e.preventDefault(),t.onLost?.()};return e.addEventListener("webglcontextlost",eq),{requestDraw:eB,destroy(){eD=!0,cancelAnimationFrame(eO),window.removeEventListener("resize",eP),e.removeEventListener("webglcontextlost",eq),[f,w,eh,ew,Z,g.geometry,S.geometry].forEach(e=>e.dispose()),[v,b,M,Q,J,ep,eb,g.material].forEach(e=>e.dispose()),J.uniforms.uTex.value?.dispose(),er?.dispose(),et.removeAttribute("src"),et.load(),a.dispose()}}}let K=e=>Math.min(Math.max(e,0),1),Y=(e,t,a)=>{let r=K((a-e)/(t-e));return r*r*(3-2*r)},Z={rest:{scale:1,y:0},hover:{scale:1.08,y:-3},tap:{scale:.96,y:0}},X={type:"spring",stiffness:260,damping:18,mass:.6},Q=n.U.handoff;function J(e,t,a){e.style.opacity=t.toFixed(3),e.style.visibility=t<.01?"hidden":"visible",e.style.transform=`translate3d(0, ${((1-t)*a).toFixed(1)}px, 0)`}e.s(["default",0,function(){let e=(0,a.useRef)(null),u=(0,a.useRef)(null),f=(0,a.useRef)(null),h=(0,a.useRef)(null),p=(0,a.useRef)(null),v=(0,a.useRef)(null),x=(0,a.useRef)(0),g=(0,a.useRef)(0),y=(0,a.useRef)({top:0,descentPx:1,journeyLen:1}),w=(0,a.useRef)(-1);(0,a.useRef)(-1);let b=(0,o.useRouter)(),[M,S]=(0,a.useState)(!1),[j,F]=(0,a.useState)(!1),P=(0,a.useCallback)(()=>{(0,s.z)().washing||((0,s.Z)({washing:!0}),window.setTimeout(()=>b.push(n.r),n.$.washMs))},[b]),N=(0,a.useCallback)(({sf:e,enter:t,p:a})=>{let r,o=f.current;if(!o)return;let i=g.current,l=Y(Q[1]-.012,Q[1],i),s=Y(n.$.offerFadeStart,n.$.offerFadeEnd,a)*l;o.stories.forEach((r,o)=>{let i=Math.max(0,1-3.4*Math.abs(e-o))*t*l;o===n.y.length-1&&(i*=1-Y(n.$.offerFadeStart-.04,n.$.offerFadeStart+.02,a)),r.style.setProperty("--o",i.toFixed(3))});let u=Math.round(e),c=i<1?(r=0,n.U.stories.forEach((e,t)=>{Math.abs(e.at-i)<Math.abs(n.U.stories[r].at-i)&&(r=t)}),r):n.U.stories.length+u;if(c!==w.current){if(w.current=c,o.navButtons.forEach((e,t)=>{e.classList.toggle("on",t===c),t===c?e.setAttribute("aria-current","step"):e.removeAttribute("aria-current")}),o.fallback?.setAttribute("data-stage",String(u)),o.chapter){let e=i<1?n.U.stories[c].nav:n.y[u].nav;o.chapter.textContent=`${String(c+1).padStart(2,"0")} / ${String(n.U.stories.length+n.y.length).padStart(2,"0")} \xb7 ${e}`,o.chapter.classList.remove("tick"),o.chapter.offsetWidth,o.chapter.classList.add("tick")}o.specimenLabel&&(o.specimenLabel.textContent=`Specimen ${String(u+1).padStart(2,"0")} \xb7 ${n.y[u].nav}`)}o.specimen&&(o.specimen.style.opacity=(l*t).toFixed(3)),o.specimenLabel&&a>n.$.offerFadeStart&&(o.specimenLabel.textContent="Specimen 06 · Araku Pearl"),o.hint&&(o.hint.style.opacity=(1-Y(.015,.04,i)).toFixed(3));let d=o.doors.length,m=n.$.doorsFadeEnd-n.$.doorsFadeStart-n.$.doorsStagger*(d-1);o.doors.forEach((e,t)=>{let r=n.$.doorsFadeStart+t*n.$.doorsStagger;J(e,Y(r,r+m,a)*l,18)}),o.offer&&J(o.offer,s,16),o.button&&J(o.button,Y(n.$.buttonFadeStart,n.$.buttonFadeEnd,a)*l,12)},[]),L=(0,a.useCallback)(e=>{let t=f.current;if(!t)return;let a=e.q;t.dStories.forEach((e,t)=>{let r=n.U.stories[t].at,o=Math.abs(a-r),i=1-Y(n.U.storyWidth,n.U.storyWidth+n.U.storyFade,o);t===n.U.stories.length-1&&(i=Y(r-n.U.storyWidth-n.U.storyFade,r-n.U.storyWidth,a)*(1-Y(n.U.timeline.connect[0],n.U.timeline.connect[0]+.02,a))),e.style.setProperty("--o",(0===t&&a<r?1:i).toFixed(3))}),t.alt&&(t.alt.textContent=e.altitude),t.altTape&&(t.altTape.style.transform=`translate3d(0, ${(900*a).toFixed(1)}px, 0)`),t.reticle&&(e.reticle.o>.5?t.reticle.classList.add("locked"):e.reticle.o<.05&&t.reticle.classList.remove("locked"),t.reticle.style.opacity=e.reticle.o.toFixed(3),t.reticle.style.transform=`translate3d(${e.reticle.x.toFixed(1)}px, ${e.reticle.y.toFixed(1)}px, 0)`),t.india&&(t.india.style.opacity=e.india.o.toFixed(3),t.india.style.transform=`translate3d(${e.india.x.toFixed(1)}px, ${e.india.y.toFixed(1)}px, 0)`),t.ftag&&(t.ftag.style.opacity=e.tag.o.toFixed(3),t.ftag.classList.toggle("flip",e.tag.x>.62*window.innerWidth),t.ftag.style.transform=`translate3d(${e.tag.x.toFixed(1)}px, ${e.tag.y.toFixed(1)}px, 0)`,t.ftagN&&(t.ftagN.textContent=String(e.tag.n).padStart(2,"0"))),t.mandals.forEach((t,a)=>{let r=e.mandals[a];if(!r)return;t.style.opacity=r.o.toFixed(3),t.style.transform=`translate3d(${r.x.toFixed(1)}px, ${r.y.toFixed(1)}px, 0)`;let o=t.querySelector("b");o&&(o.textContent=String(r.n))}),t.node&&(t.node.style.opacity=e.node.o.toFixed(3),t.node.style.transform=`translate3d(${e.node.x.toFixed(1)}px, ${e.node.y.toFixed(1)}px, 0)`),t.counter&&(t.counter.textContent=String(e.lights).padStart(2,"0"))},[]);(0,a.useEffect)(()=>{let t=e.current;return f.current={stories:Array.from(t.querySelectorAll("[data-story]")),navButtons:Array.from(t.querySelectorAll("[data-nav]")),hint:t.querySelector("[data-hint]"),doors:Array.from(t.querySelectorAll("[data-door]")),button:t.querySelector("[data-descent]"),offer:t.querySelector("[data-offer]"),fallback:t.querySelector("[data-fallback]"),dStories:Array.from(t.querySelectorAll("[data-dstory]")),dLayer:t.querySelector("[data-dlayer]"),jLayer:t.querySelector("[data-jlayer]"),alt:t.querySelector("[data-alt]"),altTape:t.querySelector("[data-alt-tape]"),reticle:t.querySelector("[data-reticle]"),india:t.querySelector("[data-india]"),ftag:t.querySelector("[data-ftag]"),node:t.querySelector("[data-node]"),mandals:Array.from(t.querySelectorAll("[data-mandal]")),ftagN:t.querySelector("[data-ftag-n]"),counter:t.querySelector("[data-counter]"),chapter:t.querySelector("[data-chapter]"),specimen:t.querySelector("[data-specimen]"),specimenLabel:t.querySelector("[data-specimen-label]"),hud:t.querySelector("[data-hud]")},()=>{f.current=null}},[M,j]),(0,a.useEffect)(()=>{let t=e.current?.querySelector("[data-hud]");if(!t)return;let a=()=>{"pending"!==(0,s.z)().loader&&t.classList.add("hud-in")};return a(),(0,s.G)(a)},[]),(0,a.useEffect)(()=>{let t=e.current,a=(0,l.d)(),r=n.U.lengthVh/(n.U.lengthVh+n.$.lengthVh),o=()=>{let e=t.getBoundingClientRect().top+window.scrollY,a=Math.max(1,t.offsetHeight*r),o=Math.max(1,t.offsetHeight-a-window.innerHeight);y.current={top:e,descentPx:a,journeyLen:o}},i=()=>{let{top:e,descentPx:t,journeyLen:r}=y.current,o=window.scrollY-e;g.current=K(o/t),x.current=K((o-t)/r),(0,s.Z)({scrollProgress:x.current});let i=f.current;if(i){let e=g.current;if(i.dLayer){let t=1-Y(Q[0]+.015,1,e);i.dLayer.style.opacity=t.toFixed(3),i.dLayer.style.visibility=t<.002?"hidden":"visible"}i.jLayer&&(i.jLayer.style.opacity=Y(Q[0],Q[1],e).toFixed(3)),i.hud&&i.hud.style.setProperty("--hud",(1-Y(.96,1,e)).toFixed(3))}M?N({sf:A(x.current,n.s),enter:1,p:x.current}):a&&h.current?.requestDraw(),j?L({q:g.current,altitude:"",reticle:{x:0,y:0,o:0},india:{x:0,y:0,o:0},tag:{x:0,y:0,o:0,n:0},node:{x:0,y:0,o:0},mandals:[],lights:57*(g.current>.85)}):v.current?.requestDraw()};o(),i();let u=new ResizeObserver(()=>{o(),i()});return u.observe(t),window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i),()=>{u.disconnect(),window.removeEventListener("scroll",i),window.removeEventListener("resize",i)}},[N,L,M,j]),(0,a.useEffect)(()=>{let e=p.current;if(!(0,l.e)())return void F(!0);let t=document.createElement("canvas");t.className="jr-canvas",e.appendChild(t);let a=!1,r=(0,l.u)();return W(t,{settings:{phone:r,dprCap:r?n.s.dprPhone:n.s.dprDesktop,dotSize:r?n.U.dotSizePhone:n.U.dotSize,mapOctaves:r?n.U.mapOctavesPhone:n.U.mapOctaves,target:n.U.target,mandals:n.U.mandals,timeline:n.U.timeline},reduced:(0,l.d)(),getProgress:()=>g.current,isActive:()=>g.current<1,onFrame:L,onLost:()=>F(!0)}).then(e=>{a?e?.destroy():e?v.current=e:F(!0)}).catch(()=>{a||F(!0)}),()=>{a=!0,v.current?.destroy(),v.current=null,t.remove()}},[L]),(0,a.useEffect)(()=>{var e;let t=u.current,a=(0,l.d)(),r=()=>{(0,s.Z)({loadProgress:1}),S(!0)};if(!(0,l.e)())return void r();let o=document.createElement("canvas");o.className="jr-canvas",t.appendChild(o);let i=!1,c=!1,d=null;return(0,s.Z)({loadProgress:0}),T(o,{settings:{dots:(e=(0,l.u)())?n.s.dotsPhone:n.s.dotsDesktop,coreDots:e?n.s.coreDotsPhone:n.s.coreDotsDesktop,dprCap:e?n.s.dprPhone:n.s.dprDesktop,tilt:n.s.tilt,sway:n.s.sway,hoverRadius:n.s.hoverRadius,hoverLift:n.s.hoverLift,rippleEvery:n.s.rippleEvery,rippleSpeed:n.s.rippleSpeed,fill:e?n.s.phone.fill:n.s.fill,fillFraction:n.s.fillFraction,fillSize:e?n.s.phone.fillSize:n.s.fillSize,dotSize:e?n.s.phone.dotSize:n.s.dotSize,enter:n.s.enter,scrollStart:n.s.scrollStart,scrollEnd:n.s.scrollEnd,hold:n.s.hold,light:!0},reduced:a,getProgress:()=>x.current,onFrame:N,onLoad:e=>(0,s.Z)({loadProgress:e}),onLost:r,cancelled:()=>i}).then(e=>{if(i)return void e?.destroy();if(!e)return void r();h.current=e;let t=()=>{if(c)return;let t=(0,s.z)();"out"===t.loader?(c=!0,e.start(t.loaderOutAt)):"done"===t.loader&&(c=!0,e.start(performance.now()/1e3+.1))};t(),d=(0,s.G)(t)}).catch(()=>{i||r()}),()=>{i=!0,d?.(),h.current?.destroy(),h.current=null,o.remove()}},[N]),(0,a.useEffect)(()=>{let e=()=>window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-4,t=0,a=0,r=r=>{if(r.deltaY<=0||!e()){t=0;return}t+=r.deltaY,clearTimeout(a),a=window.setTimeout(()=>t=0,900),t>n.$.pastEndPixels&&(t=0,P())},o=0,i=!1,l=t=>{o=t.touches[0].clientY,i=e()},s=e=>{i&&o-e.touches[0].clientY>.5*n.$.pastEndPixels&&(i=!1,P())};return window.addEventListener("wheel",r,{passive:!0}),window.addEventListener("touchstart",l,{passive:!0}),window.addEventListener("touchmove",s,{passive:!0}),()=>{clearTimeout(a),window.removeEventListener("wheel",r),window.removeEventListener("touchstart",l),window.removeEventListener("touchmove",s)}},[P]);let R=n.U.stories.length+n.y.length;return(0,t.jsx)("section",{ref:e,className:"relative",style:{height:`${n.U.lengthVh+n.$.lengthVh}svh`},children:(0,t.jsxs)("div",{className:"jr-stage sticky top-0 h-svh overflow-hidden",style:{"--canopy":`url(${(0,E.f)("/photos/tex-canopy.jpg")})`},children:[(0,t.jsxs)("div",{"data-dlayer":!0,className:"absolute inset-0",children:[(0,t.jsx)("div",{ref:p,"aria-hidden":!0,className:"absolute inset-0"}),j&&(0,t.jsx)("div",{"aria-hidden":!0,className:"ds-fallback"}),(0,t.jsx)("div",{"aria-hidden":!0,className:"ds-scrim"}),n.U.mandals.map(e=>(0,t.jsxs)("div",{"data-mandal":!0,"aria-hidden":!0,className:"hud-mandal",style:{opacity:0},children:[(0,t.jsx)("span",{className:"mandal-name",children:e.name}),(0,t.jsxs)("span",{className:"mandal-n",children:[(0,t.jsx)("b",{children:"0"})," / ",e.count]})]},e.name)),(0,t.jsxs)("div",{"data-node":!0,"aria-hidden":!0,className:"hud-node",style:{opacity:0},children:[(0,t.jsx)("span",{className:"node-ring"}),(0,t.jsxs)("span",{className:"node-label",children:[(0,t.jsx)("b",{children:"57 farmers · One MOU"}),(0,t.jsx)("span",{children:"Araku Tribal Development and Sustainable Agriculture Society"})]})]}),(0,t.jsxs)("div",{"data-ftag":!0,"aria-hidden":!0,className:"hud-ftag",style:{opacity:0},children:[(0,t.jsx)("span",{className:"hud-k",children:"Farmer"})," ",(0,t.jsx)("b",{"data-ftag-n":!0,children:"01"})," / 57"]}),(0,t.jsx)("div",{"data-india":!0,"aria-hidden":!0,className:"hud-india",style:{opacity:0},children:"India"}),(0,t.jsxs)("div",{"data-reticle":!0,"aria-hidden":!0,className:"hud-reticle",style:{opacity:0},children:[(0,t.jsx)("span",{className:"ret-ring"}),(0,t.jsx)("span",{className:"ret-tick"}),(0,t.jsxs)("span",{className:"ret-label",children:[(0,t.jsx)("b",{children:n.U.target.label}),(0,t.jsx)("span",{children:n.U.coords}),(0,t.jsx)("span",{children:n.U.target.place})]})]}),n.U.stories.map((e,a)=>(0,t.jsxs)("div",{"data-dstory":!0,className:"ds-story",style:{"--o":+(0===a)},children:[(0,t.jsx)("div",{className:"n",children:e.n}),(0,t.jsx)(0===a?"h1":"h2",{children:e.h}),(0,t.jsx)("p",{children:e.p}),a===n.U.stories.length-1&&(0,t.jsxs)("div",{className:"ds-count","aria-hidden":!0,children:[(0,t.jsx)("b",{"data-counter":!0,children:"00"}),(0,t.jsx)("span",{children:"/ 57 · Farmers onboarded"})]}),(0,t.jsx)("div",{className:"rule"})]},e.nav))]}),(0,t.jsxs)("div",{"data-jlayer":!0,className:"absolute inset-0",style:{opacity:0},children:[(0,t.jsx)("div",{"aria-hidden":!0,className:"jr-plate"}),(0,t.jsx)("div",{"aria-hidden":!0,className:"jr-shadow"}),(0,t.jsx)("div",{ref:u,"aria-hidden":!0,className:"absolute inset-0"}),M&&(0,t.jsx)("div",{"aria-hidden":!0,"data-fallback":!0,"data-stage":"0",className:"jr-fallback"})]}),(0,t.jsx)("p",{className:"sr-only",children:n.j.sceneDescription}),(0,t.jsxs)("div",{"data-hud":!0,"aria-hidden":!0,className:"hud",children:[(0,t.jsx)("span",{className:"hud-corner tl"}),(0,t.jsx)("span",{className:"hud-corner tr"}),(0,t.jsx)("span",{className:"hud-corner bl"}),(0,t.jsx)("span",{className:"hud-corner br"}),(0,t.jsxs)("div",{className:"hud-chapter",children:[(0,t.jsx)("span",{className:"hud-dot"}),(0,t.jsx)("span",{"data-chapter":!0,children:`01 / ${String(R).padStart(2,"0")} \xb7 ${n.U.stories[0].nav}`})]}),(0,t.jsxs)("div",{className:"hud-alt",children:[(0,t.jsx)("span",{className:"hud-k",children:"View alt."}),(0,t.jsx)("b",{"data-alt":!0,children:"400 km"}),(0,t.jsx)("div",{className:"hud-tape",children:(0,t.jsx)("i",{"data-alt-tape":!0})})]}),(0,t.jsxs)("div",{className:"hud-coords",children:[(0,t.jsx)("span",{className:"hud-k",children:n.U.target.label}),(0,t.jsx)("span",{children:n.U.coords}),(0,t.jsx)("span",{children:n.U.target.place})]})]}),(0,t.jsxs)("div",{"data-specimen":!0,"aria-hidden":!0,className:"hud-specimen",style:{opacity:0},children:[(0,t.jsx)("span",{className:"br tl"}),(0,t.jsx)("span",{className:"br tr"}),(0,t.jsx)("span",{className:"br bl"}),(0,t.jsx)("span",{className:"br brr"}),(0,t.jsx)("span",{className:"spec-axis"}),(0,t.jsx)("span",{"data-specimen-label":!0,className:"spec-label",children:"Specimen 01 · Pearl"})]}),n.y.map(e=>(0,t.jsxs)("div",{"data-story":!0,className:"jr-story",children:[(0,t.jsx)("div",{className:"n",children:e.n}),(0,t.jsx)("h2",{children:e.h}),(0,t.jsx)("p",{children:e.p}),(0,t.jsx)("div",{className:"rule"})]},e.nav)),(0,t.jsxs)("div",{className:"jr-end",children:[(0,t.jsxs)("div",{"data-offer":!0,className:"jr-offer js-reveal",children:[(0,t.jsx)("div",{className:"n",children:n.T.n}),(0,t.jsx)("h2",{children:n.T.h}),(0,t.jsx)("p",{children:n.T.p}),(0,t.jsx)("ul",{className:"jr-facts",children:n.T.facts.map(e=>(0,t.jsx)("li",{children:e},e))})]}),(0,t.jsxs)("div",{className:"jr-actions",children:[(0,t.jsx)(r.default,{href:n.r,"data-descent":!0,onClick:e=>{e.metaKey||e.ctrlKey||e.shiftKey||0!==e.button||(e.preventDefault(),P())},className:"descent-button js-reveal tracked",children:n.j.endButton}),(0,t.jsx)(r.default,{href:n.T.wholesale.href,"data-door":!0,className:"jr-wholesale js-reveal tracked",children:n.T.wholesale.label})]}),(0,t.jsx)("nav",{"aria-label":"Explore",children:(0,t.jsx)("ul",{className:"jr-doors",children:n.X.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(r.default,{href:e.href,"data-door":!0,className:"door js-reveal",children:(0,t.jsxs)(i.m.span,{className:"door-inner",initial:"rest",animate:"rest",whileHover:"hover",whileTap:"tap",children:[(0,t.jsx)(i.m.span,{"aria-hidden":!0,className:"door-pearl",variants:Z,transition:X}),(0,t.jsx)("span",{className:"door-label tracked",children:e.label})]})})},e.href))})})]}),(0,t.jsxs)("div",{"aria-hidden":!0,"data-hint":!0,className:"jr-hint",children:[(0,t.jsx)("span",{className:"scroll-line"}),(0,t.jsx)("span",{className:"tracked",children:n.j.scrollHint})]}),(0,t.jsx)("div",{className:"jr-nav tracked",children:[...n.U.stories.map(e=>e.nav),...n.y.map(e=>e.nav)].map((e,a)=>(0,t.jsx)("button",{type:"button","data-nav":!0,onClick:()=>(e=>{var t,a;let{top:r,descentPx:o,journeyLen:i}=y.current,s=n.U.stories.length,u=e<s?r+(0===e?0:n.U.stories[e].at)*o:r+o+(t=e-s,((a=n.s).scrollStart+t/4*(a.scrollEnd-a.scrollStart))*i);(0,l.d)()?window.scrollTo(0,u):m.lenis?m.lenis.scrollTo(u,{duration:2.2}):window.scrollTo({top:u,behavior:"smooth"})})(a),className:0===a?"on":"",children:e},e))}),(0,t.jsxs)("div",{className:"absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 pb-5 pt-14 text-[11px] text-forest/60 md:px-10 md:pb-7",style:{background:"linear-gradient(to top, rgba(255,252,248,0.85), rgba(255,252,248,0))"},children:[(0,t.jsx)(d,{className:"text-forest/60 hover:text-forest"}),(0,t.jsx)(c,{})]})]})})}],19304)}]);