(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/logo.d3d4a407.svg"},25:function(e,t,a){e.exports=a.p+"static/media/success.e38b395c.svg"},26:function(e,t,a){e.exports=a.p+"static/media/error.4072126c.svg"},29:function(e,t,a){e.exports=a(40)},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),s=a(6),l=(a(34),a(8)),i=a(27),u=a(2),m=a(1);var p=function(){return r.a.createElement("footer",{className:"footer root__content"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))},d=a(21),_=a.n(d);var f=function(e){var t=e.onLinkClick,a=localStorage.getItem("email");return r.a.createElement("header",{className:"header root__content"},r.a.createElement("div",{className:"header__menu"},r.a.createElement("img",{src:_.a,alt:"",className:"header__logo"}),r.a.createElement("div",{className:"header__profile"},r.a.createElement("p",{className:"header__email"},a),r.a.createElement(m.b,{path:"/sign-up"},r.a.createElement(s.b,{className:"header__link",to:"/sign-in"},"\u0412\u043e\u0439\u0442\u0438")),r.a.createElement(m.b,{path:"/sign-in"},r.a.createElement(s.b,{className:"header__link",to:"/sign-up"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")),r.a.createElement(m.b,{exact:!0,path:"/"},r.a.createElement(s.b,{className:"header__link",to:"/sign-in",onClick:t},"\u0412\u044b\u0439\u0442\u0438")))))},h=r.a.createContext(),E=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,o=e.onCardDelete,c=r.a.useContext(h),s=t.owner._id===c._id,l="cards__trash ".concat(s?"":"cards__trash_hidden"),i=t.likes.some((function(e){return e._id===c._id})),u="cards__like ".concat(i?"cards__like_active":"");return r.a.createElement("div",{className:"cards"},r.a.createElement("button",{type:"button",className:l,onClick:function(){o(t)}}),r.a.createElement("img",{src:"".concat(t.link),alt:"",className:"cards__photo",onClick:function(){a(t)}}),r.a.createElement("h2",{className:"cards__name"},t.name),r.a.createElement("div",{className:"cards__like-container"},r.a.createElement("button",{className:u,onClick:function(){n(t)}}),r.a.createElement("span",{className:"cards__like-counter"},t.likes.length)))},g=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,o=e.onCardClick,c=e.cards,s=e.onCardLike,l=e.onCardDelete,i=r.a.useContext(h);return r.a.createElement("main",{className:"main root__content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__section"},r.a.createElement("div",{className:"profile__avatar",onClick:n},r.a.createElement("img",{style:{backgroundImage:"url(".concat(i.avatar,")")},alt:"",className:"profile__image"})),r.a.createElement("h1",{className:"profile__name"},i.name),r.a.createElement("p",{className:"profile__job"},i.about),r.a.createElement("button",{className:"profile__edit ",onClick:t})),r.a.createElement("button",{className:"profile__add",onClick:a})),r.a.createElement("section",{className:"grid"},c.map((function(e){return r.a.createElement(E,{key:e._id,card:e,onCardClick:o,onCardLike:s,onCardDelete:l})}))))},b=function(e){var t=e.name,a=e.title,n=e.cildren,o=e.isOpen,c=e.onClose,s=e.onSubmit;return r.a.createElement("section",{className:"popup popup-".concat(t," ").concat(o?"popup_opened":"")},r.a.createElement("div",{className:"popup__container"},r.a.createElement("button",{type:"button",className:"popup__close",onClick:c}),r.a.createElement("form",{className:"popup__form",name:t,noValidate:!0,onSubmit:s},r.a.createElement("h3",{className:"popup__title popup__profile-title"},a),n,r.a.createElement("button",{type:"submit",className:"popup__button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))};var v=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,o=r.a.useContext(h),c=r.a.useState(h.name),s=Object(u.a)(c,2),l=s[0],i=s[1],m=r.a.useState(h.about),p=Object(u.a)(m,2),d=p[0],_=p[1];return r.a.useEffect((function(){i(o.name),_(o.about)}),[o]),r.a.createElement(b,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",cildren:r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"popup__label"},r.a.createElement("input",{type:"text",name:"name",className:"popup__input popup__name",required:!0,minLength:"2",maxLength:"40",placeholder:"\u0418\u043c\u044f",onChange:function(e){i(e.target.value)},value:l||""}),r.a.createElement("span",{id:"name-error",className:"popup__error"})),r.a.createElement("label",{className:"popup__label"},r.a.createElement("input",{type:"text",name:"job",className:"popup__input popup__job",required:!0,minLength:"2",maxLength:"200",placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",onChange:function(e){_(e.target.value)},value:d||""}),r.a.createElement("span",{id:"job-error",className:"popup__error"}))),isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:l,about:d})}})};var k=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,o=r.a.useContext(h),c=r.a.useRef();return r.a.createElement(b,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",cildren:r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"popup__label"},r.a.createElement("input",{type:"url",name:"url",className:"popup__input popup__avatar-links",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443",required:!0,defaultValue:o.avatar,ref:c}),r.a.createElement("span",{id:"url-error",className:"popup__error"}))),isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n(c.current.value)}})};var N=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlaseSubmit,o=r.a.useState(""),c=Object(u.a)(o,2),s=c[0],l=c[1],i=r.a.useState(""),m=Object(u.a)(i,2),p=m[0],d=m[1];return r.a.createElement(b,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",cildren:r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"popup__label"},r.a.createElement("input",{type:"text",name:"mesto",className:"popup__input popup__mesto",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",onChange:function(e){l(e.target.value)},value:s}),r.a.createElement("span",{id:"mesto-error",className:"popup__error"})),r.a.createElement("label",{className:"popup__label"},r.a.createElement("input",{type:"url",name:"url",className:"popup__input popup__links",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:function(e){d(e.target.value)},value:p}),r.a.createElement("span",{id:"url-error",className:"popup__error"}))),isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:s,link:p})}})};var C=function(e){var t=e.onClose,a=e.card;return r.a.createElement("section",{className:"popup popup-card ".concat(a.state&&"popup_opened")},r.a.createElement("div",{className:"popup__form"},r.a.createElement("button",{type:"button",className:"popup__close",onClick:t}),r.a.createElement("figure",{className:"popup__image-container"},r.a.createElement("img",{src:a.src,alt:"",className:"popup__image"}),r.a.createElement("figcaption",{className:"popup__image-title"},a.name))))},j=a(23),y=a(24),O=new(function(){function e(t){Object(j.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(y.a)(e,[{key:"updateAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"updateProfileInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e.name),about:"".concat(e.about)})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{authorization:this._headers,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:{authorization:this._headers}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}))}},{key:"postNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._headers,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t){return!0===t?this._addLike(e):this._deliteLike(e)}},{key:"_addLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._headers}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"_deliteLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._headers}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getAppInfo",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"_getResponseData",value:function(e){if(e.ok)return e.json()}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-15",headers:"8ba8ee25-f796-4e6c-83bd-8c6087015f7d"}),S=a(10);var w=function(e){var t=e.handleLogin,a=r.a.useState({password:"",email:""}),n=Object(u.a)(a,2),o=n[0],c=n[1];function s(e){var t=e.target,a=t.name,n=t.value;c(Object(l.a)(Object(l.a)({},o),{},Object(S.a)({},a,n)))}return r.a.createElement("div",{className:"login"},r.a.createElement("p",{className:"login__welcome"},"\u0412\u0445\u043e\u0434"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=o.password,n=o.email;t(a,n)},className:"login__form"},r.a.createElement("input",{required:!0,className:"login__input",id:"email",name:"email",type:"email",value:o.email||"",onChange:s}),r.a.createElement("label",{htmlFor:"email"}),r.a.createElement("input",{required:!0,className:"login__input",id:"password",name:"password",type:"password",value:o.password||"",onChange:s}),r.a.createElement("label",{htmlFor:"password"}),r.a.createElement("div",{className:"login__button-container"},r.a.createElement("button",{type:"submit",className:"login__button"},"\u0412\u043e\u0439\u0442\u0438"))))};var P=function(e){var t=e.handleRegister,a=r.a.useState({password:"",email:""}),n=Object(u.a)(a,2),o=n[0],c=n[1];function i(e){var t=e.target,a=t.name,n=t.value;c(Object(l.a)(Object(l.a)({},o),{},Object(S.a)({},a,n)))}return r.a.createElement("div",{className:"register"},r.a.createElement("p",{className:"register__welcome"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("form",{className:"register__form",onSubmit:function(e){e.preventDefault();var a=o.password,n=o.email;t(a,n)}},r.a.createElement("input",{required:!0,className:"register__input",id:"email",name:"email",type:"email",value:o.email,onChange:i}),r.a.createElement("label",{htmlFor:"email"}),r.a.createElement("input",{required:!0,className:"register__input",id:"password",name:"password",type:"password",value:o.password,onChange:i}),r.a.createElement("label",{htmlFor:"password"}),r.a.createElement("div",{className:"register__button-container"},r.a.createElement("button",{type:"submit",className:"register__button"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))),r.a.createElement("div",{className:"register__signin"},r.a.createElement(s.b,{to:"/sign-in",className:"register__link"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438")))},x=function(e){var t=e.isOpen,a=e.onClose;return r.a.createElement("section",{className:"popup ".concat(t.state?"popup_opened":"")},r.a.createElement("div",{className:"popup__container"},r.a.createElement("div",{className:"popup__form"},r.a.createElement("button",{type:"button",className:"popup__close",onClick:a}),r.a.createElement("img",{alt:"",className:"popup__error-image",src:t.src}),r.a.createElement("p",{className:"popup__text"},t.text))))},L=a(28),T=function(e){var t=e.component,a=Object(L.a)(e,["component"]);return r.a.createElement(m.b,null,(function(){return!0===a.loggedIn?r.a.createElement(t,a):r.a.createElement(m.a,{to:"/sign-in"})}))},I="https://auth.nomoreparties.co",A=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},D=a(25),q=a.n(D),z=a(26),U=a.n(z);var F=Object(m.h)((function(){var e=r.a.useState(""),t=Object(u.a)(e,2),a=t[0],n=t[1],o=r.a.useState([]),c=Object(u.a)(o,2),s=c[0],d=c[1],_=r.a.useState(!1),E=Object(u.a)(_,2),b=E[0],j=E[1],y=r.a.useState(!1),S=Object(u.a)(y,2),L=S[0],D=S[1],z=r.a.useState(!1),F=Object(u.a)(z,2),J=F[0],R=F[1],G=r.a.useState({state:!1,src:""}),B=Object(u.a)(G,2),H=B[0],M=B[1],V=r.a.useState({state:!1,text:"",src:""}),K=Object(u.a)(V,2),Q=K[0],W=K[1],X=r.a.useState(!1),Y=Object(u.a)(X,2),Z=Y[0],$=Y[1],ee=Object(m.g)();function te(){j(!1),D(!1),R(!1),W(!1),M({state:!1})}return r.a.useEffect((function(){O.getAppInfo().then((function(e){var t={name:(e={cards:e[0],user:e[1]}).user.name,about:e.user.about,avatar:e.user.avatar,_id:e.user._id},a=e.cards.map((function(e){return{_id:e._id,name:e.name,likes:e.likes,link:e.link,owner:e.owner}}));n(t),d(a)})).catch((function(e){console.log(e)}))}),[]),r.a.useEffect((function(){!function(){var e=localStorage.getItem("token");(function(e){return fetch("".concat(I,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(A)})(e).then((function(e){e.data.email&&($(!0),ee.push("/"))})).catch((function(e){return console.error(e)}))}()}),[]),r.a.createElement(h.Provider,{value:a},r.a.createElement(f,{onLinkClick:function(){localStorage.clear("token"),localStorage.clear("email"),$(!1)},linkText:"\u0412\u044b\u0439\u0442\u0438"}),r.a.createElement(m.d,null,r.a.createElement(T,{exact:!0,path:"/",loggedIn:Z,component:g,onEditProfile:function(){j(!0)},onAddPlace:function(){D(!0)},onEditAvatar:function(){R(!0)},onCardClick:function(e){M({state:!0,src:e.link,name:e.name})},cards:s,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===a._id}));O.changeLikeCardStatus(e._id,!t).then((function(t){var a=s.map((function(a){return a._id===e._id?t:a}));d(a)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){O.deleteCard(e._id).then((function(){var t=s.filter((function(t){return t._id!==e._id}));d(t)})).catch((function(e){console.log(e)}))}}),r.a.createElement(m.b,{path:"/sign-in"},r.a.createElement(w,{handleLogin:function(e,t){(function(e,t){return fetch("".concat(I,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:"".concat(e),email:"".concat(t)})}).then(A)})(e,t).then((function(e){e.token&&(localStorage.setItem("token",e.token),$(!0),ee.push("/"))})).catch((function(e){return console.log(e)}))}})),r.a.createElement(m.b,{path:"/sign-up"},r.a.createElement(P,{handleRegister:function(e,t){(function(e,t){return fetch("".concat(I,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:"".concat(e),email:"".concat(t)})}).then(A)})(e,t).then((function(e){e&&(localStorage.setItem("email",e.data.email),n(Object(l.a)(Object(l.a)({},a),{},{email:e.data.email})),W({state:!0,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",src:q.a}),ee.push("/sign-in"))})).catch((function(e){console.log(e),W({state:!0,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",src:U.a})}))}})),r.a.createElement(m.b,null,Z?r.a.createElement(m.a,{to:"/"}):r.a.createElement(m.a,{to:"/sign-in"}))),r.a.createElement(p,null),r.a.createElement(v,{isOpen:b,onClose:te,onUpdateUser:function(e){var t=e.name,a=e.about;O.updateProfileInfo({name:t,about:a}).then((function(e){n(e),te()})).catch((function(e){console.log(e)}))}}),r.a.createElement(k,{isOpen:J,onClose:te,onUpdateAvatar:function(e){O.updateAvatar(e).then((function(e){n(e),te()})).catch((function(e){console.log(e)}))}}),r.a.createElement(N,{isOpen:L,onClose:te,onAddPlaseSubmit:function(e){O.postNewCard(e).then((function(e){d([e].concat(Object(i.a)(s))),te()})).catch((function(e){console.log(e)}))}}),r.a.createElement(C,{card:H,onClose:te}),r.a.createElement(x,{isOpen:Q,onClose:te}))}));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(F,null))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.96e01b1f.chunk.js.map