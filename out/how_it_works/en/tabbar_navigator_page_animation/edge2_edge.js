(function($,Edge,compId){var _=null,y=true,n=false,e39='${_company_list}',x8='rgba(204,183,183,1.00)',x10='rgba(108,139,252,1.00)',c='color',x4='rgba(0,0,0,0)',e27='${_Text2}',g='image',x1='2.0.1',x18='rgba(232,232,232,1.00)',s='style',bg='background-color',e37='${_Text4}',e38='${_navigator_place_holder}',x25='rgba(170,170,170,1.00)',a='Base State',e36='${_navigator_but_bottojm2Copy}',lf='left',x='text',e41='${_navigator_but_bottojm2}',x34='hidden',m='rect',dt='Default Timeline',e33='${_Stage}',e31='${_tabbarCopy}',x3='2.0.1.268',i='none',x6='rgba(192,192,192,1)',e28='${_tabbar}',x32='rgba(255,255,255,1)',e30='${_Text2Copy}',e24='${_Text3}',e29='${_company_listCopy}',e26='${_ReplayBox}',fs='font-size',p='px',x21='rgba(110,148,227,1.00)',x23='rgba(255,255,255,1.00)',e35='${_Rectangle}',x13='Arial, Helvetica, sans-serif',o='opacity',l='normal',e40='${_tabbar_placeholder}',e22='${_ReplayText}',h='height',x20='rgba(224,150,150,1.00)',w='width',tp='top',x12='24',ql='linear',ov='overflow',xc='rgba(0,0,0,1)',x19='stage',x2='2.0.0';var im='images/';var g7='navigator_but_bottojm2.png',g9='company_list.png',g5='tabbar.png';var s14="Tabbar",s15="Result",s17="Page",s16="Navigator",s11="Play";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'tabbar',t:g,r:['177px','48px','181px','317px','auto','auto'],o:1,f:[x4,im+g5,'0px','0px']},{id:'tabbar_placeholder',t:m,r:['74px','49px','285px','464px','auto','auto'],f:[x6],s:[0,xc,i]},{id:'navigator_but_bottojm2',t:g,r:['440px','48px','285px','464px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'navigator_place_holder',t:m,r:['549px','116px','285px','417px','auto','auto'],f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'company_list',t:g,r:['794px','91px','285px','417px','auto','auto'],f:[x4,im+g9,'0px','0px']},{id:'ReplayBox',t:m,r:['852px','487px','119px','50px','auto','auto'],br:["10px","10px","10px","10px"],f:[x10],s:[0,"rgb(0, 0, 0)",i]},{id:'ReplayText',t:x,r:['885px','498px','auto','auto','auto','auto'],text:s11,n:[x13,x12,"rgba(255,255,255,1.00)",l,i,""]},{id:'Text2',t:x,r:['358px','437px','auto','auto','auto','auto'],text:s14,align:"left",n:[x13,x12,"rgba(67,67,67,1.00)",l,i,l]},{id:'Text2Copy',t:x,r:['98px','437px','auto','auto','auto','auto'],text:s15,align:"left",n:[x13,x12,"rgba(67,67,67,1.00)",l,i,l]},{id:'Text3',t:x,r:['610px','437px','auto','auto','auto','auto'],text:s16,align:"left",n:[x13,x12,"rgba(67,67,67,1)",l,i,l]},{id:'Text4',t:x,r:['866px','437px','auto','auto','auto','auto'],text:s17,align:"left",n:[x13,x12,"rgba(67,67,67,1)",l,i,l]},{id:'tabbarCopy',t:g,r:['30px','85px','181px','317px','auto','auto'],o:1,f:[x4,im+g5,'0px','0px']},{id:'navigator_but_bottojm2Copy',t:g,r:['30px','85px','285px','464px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'company_listCopy',t:g,r:['30px','115px','285px','417px','auto','auto'],f:[x4,im+g9,'0px','0px']},{id:'Rectangle',t:m,r:['249px','86px','1px','317px','auto','auto'],f:[x18],s:[0,"rgb(0, 0, 0)",i]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:6250,a:n,tt:[]}}}};var S1=symbols[x19];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e22).P(tp,498).P(lf,885).P(c,x23,c);A1.A(e24).P(tp,437).P(c,x25,c).P(o,1,_,_,"").P(lf,610,_,_,p).P(fs,16);A1.A(e26).P(tp,487).P(h,50).P(bg,x10,c).P(lf,852).P(w,119);A1.A(e27).P(tp,437).P(c,x25,c).P(o,1,_,_,"").P(lf,358,_,_,p).P(fs,16);A1.A(e28).P(tp,85).P(h,317).P(o,1,_,_,"").P(lf,293,_,_,p).P(w,181);A1.A(e29).P(tp,115).P(h,265).P(o,1,_,_,"").P(lf,30,_,_,p).P(w,181);A1.A(e30).P(tp,437).P(c,x25,c).P(o,1,_,_,"").P(lf,98,_,_,p).P(fs,16);A1.A(e31).P(tp,85).P(h,317).P(o,1,_,_,"").P(lf,30,_,_,p).P(w,181);A1.A(e33).P(bg,x32,c).P(w,1001).P(h,578).P(ov,x34);A1.A(e35).P(bg,x18,c);A1.A(e36).P(tp,85).P(h,295).P(o,1,_,_,"").P(lf,30,_,_,p).P(w,181);A1.A(e37).P(tp,437).P(c,x25,c).P(o,1,_,_,"").P(lf,866,_,_,p).P(fs,16);A1.A(e38).P(bg,x20,c).P(h,264).P(w,179).P(tp,116).T(1.756,115,1.244,ql).P(o,0,_,_,"").T(3.75,0.46,0.633).P(lf,549,_,_,p).T(1.756,294,1.244);A1.A(e39).P(o,1,_,_,"").P(tp,116,_,_,p).T(5,115,1.25,ql).P(h,264).T(4.514,264).P(lf,791).T(5,294,1.25).P(w,180).T(4.514,180);A1.A(e40).P(bg,x21,c).P(tp,86).P(h,293).T(2.75,293).P(o,0,_,_,"").T(0.75,0.53,0.5,ql).P(lf,293,_,_,p).T(2.75,293).P(w,180).T(2.75,180);A1.A(e41).P(h,295).P(o,1,_,_,"").P(w,181,_,_,p).P(lf,548).T(1.756,293,1.244,ql).P(tp,86).T(1.756,85,1.244);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-25584987");