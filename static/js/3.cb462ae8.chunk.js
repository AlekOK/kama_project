(this.webpackJsonpkama_project=this.webpackJsonpkama_project||[]).push([[3],{294:function(e,a,t){e.exports={dialogs:"dialogs_dialogs__F7A9U",dialog_item:"dialogs_dialog_item__2agOa",messages:"dialogs_messages__Q7J9C",dialog:"dialogs_dialog__1moQV",active:"dialogs_active__1fQMi",activeLink:"dialogs_activeLink__2MYcn",postBlock:"dialogs_postBlock__19hOo"}},295:function(e,a,t){"use strict";t.r(a);var s=t(104),i=t(0),n=t.n(i),l=t(294),o=t.n(l),c=function(e){return n.a.createElement("div",{className:o.a.dialog+" "+o.a.active},n.a.createElement("div",{className:o.a.dialog},e.message))},m=t(12),d=function(e){return n.a.createElement("div",{className:o.a.dialog},n.a.createElement(m.b,{to:"/messages/"+e.id,activeClassName:o.a.activeLink},e.name))},g=t(128),r=t(129),u=t(42),_=t(36),v=Object(_.a)(20),f=Object(r.a)({form:"message"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",{className:o.a.postBlock},n.a.createElement(g.a,{component:u.b,name:"newMessageText",validate:[_.b,v],placeholder:"Add your messages"})),n.a.createElement("div",null,n.a.createElement("button",null,"Send message")))})),b=function(e){var a=e.dialogsPage.dialog_data.map((function(e){return n.a.createElement(d,{id:e.id,key:e.id,name:e.name})})),t=e.dialogsPage.message_data.map((function(e){return n.a.createElement(c,{message:e.message,key:e.id})}));return n.a.createElement("div",{className:o.a.dialogs},n.a.createElement("div",{className:o.a.dialog_item},a),n.a.createElement("div",{className:o.a.messages},t),n.a.createElement(f,{onSubmit:function(a){e.addNewMessage(a.newMessageText)}}))},p=t(11),E=t(127),k=t(8);a.default=Object(k.d)(Object(p.b)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{addNewMessage:function(a){e(Object(s.a)(a))}}})),E.a)(b)}}]);
//# sourceMappingURL=3.cb462ae8.chunk.js.map