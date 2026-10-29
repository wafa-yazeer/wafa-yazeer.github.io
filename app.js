(function(){
var $=function(s){return document.querySelector(s)},reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
function cl(v,a,b){return Math.max(a,Math.min(b,v))}
function lerp(a,b,t){return a+(b-a)*t}
function ease(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}

/* projects: auto-sliding tabs */
var P=[
["E-Commerce REST API","Java · Spring Boot · MySQL","Full CRUD for categories, products and orders, with a layered architecture, validation and a global exception handler. Tested with Postman and JUnit."],
["E-Plus Academy","PHP · MySQL · Chart.js","Tuition institute system: registration, enrollment with discounts, payments, role-based access, QR attendance and analytics dashboards."],
["Hotel Reservation System","Java · MySQL · JasperReports","Desktop app for customers, rooms and reservations, built with MVC and DAO patterns, with printable business reports."],
["Library Reservation System","PHP · MySQL · Bootstrap","Student and admin portals with book management, image uploads, copy tracking and a live admin dashboard."],
["Exam Invigilation Robot","Python · OpenCV · YOLOv8 · Arduino","Four-member HND prototype: a mobile robot that flags possible misconduct and alerts an invigilator. Built to support people, not replace them."],
["EuroCall Network Design","Cisco Packet Tracer","Simulated call-centre network with VLANs, routers, switches, IP addressing and subnetting."]];
var tr=$('#tr'),tabs=[],cur=0,timer;
P.forEach(function(p,i){var d=document.createElement('div');d.className='tb';d.innerHTML='<b>0'+(i+1)+'</b><span>'+p[0]+'</span>';d.onclick=function(){go(i,1)};tr.appendChild(d);tabs.push(d)});
function go(i,m){cur=(i+P.length)%P.length;tr.style.transform='translateX('+(-cur*tabs[0].offsetWidth)+'px)';
 tabs.forEach(function(t,k){t.classList.toggle('on',k===cur);t.classList.toggle('gone',k<cur)});
 var d=$('#pd');d.style.opacity=0;setTimeout(function(){$('#pt').textContent=P[cur][0];$('#ps').textContent=P[cur][1];d.textContent=P[cur][2];d.style.opacity=1},m?0:250);
 clearTimeout(timer);if(!reduce)timer=setTimeout(function(){go(cur+1)},m?6500:3800)}
go(0);addEventListener('resize',function(){go(cur,1)});

/* languages: scroll-linked words */
var L=[["Java","Used in: E-Commerce REST API, Hotel Reservation System","My main language for backend work: Spring Boot, JPA, JDBC and JUnit.","#e4efc4"],
["PHP","Used in: E-Plus Academy, Library Reservation System","Web systems with MySQL, role-based access and dashboards.","#ffe0cc"],
["Python","Used in: Exam Invigilation Robot","Computer vision with OpenCV and YOLOv8, plus basic Flask.","#e1daff"],
["JavaScript","Used in: E-Plus Academy, Library Reservation System","Interactive pages and Chart.js dashboards.","#d6ecf3"],
["SQL","Used in: every system I’ve built","MySQL database design and CRUD operations.","#f6dce6"],
["C#","","Another object-oriented language in my toolkit.","#ece8dc"],
["HTML & CSS","Used in: E-Plus Academy, Library system, this website","Responsive layouts with Bootstrap.","#e4efc4"]];
var lg=$('#languages'),st=lg.firstElementChild;lg.style.setProperty('--n',L.length);
st.innerHTML=L.map(function(l){return '<div class="lw"><h1>'+l[0]+'</h1><p>'+l[2]+'</p><small>'+l[1]+'</small></div>'}).join('')+'<div class="ls">'+L.map(function(l){return '<span>'+l[0]+'</span>'}).join('')+'</div><div class="cnt"></div><div class="bar2"></div>';
var ws=[].slice.call(st.querySelectorAll('.lw')),ss=[].slice.call(st.querySelectorAll('.ls span')),cn=st.querySelector('.cnt'),br=st.querySelector('.bar2'),last=-1;
function lang(){var r=lg.getBoundingClientRect(),p=cl(-r.top/(r.height-innerHeight),0,1),t=p*(L.length-1)+.5,k=Math.round(p*(L.length-1));
 ws.forEach(function(w,i){var d=t-i-.5;w.style.opacity=cl(1.5-Math.abs(d)*2.2,0,1);w.style.transform='translateY('+(-d*110)+'px) scale('+(1-Math.min(Math.abs(d),1)*.16)+')'});
 if(k!==last){last=k;st.style.background=L[k][3];ss.forEach(function(s,i){s.classList.toggle('on',i===k)});cn.textContent='0'+(k+1)+' / 0'+L.length}
 br.style.width=p*100+'%'}

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

/* character: camera glides between sections, head follows cursor */
var stage=$('#stage'),head=$('#head'),body=$('#body'),secs=[$('#top'),$('#about'),$('#projects'),lg,$('#contact')],tops=[];
var D=[{x:50,h:45,s:1},{x:75,h:46,s:1.3},{x:77,h:46,s:1.55},{x:82,h:40,s:.9},{x:77,h:46,s:1.25}];
var M=[{x:50,h:43,s:1},{x:50,h:86,s:1},{x:50,h:86,s:1},{x:50,h:86,s:1},{x:50,h:86,s:1}];
function meas(){tops=secs.map(function(s){return s.offsetTop})}meas();addEventListener('resize',meas);addEventListener('load',meas);
var nx=0,ny=0,cs={x:50,h:45,s:1};
function frame(t){
 var vh=innerHeight,vw=innerWidth,sy=scrollY,mob=vw<=900,S=mob?M:D,a=S[0].x,b=S[0].h,c=S[0].s;
 for(var k=1;k<S.length;k++){var w=ease(cl((sy-(tops[k]-vh))/vh,0,1));a=lerp(a,S[k].x,w);b=lerp(b,S[k].h,w);c=lerp(c,S[k].s,w)}
 cs.x+=(a-cs.x)*.12;cs.h+=(b-cs.h)*.12;cs.s+=(c-cs.s)*.12;
 var sc=cs.s,X=(cs.x-50)/100*vw,H=stage.offsetHeight,Y=cs.h/100*vh-vh/2+.28*H*sc;
 var r=stage.getBoundingClientRect(),px=r.left+r.width*.47,py=r.top+r.height*.36,tx,ty;
 if(mx===null||reduce){tx=reduce?0:Math.sin(t/1300)*.35;ty=reduce?0:Math.sin(t/1700)*.12}
 else{tx=cl((mx-px)/(vw*.4),-1,1);ty=cl((my-py)/(vh*.4),-1,1)}
 nx+=(tx-nx)*.08;ny+=(ty-ny)*.08;
 stage.style.transform='translate(-50%,-50%) translate('+(X+nx*16)+'px,'+(Y+ny*8)+'px) scale('+sc+')';
 stage.style.opacity=mob?(1-.55*cl((sy-vh*.3)/(vh*.5),0,1)):1;
 head.style.transform='perspective(900px) translate('+nx*9+'px,'+ny*6+'px) rotateY('+nx*20+'deg) rotateX('+-ny*11+'deg) rotateZ('+nx*3.5+'deg)';
 body.style.transform='perspective(1100px) translateX('+nx*5+'px) rotateY('+nx*3+'deg)';
 var near=mx!==null&&Math.hypot(mx-px,my-py)<r.width*.3;
 cx+=(mx-cx)*.2;cy+=(my-cy)*.2;if(mx!==null)cu.style.transform='translate('+cx+'px,'+cy+'px)';
 cu.classList.toggle('big',near);cu.textContent=near?'Hi!':'';
 lang();requestAnimationFrame(frame)}
requestAnimationFrame(frame);
})();
