(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{35:function(n,e,t){},36:function(n,e,t){"use strict";t.r(e);var r,a,o,i,c,d,b,s,p,l=t(0),u=t.n(l),x=t(12),j=t.n(x),h=t(17),O=t(6),m=t(2),f=t(7),g=t(8),w=t(18),y=t.n(w),k=t(9),v=t(20),C=t(19),z=t(37),A=Object(f.b)("phonebook/add",(function(n){return{payload:Object(C.a)({id:Object(z.a)()},n)}})),S=Object(f.b)("phonebook/delete"),F=Object(f.b)("phonebook/changeFilter"),L=Object(f.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(r={},Object(k.a)(r,A,(function(n,e){var t=e.payload;return n.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()}))?(alert("".concat(t.name," is already in contacts")),n):[t].concat(Object(v.a)(n))})),Object(k.a)(r,S,(function(n,e){var t=e.payload;return n.filter((function(n){return n.id!==t}))})),r)),B=Object(f.c)("",Object(k.a)({},F,(function(n,e){return e.payload}))),J=Object(m.b)({contacts:L,filter:B}),R={key:"root",storage:y.a},Z=Object(m.b)({phonebook:J}),q=Object(g.g)(R,Z),D=Object(f.a)({reducer:q,devTools:!1,middleware:function(n){return n({serializableCheck:{ignoredActions:[g.a,g.f,g.b,g.c,g.d,g.e]}})}}),E=Object(g.h)(D),M=function(n){return n.phonebook.filter},T=function(n){var e=function(n){return n.phonebook.contacts}(n),t=M(n).toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(t)}))},H=t(3),I=t(4),K=I.a.button(a||(a=Object(H.a)(["\n  display: inline-block;\n  width: 30%;\n  border-width: 0;\n  line-height: 40px;\n  border-radius: 20px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  text-transform: uppercase;\n  font-size: 12px;\n  cursor: pointer;\n\n  background-color: grey;\n  color: white;\n"]))),N=I.a.ul(o||(o=Object(H.a)(["\n  padding: 0;\n"]))),P=I.a.span(i||(i=Object(H.a)(["\n  display: block;\n  padding: 0 15px;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  font-size: 14px;\n"]))),$=I.a.li(c||(c=Object(H.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 400px;\n  height: 45px;\n  padding: 10px;\n  margin-top: 6px;\n  border-radius: 2px;\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);\n  list-style: none;\n"]))),G=t(1),Q=function(){var n=Object(O.c)(T),e=Object(O.b)();return Object(G.jsx)(N,{children:n.map((function(n){var t=n.id,r=n.name,a=n.number;return Object(G.jsxs)($,{children:[Object(G.jsxs)(P,{children:[r," : ",a]}),Object(G.jsx)(K,{onClick:function(){return function(n){return e(S(n))}(t)},children:"Delete"})]},t)}))})},U=t(16),V=I.a.form(d||(d=Object(H.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 95%;\n  max-width: 400px;\n  padding: 10px;\n  border-radius: 2px;\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);\n"]))),W=I.a.label(b||(b=Object(H.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),X=I.a.input(s||(s=Object(H.a)(["\n  height: 40px;\n  margin-bottom: 6px;\n  padding: 5px;\n  border: 1px solid #7d847d;\n  border-radius: 4px;\n  outline: none;\n"]))),Y=I.a.button(p||(p=Object(H.a)(["\n  height: 38px;\n  margin-top: 5px;\n  border-width: inherit;\n  border-radius: 5px;\n  outline: none;\n  color: white;\n  background-color: green;\n  cursor: pointer;\n"])));var _,nn,en,tn,rn=function(){var n=Object(l.useState)(""),e=Object(U.a)(n,2),t=e[0],r=e[1],a=Object(l.useState)(""),o=Object(U.a)(a,2),i=o[0],c=o[1],d=Object(O.b)(),b=Object(z.a)(),s=Object(z.a)(),p=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":c(a);break;default:return}};return Object(G.jsxs)(V,{onSubmit:function(n){n.preventDefault(),function(n,e){d(A({name:n,number:e}))}(t,i),r(""),c("")},children:[Object(G.jsxs)(W,{htmlFor:b,children:["Name",Object(G.jsx)(X,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:b,value:t,onChange:p})]}),Object(G.jsxs)(W,{htmlFor:s,children:["Telephone",Object(G.jsx)(X,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:s,value:i,onChange:p})]}),Object(G.jsx)(Y,{type:"submit",children:"Add to contacts"})]})},an=I.a.label(_||(_=Object(H.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 95%;\n  max-width: 400px;\n  margin-top: 23px;\n  padding: 10px;\n  border-radius: 1px;\n  color: green;\n\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);\n"]))),on=I.a.input(nn||(nn=Object(H.a)(["\n  height: 40px;\n  margin-bottom: 6px;\n  padding: 5px;\n  border: 1px solid #7d847d;\n  border-radius: 4px;\n  outline: none;\n"]))),cn=function(){var n=Object(O.c)(M),e=Object(O.b)();return Object(G.jsxs)(an,{children:["Find contacts by name",Object(G.jsx)(on,{type:"text",value:n,onChange:function(n){return e(F(n.target.value))},onBlur:function(){return e(F(""))}})]})},dn=I.a.h2(en||(en=Object(H.a)(["\n  display: block;\n  width: 400px;\n  margin: 20px;\n  font-family: 'Roboto', sans-serif;\n  color: green;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 20px;\n"])));I.a.div(tn||(tn=Object(H.a)(["\n  margin: 10px;\n"])));function bn(){return Object(G.jsxs)("div",{children:[Object(G.jsx)(dn,{children:"Phonebook"}),Object(G.jsx)(rn,{}),Object(G.jsx)(dn,{children:"Contacts"}),Object(G.jsx)(cn,{}),Object(G.jsx)(Q,{})]})}t(35);j.a.render(Object(G.jsx)(u.a.StrictMode,{children:Object(G.jsx)(O.a,{store:D,children:Object(G.jsx)(h.a,{loading:null,persistor:E,children:Object(G.jsx)(bn,{})})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.103af8a3.chunk.js.map