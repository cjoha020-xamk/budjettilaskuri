(this.webpackJsonpbudjettilaskuri=this.webpackJsonpbudjettilaskuri||[]).push([[0],{67:function(t,e,a){"use strict";a.r(e);var s=a(0),o=a(10),i=a.n(o),n=a(9),c=a(21),r=a(12),l=a(98),u=a(100),j=a(102),b=a(95),m=a(4),O=Object(b.a)({otsikko:{marginTop:10,marginBottom:10,fontSize:45},teksti:{marginTop:10,marginBottom:10,fontSize:20},nappi:{marginTop:10,marginBottom:10},teksti2:{marginTop:10,marginBottom:10,fontSize:30,color:"blue"},teksti3:{marginTop:10,marginBottom:10,fontSize:30,color:"red"},teksti4:{marginTop:10,marginBottom:10,fontSize:30,color:"black"}});var d=function(t){var e=O(),a=t.tulot/12,o=t.menot/12,i=t.saastot/12;return Object(s.useEffect)((function(){t.tulot>0&&t.menot>0?t.setSaastot(Number(t.tulot)-Number(t.menot)):t.setSaastot("S\xe4\xe4st\xf6j\xe4 ei voi laskea ennen menojen lis\xe4\xe4mist\xe4.")}),[t]),Object(m.jsxs)(l.a,{children:[Object(m.jsx)(u.a,{className:e.otsikko,children:"Budjettilaskuri"}),Object(m.jsx)(u.a,{className:e.teksti,children:"Hallitse kuukausittaista budjettiasi sovelluksen avulla"}),Object(m.jsx)(j.a,{component:c.b,to:"/tulot",variant:"contained",color:"primary",fullWidth:!0,size:"large",className:e.nappi,children:"Lis\xe4\xe4 tuloja"}),Object(m.jsx)(j.a,{component:c.b,to:"/menot",variant:"contained",color:"secondary",fullWidth:!0,size:"large",className:e.nappi,children:"Lis\xe4\xe4 menoja"}),Object(m.jsx)(u.a,{className:e.teksti2,children:"Tulot vuodessa: ".concat(t.tulot.toFixed(2)," \u20ac")}),Object(m.jsx)(u.a,{className:e.teksti2,children:"Tulot kuukaudessa: ".concat(a.toFixed(2)," \u20ac")}),Object(m.jsx)(u.a,{className:e.teksti3,children:"Menot vuodessa: ".concat(t.menot.toFixed(2)," \u20ac")}),Object(m.jsx)(u.a,{className:e.teksti3,children:"Menot kuukaudessa: ".concat(o.toFixed(2)," \u20ac")}),t.saastot>0||t.saastot<0?Object(m.jsxs)(l.a,{children:[Object(m.jsx)(u.a,{className:e.teksti4,children:"S\xe4\xe4st\xf6t vuodessa: ".concat(t.saastot.toFixed(2)," \u20ac")}),Object(m.jsx)(u.a,{className:e.teksti4,children:"S\xe4\xe4st\xf6t kuukaudessa: ".concat(i.toFixed(2)," \u20ac")})]}):Object(m.jsx)(u.a,{children:"S\xe4\xe4st\xf6j\xe4 ei voi laskea ennen tulojen ja menojen lis\xe4\xe4mist\xe4"})]})},k=a(101),h=Object(b.a)({otsikko:{marginTop:10,marginBottom:10,fontSize:45},tekstikentta:{marginTop:10,marginBottom:10}});var N=function(t){var e=Object(r.e)(),a=h(),o=Object(s.useState)(),i=Object(n.a)(o,2),b=i[0],O=i[1],d=Object(s.useState)(),N=Object(n.a)(d,2),x=N[0],p=N[1],S=Object(s.useState)(),g=Object(n.a)(S,2),f=g[0],v=g[1],T=Object(s.useState)(),y=Object(n.a)(T,2),z=y[0],B=y[1],W=Object(s.useState)(!1),L=Object(n.a)(W,2),C=L[0],F=L[1],M=Object(s.useState)(""),E=Object(n.a)(M,2),w=E[0],H=E[1],J=Object(s.useState)(!1),P=Object(n.a)(J,2),I=P[0],V=P[1],q=Object(s.useState)(""),A=Object(n.a)(q,2),D=A[0],G=A[1],K=Object(s.useState)(!1),Q=Object(n.a)(K,2),R=Q[0],U=Q[1],X=Object(s.useState)(""),Y=Object(n.a)(X,2),Z=Y[0],$=Y[1],_=Object(s.useState)(!1),tt=Object(n.a)(_,2),et=tt[0],at=tt[1],st=Object(s.useState)(""),ot=Object(n.a)(st,2),it=ot[0],nt=ot[1],ct=Object(s.useState)(!0),rt=Object(n.a)(ct,2),lt=rt[0],ut=rt[1];return Object(s.useEffect)((function(){isNaN(b)?(F(!0),H("Sy\xf6t\xe4 numero")):(F(!1),H("")),isNaN(x)?(V(!0),G("Sy\xf6t\xe4 numero")):(V(!1),G("")),isNaN(f)?($("Sy\xf6t\xe4 numero"),U(!0)):($(""),U(!1)),isNaN(z)?(nt("Sy\xf6t\xe4 ik\xe4si"),at(!0)):(nt(""),at(!1)),isNaN(b)||isNaN(x)||isNaN(f)||isNaN(z)?ut(!0):ut(!1)}),[b,x,f,z]),Object(m.jsxs)(l.a,{children:[Object(m.jsx)(u.a,{className:a.otsikko,children:"Lis\xe4\xe4 vuositulot"}),Object(m.jsx)(k.a,{label:"Sy\xf6t\xe4 ik\xe4",variant:"outlined",fullWidth:!0,className:a.tekstikentta,error:et,helperText:it,onChange:function(t){B(t.target.value)}}),Object(m.jsx)(k.a,{label:"Lis\xe4\xe4 ansiotuloja (brutto)",variant:"outlined",fullWidth:!0,className:a.tekstikentta,error:C,helperText:w,onChange:function(t){O(t.target.value)}}),Object(m.jsx)(k.a,{label:"Lis\xe4\xe4 p\xe4\xe4omatuloja (brutto)",variant:"outlined",fullWidth:!0,className:a.tekstikentta,error:I,helperText:D,onChange:function(t){p(t.target.value)}}),Object(m.jsx)(k.a,{label:"Lis\xe4\xe4 ansiotulojesi veroprosentti",variant:"outlined",fullWidth:!0,className:a.tekstikentta,error:R,helperText:Z,onChange:function(t){v(t.target.value)}}),Object(m.jsx)(j.a,{variant:"contained",color:"primary",fullWidth:!0,size:"large",disabled:lt,onClick:function(){var a,s=Number(b),o=Number(x),i=0,n=0,c=0,r=0;c=z>=17&&z<=52?Number(s)/100*7.15:z>=53&&z<=62?Number(s)/100*8.65:z>=63?Number(s)/100*7.15:0,r=b>=14776?Number(s)/100*1.36:0,o<=3e4&&(i=o/100*70),o>3e4&&(i=o/100*66),n=b/100*f,n+=c+r+(z<=64&&z>=17?1.4:.5)+(s>=14400?s/100*1.5:0),a=Number(s)-Number(n),t.setTulot(Number(a)+Number(i)),e.push("/")},style:{marginTop:10},children:"Lis\xe4\xe4 tulot"}),Object(m.jsx)(j.a,{component:c.b,to:"/",variant:"contained",fullWidth:!0,size:"large",style:{marginTop:10},children:"Peruuta"})]})},x=Object(b.a)({otsikko:{marginTop:10,marginBottom:10,fontSize:45},tekstikentta:{marginTop:10,marginBottom:10}});var p=function(t){var e=Object(r.e)(),a=x(),o=Object(s.useState)(),i=Object(n.a)(o,2),b=i[0],O=i[1],d=Object(s.useState)(),h=Object(n.a)(d,2),N=h[0],p=h[1],S=Object(s.useState)(),g=Object(n.a)(S,2),f=g[0],v=g[1],T=Object(s.useState)(),y=Object(n.a)(T,2),z=y[0],B=y[1],W=Object(s.useState)(),L=Object(n.a)(W,2),C=L[0],F=L[1],M=Object(s.useState)(),E=Object(n.a)(M,2),w=E[0],H=E[1],J=Object(s.useState)(!0),P=Object(n.a)(J,2),I=P[0],V=P[1];return Object(s.useEffect)((function(){isNaN(b)?(p(!0),v("Sy\xf6t\xe4 numero")):(p(!1),v("")),isNaN(z)?(F(!0),H("Sy\xf6t\xe4 numero")):(F(!1),H("")),isNaN(b)||isNaN(z)?V(!0):V(!1)}),[b,z]),Object(m.jsxs)(l.a,{children:[Object(m.jsx)(u.a,{className:a.otsikko,children:"Lis\xe4\xe4 vuosimenot"}),Object(m.jsx)(k.a,{label:"V\xe4ltt\xe4m\xe4tt\xf6myydet",variant:"outlined",fullWidth:!0,className:a.tekstikentta,error:N,helperText:f,onChange:function(t){O(t.target.value)}}),Object(m.jsx)(k.a,{label:"Huvit",variant:"outlined",fullWidth:!0,className:a.tekstikentta,error:C,helperText:w,onChange:function(t){B(t.target.value)}}),Object(m.jsx)(j.a,{variant:"contained",color:"primary",fullWidth:!0,size:"large",disabled:I,onClick:function(){var a=z,s=b;t.setMenot(Number(a)+Number(s)),e.push("/")},style:{marginTop:10},children:"Lis\xe4\xe4 menot"}),Object(m.jsx)(j.a,{component:c.b,to:"/",variant:"contained",fullWidth:!0,size:"large",style:{marginTop:10},children:"Peruuta"})]})};var S=function(){var t=Object(s.useState)(0),e=Object(n.a)(t,2),a=e[0],o=e[1],i=Object(s.useState)(0),l=Object(n.a)(i,2),u=l[0],j=l[1],b=Object(s.useState)(0),O=Object(n.a)(b,2),k=O[0],h=O[1];return Object(m.jsxs)(c.a,{children:[Object(m.jsx)(r.a,{path:"/",exact:!0,children:Object(m.jsx)(d,{tulot:a,setTulot:o,menot:u,setMenot:j,saastot:k,setSaastot:h})}),Object(m.jsx)(r.a,{path:"/tulot",children:Object(m.jsx)(N,{tulot:a,setTulot:o,menot:u,setMenot:j})}),Object(m.jsx)(r.a,{path:"/menot",children:Object(m.jsx)(p,{tulot:a,setTulot:o,menot:u,setMenot:j})})]})};a(66);i.a.render(Object(m.jsx)(S,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.e0c59cee.chunk.js.map