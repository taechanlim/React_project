(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[507],{79791:function(e,t,n){"use strict";n.r(t);n(67294);var i=n(85893);t.default=function(e){var t=e.animalType;return(0,i.jsx)("img",{src:"../static/marketImg/".concat(t,".png"),width:"500",height:"500",alt:"AnimalCard",style:{borderRadius:"5px 5px"}})}},30878:function(e,t,n){"use strict";n.r(t);var i=n(50029),a=n(87794),r=n.n(a),u=n(67294),o=n(93869),s=n(79791),p=n(85893);t.default=function(e){var t=e.animalTokenId,n=e.animalType,a=e.animalPrice,l=e.saleStatus,y=e.account,d=(0,u.useState)(""),m=d[0],c=d[1],f=(0,u.useState)(a),T=f[0],b=f[1],h=function(){var e=(0,i.Z)(r().mark((function e(){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,y&&l){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,o.saleAnimalTokenContract.methods.setForSaleAnimalToken(t,o.web3.utils.toWei(m,"ether")).send({from:y});case 5:(n=e.sent).status&&(b(o.web3.utils.toWei(m,"ether")),console.log(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{style:{float:"left",width:"26.6%",height:"600px",border:"3px solid orange",borderRadius:"10px 10px",backgroundColor:"#fafafa",marginLeft:"15.5%",marginBottom:"5%"},children:[(0,p.jsx)(s.default,{animalType:n}),(0,p.jsx)("div",{style:{position:"relative",textAlign:"center"},children:"0"===T?(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{style:{position:"absolute"},children:[(0,p.jsx)("input",{type:"number",value:m,onChange:function(e){c(e.target.value)},style:{border:"3px solid black",borderRadius:"10px 10px",fontSize:"20px",height:"40px",width:"400px",fontWeight:"bold",marginTop:"5px",marginBottom:"5px"}}),(0,p.jsx)("button",{onClick:h,style:{fontWeight:"bold",fontSize:"20px",height:"40px",width:"400px",backgroundColor:"red",color:"white",borderRadius:"10px 10px"},children:"\ud314\ub2e4!"})]})}):(0,p.jsxs)("div",{style:{fontWeight:"bold",fontSize:"30px"},children:[(0,p.jsx)("div",{children:"\ud310\ub9e4 \ub4f1\ub85d\ub41c \uc0c1\ud488!"}),o.web3.utils.fromWei(T)," ETH"]})})]})})}},93869:function(e,t,n){"use strict";n.r(t),n.d(t,{mintAnimalTokenContract:function(){return u},saleAnimalTokenAddress:function(){return a},saleAnimalTokenContract:function(){return o},web3:function(){return r}});var i=n(3283),a="0x994BC26c20480C4Cfbd25174cA512845eEea971B",r=new(n.n(i)())(window.ethereum),u=new r.eth.Contract([{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mintAnimalToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_saleAnimalToken",type:"address"}],name:"setSaleAnimalToken",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"animalTypes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_animalTokenOwner",type:"address"}],name:"getAnimalTokens",outputs:[{components:[{internalType:"uint256",name:"animalTokenId",type:"uint256"},{internalType:"uint256",name:"animalType",type:"uint256"},{internalType:"uint256",name:"animalPrice",type:"uint256"}],internalType:"struct MintAnimalToken.AnimalTokenData[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"saleAnimalToken",outputs:[{internalType:"contract SaleAnimalToken",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],"0x971Ea56F51248F8bEabC3157656d3863903a0394"),o=new r.eth.Contract([{inputs:[{internalType:"uint256",name:"_animalTokenId",type:"uint256"}],name:"purchaseAnimalToken",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"_animalTokenId",type:"uint256"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"setForSaleAnimalToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_mintAnimalTokenAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"animalTokenPrices",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_animalTokenId",type:"uint256"}],name:"getAnimalTokenPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getOnSaleAnimalTokenArrayLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"mintAnimalTokenAddress",outputs:[{internalType:"contract MintAnimalToken",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"onSaleAnimalTokenArray",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],a)},18306:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/market/MyAnimalCard",function(){return n(30878)}])},34155:function(e){var t,n,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"===typeof clearTimeout?clearTimeout:r}catch(e){n=r}}();var o,s=[],p=!1,l=-1;function y(){p&&o&&(p=!1,o.length?s=o.concat(s):l=-1,s.length&&d())}function d(){if(!p){var e=u(y);p=!0;for(var t=s.length;t;){for(o=s,s=[];++l<t;)o&&o[l].run();l=-1,t=s.length}o=null,p=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===r||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function c(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||p||u(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=c,i.addListener=c,i.once=c,i.off=c,i.removeListener=c,i.removeAllListeners=c,i.emit=c,i.prependListener=c,i.prependOnceListener=c,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},80950:function(){},46601:function(){},89214:function(){},8623:function(){},7748:function(){},85568:function(){},56619:function(){},77108:function(){},52361:function(){},94616:function(){},43503:function(){},55896:function(){},87500:function(){},50029:function(e,t,n){"use strict";function i(e,t,n,i,a,r,u){try{var o=e[r](u),s=o.value}catch(p){return void n(p)}o.done?t(s):Promise.resolve(s).then(i,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var u=e.apply(t,n);function o(e){i(u,a,r,o,s,"next",e)}function s(e){i(u,a,r,o,s,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return a}})}},function(e){e.O(0,[482,714,389,774,888,179],(function(){return t=18306,e(e.s=t);var t}));var t=e.O();_N_E=t}]);