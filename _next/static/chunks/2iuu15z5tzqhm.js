(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,77334,e=>{"use strict";var a=e.i(43476),t=e.i(71645),r=e.i(75056),i=e.i(98903),o=e.i(38408),l=e.i(43257),n=e.i(48455),s=e.i(90072),u=e.i(40055),c=e.i(79082),m=e.i(46554),p=e.i(8838),d=e.i(68557),f=e.i(76877);let v=`
  attribute vec3 aPearl;
  attribute vec3 aBean;
  attribute vec3 aBeanN;
  attribute float aBeanScale;
  attribute vec4 aRand;
  attribute vec2 aHover;
  attribute vec3 aStream;
  uniform float uTime, uMorph, uTileR, uTileH, uFacet, uStagger, uSwirl, uTumble;
  uniform float uStreams, uStreamR, uStreamW, uStreamTwist, uStreamSag, uStreamFlutter;
  uniform float uBreath, uRipple, uRippleAmp, uHoverLift, uHoverPush, uHoverTilt, uScatter;
  uniform vec3 uRippleDir, uCursor, uCream, uRoastA, uRoastB, uGold;
  varying vec3 vTileColor;
  varying float vGloss;
  varying float vGlint;
  varying float vFlare;
  varying float vRoast;
  varying float vLift;
  varying vec3 vShapeNormal;

  mat3 rotAxis(vec3 a, float t) {
    float c = cos(t), s = sin(t), k = 1.0 - c;
    return mat3(
      c + a.x * a.x * k, a.y * a.x * k + a.z * s, a.z * a.x * k - a.y * s,
      a.x * a.y * k - a.z * s, c + a.y * a.y * k, a.z * a.y * k + a.x * s,
      a.x * a.z * k + a.y * s, a.y * a.z * k - a.x * s, c + a.z * a.z * k
    );
  }
`,h=`
  // Where this tile is in the morph (0 = pearl, 1 = bean), staggered like a pour.
  float mt = clamp((uMorph - aRand.w * uStagger) / (1.0 - uStagger), 0.0, 1.0);
  float e = mt * mt * (3.0 - 2.0 * mt);
  float arc = sin(3.14159265 * e); // 0 at both ends, 1 mid-flight

  vec3 dir = normalize(aPearl);

  // The ribbon this tile pours along: a curve that winds around the object from
  // top to bottom, hangs a little like falling liquid, and turns as you scroll.
  float along = aStream.y;
  float th = aStream.x + uStreamTwist * (along - 0.5) + uSwirl * uMorph
           + aStream.z * uStreamW * 3.14159265 / uStreams;
  float bell = sin(3.14159265 * along);
  float r = uStreamR * (0.55 + 0.45 * bell) + (aRand.y - 0.5) * 0.12 * uStreamW;
  float y = mix(1.25, -1.25, along) - uStreamSag * bell
          + uStreamFlutter * sin(along * 17.0 - uMorph * 24.0 + aStream.x * 3.0);
  vec3 mid = vec3(cos(th) * r, y, sin(th) * r);

  // Flight path: a smooth curve from the pearl, through the ribbon, onto the bean.
  vec3 ctrl = 2.0 * mid - 0.5 * (aPearl + aBean);
  float ie = 1.0 - e;
  vec3 base = ie * ie * aPearl + 2.0 * e * ie * ctrl + e * e * aBean;
  // In flight the tiles lie along the ribbon, facing out from it.
  vec3 flow = normalize(vec3(mid.x, 0.0, mid.z) + 1e-4);
  vec3 n = normalize(mix(normalize(mix(dir, aBeanN, e)), flow, arc));

  // Idle life: a slow shimmer of breathing, and a ripple every few seconds.
  float breath = sin(dot(dir, vec3(3.1, 2.3, 1.7)) * 3.0 + uTime * 0.8)
               * sin(dot(dir, vec3(-1.3, 2.9, 2.1)) * 2.7 + uTime * 0.55);
  float ang = acos(clamp(dot(dir, uRippleDir), -1.0, 1.0));
  float ripple = exp(-pow((ang - uRipple) / 0.22, 2.0)) * uRippleAmp;
  float rest = breath * uBreath + ripple;

  // The cursor: lift, slide away, tilt; a fast sweep scatters.
  vec3 toTile = base - uCursor;
  vec3 away = toTile - n * dot(toTile, n);
  float awayLen = length(away);
  away = awayLen > 1e-4 ? away / awayLen : vec3(0.0);
  vec3 scatterDir = normalize(aRand.xyz * 2.0 - 1.0 + n * 0.6);
  float lift = aHover.x;
  float scat = aHover.y;
  vec3 offset = n * (rest + lift * uHoverLift + scat * uHoverLift * 0.6)
              + away * lift * uHoverPush
              + scatterDir * scat * uScatter;

  // Orientation: the tile's up is the surface normal, tilted by the cursor, tumbling in flight.
  vec3 up = normalize(n + away * lift * uHoverTilt + scatterDir * scat * uHoverTilt);
  mat3 tumble = rotAxis(normalize(aRand.zxy * 2.0 - 1.0 + 0.001), uTumble * arc * 6.2831853 * (aRand.y - 0.5) * 2.0);
  up = tumble * up;
  vec3 helper = abs(up.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
  vec3 tx = normalize(cross(helper, up));
  vec3 tz = cross(up, tx);
  float spin = aRand.x * 6.2831853;
  vec3 sx = tx * cos(spin) + tz * sin(spin);
  vec3 sz = cross(up, sx);

  float size = uTileR * mix(1.0, aBeanScale, e) * (0.9 + 0.2 * aRand.z) * (1.0 - 0.12 * arc);
  vec3 tilePos = base + offset + sx * position.x * size + up * position.y * uTileH + sz * position.z * size;

  vec3 domeNormal = normalize(sx * normal.x / size + up * normal.y / uTileH + sz * normal.z / size);
  vec3 objectNormal = normalize(mix(up, domeNormal, uFacet));

  // Colour: cream pearl to roasted brown, with a gold flare mid-flight.
  float roast = smoothstep(0.2, 0.85, e);
  vec3 pearlCol = uCream * (0.95 + 0.1 * aRand.z);
  vec3 beanCol = mix(uRoastA, uRoastB, aRand.z);
  vec3 col = mix(pearlCol, beanCol, roast);
  vFlare = arc * arc;
  vTileColor = col;
  vRoast = roast;
  vLift = clamp((lift + scat) * 2.5, 0.0, 1.0);
  vGloss = (aRand.y - 0.5) * 0.14 + roast * 0.18;
  vGlint = step(0.95, aRand.x) * smoothstep(0.92, 1.0, e);
  vShapeNormal = normalize(normalMatrix * n);
`,g=`
  uniform float uTime, uGoldFlare, uInnerGlow;
  uniform vec3 uGold, uRose, uSage, uCream;
  varying vec3 vTileColor;
  varying float vGloss;
  varying float vGlint;
  varying float vFlare;
  varying float vRoast;
  varying float vLift;
  varying vec3 vShapeNormal;
`;function y(e,a,t){let r=Math.min(1,Math.max(0,(e-a)/(t-a)));return r*r*(3-2*r)}function b({count:e,detail:r,light:l,reduced:n,reducedShape:m=0}){let x=(0,t.useRef)(null),w=(0,t.useRef)(null),A=(0,t.useRef)(null),M=(0,t.useRef)(null),S=(0,t.useRef)(null),R=(0,t.useMemo)(()=>new s.Zg({transparent:!0,blending:s.tq,depthWrite:!1,uniforms:{uGlow:{value:u.A.coreGlow},uHeart:{value:new s.Es(u.M.cream).lerp(new s.Es(u.M.gold),.25)},uRim:{value:new s.Es(u.M.gold).lerp(new s.Es(u.M.deepForest),.45)}},vertexShader:`
      varying float vFacing;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vFacing = clamp(dot(normalize(normalMatrix * normal), normalize(-mv.xyz)), 0.0, 1.0);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uGlow;
      uniform vec3 uHeart, uRim;
      varying float vFacing;
      void main() {
        vec3 col = mix(uRim, uHeart, pow(vFacing, 1.4));
        gl_FragColor = vec4(col * uGlow, 1.0);
      }`}),[]),z=(0,t.useMemo)(()=>(0,d.R)(e),[e]),T=(0,o.f)(e=>e.invalidate);(0,t.useEffect)(()=>T(),[m,T]);let C=(0,t.useMemo)(()=>{let a=new s.Gu(1,8,3,0,2*Math.PI,0,Math.PI/2);a.setAttribute("aPearl",new s.VZ(z.pearl,3)),a.setAttribute("aBean",new s.VZ(z.bean,3)),a.setAttribute("aBeanN",new s.VZ(z.beanNormal,3)),a.setAttribute("aBeanScale",new s.VZ(z.beanScale,1)),a.setAttribute("aRand",new s.VZ(z.rand,4)),a.setAttribute("aStream",new s.VZ(z.stream,3));let t=new s.VZ(new Float32Array(2*e),2);return t.setUsage(s.DT),a.setAttribute("aHover",t),a},[z,e]),F=(0,t.useMemo)(()=>{var e;let a=new s.Ox({color:"#ffffff",roughness:.34,metalness:0,clearcoat:.7,clearcoatRoughness:.42,sheen:.5,sheenColor:new s.Es(u.M.sheenRose),sheenRoughness:.55,side:s.Vs});return a.userData.uniforms={uTime:{value:0},uMorph:{value:0},uTileR:{value:.03},uTileH:{value:u.A.tileThickness},uFacet:{value:u.A.facet},uStagger:{value:u.A.stagger},uSwirl:{value:u.A.swirl},uTumble:{value:u.A.tumble},uStreams:{value:u.A.streams},uStreamR:{value:u.A.streamRadius},uStreamW:{value:u.A.streamWidth},uStreamTwist:{value:u.A.streamTwist},uStreamSag:{value:u.A.streamSag},uStreamFlutter:{value:u.A.streamFlutter},uInnerGlow:{value:u.A.innerGlow},uBreath:{value:u.A.breathing},uRippleDir:{value:new s.cE(0,1,0)},uRipple:{value:10},uRippleAmp:{value:u.A.rippleHeight},uCursor:{value:new s.cE(0,0,10)},uHoverLift:{value:u.A.hoverLift},uHoverPush:{value:u.A.hoverPush},uHoverTilt:{value:u.A.hoverTilt},uScatter:{value:u.A.scatter},uGoldFlare:{value:u.A.goldFlare},uCream:{value:new s.Es(u.M.pearlCream)},uRoastA:{value:new s.Es(u.M.roastDark)},uRoastB:{value:new s.Es(u.M.roastLight)},uGold:{value:new s.Es(u.M.gold)},uRose:{value:new s.Es(u.M.sheenRose)},uSage:{value:new s.Es(u.M.sheenSage)}},e=a.userData.uniforms,a.onBeforeCompile=a=>{Object.assign(a.uniforms,e),a.vertexShader=v+a.vertexShader.replace("#include <beginnormal_vertex>",h).replace("#include <begin_vertex>","vec3 transformed = tilePos;"),a.fragmentShader=g+a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb *= vTileColor;
        diffuseColor.rgb = mix(diffuseColor.rgb, uGold, vGlint);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = clamp(roughnessFactor + vGloss - vGlint * 0.35, 0.05, 1.0);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
        metalnessFactor = max(metalnessFactor, vGlint * 0.85);`).replace("#include <opaque_fragment>",`{
          // Pearl only: faint rose, sage and gold sheen at the edge, and a soft inner depth.
          vec3 sn = normalize(vShapeNormal);
          float facing = clamp(dot(sn, normalize(vViewPosition)), 0.0, 1.0);
          float edge = pow(1.0 - facing, 2.2);
          float hue = atan(sn.y, sn.x);
          vec3 tint = mix(uRose, uSage, 0.5 + 0.5 * sin(hue * 2.0 + uTime * 0.07));
          tint = mix(tint, uGold, 0.35 + 0.25 * sin(hue * 3.0 + 1.3));
          float pearlness = 1.0 - vRoast;
          outgoingLight = mix(outgoingLight, outgoingLight + tint * 0.8, edge * pearlness);
          outgoingLight += uCream * pow(facing, 2.0) * 0.06 * pearlness;
          // Inner light: a soft warm glow from within, brightest at the heart and
          // fading toward the rim, with a faint shift of colour like nacre.
          vec3 inner = mix(mix(uCream, uGold, 0.3), tint, 0.25);
          float core = 0.3 + 0.7 * pow(facing, 1.6);
          outgoingLight += inner * core * uInnerGlow * pearlness;
          // Lifted tiles catch the light from inside, so a disturbed patch glows rather than greys.
          outgoingLight += inner * vLift * 0.45 * pearlness;
          outgoingLight += uGold * vFlare * uGoldFlare * 0.6;
        }
        #include <opaque_fragment>`)},a.customProgramCacheKey=()=>"lab-tiles-v3",a},[]),j=(0,t.useMemo)(()=>(0,f.S)(F.userData.uniforms.uCursor.value,l?u.A.pearlExposureLight:u.A.pearlExposure),[F,l]),G=(0,t.useMemo)(()=>(0,f.N)(F.userData.uniforms.uCursor.value),[F]),P=(0,t.useMemo)(()=>(0,d.q)(r,Math.round(.66*r)),[r]),E=(0,t.useMemo)(()=>(0,d.h)(r,Math.round(.66*r)),[r]);(0,t.useEffect)(()=>()=>{C.dispose(),F.dispose(),R.dispose(),j.dispose(),G.dispose(),P.dispose(),E.dispose()},[C,F,R,j,G,P,E]);let H=(0,t.useRef)(null);return(0,i.f)((a,t)=>{H.current&&H.current.springV.length===2*e||(H.current={springV:new Float32Array(2*e),raycaster:new s.zx,ndc:new s.wq,inverse:new s.nd,ray:new s.Wk,hit:new s.cE,radii:new s.cE,o:new s.cE,d:new s.cE,rippleRandom:(0,c.f)(99),rippleIndex:-1,activity:0,disturb:0,settled:!0,smoothP:0});let r=H.current,i=w.current.material.userData.uniforms,o=Math.min(t,1/30),l=a.clock.elapsedTime;r.smoothP+=(p.v.p-r.smoothP)*(1-Math.pow(.88,60*t));let f=n?p.v.p:r.smoothP,v=n?m:y(f,u.A.morphStart,u.A.morphEnd),h=n?m:v*v*(3-2*v);i.uMorph.value=v,i.uTileR.value=z.tileRadius,i.uTime.value=n?0:l,i.uBreath.value=n?0:u.A.breathing;let g=Math.floor(l/u.A.rippleEvery);if(g!==r.rippleIndex){r.rippleIndex=g;let e=r.rippleRandom;i.uRippleDir.value.set(2*e()-1,2*e()-1,2*e()-1).normalize()}i.uRipple.value=n?10:l%u.A.rippleEvery*1.5-.3;let b=x.current,R=y(f,u.A.morphEnd,1),T=n?0:.9*Math.sin(l*u.A.rotationSpeed/.9);b.rotation.set(.28*h,T*(1-.6*h)+h*(-.45+.7*R),-.42*h);let C=w.current.material;C.sheen=.5-.38*h,C.clearcoat=.7-.45*h,C.roughness=.42-.02*h;let F=1-y(v,.2,.9);A.current.visible=F>.001,A.current.scale.set(.975,.975,.975).lerp(r.d.set(.8*u.A.bean.width,.8*u.A.bean.length,.6*u.A.bean.depth),h),A.current.material.uniforms.uGlow.value=u.A.coreGlow*F;let j=M.current.material.userData.uniforms,G=n?1-m:1-y(v,0,u.A.pearlFadeOut);j.uTime.value=i.uTime.value,j.uFade.value=G,j.uDisturb.value=n?0:r.disturb,M.current.visible=G>.001;let P=S.current.material.userData.uniforms,E=n?m:y(f,u.A.morphEnd-.6*u.A.beanFadeIn,u.A.morphEnd+.4*u.A.beanFadeIn);P.uFade.value=E,P.uDisturb.value=n?0:r.disturb,S.current.visible=E>.001;let D=!n&&(v>0&&E<1||r.disturb>.001);w.current.visible=D,A.current.visible=A.current.visible&&D;let L=a.camera,k=1.3/(Math.tan(u.A.fov/2*Math.PI/180)*(a.size.width/a.size.height)),B=u.A.cameraStartZ+(u.A.cameraEndZ-u.A.cameraStartZ)*y(f,0,u.A.morphStart);if(L.position.z=Math.max(B,k*(B/u.A.cameraStartZ)),L.lookAt(0,0,0),n)return;let I=performance.now()-p.H.lastMove,V=p.H.lastMove>0&&I<90;r.activity+=(!!V-r.activity)*(1-Math.pow(V?.6:.9,60*t)),V||(p.H.speed*=Math.pow(.9,60*t));let N=Math.min(1,p.H.speed/u.A.fastSweep),Z=!1;if(r.activity>.01){b.updateMatrixWorld(),r.ndc.set(p.H.x,p.H.y),r.raycaster.setFromCamera(r.ndc,L),r.inverse.copy(b.matrixWorld).invert(),r.ray.copy(r.raycaster.ray).applyMatrix4(r.inverse),r.radii.set(1,1,1).lerp(r.d.set(u.A.bean.width,u.A.bean.length,.86*u.A.bean.depth),h),r.o.copy(r.ray.origin).divide(r.radii),r.d.copy(r.ray.direction).divide(r.radii);let e=r.d.dot(r.d),a=2*r.o.dot(r.d),t=a*a-4*e*(r.o.dot(r.o)-1);if(t>0){let o=(-a-Math.sqrt(t))/(2*e);r.hit.copy(r.ray.origin).addScaledVector(r.ray.direction,o),i.uCursor.value.copy(r.hit),Z=!0}}if(!Z&&r.settled){r.disturb=0;return}let _=w.current.geometry.attributes.aHover,W=_.array,O=r.springV,q=u.A.hoverRadius*u.A.hoverRadius,U=r.activity*(.35+.65*N),K=r.activity*N*N,$=r.hit.x,J=r.hit.y,Q=r.hit.z,X=0,Y=0;for(let a=0;a<e;a++){let e=0,t=0;if(Z){let r=(0,d.c)(v,z.delay[a]),i=3*a,o=(z.pearl[i]+(z.bean[i]-z.pearl[i])*r-$)**2+(z.pearl[i+1]+(z.bean[i+1]-z.pearl[i+1])*r-J)**2+(z.pearl[i+2]+(z.bean[i+2]-z.pearl[i+2])*r-Q)**2;if(o<q){let a=1-o/q;e=a*a*U,t=a*a*K}}let r=2*a;O[r]+=(u.A.springStiffness*(e-W[r])-u.A.springDamping*O[r])*o,W[r]+=O[r]*o,O[r+1]+=(u.A.springStiffness*(t-W[r+1])-u.A.springDamping*O[r+1])*o,W[r+1]+=O[r+1]*o,Y=Math.max(Y,W[r]+W[r+1]),X+=Math.abs(W[r])+Math.abs(W[r+1])+Math.abs(O[r])+Math.abs(O[r+1])}_.needsUpdate=!0,r.disturb=Math.min(1,4*Y),r.settled=!Z&&X<.001,r.settled&&(W.fill(0),O.fill(0))}),(0,a.jsxs)("group",{ref:x,children:[(0,a.jsx)("instancedMesh",{ref:w,args:[C,F,e],frustumCulled:!1,raycast:()=>null}),(0,a.jsx)("mesh",{ref:A,material:R,raycast:()=>null,renderOrder:1,children:(0,a.jsx)("sphereGeometry",{args:[1,48,32]})}),(0,a.jsx)("mesh",{ref:M,geometry:P,material:j,raycast:()=>null,renderOrder:2}),(0,a.jsx)("mesh",{ref:S,geometry:E,material:G,raycast:()=>null,renderOrder:2})]})}function x(){let e=(0,t.useRef)({frames:0,since:0});return(0,i.f)(()=>{let a=e.current,t=performance.now();if(a.since||(a.since=t),a.frames++,t-a.since>=500){let e=document.getElementById("lab-fps");e&&(e.textContent=`${Math.round(1e3*a.frames/(t-a.since))} FPS`),a.frames=0,a.since=t}}),null}function w({count:e,light:r}){let o=(0,t.useRef)(null),l=(0,t.useMemo)(()=>(0,m.U)(),[]),n=(0,t.useMemo)(()=>{let a=(0,c.f)(5),t=new Float32Array(3*e);for(let r=0;r<e;r++)t.set([(2*a()-1)*3.2,(2*a()-1)*2.2,(2*a()-1)*1.8-.6],3*r);let r=new s.ld;return r.setAttribute("position",new s.f5(t,3)),r},[e]);return(0,t.useEffect)(()=>()=>{n.dispose(),l.dispose()},[n,l]),(0,i.f)((a,t)=>{let r=o.current.geometry.attributes.position,i=r.array,l=a.clock.elapsedTime;for(let a=0;a<e;a++){let e=i[3*a+1]+Math.min(t,.1)*(.05+a%5*.012);e>2.2&&(e=-2.2),i[3*a+1]=e,i[3*a]+=8e-4*Math.sin(.25*l+a)}r.needsUpdate=!0}),(0,a.jsx)("points",{ref:o,geometry:n,children:(0,a.jsx)("pointsMaterial",{map:l,color:u.M.gold,size:.035,sizeAttenuation:!0,transparent:!0,opacity:r?.45:.7,depthWrite:!1,blending:r?s.F_:s.tq,toneMapped:!1})})}function A(){let e=(0,t.useMemo)(()=>(0,m.U)(),[]);return(0,t.useEffect)(()=>()=>e.dispose(),[e]),(0,a.jsxs)("mesh",{position:[0,-1.28,0],"rotation-x":-Math.PI/2,scale:[2.6,2.6,1],raycast:()=>null,children:[(0,a.jsx)("planeGeometry",{}),(0,a.jsx)("meshBasicMaterial",{map:e,color:u.M.maroon,transparent:!0,opacity:u.A.shadowOpacity,depthWrite:!1,toneMapped:!1})]})}function M({onReady:e}){let{gl:a,scene:r,camera:i,invalidate:l}=(0,o.f)();return(0,t.useEffect)(()=>{let t=!0;return a.compileAsync(r,i).catch(()=>{}).finally(()=>{t&&(e(),l())}),()=>{t=!1}},[a,r,i,l,e]),null}e.s(["default",0,function({phone:e,reduced:i,reducedShape:o,theme:c}){let m="light"===c,[p,d]=(0,t.useState)(!1),f=(0,t.useCallback)(()=>d(!0),[]),v=e?u.A.tilesPhone:u.A.tilesDesktop;return(0,a.jsxs)(r.f,{"aria-hidden":!0,className:"!absolute inset-0",dpr:[1,e?u.A.dprPhone:u.A.dprDesktop],frameloop:p?i?"demand":"always":"never",gl:{antialias:!0,alpha:!0,powerPreference:"high-performance"},camera:{fov:u.A.fov,position:[0,0,u.A.cameraStartZ],near:.1,far:30},onCreated:({gl:e})=>{e.toneMapping=s.x8,e.setClearColor(0,0)},children:[(0,a.jsx)("ambientLight",{intensity:.22,color:u.M.cream}),(0,a.jsx)("directionalLight",{position:[.6,3,-4],intensity:1.6,color:u.M.gold}),(0,a.jsx)("directionalLight",{position:[-3,1.5,4],intensity:1.7,color:u.M.cream}),(0,a.jsxs)(l.f,{resolution:e?64:128,frames:1,children:[(0,a.jsx)(n.f,{form:"circle",color:u.M.cream,intensity:2.2,position:[-3,2,3],scale:5}),(0,a.jsx)(n.f,{form:"ring",color:u.M.gold,intensity:1.2,position:[0,3.5,-3],scale:4}),(0,a.jsx)(n.f,{form:"circle",color:u.M.gold,intensity:.5,position:[3.5,-.5,1.5],scale:3}),(0,a.jsx)(n.f,{form:"rect",color:u.M.cream,intensity:.12,position:[0,.5,6],scale:[9,5,1]}),(0,a.jsx)(n.f,{form:"rect",color:u.M.pearlCream,intensity:.2,position:[0,-3,1],"rotation-x":-Math.PI/2,scale:[6,6,1]}),(0,a.jsx)(n.f,{form:"rect",color:u.M.cream,intensity:1.4,position:[3.2,.6,2.4],"rotation-y":-.9,scale:[.9,3.2,1]}),(0,a.jsx)(n.f,{form:"rect",color:u.M.maroon,intensity:.5,position:[0,-3,0],"rotation-x":Math.PI/2,scale:[8,8,1]})]}),m&&(0,a.jsx)(A,{}),(0,a.jsx)(b,{count:v,detail:e?u.A.meshDetailPhone:u.A.meshDetailDesktop,light:m,reduced:i,reducedShape:o}),!i&&(0,a.jsx)(w,{count:e?u.A.motesPhone:u.A.motesDesktop,light:m}),!i&&(0,a.jsx)(x,{}),(0,a.jsx)(M,{onReady:f})]})}],77334)},15818,function(e){e.n(e.i(77334))}]);