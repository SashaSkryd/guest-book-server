(this["webpackJsonpguest-book-app"]=this["webpackJsonpguest-book-app"]||[]).push([[0],{13:function(e,t,n){e.exports={container:"Comments_container__3pNxa",itemForm:"Comments_itemForm__2RBwY",itemFormText:"Comments_itemFormText__20Qk6",wrapper:"Comments_wrapper__351Hz"}},215:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(18),s=n.n(r),o=(n(93),n(10)),m=n(4),c=n.n(m),i=n(14),l=n(34),u=n(1);function d(e){function t(e){var t;return e||(t="Required"),t}function n(e){var t;return"admin"===e&&(t="Nice try!"),t}var a=l.a().shape({name:l.b().required("this is required!").min(2,"write full your name please!").matches(/^[a-zA-Z-1234567890_]+$/,"Not in correct format"),comment:l.b().required("this is required!").min(2,"write pleace more!")}),r=function(t){var n={name:t.name,comment:t.comment};t.name.length>0&&t.comment.length>0&&e.hendlerCommentNew(n),t.comment=""};return Object(u.jsx)(i.d,{initialValues:{name:"",comment:""},onSubmit:function(e){r(e)},validationSchema:a,children:function(a){return Object(u.jsxs)(i.c,{onKeyPress:function(e){e.ctrlKey&&"Enter"===e.code&&r(a.values)},children:[Object(u.jsxs)("div",{className:c.a.form,children:[Object(u.jsx)(i.a,{name:"name",component:"span",className:c.a.spanFormNameError}),Object(u.jsx)("label",{htmlFor:"name",className:c.a.labelCommentForm,children:"Your name:"}),Object(u.jsx)(i.b,{className:c.a.inputForm,type:"name",name:"name",placeholder:"Write in this area",validate:n}),Object(u.jsx)(i.a,{name:"comment",component:"span",className:c.a.spanFormCommentError}),Object(u.jsx)("label",{htmlFor:"comment",className:c.a.labelCommentForm,children:"Your comment:"}),Object(u.jsx)(i.b,{className:c.a.textareaForm,as:"textarea",type:"comment",name:"comment",placeholder:"Write in this area",validate:t}),Object(u.jsxs)("div",{className:c.a.advertising,children:[Object(u.jsx)("p",{className:c.a.advertisingText,children:"Your ad could be here !"}),200===e.message&&Object(u.jsx)("p",{className:c.a.advertisingTextOk,children:"Ok, add your message !!!"}),400===e.message&&Object(u.jsx)("p",{className:c.a.advertisingTextError,children:"Error try again !!!"})]})]}),Object(u.jsx)("button",{className:c.a.buttonForm,type:"submit",children:"Add Comment"})]})}})}var j=n(217),p=n(216),_=n(13),b=n.n(_),x=n(85),h=n.n(x);function O(e){return Object(u.jsx)(j.a,{component:"ul",className:b.a.container,children:e.comments.map((function(e){return Object(u.jsx)(p.a,{timeout:500,classNames:h.a,children:Object(u.jsxs)("li",{className:b.a.itemForm,children:[Object(u.jsxs)("div",{className:b.a.wrapper,children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{className:b.a.itemFormText,children:"Said: "}),e.name]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{className:b.a.itemFormText,children:"in "})," ",e.time]})]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{className:b.a.itemFormText,children:"Comment: "}),e.comment]})]},e._id)},e._id)}))})}var N=n(47),f=n.n(N),v=n(48),F=n.n(v),g=n(86),k=n.n(g);function C(){var e=this,t=Object(a.useState)([]),n=Object(o.a)(t,2),r=n[0],s=(n[1],Object(a.useState)("")),m=Object(o.a)(s,2),c=(m[0],m[1]);Object(a.useEffect)((function(){F.a.get("/comments").then((function(t){e.setState({comments:t.data.reverse()})})).catch((function(e){return console.log(e)}))}));return Object(u.jsxs)("div",{className:f.a.container,children:[Object(u.jsx)("h1",{className:f.a.title,children:"Welcome to the guest book!"}),Object(u.jsx)(d,{hendlerCommentNew:function(t){var n=JSON.stringify(t);F.a.post("/comments/add",n,{headers:{"Content-Type":"application/json"}}).then((function(t){e.state.comments.unshift(t.data),e.setState({comments:e.state.comments,message:t.status})})).catch((function(t){e.setState({message:400})}))},message:c}),Object(u.jsx)(p.a,{in:!!r[0],classNames:k.a,timeout:250,unmountOnExit:!0,children:Object(u.jsx)(O,{comments:r})})]})}s.a.render(Object(u.jsx)(C,{}),document.getElementById("root"))},4:function(e,t,n){e.exports={form:"GuestBook_form__EwsHX",textareaForm:"GuestBook_textareaForm__2AXG2",inputForm:"GuestBook_inputForm__3MXba",buttonForm:"GuestBook_buttonForm__1CC4z",labelCommentForm:"GuestBook_labelCommentForm__2SIMd",advertising:"GuestBook_advertising__3rnlC",advertisingTextOk:"GuestBook_advertisingTextOk__1ohN-",advertisingTextError:"GuestBook_advertisingTextError__RANYI",spanFormNameError:"GuestBook_spanFormNameError__zUqEC",spanFormCommentError:"GuestBook_spanFormCommentError__3JCix"}},47:function(e,t,n){e.exports={container:"App_container__399jS",title:"App_title__jqDEk"}},85:function(e,t,n){e.exports={enter:"TransitionGroup_enter__1KFSL",enterActive:"TransitionGroup_enterActive__2ExOF"}},86:function(e,t,n){e.exports={enter:"AppAnimation_enter__METXN",enterActive:"AppAnimation_enterActive__woHMl"}},93:function(e,t,n){}},[[215,1,2]]]);
//# sourceMappingURL=main.71674ab5.chunk.js.map