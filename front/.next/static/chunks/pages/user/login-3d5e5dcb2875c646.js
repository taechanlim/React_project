(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[998],{3603:function(e,t,r){"use strict";r.r(t);var n=r(50029),i=r(16835),o=r(59499),s=r(87794),a=r.n(s),c=r(67294),u=r(70461),p=(r(86761),r(41664)),l=r.n(p),d=r(26713),f=r(54054),h=r(51444),x=r(90420),g=(r(11163),r(85893));function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=r(9669);t.default=function(){var e=(0,c.useState)({userid:"",userpw:""}),t=e[0],r=e[1],s=(0,c.useState)(!1),p=s[0],b=s[1],m=(0,c.useState)(),y=m[0],v=m[1],F=function(e){var n=e.target,i=n.name,s=n.value;r(j(j({},t),{},(0,o.Z)({},i,s)))},O=document.cookie,k=(0,u.Z)([O]),_=(0,i.Z)(k,3)[2],P=function(){var e=(0,n.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(O,{path:"/"}),alert("\ub85c\uadf8\uc544\uc6c3"),location.href="/";case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z={userid:t.userid,userpw:t.userpw},S=function(){var e=(0,n.Z)(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),b(!0),e.next=4,w.post("http://localhost:4001/api/user/login",Z,{"Content-type":"application/json",withCredentials:!0});case 4:n=e.sent,setTimeout((function(){0===n.data.errno?(v(!0),alert("\n                    \uc544\uc774\ub514 : ".concat(t.userid,"\n                ")),location.href="/"):alert("\ub85c\uadf8\uc778\uc2e4\ud328"),b(!1)}),1e3);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){document.cookie&&v(!0)}),[y]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{style:{borderRadius:"10px 10px 10px 10px",width:"15%",height:"50%",border:"1px solid lightgray",margin:"0 auto",marginTop:"55px",background:"#ffffff"},children:(0,g.jsx)("form",{onSubmit:S,children:(0,g.jsx)("ul",{style:{listStyle:"none"},children:y?(0,g.jsxs)(g.Fragment,{children:[" ",(0,g.jsx)("li",{children:(0,g.jsx)("button",{onClick:P,style:{background:"#FFFFFF",border:"1.5px solid lightgray",width:"200px",height:"80px",marginBottom:"30px",marginTop:"15px",color:"red",fontSize:"20px"},children:"\ub85c\uadf8\uc544\uc6c3"})}),(0,g.jsx)(l(),{href:"/user/update",children:(0,g.jsx)("div",{style:{background:"#FFFFFF",border:"1.5px solid lightgray",width:"200px",height:"80px",paddingLeft:"18%",paddingTop:"10%",color:"blue",fontSize:"20px"},children:"\ud504\ub85c\ud544 \uc218\uc815/\ud0c8\ud1f4 "})})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(d.Z,{direction:"vertical",children:[(0,g.jsx)(f.Z,{name:"userid",onChange:F,placeholder:"input userid",style:{marginLeft:"-25px",width:"260px",marginTop:"15px"}}),(0,g.jsx)(f.Z.Password,{name:"userpw",onChange:F,placeholder:"input password",style:{marginLeft:"-25px",width:"260px"},iconRender:function(e){return e?(0,g.jsx)(h.Z,{}):(0,g.jsx)(x.Z,{})}})]}),(0,g.jsx)("li",{children:(0,g.jsx)("input",{type:"submit",value:"\ub85c\uadf8\uc778",disabled:p,style:{marginLeft:"-25px",marginTop:"20px",background:"#FFFFFF",border:"1.5px solid lightgray",width:"260px",height:"80px",fontSize:"20px",fontWeight:"bold"}})})]})})})})})}},50970:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/login",function(){return r(3603)}])}},function(e){e.O(0,[646,376,761,774,888,179],(function(){return t=50970,e(e.s=t);var t}));var t=e.O();_N_E=t}]);