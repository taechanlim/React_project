(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{17232:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return b}});var r=n(50029),i=n(59499),o=n(87794),c=n.n(o),d=n(67294),a=n(41664),s=n.n(a),l=n(11163),u=n.n(l),p=n(60955),x=n(26713),h=n(54054),m=n(85893);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=n(9669),b=(p.Z.Meta,!0);t.default=function(e){var t=(0,d.useState)({comment:""}),n=t[0],o=t[1],a=e.list,g=e.list2,b=e.idx.idx,j=(0,l.useRouter)(),y=document.cookie,w={values:n,token:y,router:j},F=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,""!=a.content){e.next=5;break}return alert("\ube48\uce78\uc740 \uc788\uc744 \uc218 \uc5c6\ub2e4."),e.abrupt("return");case 5:return e.next=7,v.post("http://localhost:4001/api/comment/write",w);case 7:n=e.sent,console.log(n),0===n.data.errno?(alert("\uc791\uc131 \uc644\ub8cc"),u().push("/comment/".concat(b))):alert("\uc791\uc131 \uc2e4\ud328"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return(0,m.jsxs)("div",{children:[(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{style:{background:"#FAFAFA"},children:(0,m.jsx)(d.Fragment,{children:(0,m.jsx)("div",{children:null===g||void 0===g?void 0:g.map((function(e){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{style:{width:"30%",margin:"0 auto"},children:(0,m.jsxs)(p.Z,{hoverable:!0,style:{width:600,marginTop:30,border:"1px solid lightgray",borderRadius:"10px 10px",marginBottom:50},children:[(0,m.jsx)("div",{}),(0,m.jsx)("div",{}),(0,m.jsx)("div",{style:{fontWeight:"bold",fontSize:"30px"},children:e.nickname}),(0,m.jsx)("div",{style:{fontSize:"18px",marginTop:"10px"},children:e.content}),(0,m.jsx)(p.Z,{hoverable:!0,style:{width:550,marginTop:50,height:550,minWidth:550,minHeight:550,maxWidth:550,maxHeight:550},cover:(0,m.jsx)("img",{src:"/static/feedImg/".concat(e.filename),style:{width:"550px",height:"550px"}})})]})},e.idx)})}))})})}),(0,m.jsxs)("div",{style:{backgroundColor:"#ffffff",width:"30%",margin:"0 auto",height:"50%",border:"1px solid lightgray",borderRadius:"10px 10px 10px 10px"},children:[(0,m.jsx)("h1",{children:"\ub313\uae00 \uc4f0\uae30"}),(0,m.jsxs)("form",{onSubmit:F,children:[(0,m.jsx)(x.Z,{direction:"vertical",children:(0,m.jsx)(h.Z,{name:"comment",onChange:function(e){var t=e.target,r=t.name,c=t.value;o(f(f({},n),{},(0,i.Z)({},r,c)))},placeholder:"input comment",style:{width:"150%"}})}),(0,m.jsx)("input",{type:"submit",value:"\uc791\uc131",style:{background:"#FFFFFF",border:"1.5px solid lightgray",width:"200px",height:"32px",marginLeft:"50px"}})]})]})]}),(0,m.jsx)(d.Fragment,{children:(0,m.jsx)("div",{children:null===a||void 0===a?void 0:a.map((function(e){return(0,m.jsxs)("div",{style:{backgroundColor:"#ffffff",width:"30%",margin:"0 auto",height:"50%",border:"1px solid lightgray",marginTop:"20px",borderRadius:"10px 10px 10px 10px"},children:[(0,m.jsx)("div",{style:{fontSize:"35px",fontWeight:"bold"},children:e.nickname}),(0,m.jsx)("div",{style:{fontSize:"25px"},children:e.comment}),(0,m.jsx)("div",{style:{fontSize:"15px"},children:e.date}),(0,m.jsx)("button",{onClick:function(){return deleteBtn(e.comment_idx)},style:{background:"#FFFFFF",border:"1.5px solid lightgray",marginRight:"10px",marginTop:"20px",width:"100px",color:"red"},children:"\uc0ad\uc81c"}),(0,m.jsx)(s(),{href:"/comment/commentUpdate?feed=".concat(e.idx,"=comment=").concat(e.comment_idx),children:(0,m.jsx)("button",{onClick:function(){return t=e.comment_idx,void console.log(t);var t},style:{background:"#FFFFFF",border:"1.5px solid lightgray",marginRight:"10px",marginTop:"20px",width:"100px"},children:"\uc218\uc815"})})]},e.comment_idx)}))})})]})}},86182:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/comment/[idx]",function(){return n(17232)}])}},function(e){e.O(0,[646,376,955,774,888,179],(function(){return t=86182,e(e.s=t);var t}));var t=e.O();_N_E=t}]);