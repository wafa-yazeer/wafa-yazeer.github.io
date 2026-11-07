(function(){
var $=function(s){return document.querySelector(s)},reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
function cl(v,a,b){return Math.max(a,Math.min(b,v))}
function lerp(a,b,t){return a+(b-a)*t}
function ease(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}



/* reveal */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});

/* cursor ring */
var cu=document.createElement('div');cu.className='cur';document.body.appendChild(cu);
var cx=0,cy=0,mx=null,my=null,onlink=false;
addEventListener('pointermove',function(e){mx=e.clientX;my=e.clientY;cu.classList.add('on');onlink=!!(e.target.closest&&e.target.closest('a,button'))},{passive:true});
addEventListener('touchstart',function(e){mx=e.touches[0].clientX;my=e.touches[0].clientY},{passive:true});
addEventListener('touchmove',function(e){mx=e.touches[0].clientX;my=e.touches[0].clientY},{passive:true});
var mb=$('#mb'),mn=$('#menu');mb.onclick=function(){mn.classList.toggle('open')};mn.addEventListener('click',function(e){if(e.target.tagName==='A')mn.classList.remove('open')});
document.addEventListener('mouseleave',function(){cu.classList.remove('on')});

/* projects: VHS shelf */
var F=[
["E-Commerce REST API","Java","Java · Spring Boot · MySQL","REST API","api","#1f3fb0","#ece3cf","#1f3fb0","Full CRUD for categories, products and orders, with a layered architecture, validation and a global exception handler. Tested with Postman and JUnit."],
["Hotel Reservation System","Java","Java · MySQL · JasperReports","Desktop app","door","#ece3cf","#141414","#d8452b","Desktop app for customers, rooms and reservations, built with MVC and DAO patterns, with printable business reports."],
["E-Plus Academy","Web","PHP · MySQL · Chart.js","Web system","web","#141414","#ece3cf","#1f3fb0","Tuition institute system: registration, enrollment with discounts, payments, role-based access, QR attendance and analytics dashboards."],
["Library Reservation System","Web","PHP · MySQL · Bootstrap","Web system","books","#1f6b4a","#ece3cf","#1f6b4a","Student and admin portals with book management, image uploads, copy tracking and a live admin dashboard."],
["Exam Invigilation Robot","AI","Python · OpenCV · YOLOv8 · Arduino","AI prototype","eye","#d8452b","#ece3cf","#d8452b","Four-member HND prototype: a mobile robot that flags possible misconduct and alerts an invigilator. Built to support people, not replace them."],
["EuroCall Network Design","Network","Cisco Packet Tracer","Network design","net","#ece3cf","#141414","#1f3fb0","Simulated call-centre network with VLANs, routers, switches, IP addressing and subnetting."]];
var CATS=['All','Java','Web','AI','Network'],EA='cubic-bezier(.2,.8,.2,1)',SF='Newsreader,Georgia,serif',SS='Inter Tight,Arial,sans-serif';
function art(k,a){var I='#141414',C='#ece3cf',s='<rect width="426" height="330" fill="'+a+'"/>';
 if(k=='api')s+='<text x="213" y="268" text-anchor="middle" font-family="'+SF+'" font-size="290" fill="'+C+'">{ }</text><path d="M150 100H276M172 150H254M150 200H236" stroke="'+I+'" stroke-width="9"/>';
 if(k=='door')s+='<rect x="130" y="34" width="166" height="272" fill="'+I+'"/><rect x="150" y="54" width="126" height="232" fill="'+C+'"/><circle cx="256" cy="176" r="12" fill="'+I+'"/><rect x="96" y="306" width="234" height="10" fill="'+I+'"/>';
 if(k=='web')s+='<rect x="50" y="50" width="326" height="230" fill="'+C+'" stroke="'+I+'" stroke-width="6"/><path d="M50 92H376" stroke="'+I+'" stroke-width="6"/><circle cx="76" cy="71" r="7" fill="'+I+'"/><circle cx="100" cy="71" r="7" fill="'+I+'"/><rect x="80" y="125" width="110" height="120" fill="'+I+'"/><path d="M215 135H340M215 168H320M215 201H340M215 234H300" stroke="'+I+'" stroke-width="8"/>';
 if(k=='books')s+='<rect x="50" y="236" width="326" height="52" fill="'+I+'"/><rect x="82" y="174" width="262" height="52" fill="'+C+'" stroke="'+I+'" stroke-width="6"/><rect x="38" y="112" width="300" height="52" fill="'+I+'"/><rect x="96" y="50" width="226" height="52" fill="'+C+'" stroke="'+I+'" stroke-width="6"/>';
 if(k=='eye')s+='<circle cx="213" cy="165" r="120" fill="none" stroke="'+C+'" stroke-width="8"/><circle cx="213" cy="165" r="78" fill="'+I+'"/><circle cx="213" cy="165" r="34" fill="'+C+'"/><path d="M213 20V70M213 260V310M68 165H118M308 165H358" stroke="'+C+'" stroke-width="8"/>';
 if(k=='net')s+='<path d="M80 80L213 165L346 80M213 165L110 262M213 165L316 262M80 80L110 262M346 80L316 262" stroke="'+I+'" stroke-width="6" fill="none"/>'+[[80,80],[346,80],[213,165],[110,262],[316,262]].map(function(p){return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="26" fill="'+C+'" stroke="'+I+'" stroke-width="6"/>'}).join('');
 return s}
function cover(f,mk){var I='#141414',w=f[0].toUpperCase().split(' '),y=104,tt='',st=f[2].replace(/ · /g,' / ').toUpperCase();
 w.forEach(function(x){var fs=Math.max(40,Math.min(150,410/(x.length*.72)));tt+='<text x="237" y="'+(y+fs*.78)+'" text-anchor="middle" font-family="'+SF+'" font-size="'+fs+'" fill="'+I+'">'+x+'</text>';y+=fs*.88});
 var g='<rect width="474" height="900" fill="#ece3cf"/><rect x="14" y="14" width="446" height="872" fill="none" stroke="'+I+'" stroke-width="3"/><text x="237" y="66" text-anchor="middle" font-family="'+SS+'" font-weight="600" font-size="19" letter-spacing="4" fill="'+I+'">A WAFA YAZEER PROJECT</text>'+tt+'<svg x="24" y="470" width="426" height="330" viewBox="0 0 426 330">'+art(f[4],f[7])+'</svg><text x="28" y="848" font-family="'+SS+'" font-weight="600" font-size="13" letter-spacing="1.2" fill="'+I+'">'+st+'</text><rect x="364" y="826" width="82" height="32" fill="none" stroke="'+I+'" stroke-width="2.5"/><text x="405" y="847" text-anchor="middle" font-family="'+SS+'" font-weight="600" font-size="14" letter-spacing="2" fill="'+I+'">PROJECT</text>';
 var h='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 474 900" preserveAspectRatio="none">';
 if(mk){var bl=[[150,330,0],[340,600,120],[250,120,220],[90,760,300],[400,250,360],[260,860,420],[230,470,180]];
  h+='<defs><filter id="ik" x="-30%" y="-30%" width="160%" height="160%"><feTurbulence type="fractalNoise" baseFrequency=".011" numOctaves="3" seed="7" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="120" xChannelSelector="R" yChannelSelector="G"/></filter><mask id="ink" maskUnits="userSpaceOnUse" x="-200" y="-200" width="874" height="1300"><g filter="url(#ik)" fill="#fff">'+bl.map(function(b){return '<circle class="b" cx="'+b[0]+'" cy="'+b[1]+'" r="0" data-dl="'+b[2]+'"/>'}).join('')+'</g></mask></defs><g mask="url(#ink)">'+g+'</g>'}
 else h+=g;
 return h+'</svg>'}
function spine(f){var bg=f[5],fg=f[6],t=f[0].toUpperCase(),fs=Math.min(50,480/(t.length*.74));
 return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142 840" preserveAspectRatio="none"><rect width="142" height="840" fill="'+bg+'"/><rect x="8" y="8" width="126" height="824" fill="none" stroke="'+fg+'" stroke-opacity=".55" stroke-width="2"/><svg x="21" y="30" width="100" height="77" viewBox="0 0 426 330">'+art(f[4],f[7])+'</svg><text transform="translate('+(71-fs*.33)+' 150) rotate(90)" font-family="'+SF+'" font-size="'+fs+'" fill="'+fg+'">'+t+'</text><text transform="translate(77 700) rotate(90)" font-family="'+SS+'" font-weight="600" font-size="17" letter-spacing="5" fill="'+fg+'">WAFA</text><rect x="36" y="770" width="70" height="26" fill="none" stroke="'+fg+'" stroke-width="2"/><text x="71" y="788" text-anchor="middle" font-family="'+SS+'" font-weight="600" font-size="13" letter-spacing="1.5" fill="'+fg+'">PROJECT</text></svg>'}

var sec=$('#projects'),sg=$('#sg'),shEl=$('#shelf'),ind=$('#ind'),dec=$('#dec'),playEl=$('#play'),dtl=$('#dt'),dpv=$('#dpv'),capT=$('#ct'),capS=$('#cs'),capY=$('#cy');
var N=F.length,V=N*5,HV=V/2,tapes=[],lifts=[],wsp=0,dd=0,gap=0,Hh=0,W=innerWidth,s=2*N,T=s,act=-1,hover=-1,tiltX=0,tiltY=0,isOpen=false,closing=false,drag=null,dragged=false,wt,btns=[];
function dims(){W=innerWidth;var m=W<=767;Hh=m?Math.min(W*.6,innerHeight*.4):Math.min(innerHeight*.46,W*.31);wsp=Hh*142/840;dd=Hh*474/900;gap=Hh*.03;
 sec.style.setProperty('--H',Hh+'px');sec.style.setProperty('--ws',wsp+'px');sec.style.setProperty('--cw',dd+'px');tabInd()}
function tabInd(){var f=F[act<0?0:act],b=btns[CATS.indexOf(f[1])];if(b){ind.style.width=b.offsetWidth+'px';ind.style.transform='translateX('+b.offsetLeft+'px)';btns.forEach(function(x){x.classList.toggle('on',x===b)})}}
CATS.forEach(function(c,i){var b=document.createElement('button');b.type='button';b.className='lbl';b.textContent=c;b.onclick=function(){var tg=i===0?0:F.findIndex(function(f){return f[1]===c});T=Math.round(T)+(((tg-act+N+N/2)%N)-N/2)};dec.appendChild(b);btns.push(b)});
for(var v=0;v<V;v++){var f=F[v%N],tp=document.createElement('div');tp.className='tape';tp.innerHTML='<div class="f sp">'+spine(f)+'</div><div class="f cv">'+cover(f,0)+'</div>';sg.appendChild(tp);tapes.push(tp);lifts.push(0);
 (function(v,t){t.addEventListener('pointerenter',function(){hover=v});t.addEventListener('pointerleave',function(){if(hover===v)hover=-1})})(v,tp)}
function rel(v){var r=((v-s)%V+V)%V;return r>HV?r-V:r}
function sm(x){return x*x*(3-2*x)}
function Fx(r){var b=Math.abs(r)<1?(r+Math.sin(Math.PI*r)/Math.PI)/2:(r<0?-.5:.5);return r*(wsp+gap)+(dd-wsp+1.6*gap)*b}
function mkc(el,text,dir,inst){if(inst||reduce){el.innerHTML='<span>'+text+'</span>';return}
 var n=document.createElement('span');n.textContent=text;el.appendChild(n);n.animate([{transform:'translateY('+dir*105+'%)'},{transform:'translateY(0%)'}],{duration:650,easing:EA,fill:'both'});
 [].slice.call(el.children).forEach(function(o){if(o===n||o.dataset.l)return;o.dataset.l=1;var fr=getComputedStyle(o).transform;var an=o.animate([{transform:fr==='none'?'translateY(0%)':fr},{transform:'translateY('+(-dir*105)+'%)'}],{duration:650,easing:EA,fill:'both'});an.onfinish=function(){o.remove()}})}
function setActive(dir,inst){var f=F[act];mkc(capT,f[0],dir,inst);mkc(capS,f[2].replace(/ · /g,' / '),dir,inst);mkc(capY,f[3],dir,inst);tabInd()}
function openD(){if(isOpen||closing)return;isOpen=true;T=Math.round(T);var f=F[act];
 $('#d1').textContent=f[2].replace(/ · /g,' / ');$('#d2').textContent=f[0];$('#d3').textContent=f[3]+' / '+f[1];$('#d4').textContent=f[8];
 $('#d5').textContent=f[1]==='AI'?'Group project, with contributions by Fathima Wafa Yazeer.':'Project by Fathima Wafa Yazeer.';
 dpv.innerHTML=cover(f,1);var cs=[].slice.call(dpv.querySelectorAll('circle.b'));cs.forEach(function(c){c.setAttribute('r',0)});
 var rc=tapes[((Math.round(s)%V)+V)%V].lastChild.getBoundingClientRect();
 var from='inset('+rc.top+'px '+(innerWidth-rc.right)+'px '+(innerHeight-rc.bottom)+'px '+rc.left+'px round 3px)';
 dtl.getAnimations().forEach(function(a){a.cancel()});dtl.style.visibility='visible';dtl.style.transformOrigin=(rc.left+rc.width/2)+'px '+(rc.top+rc.height/2)+'px';
 document.documentElement.style.overflow='hidden';
 dtl.animate([{clipPath:from,transform:'rotate(-4.5deg)'},{clipPath:'inset(0px 0px 0px 0px round 0px)',transform:'rotate(0deg)'}],{duration:reduce?1:1050,easing:'cubic-bezier(.76,0,.18,1)',fill:'both'});
 [].slice.call(dtl.querySelectorAll('.dm>*')).forEach(function(el,i){el.getAnimations().forEach(function(a){a.cancel()});el.animate([{transform:'translateY(110%)'},{transform:'translateY(0%)'}],{duration:reduce?1:900,delay:reduce?0:620+i*75,easing:EA,fill:'both'})});
 var t0=performance.now();(function ink(n){var el=reduce?9999:n-t0;cs.forEach(function(c){var p=Math.max(0,Math.min(1,(el-520-(+c.dataset.dl))/1250));c.setAttribute('r',720*(1-Math.pow(1-p,3)))});if(el<2400&&isOpen)requestAnimationFrame(ink)})(t0)}
function closeD(){if(!isOpen||closing)return;closing=true;var rc=tapes[((Math.round(s)%V)+V)%V].lastChild.getBoundingClientRect();
 var to='inset('+rc.top+'px '+(innerWidth-rc.right)+'px '+(innerHeight-rc.bottom)+'px '+rc.left+'px round 3px)';
 var a=dtl.animate([{clipPath:'inset(0px 0px 0px 0px round 0px)',transform:'rotate(0deg)'},{clipPath:to,transform:'rotate(-4.5deg)'}],{duration:reduce?1:850,easing:'cubic-bezier(.76,0,.18,1)',fill:'both'});
 a.onfinish=function(){dtl.style.visibility='hidden';dtl.getAnimations().forEach(function(x){x.cancel()});document.documentElement.style.overflow='';isOpen=false;closing=false}}
$('#cl').onclick=closeD;playEl.onclick=openD;$('#pl').onclick=function(){T=Math.round(T)-1};$('#pr').onclick=function(){T=Math.round(T)+1};
shEl.addEventListener('pointerdown',function(e){drag={x:e.clientX,T:T};dragged=false});
addEventListener('pointermove',function(e){if(!drag)return;var dx=e.clientX-drag.x;if(!dragged&&Math.abs(dx)>5)dragged=true;if(dragged)T=drag.T-dx/(wsp+gap)},{passive:true});
addEventListener('pointercancel',function(){drag=null;dragged=false});
addEventListener('pointerup',function(e){if(!drag)return;var tp=e.target.closest&&e.target.closest('.tape'),was=dragged;drag=null;dragged=false;if(was){T=Math.round(T);return}
 if(tp){var r=rel(tapes.indexOf(tp));if(Math.abs(r)<.5)openD();else T=Math.round(T+r)}});
sec.addEventListener('wheel',function(e){if(isOpen)return;if(Math.abs(e.deltaX)>Math.abs(e.deltaY)){e.preventDefault();T+=e.deltaX/(wsp+gap)*.5;clearTimeout(wt);wt=setTimeout(function(){T=Math.round(T)},160)}},{passive:false});
addEventListener('keydown',function(e){if(e.key==='Escape'){closeD();return}var r=sec.getBoundingClientRect();if(isOpen||r.top>innerHeight*.5||r.bottom<innerHeight*.5)return;
 if(e.key==='ArrowLeft')T=Math.round(T)-1;else if(e.key==='ArrowRight')T=Math.round(T)+1;else if(e.key==='Enter'&&document.activeElement===document.body)openD()});
addEventListener('resize',dims);dims();act=0;setActive(1,true);if(document.fonts)document.fonts.ready.then(tabInd);
function shelf(dt){var sr=sec.getBoundingClientRect();if(sr.bottom<-60||sr.top>innerHeight+60)return'';
 s+=(T-s)*(reduce?1:1-Math.exp(-(drag&&dragged?18:5.2)*dt));if(Math.abs(T-s)<1e-4)s=T;
 if(Math.abs(s)>300){var q=Math.round(s/V)*V;s-=q;T-=q}
 var a=((Math.round(s)%N)+N)%N;if(a!==act){var dir=T-s<0?-1:1;act=a;setActive(dir)}
 var scy=sr.top+sr.height/2,has=mx!==null,onC=has&&!isOpen&&Math.abs(mx-W/2)<.55*dd&&Math.abs(my-scy)<.55*Hh&&Math.abs(T-s)<.3&&my>sr.top&&my<sr.bottom;
 var tyT=onC?(mx-W/2)/(.55*dd)*9:(has?(mx-W/2)/W*5:0),txT=onC?-(my-scy)/(Hh/2)*6:0,k7=reduce?1:1-Math.exp(-7*dt);
 tiltY+=(tyT-tiltY)*k7;tiltX+=(txT-tiltX)*k7;
 for(var v=0;v<V;v++){var r=rel(v),x=Fx(r),t=tapes[v];if(Math.abs(x)>W/2+1.5*dd){t.style.visibility='hidden';continue}
  t.style.visibility='visible';var o=sm(Math.max(0,1-Math.abs(r))),lt=(hover===v&&Math.abs(r)>.5)?1:0;lifts[v]+=(lt-lifts[v])*(reduce?1:1-Math.exp(-12*dt));
  t.style.transform='translate3d('+x+'px,'+(-o*.025*Hh-lifts[v]*.045*Hh)+'px,'+o*.2*Hh+'px) rotateZ('+(-4.5*o)+'deg) rotateX('+tiltX*o+'deg) rotateY('+(-90*o+tiltY*o)+'deg)';
  t.style.zIndex=Math.round(100-Math.abs(r)*4);t.firstChild.style.setProperty('--shade',o*.55);t.lastChild.style.setProperty('--shade',(1-o)*.5)}
 var ps=isOpen?0:sm(Math.max(0,1-Math.abs(T-s)*3));playEl.style.transform='scale('+ps+')';playEl.style.pointerEvents=ps>.5?'auto':'none';
 return onC?'open':(!isOpen&&hover>=0&&Math.abs(rel(hover))>.5?'spine':'')}


/* languages: figurine carousel */
(function(){
var LG=[
{k:'java',n:'Java',bg:'#d9876a',fig:'#a9553c',a:'#f3d9a4',tx:'#fff6ec',ink:'#fff',d:'My main language for backend work: Spring Boot, JPA, JDBC and JUnit.',u:'E-Commerce REST API, Hotel Reservation System'},
{k:'py',n:'Python',bg:'#7c9dc0',fig:'#4d759e',a:'#f1dc9a',tx:'#fff',ink:'#fff',d:'Computer vision with OpenCV and YOLOv8, plus basic Flask.',u:'Exam Invigilation Robot'},
{k:'php',n:'PHP',bg:'#9391c4',fig:'#6f6da6',a:'#fff',tx:'#fff',ink:'#fff',d:'Web systems with MySQL, role-based access and dashboards.',u:'E-Plus Academy, Library Reservation System'},
{k:'js',n:'JavaScript',bg:'#e4cf7e',fig:'#cdb347',a:'#2b2a24',tx:'#2b2a24',ink:'#2b2a24',d:'Interactive pages and Chart.js dashboards.',u:'E-Plus Academy, Library Reservation System'},
{k:'sql',n:'SQL',bg:'#629f94',fig:'#3e8478',a:'#f0d3a0',tx:'#fff',ink:'#fff',d:'MySQL database design and CRUD operations in every system I built.',u:'All my projects'},
{k:'cs',n:'C#',bg:'#b48bc4',fig:'#7f559a',a:'#e6d3f0',tx:'#fff',ink:'#fff',d:'Another object-oriented language in my toolkit.',u:'On my skills list'},
{k:'web',n:'HTML & CSS',bg:'#d98e8a',fig:'#bc6660',a:'#f6e3d0',tx:'#fff',ink:'#fff',d:'Responsive layouts with Bootstrap, and this portfolio.',u:'E-Plus Academy, Library system, this website'}];
function gl(l){var a=l.a,b=l.fig,t=l.k;
 if(t=='java')return '<g fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"><path d="M-48 -8H34V28Q34 62 0 62H-14Q-48 62 -48 28Z"/><path d="M34 4H48Q64 4 64 21Q64 38 46 38H34"/><path d="M-30 -30Q-20 -46 -30 -62M-4 -30Q6 -46 -4 -62M22 -30Q32 -46 22 -62" stroke="'+a+'"/></g><rect x="-62" y="74" width="124" height="8" rx="4" fill="'+a+'"/>';
 if(t=='py')return '<path d="M-56 -4V-40Q-56 -62 -34 -62H12Q32 -62 32 -42V-18H-30Q-34 -18 -34 -14V-4Z" fill="#fff"/><circle cx="-14" cy="-46" r="6" fill="'+b+'"/><path d="M56 4V40Q56 62 34 62H-12Q-32 62 -32 42V18H30Q34 18 34 14V4Z" fill="'+a+'"/><circle cx="14" cy="46" r="6" fill="'+b+'"/>';
 if(t=='php')return '<ellipse rx="68" ry="40" fill="#fff"/><text text-anchor="middle" y="14" font-family="'+SS+'" font-size="44" font-weight="800" font-style="italic" fill="'+b+'">php</text>';
 if(t=='js')return '<rect x="-62" y="-62" width="124" height="124" fill="#2b2a24"/><text x="54" y="52" text-anchor="end" font-family="'+SS+'" font-size="52" font-weight="800" fill="'+b+'">JS</text>';
 if(t=='sql')return '<ellipse cy="-46" rx="56" ry="18" fill="#fff"/><g fill="none" stroke="#fff" stroke-width="9"><path d="M-56 -46V46A56 18 0 0 0 56 46V-46"/><path d="M-56 -8A56 18 0 0 0 56 -8M-56 30A56 18 0 0 0 56 30"/></g>';
 if(t=='cs')return '<path d="M0 -72L62 -36V36L0 72L-62 36V-36Z" fill="#fff"/><text text-anchor="middle" y="16" font-family="'+SS+'" font-size="50" font-weight="800" fill="'+b+'">C#</text>';
 return '<path d="M-54 -66H54L46 54L0 68L-46 54Z" fill="#fff"/><text text-anchor="middle" y="14" font-family="'+SS+'" font-size="44" font-weight="800" fill="'+b+'">&lt;/&gt;</text>'}
function fig(l,i){var nm=l.n.toUpperCase().replace('&','&amp;'),fs=Math.min(46,300/(l.n.length*.62));
 return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 600"><defs><linearGradient id="tg'+i+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".28"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".18"/></linearGradient></defs><ellipse cx="180" cy="580" rx="130" ry="14" fill="#000" opacity=".16"/><rect x="30" y="10" width="300" height="548" rx="70" fill="'+l.fig+'"/><rect x="30" y="10" width="300" height="548" rx="70" fill="url(#tg'+i+')"/><g transform="translate(180 250) scale(1.45)">'+gl(l)+'</g><text x="180" y="472" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="'+fs+'" letter-spacing="3" fill="'+l.tx+'">'+nm+'</text></svg>'}
var N=LG.length,sec=$('#languages'),car=$('#tzcar'),dEl=$('#tzd'),uEl=$('#tzu'),items=[],act=0,busy=false,dt0;
LG.forEach(function(l,i){var e=document.createElement('div');e.className='tzi rh';e.innerHTML=fig(l,i);car.appendChild(e);items.push(e);
 e.addEventListener('click',function(){if(e.classList.contains('r1'))go(1);else if(e.classList.contains('r3'))go(-1)})});
function apply(first){items.forEach(function(e,i){var o=(i-act+N)%N;e.className='tzi '+(o===0?'r0':o===1?'r1':o===2?'r2':o===N-1?'r3':'rh')});
 sec.style.backgroundColor=LG[act].bg;sec.style.setProperty('--tc',LG[act].ink);
 var l=LG[act];if(first||reduce){dEl.textContent=l.d;uEl.textContent='Used in: '+l.u;return}
 dEl.style.opacity=0;uEl.style.opacity=0;clearTimeout(dt0);dt0=setTimeout(function(){dEl.textContent=l.d;uEl.textContent='Used in: '+l.u;dEl.style.opacity=1;uEl.style.opacity=.75},230)}
function go(dir){if(busy)return;busy=true;act=(act+dir+N)%N;apply();setTimeout(function(){busy=false},reduce?0:650)}
$('#tzp').onclick=function(){go(-1)};$('#tzn').onclick=function(){go(1)};
addEventListener('keydown',function(e){var r=sec.getBoundingClientRect();if(r.top>innerHeight*.5||r.bottom<innerHeight*.5)return;
 if(e.key==='ArrowRight'){e.preventDefault();go(1)}if(e.key==='ArrowLeft'){e.preventDefault();go(-1)}});
var sx=null;car.addEventListener('pointerdown',function(e){sx=e.clientX});
addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx;sx=null;if(dx<-50)go(1);else if(dx>50)go(-1)});
apply(true);
})();

/* character: camera glides between sections, head follows cursor */
var stage=$('#stage'),head=$('#head'),body=$('#body'),secs=[$('#top'),$('#about'),$('#projects'),$('#languages'),$('#contact')],tops=[];
var D=[{x:50,h:45,s:1},{x:75,h:46,s:1.3},{x:50,h:150,s:1},{x:50,h:150,s:1},{x:77,h:46,s:1.25}];
var M=[{x:50,h:43,s:1},{x:50,h:25,s:.8},{x:50,h:150,s:.8},{x:50,h:150,s:.8},{x:50,h:25,s:.8}];
function meas(){tops=secs.map(function(s){return s.offsetTop})}meas();addEventListener('resize',meas);addEventListener('load',meas);
var nx=0,ny=0,cs={x:50,h:45,s:1};
var lt=0;
function frame(t){var dt=Math.min(.05,Math.max(0,(t-(lt||t))/1000));lt=t;
 var vh=innerHeight,vw=innerWidth,sy=scrollY,mob=vw<=900,S=mob?M:D,a=S[0].x,b=S[0].h,c=S[0].s;
 for(var k=1;k<S.length;k++){var w=ease(cl((sy-(tops[k]-vh))/vh,0,1));a=lerp(a,S[k].x,w);b=lerp(b,S[k].h,w);c=lerp(c,S[k].s,w)}
 cs.x+=(a-cs.x)*.12;cs.h+=(b-cs.h)*.12;cs.s+=(c-cs.s)*.12;
 var sc=cs.s,X=(cs.x-50)/100*vw,H=stage.offsetHeight,Y=cs.h/100*vh-vh/2+.28*H*sc;
 var r=stage.getBoundingClientRect(),px=r.left+r.width*.47,py=r.top+r.height*.36,tx,ty;
 if(mx===null||reduce){tx=reduce?0:Math.sin(t/1300)*.35;ty=reduce?0:Math.sin(t/1700)*.12}
 else{tx=cl((mx-px)/(vw*.4),-1,1);ty=cl((my-py)/(vh*.4),-1,1)}
 nx+=(tx-nx)*.08;ny+=(ty-ny)*.08;
 stage.style.transform='translate(-50%,-50%) translate('+(X+nx*16)+'px,'+(Y+ny*8)+'px) scale('+sc+')';
 stage.style.opacity=1;
 head.style.transform='perspective(900px) translate('+nx*9+'px,'+ny*6+'px) rotateY('+nx*20+'deg) rotateX('+-ny*11+'deg) rotateZ('+nx*3.5+'deg)';
 body.style.transform='perspective(1100px) translateX('+nx*5+'px) rotateY('+nx*3+'deg)';
 var near=mx!==null&&Math.hypot(mx-px,my-py)<r.width*.3;
 cx+=(mx-cx)*.2;cy+=(my-cy)*.2;if(mx!==null)cu.style.transform='translate('+cx+'px,'+cy+'px)';
 var shs=shelf(dt);cu.classList.toggle('open',shs==='open');cu.classList.toggle('spine',shs==='spine');cu.classList.toggle('big',near&&!shs);cu.textContent=shs==='open'?'OPEN':(near&&!shs?'Hi!':'');
 requestAnimationFrame(frame)}
requestAnimationFrame(frame);
})();
