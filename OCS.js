// JavaScript Document
<!--
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);



function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}


function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function P7_Snap() { //v2.67 by PVII
 var g,x,y,ox,bx,oy,p,tx,a,b,k,d,da,e,el,tw,q0,xx,yy,w1,pa='px',args=P7_Snap.arguments;a=parseInt(a);
 if(document.layers||window.opera){pa='';}for(k=0;k<(args.length);k+=4){
 if((g=MM_findObj(args[k]))!=null){if((el=MM_findObj(args[k+1]))!=null){
 a=parseInt(args[k+2]);b=parseInt(args[k+3]);x=0;y=0;ox=0;oy=0;p="";tx=1;
 da="document.all['"+args[k]+"']";if(document.getElementById){
 d="document.getElementsByName('"+args[k]+"')[0]";if(!eval(d)){
 d="document.getElementById('"+args[k]+"')";if(!eval(d)){d=da;}}
 }else if(document.all){d=da;}if(document.all||document.getElementById){while(tx==1){
 p+=".offsetParent";if(eval(d+p)){x+=parseInt(eval(d+p+".offsetLeft"));y+=parseInt(eval(d+p+".offsetTop"));
 }else{tx=0;}}ox=parseInt(g.offsetLeft);oy=parseInt(g.offsetTop);tw=x+ox+y+oy;
 if(tw==0||(navigator.appVersion.indexOf("MSIE 4")>-1&&navigator.appVersion.indexOf("Mac")>-1)){
  ox=0;oy=0;if(g.style.left){x=parseInt(g.style.left);y=parseInt(g.style.top);}else{
  w1=parseInt(el.style.width);bx=(a<0)?-5-w1:-10;a=(Math.abs(a)<1000)?0:a;b=(Math.abs(b)<1000)?0:b;
  x=document.body.scrollLeft+event.clientX+bx;y=document.body.scrollTop+event.clientY;}}
 }else if(document.layers){x=g.x;y=g.y;q0=document.layers,dd="";for(var s=0;s<q0.length;s++){
  dd='document.'+q0[s].name;if(eval(dd+'.document.'+args[k])){x+=eval(dd+'.left');y+=eval(dd+'.top');
  break;}}}e=(document.layers)?el:el.style;xx=parseInt(x+ox+a),yy=parseInt(y+oy+b);
 if(navigator.appVersion.indexOf("MSIE 5")>-1 && navigator.appVersion.indexOf("Mac")>-1){
  xx+=parseInt(document.body.leftMargin);yy+=parseInt(document.body.topMargin);}
 e.left=xx+pa;e.top=yy+pa;}}}
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

function P7_autoLayers() { //v1.5 by PVII
 var g,b,k,f,u,k,j,args=P7_autoLayers.arguments,a=parseInt(args[0]);if(isNaN(a))a=0;
 if(!document.p7setc){p7c=new Array();document.p7setc=true;for(u=0;u<10;u++){
 p7c[u]=new Array();}}for(k=0;k<p7c[a].length;k++){if((g=MM_findObj(p7c[a][k]))!=null){
 b=(document.layers)?g:g.style;b.visibility="hidden";}}for(k=1;k<args.length;k++){
 if((g=MM_findObj(args[k]))!=null){b=(document.layers)?g:g.style;b.visibility="visible";f=false;
 for(j=0;j<p7c[a].length;j++){if(args[k]==p7c[a][j]) {f=true;}}
 if(!f){p7c[a][p7c[a].length++]=args[k];}}}
}




function portfolionav (section) { 
	if (section == "home") {state_home = "ohio_camera_top_menu_ove_08.jpg";}else{state_home = "ohio_camera_top_menu_08.jpg";} 
	if (section == "dealer") {state_dealer = "ohio_camera_top_menu_ove_09.jpg";}else{state_dealer = "ohio_camera_top_menu_09.jpg";} 
	if (section == "email") {state_email = "ohio_camera_top_menu_ove_10.jpg";}else{state_email = "ohio_camera_top_menu_10.jpg";}
	if (section == "store") {state_store = "ohio_camera_top_menu_ove_11.jpg";}else{state_store = "ohio_camera_top_menu_11.jpg";}
	if (section == "events") {state_events = "events_bttn_over.jpg";}else{state_events = "events_bttn.jpg";}
	
	
	
document.write("<table id='Table_01' width='1218' height='330' border='0' cellpadding='0' cellspacing='0'><tr>");
document.write("<td colspan='7'><img src='images/ohio_camera_top_js_01.jpg' width='1218' height='276' alt=''></td></tr>");
document.write("<tr><td><img src='images/ohio_camera_top_menu_07.jpg'></td>");
document.write("<td><a href='index.html' onMouseOut='MM_swapImgRestore()' onMouseOver=\"MM_swapImage('homebttn','','images/ohio_camera_top_menu_ove_08.jpg',1)\"><img src='images/"+state_home+"' alt='Ohio Camera Swap home page' name='homebttn' border='0'></a></td>");
document.write("<td><a href='dealer.html' onMouseOut='MM_swapImgRestore()' onMouseOver=\"MM_swapImage('dealerbttn','','images/ohio_camera_top_menu_ove_09.jpg',1)\"><img src='images/"+state_dealer+"' alt='Ohio Camera Swap dealer page' name='dealerbttn' border='0'></a></td>");
document.write("<td><a href='email.html' onMouseOut='MM_swapImgRestore()' onMouseOver=\"MM_swapImage('emailbttn','','images/ohio_camera_top_menu_ove_10.jpg',1)\"><img src='images/"+state_email+"' alt='Ohio Camera Swap email page' name='emailbttn' border='0'></a></td>");
document.write("<td><a href='store.html' onMouseOut='MM_swapImgRestore()' onMouseOver=\"MM_swapImage('storebttn','','images/ohio_camera_top_menu_ove_11.jpg',1)\"><img src='images/"+state_store+"' alt='Ohio Camera Swap store page' name='storebttn' border='0'></a></td>");
document.write("<td><a href='events.html' onMouseOut='MM_swapImgRestore()' onMouseOver=\"MM_swapImage('eventsbttn','','images/events_bttn_over.jpg',1)\"><img src='images/"+state_events+"' alt='Ohio Camera Swap events page' name='eventsbttn' border='0'></a></td>");
document.write("<td><img src='images/ohio_camera_top_menu_14.jpg'></td>");
document.write("</tr></table>");
}