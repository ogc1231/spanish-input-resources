(this.webpackJsonpmoments=this.webpackJsonpmoments||[]).push([[0],{14:function(e,a,n){e.exports={NavBar:"NavBar_NavBar__1amC6",NavLink:"NavBar_NavLink__34ons",Active:"NavBar_Active__3PBZb"}},17:function(e,a,n){e.exports={App:"App_App__16ZpL",Main:"App_Main__HQkvd",Content:"App_Content__ZaMNr",FillerImage:"App_FillerImage__2ob-g",Image:"App_Image__3UPXw"}},33:function(e,a,n){e.exports={Button:"Button_Button__27i9m",Wide:"Button_Wide__2ScDr",Blue:"Button_Blue__10GcT",BlueOutline:"Button_BlueOutline__YqCWO",Bright:"Button_Bright__1MBHR",Black:"Button_Black__2dCp7",BlackOutline:"Button_BlackOutline__I-kZ-"}},63:function(e,a,n){},9:function(e,a,n){e.exports={Row:"SignInUpForm_Row__3PbVy",Input:"SignInUpForm_Input__3xaLZ",Header:"SignInUpForm_Header__3joQJ",Link:"SignInUpForm_Link__1BeMm",Container:"SignInUpForm_Container__2cuBp",SignInCol:"SignInUpForm_SignInCol__3ImPK",SignUpCol:"SignInUpForm_SignUpCol__28o4y"}},93:function(e,a,n){"use strict";n.r(a);var t=n(0),s=n.n(t),c=n(26),r=n.n(c),o=(n(63),n(19)),i=n(27),l=n(16),j=n(17),u=n.n(j),d=n(37),p=n(44),b=n(34),m=n.p+"static/media/favicon.8e22b323.png",O=n(14),h=n.n(O),x=n(12),v=n(2);function g(){var e=Object(t.useContext)(G),a=Object(v.jsx)(v.Fragment,{children:null===e||void 0===e?void 0:e.username}),n=Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(x.c,{className:h.a.NavLink,activeClassName:h.a.Active,to:"/signin",children:[Object(v.jsx)("i",{className:"fa-solid fa-right-to-bracket"}),"Sign In"]}),Object(v.jsxs)(x.c,{className:h.a.NavLink,activeClassName:h.a.Active,to:"/signup",children:[Object(v.jsx)("i",{className:"fa-solid fa-user-plus"}),"Sign Up"]})]});return Object(v.jsx)(b.a,{className:h.a.NavBar,collapseOnSelect:!0,expand:"lg",children:Object(v.jsxs)(d.a,{children:[Object(v.jsx)(x.c,{className:h.a.NavLink,to:"/",children:Object(v.jsxs)(b.a.Brand,{children:[Object(v.jsx)("img",{src:m,alt:m,height:"45"}),"Spanish Input Resources"]})}),Object(v.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(v.jsxs)(b.a.Collapse,{id:"responsive-navbar-nav",children:[Object(v.jsxs)(p.a,{className:"mr-auto text-left",children:[Object(v.jsxs)(x.c,{exact:!0,className:h.a.NavLink,activeClassName:h.a.Active,to:"/",children:[Object(v.jsx)("i",{className:"fa-solid fa-house"}),"Home"]}),Object(v.jsxs)(x.c,{className:h.a.NavLink,activeClassName:h.a.Active,to:"/resources",children:[Object(v.jsx)("i",{className:"fa-solid fa-podcast"}),"Resources"]})]}),Object(v.jsx)(p.a,{className:"mr-auto text-left",children:e?a:n})]})]})})}var _=n(6),f=n(15),N=n.n(f);N.a.defaults.baseURL="/api",N.a.defaults.headers.post["Content-Type"]="multipart/form-data",N.a.defaults.withCredentials=!0;var w=n(30),C=n(32),I=n(9),B=n.n(I),S=n(33),k=n.n(S),L=n(95),y=n(57),F=n(98),U=n(99),A=n(96),P=n(97),R=function(){var e,a,n,s,c=Object(t.useState)({username:"",password1:"",password2:""}),r=Object(l.a)(c,2),j=r[0],p=r[1],b=j.username,m=j.password1,O=j.password2,h=Object(t.useState)({}),g=Object(l.a)(h,2),f=g[0],I=g[1],S=Object(_.f)(),R=function(e){p(Object(C.a)(Object(C.a)({},j),{},Object(w.a)({},e.target.name,e.target.value)))},H=function(){var e=Object(i.a)(Object(o.a)().mark((function e(a){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,N.a.post("/dj-rest-auth/registration/",j);case 4:S.push("/signin"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),I(null===(n=e.t0.response)||void 0===n?void 0:n.data);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a){return e.apply(this,arguments)}}();return Object(v.jsxs)(L.a,{className:B.a.Row,children:[Object(v.jsxs)(y.a,{className:"my-auto py-2 p-md-2",md:6,children:[Object(v.jsxs)(d.a,{className:"".concat(u.a.Content," p-4 "),children:[Object(v.jsx)("h1",{className:B.a.Header,children:"sign up"}),Object(v.jsxs)(F.a,{onSubmit:H,children:[Object(v.jsxs)(F.a.Group,{className:"mb-3",controlId:"username",children:[Object(v.jsx)(F.a.Label,{className:"d-none",children:"Username"}),Object(v.jsx)(F.a.Control,{className:B.a.Input,type:"text",placeholder:"Username",name:"username",value:b,onChange:R})]}),null===(e=f.username)||void 0===e?void 0:e.map((function(e,a){return Object(v.jsx)(U.a,{variant:"warning",children:e},a)})),Object(v.jsxs)(F.a.Group,{className:"mb-3",controlId:"password1",children:[Object(v.jsx)(F.a.Label,{className:"d-none",children:"Password"}),Object(v.jsx)(F.a.Control,{className:B.a.Input,type:"password1",placeholder:"Password",name:"password1",value:m,onChange:R})]}),null===(a=f.password1)||void 0===a?void 0:a.map((function(e,a){return Object(v.jsx)(U.a,{variant:"warning",children:e},a)})),Object(v.jsxs)(F.a.Group,{className:"mb-3",controlId:"password2",children:[Object(v.jsx)(F.a.Label,{className:"d-none",children:"Confirm Password"}),Object(v.jsx)(F.a.Control,{className:B.a.Input,type:"password2",placeholder:"Confirm Password",name:"password2",value:O,onChange:R})]}),null===(n=f.password2)||void 0===n?void 0:n.map((function(e,a){return Object(v.jsx)(U.a,{variant:"warning",children:e},a)})),Object(v.jsx)(A.a,{className:"".concat(k.a.Button," ").concat(k.a.Wide),type:"submit",children:"Sign Up"}),null===(s=f.non_field_errors)||void 0===s?void 0:s.map((function(e,a){return Object(v.jsx)(U.a,{variant:"warning",className:"mt-3",children:e},a)}))]})]}),Object(v.jsx)(d.a,{className:"mt-3 ".concat(u.a.Content),children:Object(v.jsxs)(x.b,{className:B.a.Link,to:"/signin",children:["Already have an account? ",Object(v.jsx)("span",{children:"Sign in"})]})})]}),Object(v.jsx)(y.a,{md:6,className:"my-auto d-none d-md-block p-2 ".concat(B.a.SignUpCol),children:Object(v.jsx)(P.a,{className:"".concat(u.a.FillerImage),src:"https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero2.jpg"})})]})};var H=function(){var e,a,n,s=Object(t.useContext)(M),c=Object(t.useState)({username:"",password:""}),r=Object(l.a)(c,2),j=r[0],p=r[1],b=j.username,m=j.password,O=Object(t.useState)({}),h=Object(l.a)(O,2),g=h[0],f=h[1],I=Object(_.f)(),S=function(){var e=Object(i.a)(Object(o.a)().mark((function e(a){var n,t,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,N.a.post("/dj-rest-auth/login/",j);case 4:n=e.sent,t=n.data,s(t.user),I.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),f(null===(c=e.t0.response)||void 0===c?void 0:c.data);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}(),R=function(e){p(Object(C.a)(Object(C.a)({},j),{},Object(w.a)({},e.target.name,e.target.value)))};return Object(v.jsxs)(L.a,{className:B.a.Row,children:[Object(v.jsxs)(y.a,{className:"my-auto p-0 p-md-2",md:6,children:[Object(v.jsxs)(d.a,{className:"".concat(u.a.Content," p-4 "),children:[Object(v.jsx)("h1",{className:B.a.Header,children:"sign in"}),Object(v.jsxs)(F.a,{onSubmit:S,children:[Object(v.jsxs)(F.a.Group,{controlId:"username",children:[Object(v.jsx)(F.a.Label,{className:"d-none",children:"Username"}),Object(v.jsx)(F.a.Control,{type:"text",placeholder:"Username",name:"username",className:B.a.Input,value:b,onChange:R})]}),null===(e=g.username)||void 0===e?void 0:e.map((function(e,a){return Object(v.jsx)(U.a,{variant:"warning",children:e},a)})),Object(v.jsxs)(F.a.Group,{controlId:"password",children:[Object(v.jsx)(F.a.Label,{className:"d-none",children:"Password"}),Object(v.jsx)(F.a.Control,{type:"password",placeholder:"Password",name:"password",className:B.a.Input,value:m,onChange:R})]}),null===(a=g.password)||void 0===a?void 0:a.map((function(e,a){return Object(v.jsx)(U.a,{variant:"warning",children:e},a)})),Object(v.jsx)(A.a,{className:"".concat(k.a.Button," ").concat(k.a.Wide),type:"submit",children:"Sign In"}),null===(n=g.non_field_errors)||void 0===n?void 0:n.map((function(e,a){return Object(v.jsx)(U.a,{variant:"warning",className:"mt-3",children:e},a)}))]})]}),Object(v.jsx)(d.a,{className:"mt-3 ".concat(u.a.Content),children:Object(v.jsxs)(x.b,{className:B.a.Link,to:"/signup",children:["Don't have an account? ",Object(v.jsx)("span",{children:"Sign up now!"})]})})]}),Object(v.jsx)(y.a,{md:6,className:"my-auto d-none d-md-block p-2 ".concat(B.a.SignInCol),children:Object(v.jsx)(P.a,{className:"".concat(u.a.FillerImage),src:"https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero.jpg"})})]})},G=Object(t.createContext)(),M=Object(t.createContext)();var D=function(){var e=Object(t.useState)(null),a=Object(l.a)(e,2),n=a[0],s=a[1],c=function(){var e=Object(i.a)(Object(o.a)().mark((function e(){var a;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("dj-rest-auth/user/");case 3:a=e.sent,a.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(t.useEffect)((function(){c()}),[]),Object(v.jsx)(G.Provider,{value:n,children:Object(v.jsx)(M.Provider,{value:s,children:Object(v.jsxs)("div",{className:u.a.App,children:[Object(v.jsx)(g,{}),Object(v.jsx)(d.a,{children:Object(v.jsxs)(_.c,{children:[Object(v.jsx)(_.a,{exact:!0,path:"/",render:function(){return Object(v.jsx)("h1",{children:"Home"})}}),Object(v.jsx)(_.a,{exact:!0,path:"/resources",render:function(){return Object(v.jsx)("h1",{children:"Resources"})}}),Object(v.jsx)(_.a,{exact:!0,path:"/signin",render:function(){return Object(v.jsx)(H,{})}}),Object(v.jsx)(_.a,{exact:!0,path:"/signup",render:function(){return Object(v.jsx)(R,{})}}),Object(v.jsx)(_.a,{render:function(){return Object(v.jsx)("p",{children:"Page Not Found!"})}})]})})]})})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,100)).then((function(a){var n=a.getCLS,t=a.getFID,s=a.getFCP,c=a.getLCP,r=a.getTTFB;n(e),t(e),s(e),c(e),r(e)}))};r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(x.a,{children:Object(v.jsx)(D,{})})}),document.getElementById("root")),T()}},[[93,1,2]]]);
//# sourceMappingURL=main.b3e5248a.chunk.js.map