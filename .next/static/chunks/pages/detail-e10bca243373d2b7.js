(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{2656:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/detail",function(){return n(7330)}])},3264:function(t,e,n){"use strict";n.d(e,{V:function(){return r}});var o=n(5893),i=n(8092),u=n.n(i);function r(t){var e=t.text;return(0,o.jsx)("h1",{className:u().title,children:e})}},4962:function(t,e,n){"use strict";n.d(e,{W:function(){return d}});var o=n(5893),i=n(1664),u=n.n(i),r=n(5231),s=n.n(r);function d(){return(0,o.jsxs)("div",{className:s().flexContainer,children:[(0,o.jsx)(u(),{href:"/",className:s().link,children:"Top"}),(0,o.jsx)(u(),{href:"/create",className:s().link,children:"Create"})]})}},7330:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return a}});var o=n(5893),i=n(4708),u=n(7294),r=n(3264),s=n(4962),d=n(3053),l=n.n(d);function c(t){var e=t.text,n=(0,u.useContext)(i.S1).todo;return(0,o.jsxs)("div",{className:l().container,children:[(0,o.jsx)(s.W,{}),(0,o.jsx)(r.V,{text:e}),(0,o.jsxs)("div",{className:l().contents,children:[(0,o.jsx)("div",{className:l().title,children:(0,o.jsx)("span",{children:n.title})}),(0,o.jsx)("div",{className:l().content,children:(0,o.jsx)("p",{children:n.content})})]})]})}function a(){return(0,o.jsx)(i.a7,{children:(0,o.jsx)(c,{text:"TodoDetail"})})}},4708:function(t,e,n){"use strict";n.d(e,{_r:function(){return a},a7:function(){return f},S1:function(){return c}});var o=n(5893),i=n(1309),u=n(4586),r=n(7294),s=n(1163),d=n(7632),l=function(){var t=(0,i._)((0,r.useState)([{title:"todo1",content:"todo1",id:"awrsgdhfjghk"},{title:"todo2",content:"todo2",id:"oqilukyjfthdgdf"}]),2),e=t[0],n=t[1],o=(0,i._)((0,r.useState)({}),2),l=o[0],c=o[1],a=(0,i._)((0,r.useState)({}),2),f=a[0],T=a[1],_=(0,i._)((0,r.useState)(""),2),v=_[0],h=_[1],x=(0,i._)((0,r.useState)(""),2),p=x[0],C=x[1],S=(0,i._)((0,r.useState)(""),2),j=S[0],N=S[1],I=(0,s.useRouter)(),k=function(){return e.filter(function(t){var e;return null===(e=t.title)||void 0===e?void 0:e.includes(v)})};return{list:e,searchTodoTitle:v,todo:l,todoTitle:p,todoContent:j,setTodo:c,useInputTodoTitle:function(t){C(t.currentTarget.value)},useInputTodoContent:function(t){N(t.currentTarget.value)},useAddToList:function(){n(function(t){return(0,u._)(t).concat([{title:p,content:j,id:(0,d.Z)()}])}),I.push("/"),C(""),N("")},useSetSearchTodo:function(t){h(t.currentTarget.value)},useDeleteTodo:function(t){var e=t.currentTarget.closest("li"),o=null==e?void 0:e.id;window.confirm("タスク「".concat(null==e?void 0:e.textContent,"」を本当に削除しますか？"))&&n(function(t){return t.filter(function(t){return t.id!==o})})},useFilterList:k,useInitializeList:function(){var t=k();return""===v?e:t},useFindTodoDetail:function(t){var n=e.find(function(e){return e.id===t.currentTarget.id});n&&c(n)},useSetTodoTitleAndContentIntoField:function(t){var n=function(t){var n=t.currentTarget.closest("li");if(null!==n){var o=n.id,i=e.find(function(t){return t.id===o});return i&&T(i),i}}(t),o=null==n?void 0:n.title,i=null==n?void 0:n.content;o&&C(o),i&&N(i),I.push("/edit")},useUpdateTodo:function(){f.title=p,f.content=j,I.push("/")}}},c=(0,r.createContext)({}),a=(0,r.createContext)({});function f(t){var e=t.children,n=l(),i=n.list,u=n.searchTodoTitle,r=n.todo,s=n.todoTitle,d=n.todoContent,f=n.setTodo,T=n.useInputTodoTitle,_=n.useInputTodoContent,v=n.useAddToList,h=n.useSetSearchTodo,x=n.useDeleteTodo,p=n.useFilterList,C=n.useInitializeList,S=n.useFindTodoDetail,j=n.useSetTodoTitleAndContentIntoField,N=n.useUpdateTodo;return(0,o.jsx)(c.Provider,{value:{list:i,searchTodoTitle:u,todo:r,todoTitle:s,todoContent:d},children:(0,o.jsx)(a.Provider,{value:{setTodo:f,useInputTodoTitle:T,useInputTodoContent:_,useAddToList:v,useSetSearchTodo:h,useDeleteTodo:x,useFilterList:p,useInitializeList:C,useFindTodoDetail:S,useSetTodoTitleAndContentIntoField:j,useUpdateTodo:N},children:e})})}},8092:function(t){t.exports={title:"style_title__iEE_e"}},5231:function(t){t.exports={flexContainer:"style_flexContainer__Uvu2S",link:"style_link__MFeyt"}},3053:function(t){t.exports={container:"style_container__kBBMC",contents:"style_contents__0H7SC",title:"style_title__TaDno",content:"style_content__uTviw"}}},function(t){t.O(0,[895,774,888,179],function(){return t(t.s=2656)}),_N_E=t.O()}]);