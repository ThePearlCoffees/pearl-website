(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,19304,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(22016),o=e.i(18566),l=e.i(32181),n=e.i(73422),s=e.i(94208),i=e.i(30028);function c(e,t){return new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",hourCycle:"h23",timeZone:e}).format(t)}function d({className:e=""}){let[r,o]=(0,a.useState)(null);return((0,a.useEffect)(()=>{o(new Date);let e=window.setInterval(()=>o(new Date),3e4);return()=>clearInterval(e)},[]),r)?(0,t.jsxs)("span",{className:`tracked tabular-nums ${e}`,children:[n.j.clockIndia," ",c("Asia/Kolkata",r)," · ",n.j.clockBerlin," ",c("Europe/Berlin",r)]}):(0,t.jsx)("span",{className:e})}function u({className:e=""}){let[r,o]=(0,a.useState)(!1);return(0,t.jsx)("button",{type:"button","aria-pressed":r,onClick:()=>o(!r),className:`tracked cursor-pointer transition-opacity hover:opacity-100 ${e}`,children:r?n.j.soundOn:n.j.soundOff})}var h=e.i(20032);let m=[0,.1],f=[.27,.5],p=[.56,.7],v=[.4,.5],g=e=>Math.min(Math.max(e,0),1),x=(e,t,a)=>{let r=g((a-e)/(t-e));return r*r*(3-2*r)},y=e=>.5-.5*Math.cos(Math.PI*g(e)),w=1600/1500;async function b(e,t){let a=e.getContext("2d",{alpha:!0});if(!a)return null;let r=!1;t.onLoad(.1);let o=[];try{let e=0;await Promise.all(t.frameUrls.map((a,r)=>new Promise((e,t)=>{let r=new Image;r.decoding="async",r.onload=()=>e(r),r.onerror=()=>t(Error(`Could not load ${a}`)),r.src=a}).then(a=>{o[r]=a,e++,t.onLoad(.1+.85*(e/t.frameUrls.length))})))}catch{return null}if(r||t.cancelled?.())return null;let l=t.angles,n=1,s=1,i=1,c=!0,d=()=>{let a=e.getBoundingClientRect();n=Math.max(1,a.width),s=Math.max(1,a.height),i=Math.min(window.devicePixelRatio||1,t.dprCap),e.width=Math.round(n*i),e.height=Math.round(s*i),c=n/s>=1.05},u=g(t.getProgress()),h=performance.now()/1e3,b=h,j=!1,M=0,S=0,A=0,F=e=>{A=(e.clientX/window.innerWidth-.5)*2};window.addEventListener("pointermove",F,{passive:!0});let k=()=>{if(M=0,r)return;let e=performance.now()/1e3,d=Math.min(e-h,.05);h=e;let F=t.reduced?0:e-b,k=g(t.getProgress());u=t.reduced?k:u+(k-u)*(1-Math.exp(-(16*d))),2e-4>Math.abs(k-u)&&(u=k);let T=u;if(t.isActive()||t.reduced){let e=y(x(m[0],m[1],T)),r=y(x(f[0],f[1],T)),u=y(x(p[0],p[1],T)),h=y(x(v[0],v[1],T))*(1-u);S+=(A-S)*(1-Math.exp(-(4*d)));let b=l[l.length-1];((e,r,d,u)=>{a.setTransform(i,0,0,i,0,0),a.clearRect(0,0,n,s);let h=c?.34:.5,m=c?.5:.31,f=(c?.62:.42)*s,p=(.6+.4*r)*(1+.08*d)*f,v=t.reduced?0:.004*Math.sin(.9*u)*s,x=h*n+6*S,b=m*s+f/2-(1-r)*.04*s+v,j=.55*p,M=a.createRadialGradient(x,b,0,x,b,j);M.addColorStop(0,`rgba(58,36,22,${.3*r})`),M.addColorStop(.5,`rgba(58,36,22,${.12*r})`),M.addColorStop(1,"rgba(58,36,22,0)"),a.save(),a.translate(0,b),a.scale(1,.055*p/j),a.translate(0,-b),a.fillStyle=M,a.beginPath(),a.arc(x,b,j,0,2*Math.PI),a.fill(),a.restore();let A=0;for(;A<l.length-2&&e>=l[A+1];)A++;let F=l[A],k=g((e-F)/(l[A+1]-F)),N=p*w,T=N*o[A].naturalWidth/o[A].naturalHeight,P=x-T/2,z=b+.04*p-N;a.globalAlpha=Math.min(1,1.6*r),a.drawImage(o[A],P,z,T,N),k>.002&&(a.globalAlpha=Math.min(1,1.6*r)*y(k),a.drawImage(o[A+1],P,z,T,N)),a.globalAlpha=1})(Math.max(0,Math.min(b,b*r-28*u)),e,h,F)}t.onFrame({sf:0,enter:1,p:T}),j||(j=!0,t.onLoad(1)),t.reduced||N()};function N(){M||r||(M=requestAnimationFrame(k))}let T=()=>{d(),N()},P="u">typeof ResizeObserver?new ResizeObserver(T):null;P?.observe(e),window.addEventListener("resize",T);let z=()=>{h=performance.now()/1e3,document.hidden||N()};return document.addEventListener("visibilitychange",z),d(),N(),{start(e){N()},requestDraw(){N()},destroy(){r=!0,M&&cancelAnimationFrame(M),P?.disconnect(),window.removeEventListener("resize",T),window.removeEventListener("pointermove",F),document.removeEventListener("visibilitychange",z)}}}let j=e=>Math.min(Math.max(e,0),1);var M=e.i(93209),S=e.i(90072),A=e.i(8560);function F(e){if(e<=0||e>=1)return 0;let t=e<.42?Math.pow(Math.sin(e/.42*Math.PI*.5),1.25):Math.cos((e-.42)/.58*Math.PI*.5),a=e>.82?.55*Math.pow(1-(e-.82)/.18,1.6)+.45*(1-(e-.82)/.18):1,r=1+.016*Math.sin(e*Math.PI*9+.6)*Math.sin(Math.PI*e);return .205*t*(e>.82?Math.min(1,a):1)*r}let k=e=>.018*Math.sin(Math.PI*e*.9);function N(e,t,a,r,o){let l=[0];for(let t=1;t<e.length;t++)l.push(l[t-1]+Math.hypot(e[t][0]-e[t-1][0],e[t][1]-e[t-1][1]));return{pts:e,len:l[l.length-1],cum:l,w:t,a,t0:r,t1:o}}function T(e,t,a,r=8){let o=[];for(let l=0;l<=r;l++){let n=l/r,s=1-n;o.push([s*s*e[0]+2*s*n*t[0]+n*n*a[0],s*s*e[1]+2*s*n*t[1]+n*n*a[1]])}return o}let P="176, 122, 42";function z(e,t,a,r,o,l){let n=r?.74*a:Math.min(.46*a,1.2*t),s=q(o)*(1-q(l)),i=Math.pow(3.6,s),c=e.dive[0]*s,d=-.5+(e.dive[1]+.5)*s;return{size:n,cx:r?.67*t:.5*t,cy:r?.5*a:.42*a,zoom:i,tilt:-.42+.12*s,fx:c,fy:d}}function C(e,t){let a=(t[0]-e.fx)*e.size*e.zoom,r=(t[1]-e.fy)*e.size*e.zoom,o=Math.cos(e.tilt),l=Math.sin(e.tilt);return[e.cx+a*o-r*l,e.cy+a*l+r*o]}let E=e=>e/57*.62,U="",$=!1,I=e=>e<0?0:e>1?1:e,L=e=>1-Math.pow(1-e,3),q=e=>.5-.5*Math.cos(Math.PI*I(e)),O=`
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
}`,D=`
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
}`,R=`
varying float vA;
varying vec3 vCol;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float r = length(c);
  float a = smoothstep(0.5, 0.3, r) * min(vA, 1.0);
  if (a < 0.01) discard;
  gl_FragColor = vec4(vCol * a, a);
}`,W=`
varying vec3 vN; varying vec3 vV;
void main(){
  vec4 w = modelMatrix * vec4(position, 1.0);
  vN = normalize(mat3(modelMatrix) * normal);
  vV = normalize(cameraPosition - w.xyz);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,G=`
uniform float uFade;
varying vec3 vN; varying vec3 vV;
void main(){
  float f = 1.0 - abs(dot(vN, vV));
  float a = pow(f, 3.0) * 0.32 * uFade;
  vec3 gold = vec3(0.690, 0.478, 0.165);
  gl_FragColor = vec4(gold * a, a);
}`,H=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Z=`
uniform float uOpacity, uZoom, uTime, uAspect, uTilt, uRelief, uFog, uChart;
uniform int uOct;
varying vec2 vUv;
${O}
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
}`,_=`
uniform sampler2D uTex;
uniform float uOpacity, uZoom, uScan, uMist, uDim, uTime, uAspect, uTexAspect, uIris;
varying vec2 vUv;
${O}
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
}`,V=`
attribute vec2 aHome;   // where the farmer settles on the chart (0..1 screen space, y up)
attribute vec2 aStart;  // where its gold dot sits on the leaf (same space): the flight begins here
attribute float aIndex;
uniform float uShown, uGather, uDpr, uSize, uStartSize;
uniform vec2 uAnchor;   // the point they gather into: where the bean appears
varying float vA; varying float vPulse; varying float vG; varying float vF;
float ease(float t){ return t*t*(3.0 - 2.0*t); }
float easeIO(float t){ return t < 0.5 ? 4.0*t*t*t : 1.0 - pow(-2.0*t + 2.0, 3.0)/2.0; }
void main(){
  float k = aIndex / 57.0;
  // each dot lifts off in turn (base of the leaf first) and flies for 38% of the window
  float f = clamp((uShown - k*0.62) / 0.38, 0.0, 1.0);
  float fe = easeIO(f);
  vec2 d = aHome - aStart;
  vec2 perp = normalize(vec2(-d.y, d.x) + 1e-5);
  float bend = (fract(k*7.0) - 0.5) * 0.9 + 0.35;                   // the streams arc, each a little differently
  vec2 fly = mix(aStart, aHome, fe) + perp * sin(fe*3.14159) * length(d) * 0.16 * bend;
  fly.y += sin(fe*3.14159) * 0.018;                                  // a small lift before the glide
  float g = ease(clamp(uGather*1.3 - k*0.3, 0.0, 1.0));
  vec2 pos = mix(fly, uAnchor, g);
  vA = step(0.0001, f) * (1.0 - smoothstep(0.92, 1.0, g) * 0.6);
  vF = smoothstep(0.0, 0.5, f);
  vPulse = clamp((f - 0.8) / 0.2, 0.0, 1.0);
  vG = g;
  float sz = mix(uStartSize, 1.0, smoothstep(0.0, 0.7, f));
  gl_PointSize = uSize * uDpr * sz * mix(1.0, 0.45, g);
  gl_Position = vec4(pos*2.0 - 1.0, 0.0, 1.0);
}`,B=`
varying float vA; varying float vPulse; varying float vG; varying float vF;
void main(){
  vec2 c = gl_PointCoord - 0.5; float r = length(c);
  vec3 gold = vec3(0.690, 0.478, 0.165), ink = vec3(0.180, 0.090, 0.063), paper = vec3(1.0, 0.988, 0.973);
  float aa = fwidth(r);
  float core = 1.0 - smoothstep(0.085 - aa, 0.085 + aa, r);
  float halo = 1.0 - smoothstep(0.1, 0.16, r);
  float ring = (1.0 - smoothstep(0.0, aa*1.6, abs(r - 0.21))) * vF;   // the ring blooms as the dot lifts off
  // landing pulse: a ring that opens once and fades as the marker settles
  float pr = mix(0.08, 0.48, vPulse);
  float pulse = (1.0 - smoothstep(0.0, aa*2.0, abs(r - pr))) * (1.0 - vPulse) * step(0.001, vPulse);
  vec3 coreCol = mix(gold, ink, smoothstep(0.0, 0.45, vF));          // gold on the leaf, ink once it is a farmer
  vec3 col = paper;
  float a = 0.0;
  col = mix(col, paper, halo); a = max(a, halo*0.6*vF);               // fine white keyline
  col = mix(col, gold, ring); a = max(a, ring*(1.0 - vG));            // gold ring
  col = mix(col, coreCol, core); a = max(a, core);                    // centre
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
}`,Q=e=>Math.min(Math.max(e,0),1),J=(e,t)=>{let a=Q((t-e[0])/(e[1]-e[0]));return a*a*(3-2*a)},X=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;function ee(e,t,a=1){let r=e*Math.PI/180,o=t*Math.PI/180;return new S.cE(Math.cos(r)*Math.cos(o)*a,Math.sin(r)*a,-Math.cos(r)*Math.sin(o)*a)}async function et(e,t){let a,r=t.settings,o=r.timeline;try{a=new A.T({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"})}catch{return null}a.setClearColor(0xfffcf8,1),a.autoClear=!1;let l=await fetch((0,M.f)("/data/land.bin")).then(e=>e.ok?e.arrayBuffer():null).catch(()=>null);if(!l)return a.dispose(),null;let n=new Int16Array(l),s=n[0],i=n.subarray(2),c=i.length/2,d=new Float32Array(3*c),u=new Float32Array(c),h=new Float32Array(c);for(let e=0;e<c;e++){let t=ee(i[2*e]/100,i[2*e+1]/100);d.set([t.x,t.y,t.z],3*e),u[e]=+(e>=s),h[e]=0x9e3779b1*e%1e3/1e3}let m=new S.ld;m.setAttribute("position",new S.f5(d,3)),m.setAttribute("aDense",new S.f5(u,1)),m.setAttribute("aSeed",new S.f5(h,1));let f=ee(r.target.lat,r.target.lon).normalize(),p={blending:S.UM,blendSrc:S.Vt,blendDst:S.oL},v=new S.Zg({vertexShader:D,fragmentShader:R,transparent:!0,depthWrite:!1,...p,uniforms:{uTime:{value:0},uDpr:{value:1},uSize:{value:r.dotSize},uDense:{value:0},uFade:{value:1},uTarget:{value:f},uNear:{value:0}}}),g=new S.sy(m,v);g.frustumCulled=!1;let x=new S.kE(new S.Gu(.985,64,48),new S.p$({colorWrite:!1}));x.renderOrder=-1;let y=[];for(let e=-75;e<=75;e+=15)for(let t=0;t<360;t+=3){let a=ee(e,t,1.001),r=ee(e,t+3,1.001);y.push(a.x,a.y,a.z,r.x,r.y,r.z)}for(let e=0;e<360;e+=15)for(let t=-84;t<84;t+=3){let a=ee(t,e,1.001),r=ee(t+3,e,1.001);y.push(a.x,a.y,a.z,r.x,r.y,r.z)}let w=new S.ld;w.setAttribute("position",new S.ki(y,3));let b=new S.NQ({color:3020560,transparent:!0,opacity:.09,depthWrite:!1}),j=new S.a1(w,b),O=new S.Zg({vertexShader:W,fragmentShader:G,transparent:!0,depthWrite:!1,...p,uniforms:{uFade:{value:1}}}),et=new S.kE(new S.Gu(1.07,64,48),O),ea=new S.C9;ea.add(x,j,g);let er=new S.P6;er.add(ea,et);let eo=r.target.lat*Math.PI/180,el=r.target.lon*Math.PI/180,en=new S.as().setFromAxisAngle(new S.cE(1,0,0),eo).multiply(new S.as().setFromAxisAngle(new S.cE(0,1,0),-Math.PI/2-el)),es=ee(25.5,76.5).normalize(),ei=new S.zm(30,1,.005,50),ec=new S.CQ(2,2),ed={transparent:!0,depthTest:!1,depthWrite:!1,blending:S.UM,blendSrc:S.Vt,blendDst:S.oL},eu=new S.Zg({vertexShader:H,fragmentShader:Z,...ed,uniforms:{uOpacity:{value:0},uZoom:{value:1},uTime:{value:0},uAspect:{value:1},uTilt:{value:0},uOct:{value:r.mapOctaves},uRelief:{value:0},uFog:{value:0},uChart:{value:0}}}),eh=new S.Zg({vertexShader:H,fragmentShader:_,...ed,uniforms:{uTex:{value:null},uOpacity:{value:0},uZoom:{value:1},uScan:{value:0},uMist:{value:1},uDim:{value:0},uTime:{value:0},uAspect:{value:1},uTexAspect:{value:4/3},uIris:{value:0}}}),em=function(){let e,t=[],a=(e=57,()=>(e=1664525*e+0x3c6ef35f>>>0)/0x100000000),r=[[.004,.09]];for(let e=0;e<=120;e++)r.push([k(e/120),-(e/120*1)]);for(let e of(t.push(N(r,1.5,.95,0,.42)),[-1,1])){let a=[];for(let t=0;t<=120;t++)a.push([k(t/120)+e*F(t/120),-(t/120*1)]);t.push(N(a,1.2,.9,.06,.5))}let o=[],l={[-1]:[],1:[]},n=[],s=(e,a,r,l,n)=>{o.push(e[e.length-1]);let s=e[34];for(let[e,i]of[[.012,.97],[.03,.7*l]]){let l=Math.min(.99,r+e),c=[k(l)+a*F(l)*i,-l],d=[(s[0]+c[0])/2+.004*a,(s[1]+c[1])/2-.004];t.push(N(T(s,d,c,8),.6,.6,n+.24,n+.4)),o.push(c)}};for(let e=0;e<9;e++)for(let a of[-1,1]){let r=.08+e/8*.6+.018*(a>0),o=.8-.01*e,i=.13+.02*(1-e/9),c=[];for(let e=0;e<=40;e++){let t=e/40,l=r+i*(.55*t+.45*t*t),n=F(Math.min(.995,l));c.push([k(l)+a*n*o*Math.pow(Math.sin(t*Math.PI*.5),.85),-l])}n.push(c[40]);let d=r+i;for(let e=1;e<=12;e++){let t=e/12,r=d+.045*t,l=F(Math.min(.995,r));c.push([k(r)+a*l*(o+.035*Math.sin(t*Math.PI)),-r])}let u=.2+.035*e+.012*(a>0);t.push(N(c,.9,.75,u,u+.32)),s(c,a,r+i,o,u),l[a].push(c)}for(let e of([[.86,1],[.91,-1],[.955,1]].forEach(([e,a],r)=>{let l=e+.034,n=[k(e),-e],s=[k(l)+a*Math.max(.004,.55*F(l)),-l],i=[k(e)+a*F(e)*.25,-(e+.02)];t.push(N(T(n,i,s,6),.6,.6,.5+.03*r,.62+.03*r)),o.push(s)}),[-1,1])){let r=l[e];for(let o=0;o<r.length-1;o++)for(let l of[.38+.06*a(),.68+.08*a()]){let n=r[o][Math.round(40*l)],s=r[o+1][Math.round((l-.12)*40)],i=(n[0]+s[0])/2+.006*e*(a()-.3),c=(n[1]+s[1])/2+.004*(a()-.5),d=.5+.03*o+.08*l;t.push(N(T(n,[i,c],s,8),.5,.24,d,d+.18))}}if(o.sort((e,t)=>t[1]-e[1]||e[0]-t[0]),57!==o.length)throw Error(`The leaf must end in 57 veins, it has ${o.length}`);return{strokes:t,tips:o,dive:n[11]}}(),ef=document.createElement("canvas");ef.setAttribute("aria-hidden","true"),ef.style.cssText="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;opacity:1",e.insertAdjacentElement("afterend",ef);let ep=ef.getContext("2d"),ev=1,eg=new S.kE(ec,eu),ex=new S.kE(ec,eh);eg.frustumCulled=ex.frustumCulled=!1,eg.renderOrder=1,ex.renderOrder=0;let ey=new S.P6;ey.add(ex,eg);let ew=new S.Sc(-1,1,1,-1,0,1),eb=new Float32Array(114),ej=new Float32Array(114),eM=new Float32Array(57),eS=5701,eA=()=>(eS=16807*eS%0x7fffffff)/0x7fffffff;for(let e=0;e<57;e++)ej[2*e]=eA(),ej[2*e+1]=eA(),eM[e]=e;let eF=new S.ld;eF.setAttribute("position",new S.f5(new Float32Array(171),3));let ek=new Float32Array(114);eF.setAttribute("aHome",new S.f5(eb,2)),eF.setAttribute("aStart",new S.f5(ek,2)),eF.setAttribute("aIndex",new S.f5(eM,1));let eN=new S.Zg({vertexShader:V,fragmentShader:B,transparent:!0,depthTest:!1,depthWrite:!1,...p,uniforms:{uShown:{value:0},uGather:{value:0},uDpr:{value:1},uSize:{value:r.phone?34:46},uStartSize:{value:1},uAnchor:{value:new S.wq(.34,.5)}}}),eT=new S.sy(eF,eN);eT.frustumCulled=!1;let eP=new Float32Array(228),ez=new Float32Array(114),eC=new Float32Array(114);for(let e=0;e<57;e++)ez[2*e]=0,ez[2*e+1]=1,eC[2*e]=eC[2*e+1]=e;let eE=new S.ld;eE.setAttribute("position",new S.f5(new Float32Array(342),3)),eE.setAttribute("aHome",new S.f5(eP,2)),eE.setAttribute("aT",new S.f5(ez,1)),eE.setAttribute("aIndex",new S.f5(eC,1));let eU=new S.Zg({vertexShader:K,fragmentShader:Y,transparent:!0,depthTest:!1,depthWrite:!1,...p,uniforms:{uConnect:{value:0},uGather:{value:0},uAnchor:eN.uniforms.uAnchor}}),e$=new S.a1(eE,eU);e$.frustumCulled=!1,e$.renderOrder=0,eT.renderOrder=1;let eI=new S.P6;eI.add(e$,eT);let eL=e=>e<.38?0:Math.min(57,Math.floor((e-.38)/.62*57)+1),eq=1,eO=1,eD=!0,eR=[],eW=()=>{let t,o;eR.length=0,eq=e.clientWidth||window.innerWidth,eO=e.clientHeight||window.innerHeight,eD=eq>1.05*eO;let l=Math.min(window.devicePixelRatio||1,r.dprCap);a.setPixelRatio(l),a.setSize(eq,eO,!1),ev=Math.min(window.devicePixelRatio||1,1.5),ef.width=Math.round(eq*ev),ef.height=Math.round(eO*ev),ei.aspect=eq/eO,ei.updateProjectionMatrix();let n=eq/eO;eu.uniforms.uAspect.value=n,eh.uniforms.uAspect.value=n,v.uniforms.uDpr.value=l,eN.uniforms.uDpr.value=l,eN.uniforms.uAnchor.value.set(eD?.34:.5,eD?.5:.69);let s=0;for(let e of r.mandals){let t=eD?.47+.34*e.cx:.14+.72*e.cx,a=eD?.27+.42*e.cy:.64+.2*e.cy,r=eD?.0165:.013,o=eO/eq,l=r*Math.sqrt(e.count+.5);eR.push([t,e.below?a-l-.025:a+l+.03]);for(let l=0;l<e.count&&s<57;l++,s++){let e=2.39996323*l+.15*ej[2*s],n=r*Math.sqrt(l+.5);eb[2*s]=t+Math.cos(e)*n*o,eb[2*s+1]=a+Math.sin(e)*n,eP.set([eb[2*s],eb[2*s+1],eb[2*s],eb[2*s+1]],4*s)}}let i=(t=z(em,eq,eO,eD,0,0),o=new Float32Array(2*em.tips.length),em.tips.forEach((e,a)=>{let r=C(t,e);o[2*a]=r[0],o[2*a+1]=r[1]}),o);for(let e=0;e<57;e++)ek[2*e]=i[2*e]/eq,ek[2*e+1]=1-i[2*e+1]/eO;eN.uniforms.uStartSize.value=3.2/(.085*(r.phone?34:46)),eF.attributes.aStart.needsUpdate=!0,eF.attributes.aHome.needsUpdate=!0,eE.attributes.aHome.needsUpdate=!0};eW();let eG=()=>{eW(),e2()};window.addEventListener("resize",eG);let eH=new S.cE,eZ=new S.as,e_=new S.as,eV=new S.cE(0,1,0),eB=new S.cE(1,0,0),eK=performance.now()/1e3,eY=!1,eQ=0,eJ=!0,eX=Q(t.getProgress()),e0=0,e1=()=>{eY||(eQ=requestAnimationFrame(e1),t.isActive()&&(!t.reduced||eJ)&&(eJ=!1,(e=>{var l;let n,s,i,c,d,u,h=Q(t.getProgress()),m=e0?Math.min(.05,e-e0):.016;e0=e,eX=t.reduced?h:eX+(h-eX)*(1-Math.exp(-(20*m))),2e-4>Math.abs(h-eX)&&(eX=h);let p=eX,g=t.reduced?0:e-eK,x=eD?1:Math.max(1,eO/eq*.76),y=6.2*x,w=1.9*Math.sqrt(x),j=p<o.orbitEnd?y+(w-y)*X(p/o.orbitEnd):w+(1.035-w)*Math.pow(Q((p-o.orbitEnd)/(o.diveEnd-o.orbitEnd)),1.6);ei.position.set(0,0,j),ei.lookAt(0,0,0);let M=J([.16,.34],p),S=eD?.17*(1-M):0,A=eD?-.03*(1-M):-.15*(1-M);ei.setViewOffset(eq,eO,-S*eq,-A*eO,eq,eO);let F=1-X(Q(p/.28)),k=t.reduced?0:.025*g*(1-J([0,.12],p));eZ.setFromAxisAngle(eV,-(.45*F)-k),e_.setFromAxisAngle(eB,.18*F),ea.quaternion.copy(e_).multiply(eZ).multiply(en);let N=1-J(o.globeOut,p);v.uniforms.uTime.value=g,v.uniforms.uFade.value=N,v.uniforms.uDense.value=J([.12,.3],p),v.uniforms.uNear.value=J([.3,o.globeOut[0]],p),O.uniforms.uFade.value=N*(1-J([.3,.42],p)),b.opacity=.08*N*(1-J([.25,.4],p)),ea.visible=N>.001,et.visible=ea.visible;let T=J([o.lights[0]-.004,o.lights[0]+.03],p)*(1-J([o.gather[0]+.02,o.gather[1]-.01],p)),D=Math.max(J(o.mapIn,p)*(1-J(o.mapOut,p)),.55*T);eu.uniforms.uOpacity.value=D,eu.uniforms.uTime.value=g,eu.uniforms.uChart.value=T;let R=J([o.mapIn[0],o.mapOut[1]],p);if(eu.uniforms.uZoom.value=T>.001?2.2:Math.exp(Math.log(1.1)+(Math.log(14)-Math.log(1.1))*R),eu.uniforms.uTilt.value=T>.001?0:.9*J([o.mapIn[0],.52],p)+.75*J([.52,o.mapOut[0]],p),eu.uniforms.uRelief.value=T>.001?0:J([.5,.6],p),eu.uniforms.uFog.value=T>.001?0:J([o.photoIn[0]-.03,o.photoIn[0]+.02],p),eg.visible=D>.001,ex.visible=ex.visible,eh.uniforms.uOpacity.value=0,eh.uniforms.uTime.value=g,eh.uniforms.uIris.value=2,eh.uniforms.uZoom.value=1,eh.uniforms.uScan.value=1,eh.uniforms.uMist.value=.8*(1-J([o.photoIn[0]+.02,o.photoIn[1]+.01],p))+.05,eh.uniforms.uDim.value=J([o.lights[0]-.04,o.lights[0]-.005],p),ex.visible=!1,ep){let e=J([o.photoIn[0]-.005,o.photoIn[0]+.03],p)*(1-J([o.lights[0]+.01,o.lights[0]+.05],p));!function(e,t,a,r,o,l,n){let s=l.count>.001&&l.shown<.999,i=l.opacity<=.001&&!s;if(i&&$)return;let c=`${a}|${r}|${n}|${l.draw.toFixed(4)}|${l.dive.toFixed(4)}|${l.pull.toFixed(4)}|${l.count.toFixed(4)}|${l.shown.toFixed(4)}|${l.opacity.toFixed(4)}`;if(!i&&c===U||(U=c,$=i,e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,e.canvas.width,e.canvas.height),i))return;let d=z(t,a,r,o,l.dive,l.pull);if(l.opacity>.001){e.save(),e.scale(n,n),e.translate(d.cx,d.cy),e.rotate(d.tilt),e.scale(d.zoom,d.zoom),e.translate(-d.fx*d.size,-d.fy*d.size),e.lineCap="round",e.lineJoin="round";let a=1-.5*q(l.dive)*(1-q(l.pull));for(let r of t.strokes){let t=I((l.draw-r.t0)/(r.t1-r.t0));if(t<=0)continue;let o=r.len*L(t);e.beginPath(),e.moveTo(r.pts[0][0]*d.size,r.pts[0][1]*d.size);for(let t=1;t<r.pts.length;t++)if(r.cum[t]<=o)e.lineTo(r.pts[t][0]*d.size,r.pts[t][1]*d.size);else{let a=r.cum[t]-r.cum[t-1]||1,l=(o-r.cum[t-1])/a;e.lineTo((r.pts[t-1][0]+(r.pts[t][0]-r.pts[t-1][0])*l)*d.size,(r.pts[t-1][1]+(r.pts[t][1]-r.pts[t-1][1])*l)*d.size);break}e.strokeStyle=`rgba(46, 23, 16, ${(r.a*l.opacity*a).toFixed(3)})`,e.lineWidth=r.w/d.zoom,e.stroke()}e.restore()}let u=(t,a,r,o,l,s,i)=>{e.save(),e.setTransform(n,0,0,n,0,0),e.globalCompositeOperation="destination-out";let c=e.createLinearGradient(t,a,r,o);c.addColorStop(s,"rgba(0,0,0,1)"),c.addColorStop(i,"rgba(0,0,0,0)"),e.fillStyle=c,e.fillRect(l[0],l[1],l[2],l[3]),e.restore()};if(o?u(.3*a,0,.5*a,0,[0,0,.5*a,r],0,1):u(0,.66*r,0,.76*r,[0,.66*r,a,.34*r],1,0),s){e.save(),e.scale(n,n);let a=t.tips.length;for(let r=0;r<a;r++){let o=I((l.count*(a+2.5)-r)/2.5);if(o<=0||l.shown>E(r)+1e-4)continue;let[n,s]=C(d,t.tips[r]),i=o<1?1+.9*Math.sin(o*Math.PI)*(1-o):1,c=3.2*(.35+.65*L(o))*i;e.beginPath(),e.arc(n,s,3.2*c,0,2*Math.PI),e.fillStyle=`rgba(${P}, ${(.16*o).toFixed(3)})`,e.fill(),o<1&&(e.beginPath(),e.arc(n,s,3.2*(1+4*o),0,2*Math.PI),e.strokeStyle=`rgba(${P}, ${(.55*(1-o)).toFixed(3)})`,e.lineWidth=1,e.stroke()),e.beginPath(),e.arc(n,s,c,0,2*Math.PI),e.fillStyle=`rgba(${P}, ${(.98*Math.min(1,1.6*o)).toFixed(3)})`,e.fill()}e.restore()}}(ep,em,eq,eO,eD,{draw:J([o.photoIn[0]-.01,o.scan[0]+.02],p),dive:J(o.scan,p),pull:J(o.pull,p),count:J(o.count,p),shown:J(o.lights,p),opacity:e},ev)}let W=J(o.lights,p);eN.uniforms.uShown.value=W;let G=Q((p-o.gather[0])/(o.gather[1]-o.gather[0]));eN.uniforms.uGather.value=G,eU.uniforms.uGather.value=G,eU.uniforms.uConnect.value=Q((p-o.connect[0])/(o.connect[1]-o.connect[0])),eT.visible=W>.001,a.clear(),a.render(ey,ew),ea.visible&&a.render(er,ei),eT.visible&&a.render(eI,ew),eH.copy(f).applyQuaternion(ea.quaternion);let H=eH.z;eH.project(ei);let Z=(.5*eH.x+.5)*eq,_=(-(.5*eH.y)+.5)*eO,V=Q((H-.35)/.3)*(1-J([.3,.4],p));eH.copy(es).applyQuaternion(ea.quaternion);let B=eH.z;eH.project(ei);let K=(.5*eH.x+.5)*eq,Y=(-(.5*eH.y)+.5)*eO,ee=Q((B-.35)/.25)*J([.02,.1],p)*(1-J([.27,.34],p));t.onFrame({q:p,altitude:(l=function(e,t){if(e<=t[0][0])return t[0][1];for(let a=1;a<t.length;a++)if(e<=t[a][0]){let[r,o]=t[a-1],[l,n]=t[a];return Math.exp(Math.log(o)+(Math.log(n)-Math.log(o))*X(Q((e-r)/(l-r))))}return t[t.length-1][1]}(p,o.altitude))>=1e4?`${Math.round(l/1e3).toLocaleString("en-US")} km`:`${(10*Math.round(l/10)).toLocaleString("en-US")} m`,reticle:{x:Z,y:_,o:V},india:{x:K,y:Y,o:ee},lights:eL(W),tag:(s=(n=Math.max(1,eL(W)))-1,i=J([o.lights[0],o.lights[0]+.01],p)*(1-J([o.connect[0],o.connect[0]+.015],p)),{x:eb[2*s]*eq,y:(1-eb[2*s+1])*eO,o:i,n}),mandals:(c=eL(W),d=1-J([o.connect[0]+.01,o.connect[0]+.03],p),u=0,r.mandals.map((e,t)=>{let a=Math.max(0,Math.min(e.count,c-u));u+=e.count;let[r,o]=eR[t]??[0,0];return{x:r*eq,y:(1-o)*eO,o:(a>0)*d,n:a}})),node:{x:eN.uniforms.uAnchor.value.x*eq,y:(1-eN.uniforms.uAnchor.value.y)*eO,o:J([o.connect[0]+.004,o.connect[0]+.02],p)*(1-J([o.gather[0]+.02,o.gather[0]+.05],p))}})})(performance.now()/1e3)))},e2=()=>{eJ=!0};eQ=requestAnimationFrame(e1);let e5=e=>{e.preventDefault(),t.onLost?.()};return e.addEventListener("webglcontextlost",e5),{requestDraw:e2,destroy(){eY=!0,cancelAnimationFrame(eQ),window.removeEventListener("resize",eG),e.removeEventListener("webglcontextlost",e5),[m,w,eF,eE,ec,x.geometry,et.geometry].forEach(e=>e.dispose()),[v,b,O,eu,eh,eN,eU,x.material].forEach(e=>e.dispose()),ef.remove(),a.dispose()}}}let ea=e=>Math.min(Math.max(e,0),1),er=(e,t,a)=>{let r=ea((a-e)/(t-e));return r*r*(3-2*r)},eo={rest:{scale:1,y:0},hover:{scale:1.08,y:-3},tap:{scale:.96,y:0}},el={type:"spring",stiffness:260,damping:18,mass:.6},en=n.U.handoff;function es(e,t,a){e.style.opacity=t.toFixed(3),e.style.visibility=t<.01?"hidden":"visible",e.style.transform=`translate3d(0, ${((1-t)*a).toFixed(1)}px, 0)`}let ei=[0,12,22,32,55,78,90,102,128,146,152,170,180];e.s(["default",0,function(){let e=(0,a.useRef)(null),c=(0,a.useRef)(null),m=(0,a.useRef)(null),f=(0,a.useRef)(null),p=(0,a.useRef)(null),v=(0,a.useRef)(null),g=(0,a.useRef)(0),x=(0,a.useRef)(0),y=(0,a.useRef)({top:0,descentPx:1,journeyLen:1}),w=(0,a.useRef)(-1);(0,a.useRef)(-1);let S=(0,o.useRouter)(),[A,F]=(0,a.useState)(!1),[k,N]=(0,a.useState)(!1),T=(0,a.useCallback)(()=>{(0,i.z)().washing||((0,i.Z)({washing:!0}),window.setTimeout(()=>S.push(n.r),n.$.washMs))},[S]),P=(0,a.useCallback)(({sf:e,enter:t,p:a})=>{let r,o=m.current;if(!o)return;let l=x.current,s=er(en[1]-.012,en[1],l),i=er(n.$.offerFadeStart,n.$.offerFadeEnd,a)*s;o.stories.forEach((e,r)=>{let o=n.J[r],l=o?t*s*er(o.from[0],o.from[1],a)*(1-er(o.to[0],o.to[1],a)):0;e.style.setProperty("--o",l.toFixed(3))});let c=Math.round(e),d=l<1?(r=0,n.U.stories.forEach((e,t)=>{Math.abs(e.at-l)<Math.abs(n.U.stories[r].at-l)&&(r=t)}),r):n.U.stories.length;if(d!==w.current&&(w.current=d,o.navButtons.forEach((e,t)=>{e.classList.toggle("on",t===d),t===d?e.setAttribute("aria-current","step"):e.removeAttribute("aria-current")}),o.fallback?.setAttribute("data-stage",String(c)),o.chapter)){let e=l<1?n.U.stories[d].nav:"Araku Pearl";o.chapter.textContent=`${String(d+1).padStart(2,"0")} / ${String(n.U.stories.length+1).padStart(2,"0")} \xb7 ${e}`,o.chapter.classList.remove("tick"),o.chapter.offsetWidth,o.chapter.classList.add("tick")}if(o.specimen&&(o.specimen.style.opacity=(s*t).toFixed(3)),o.specimenLabel){let e=a>n.$.offerFadeStart?n.O.offer:a>n.O.backAt?n.O.back:n.O.front;o.specimenLabel.textContent!==e&&(o.specimenLabel.textContent=e)}o.hint&&(o.hint.style.opacity=(1-er(.015,.04,l)).toFixed(3));let u=o.doors.length,h=n.$.doorsFadeEnd-n.$.doorsFadeStart-n.$.doorsStagger*(u-1);o.doors.forEach((e,t)=>{let r=n.$.doorsFadeStart+t*n.$.doorsStagger;es(e,er(r,r+h,a)*s,18)}),o.offer&&es(o.offer,i,16),o.button&&es(o.button,er(n.$.buttonFadeStart,n.$.buttonFadeEnd,a)*s,12)},[]),z=(0,a.useCallback)(e=>{let t=m.current;if(!t)return;let a=e.q;t.dStories.forEach((e,t)=>{let r=n.U.stories[t].at,o=Math.abs(a-r),l=1-er(n.U.storyWidth,n.U.storyWidth+n.U.storyFade,o);t===n.U.stories.length-1&&(l=er(r-n.U.storyWidth-n.U.storyFade,r-n.U.storyWidth,a)*(1-er(n.U.timeline.connect[0],n.U.timeline.connect[0]+.02,a))),e.style.setProperty("--o",(0===t&&a<r?1:l).toFixed(3))}),t.alt&&(t.alt.textContent=e.altitude),t.altTape&&(t.altTape.style.transform=`translate3d(0, ${(900*a).toFixed(1)}px, 0)`),t.reticle&&(e.reticle.o>.5?t.reticle.classList.add("locked"):e.reticle.o<.05&&t.reticle.classList.remove("locked"),t.reticle.style.opacity=e.reticle.o.toFixed(3),t.reticle.style.transform=`translate3d(${e.reticle.x.toFixed(1)}px, ${e.reticle.y.toFixed(1)}px, 0)`),t.india&&(t.india.style.opacity=e.india.o.toFixed(3),t.india.style.transform=`translate3d(${e.india.x.toFixed(1)}px, ${e.india.y.toFixed(1)}px, 0)`),t.ftag&&(t.ftag.style.opacity=e.tag.o.toFixed(3),t.ftag.classList.toggle("flip",e.tag.x>.62*window.innerWidth),t.ftag.style.transform=`translate3d(${e.tag.x.toFixed(1)}px, ${e.tag.y.toFixed(1)}px, 0)`,t.ftagN&&(t.ftagN.textContent=String(e.tag.n).padStart(2,"0"))),t.mandals.forEach((t,a)=>{let r=e.mandals[a];if(!r)return;t.style.opacity=r.o.toFixed(3),t.style.transform=`translate3d(${r.x.toFixed(1)}px, ${r.y.toFixed(1)}px, 0)`;let o=t.querySelector("b");o&&(o.textContent=String(r.n))}),t.node&&(t.node.style.opacity=e.node.o.toFixed(3),t.node.style.transform=`translate3d(${e.node.x.toFixed(1)}px, ${e.node.y.toFixed(1)}px, 0)`);let r=e.mandals.length?e.mandals.reduce((e,t)=>e+t.n,0):e.lights;t.counter&&(t.counter.textContent=String(r).padStart(2,"0"))},[]);(0,a.useEffect)(()=>{let t=e.current;return m.current={stories:Array.from(t.querySelectorAll("[data-story]")),navButtons:Array.from(t.querySelectorAll("[data-nav]")),hint:t.querySelector("[data-hint]"),doors:Array.from(t.querySelectorAll("[data-door]")),button:t.querySelector("[data-descent]"),offer:t.querySelector("[data-offer]"),fallback:t.querySelector("[data-fallback]"),dStories:Array.from(t.querySelectorAll("[data-dstory]")),dLayer:t.querySelector("[data-dlayer]"),jLayer:t.querySelector("[data-jlayer]"),alt:t.querySelector("[data-alt]"),altTape:t.querySelector("[data-alt-tape]"),reticle:t.querySelector("[data-reticle]"),india:t.querySelector("[data-india]"),ftag:t.querySelector("[data-ftag]"),node:t.querySelector("[data-node]"),mandals:Array.from(t.querySelectorAll("[data-mandal]")),ftagN:t.querySelector("[data-ftag-n]"),counter:t.querySelector("[data-counter]"),chapter:t.querySelector("[data-chapter]"),specimen:t.querySelector("[data-specimen]"),specimenLabel:t.querySelector("[data-specimen-label]"),hud:t.querySelector("[data-hud]")},()=>{m.current=null}},[A,k]),(0,a.useEffect)(()=>{let t=e.current?.querySelector("[data-hud]");if(!t)return;let a=()=>{"pending"!==(0,i.z)().loader&&t.classList.add("hud-in")};return a(),(0,i.G)(a)},[]),(0,a.useEffect)(()=>{let t=e.current,a=(0,s.d)(),r=n.U.lengthVh/(n.U.lengthVh+n.$.lengthVh),o=()=>{let e=t.getBoundingClientRect().top+window.scrollY,a=Math.max(1,t.offsetHeight*r),o=Math.max(1,t.offsetHeight-a-window.innerHeight);y.current={top:e,descentPx:a,journeyLen:o}},l=()=>{let{top:e,descentPx:t,journeyLen:r}=y.current,o=window.scrollY-e;x.current=ea(o/t),g.current=ea((o-t)/r),(0,i.Z)({scrollProgress:g.current});let l=m.current;if(l){let e=x.current;if(l.dLayer){let t=1-er(en[0]+.015,1,e);l.dLayer.style.opacity=t.toFixed(3),l.dLayer.style.visibility=t<.002?"hidden":"visible"}l.jLayer&&(l.jLayer.style.opacity=er(en[0],en[1],e).toFixed(3)),l.hud&&l.hud.style.setProperty("--hud",(1-er(.96,1,e)).toFixed(3))}A?P({sf:function(e,t){var a;let r,o=4*j((e-t.scrollStart)/(t.scrollEnd-t.scrollStart));if(o>=4)return 4;let l=Math.floor(o);return l+(a=t.hold,(r=j((o-l-a)/(1-t.hold-a)))*r*(3-2*r))}(g.current,n.s),enter:1,p:g.current}):a&&f.current?.requestDraw(),k?z({q:x.current,altitude:"",reticle:{x:0,y:0,o:0},india:{x:0,y:0,o:0},tag:{x:0,y:0,o:0,n:0},node:{x:0,y:0,o:0},mandals:[],lights:57*(x.current>.85)}):v.current?.requestDraw()};o(),l();let c=new ResizeObserver(()=>{o(),l()});return c.observe(t),window.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",l),()=>{c.disconnect(),window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}},[P,z,A,k]),(0,a.useEffect)(()=>{let e=p.current;if(!(0,s.e)())return void N(!0);let t=document.createElement("canvas");t.className="jr-canvas",e.appendChild(t);let a=!1,r=(0,s.u)();return et(t,{settings:{phone:r,dprCap:r?n.s.dprPhone:n.s.dprDesktop,dotSize:r?n.U.dotSizePhone:n.U.dotSize,mapOctaves:r?n.U.mapOctavesPhone:n.U.mapOctaves,target:n.U.target,mandals:n.U.mandals,timeline:n.U.timeline},reduced:(0,s.d)(),getProgress:()=>x.current,isActive:()=>x.current<1,onFrame:z,onLost:()=>N(!0)}).then(e=>{a?e?.destroy():e?v.current=e:N(!0)}).catch(()=>{a||N(!0)}),()=>{a=!0,v.current?.destroy(),v.current=null,t.remove()}},[z]),(0,a.useEffect)(()=>{let e=c.current,t=(0,s.d)(),a=()=>{(0,i.Z)({loadProgress:1}),F(!0)};if(!(0,s.e)())return void a();let r=document.createElement("canvas");r.className="jr-canvas",e.appendChild(r);let o=!1,l=!1,d=null;(0,i.Z)({loadProgress:0});let u=(0,s.u)();return b(r,{frameUrls:ei.map((e,t)=>(0,M.f)(`/pack/spin/s${String(t).padStart(2,"0")}.webp`)),angles:ei,dprCap:Math.min(2,u?n.s.dprPhone+.5:n.s.dprDesktop+.5),reduced:t,getProgress:()=>g.current,isActive:()=>x.current>en[0]-.01,onFrame:P,onLoad:e=>(0,i.Z)({loadProgress:e}),onLost:a,cancelled:()=>o}).then(e=>{if(o)return void e?.destroy();if(!e)return void a();f.current=e;let t=()=>{if(l)return;let t=(0,i.z)();"out"===t.loader?(l=!0,e.start(t.loaderOutAt)):"done"===t.loader&&(l=!0,e.start(performance.now()/1e3+.1))};t(),d=(0,i.G)(t)}).catch(()=>{o||a()}),()=>{o=!0,d?.(),f.current?.destroy(),f.current=null,r.remove()}},[P]),(0,a.useEffect)(()=>{let e=()=>window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-4,t=0,a=0,r=r=>{if(r.deltaY<=0||!e()){t=0;return}t+=r.deltaY,clearTimeout(a),a=window.setTimeout(()=>t=0,900),t>n.$.pastEndPixels&&(t=0,T())},o=0,l=!1,s=t=>{o=t.touches[0].clientY,l=e()},i=e=>{l&&o-e.touches[0].clientY>.5*n.$.pastEndPixels&&(l=!1,T())};return window.addEventListener("wheel",r,{passive:!0}),window.addEventListener("touchstart",s,{passive:!0}),window.addEventListener("touchmove",i,{passive:!0}),()=>{clearTimeout(a),window.removeEventListener("wheel",r),window.removeEventListener("touchstart",s),window.removeEventListener("touchmove",i)}},[T]);let C=n.U.stories.length+1;return(0,t.jsx)("section",{ref:e,className:"relative",style:{height:`${n.U.lengthVh+n.$.lengthVh}svh`},children:(0,t.jsxs)("div",{className:"jr-stage sticky top-0 h-svh overflow-hidden",style:{"--canopy":`url(${(0,M.f)("/photos/tex-canopy.jpg")})`},children:[(0,t.jsxs)("div",{"data-dlayer":!0,className:"absolute inset-0",children:[(0,t.jsx)("div",{ref:p,"aria-hidden":!0,className:"absolute inset-0"}),k&&(0,t.jsx)("div",{"aria-hidden":!0,className:"ds-fallback"}),(0,t.jsx)("div",{"aria-hidden":!0,className:"ds-scrim"}),n.U.mandals.map(e=>(0,t.jsxs)("div",{"data-mandal":!0,"aria-hidden":!0,className:"below"in e&&e.below?"hud-mandal is-below":"hud-mandal",style:{opacity:0},children:[(0,t.jsx)("span",{className:"mandal-name",children:e.name}),(0,t.jsxs)("span",{className:"mandal-n",children:[(0,t.jsx)("b",{children:"0"})," / ",e.count]})]},e.name)),(0,t.jsxs)("div",{"data-node":!0,"aria-hidden":!0,className:"hud-node",style:{opacity:0},children:[(0,t.jsx)("span",{className:"node-ring"}),(0,t.jsxs)("span",{className:"node-label",children:[(0,t.jsx)("b",{children:"57 farmers · One MOU"}),(0,t.jsx)("span",{children:"Araku Tribal Development and Sustainable Agriculture Society"})]})]}),(0,t.jsxs)("div",{"data-ftag":!0,"aria-hidden":!0,className:"hud-ftag",style:{opacity:0},children:[(0,t.jsx)("span",{className:"hud-k",children:"Farmer"})," ",(0,t.jsx)("b",{"data-ftag-n":!0,children:"01"})," / 57"]}),(0,t.jsx)("div",{"data-india":!0,"aria-hidden":!0,className:"hud-india",style:{opacity:0},children:"India"}),(0,t.jsxs)("div",{"data-reticle":!0,"aria-hidden":!0,className:"hud-reticle",style:{opacity:0},children:[(0,t.jsx)("span",{className:"ret-ring"}),(0,t.jsx)("span",{className:"ret-tick"}),(0,t.jsxs)("span",{className:"ret-label",children:[(0,t.jsx)("b",{children:n.U.target.label}),(0,t.jsx)("span",{children:n.U.coords}),(0,t.jsx)("span",{children:n.U.target.place})]})]}),n.U.stories.map((e,a)=>(0,t.jsxs)("div",{"data-dstory":!0,className:"ds-story",style:{"--o":+(0===a)},children:[(0,t.jsx)("div",{className:"n",children:e.n}),(0,t.jsx)(0===a?"h1":"h2",{children:e.h}),(0,t.jsx)("p",{children:e.p}),a===n.U.stories.length-1&&(0,t.jsxs)("div",{className:"ds-count","aria-hidden":!0,children:[(0,t.jsx)("b",{"data-counter":!0,children:"00"}),(0,t.jsx)("span",{children:"/ 57 · Farmers onboarded"})]}),(0,t.jsx)("div",{className:"rule"})]},e.nav))]}),(0,t.jsxs)("div",{"data-jlayer":!0,className:"absolute inset-0",style:{opacity:0},children:[(0,t.jsx)("div",{"aria-hidden":!0,className:"jr-plate"}),(0,t.jsx)("div",{"aria-hidden":!0,className:"jr-shadow"}),(0,t.jsx)("div",{ref:c,"aria-hidden":!0,className:"absolute inset-0"}),A&&(0,t.jsx)("div",{"aria-hidden":!0,"data-fallback":!0,"data-stage":"0",className:"jr-fallback"})]}),(0,t.jsx)("p",{className:"sr-only",children:n.j.sceneDescription}),(0,t.jsxs)("div",{"data-hud":!0,"aria-hidden":!0,className:"hud",children:[(0,t.jsx)("span",{className:"hud-corner tl"}),(0,t.jsx)("span",{className:"hud-corner tr"}),(0,t.jsx)("span",{className:"hud-corner bl"}),(0,t.jsx)("span",{className:"hud-corner br"}),(0,t.jsxs)("div",{className:"hud-chapter",children:[(0,t.jsx)("span",{className:"hud-dot"}),(0,t.jsx)("span",{"data-chapter":!0,children:`01 / ${String(C).padStart(2,"0")} \xb7 ${n.U.stories[0].nav}`})]}),(0,t.jsxs)("div",{className:"hud-alt",children:[(0,t.jsx)("span",{className:"hud-k",children:"View alt."}),(0,t.jsx)("b",{"data-alt":!0,children:"400 km"}),(0,t.jsx)("div",{className:"hud-tape",children:(0,t.jsx)("i",{"data-alt-tape":!0})})]}),(0,t.jsxs)("div",{className:"hud-coords",children:[(0,t.jsx)("span",{className:"hud-k",children:n.U.target.label}),(0,t.jsx)("span",{children:n.U.coords}),(0,t.jsx)("span",{children:n.U.target.place})]})]}),(0,t.jsxs)("div",{"data-specimen":!0,"aria-hidden":!0,className:"hud-specimen",style:{opacity:0},children:[(0,t.jsx)("span",{className:"br tl"}),(0,t.jsx)("span",{className:"br tr"}),(0,t.jsx)("span",{className:"br bl"}),(0,t.jsx)("span",{className:"br brr"}),(0,t.jsx)("span",{className:"spec-axis"}),(0,t.jsx)("span",{"data-specimen-label":!0,className:"spec-label",children:"Forest Whisper · Front"})]}),n.J.map(e=>(0,t.jsxs)("div",{"data-story":!0,className:"jr-story",children:[(0,t.jsx)("div",{className:"n",children:e.n}),(0,t.jsx)("h2",{children:e.h}),(0,t.jsx)("p",{children:e.p}),(0,t.jsx)("div",{className:"rule"})]},e.n)),(0,t.jsxs)("div",{className:"jr-end",children:[(0,t.jsxs)("div",{"data-offer":!0,className:"jr-offer js-reveal",children:[(0,t.jsx)("div",{className:"n",children:n.T.n}),(0,t.jsx)("h2",{children:n.T.h}),(0,t.jsx)("p",{children:n.T.p}),(0,t.jsx)("ul",{className:"jr-facts",children:n.T.facts.map(e=>(0,t.jsx)("li",{children:e},e))})]}),(0,t.jsxs)("div",{className:"jr-actions",children:[(0,t.jsx)(r.default,{href:n.r,"data-descent":!0,onClick:e=>{e.metaKey||e.ctrlKey||e.shiftKey||0!==e.button||(e.preventDefault(),T())},className:"descent-button js-reveal tracked",children:n.j.endButton}),(0,t.jsx)("a",{href:n.T.wholesale.href,"data-door":!0,className:"jr-wholesale js-reveal tracked",children:n.T.wholesale.label})]}),(0,t.jsx)("nav",{"aria-label":"Explore",children:(0,t.jsx)("ul",{className:"jr-doors",children:n.X.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(r.default,{href:e.href,"data-door":!0,className:"door js-reveal",children:(0,t.jsxs)(l.m.span,{className:"door-inner",initial:"rest",animate:"rest",whileHover:"hover",whileTap:"tap",children:[(0,t.jsx)(l.m.span,{"aria-hidden":!0,className:"door-pearl",variants:eo,transition:el}),(0,t.jsx)("span",{className:"door-label tracked",children:e.label})]})})},e.href))})})]}),(0,t.jsxs)("div",{"aria-hidden":!0,"data-hint":!0,className:"jr-hint",children:[(0,t.jsx)("span",{className:"scroll-line"}),(0,t.jsx)("span",{className:"tracked",children:n.j.scrollHint})]}),(0,t.jsx)("div",{className:"jr-nav tracked",children:[...n.U.stories.map(e=>e.nav),"Araku Pearl"].map((e,a)=>(0,t.jsx)("button",{type:"button","data-nav":!0,onClick:()=>(e=>{let{top:t,descentPx:a,journeyLen:r}=y.current,o=e<n.U.stories.length?t+(0===e?0:n.U.stories[e].at)*a:t+a+n.$.offerFadeEnd*r;(0,s.d)()?window.scrollTo(0,o):h.lenis?h.lenis.scrollTo(o,{duration:2.2}):window.scrollTo({top:o,behavior:"smooth"})})(a),className:0===a?"on":"",children:e},e))}),(0,t.jsxs)("div",{className:"absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 pb-5 pt-14 text-[11px] text-forest/60 md:px-10 md:pb-7",style:{background:"linear-gradient(to top, rgba(255,252,248,0.85), rgba(255,252,248,0))"},children:[(0,t.jsx)(u,{className:"text-forest/60 hover:text-forest"}),(0,t.jsx)(d,{})]})]})})}],19304)}]);