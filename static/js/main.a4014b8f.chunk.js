(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/logo.d3d4a407.svg"},27:function(e,t,a){e.exports=a(38)},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),c=a.n(r),l=a(6),s=(a(32),a(8)),i=a(25),u=a(2),m=a(1);var p=function(){return o.a.createElement("footer",{className:"footer root__content"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))},d=o.a.createContext(),_=a(21),h=a.n(_);var f=function(e){var t=e.onLinkClick,a=o.a.useContext(d);return o.a.createElement("header",{className:"header root__content"},o.a.createElement("div",{className:"header__menu"},o.a.createElement("img",{src:h.a,alt:"",className:"header__logo"}),o.a.createElement("div",{className:"header__profile"},o.a.createElement("p",{className:"header__email"},a.email),o.a.createElement(m.b,{path:"/sign-up"},o.a.createElement(l.b,{className:"header__link",to:"/sign-in"},"\u0412\u043e\u0439\u0442\u0438")),o.a.createElement(m.b,{path:"/sign-in"},o.a.createElement(l.b,{className:"header__link",to:"/sign-up"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")),o.a.createElement(m.b,{exact:!0,path:"/"},o.a.createElement(l.b,{className:"header__link",to:"/sign-in",onClick:t},"\u0412\u044b\u0439\u0442\u0438")))))},E=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,r=e.onCardDelete,c=o.a.useContext(d),l=t.owner._id===c._id,s="cards__trash ".concat(l?"":"cards__trash_hidden"),i=t.likes.some((function(e){return e._id===c._id})),u="cards__like ".concat(i?"cards__like_active":"");return o.a.createElement("div",{className:"cards"},o.a.createElement("button",{type:"button",className:s,onClick:function(){r(t)}}),o.a.createElement("img",{src:"".concat(t.link),alt:"",className:"cards__photo",onClick:function(){a(t)}}),o.a.createElement("h2",{className:"cards__name"},t.name),o.a.createElement("div",{className:"cards__like-container"},o.a.createElement("button",{className:u,onClick:function(){n(t)}}),o.a.createElement("span",{className:"cards__like-counter"},t.likes.length)))},b=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,r=e.onCardClick,c=e.cards,l=e.onCardLike,s=e.onCardDelete,i=o.a.useContext(d);return o.a.createElement("main",{className:"main root__content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__section"},o.a.createElement("div",{className:"profile__avatar",onClick:n},o.a.createElement("img",{style:{backgroundImage:"url(".concat(i.avatar,")")},alt:"",className:"profile__image"})),o.a.createElement("h1",{className:"profile__name"},i.name),o.a.createElement("p",{className:"profile__job"},i.about),o.a.createElement("button",{className:"profile__edit ",onClick:t})),o.a.createElement("button",{className:"profile__add",onClick:a})),o.a.createElement("section",{className:"grid"},c.map((function(e){return o.a.createElement(E,{key:e._id,card:e,onCardClick:r,onCardLike:l,onCardDelete:s})}))))},g=function(e){var t=e.name,a=e.title,n=e.cildren,r=e.isOpen,c=e.onClose,l=e.onSubmit;return o.a.createElement("section",{className:"popup popup-".concat(t," ").concat(r?"popup_opened":"")},o.a.createElement("div",{className:"popup__container"},o.a.createElement("button",{type:"button",className:"popup__close",onClick:c}),o.a.createElement("form",{className:"popup__form",name:t,noValidate:!0,onSubmit:l},o.a.createElement("h3",{className:"popup__title popup__profile-title"},a),n,o.a.createElement("button",{type:"submit",className:"popup__button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))};var v=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,r=o.a.useContext(d),c=o.a.useState(d.name),l=Object(u.a)(c,2),s=l[0],i=l[1],m=o.a.useState(d.about),p=Object(u.a)(m,2),_=p[0],h=p[1];return o.a.useEffect((function(){i(r.name),h(r.about)}),[r]),o.a.createElement(g,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",cildren:o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{className:"popup__label"},o.a.createElement("input",{type:"text",name:"name",className:"popup__input popup__name",required:!0,minLength:"2",maxLength:"40",placeholder:"\u0418\u043c\u044f",onChange:function(e){i(e.target.value)},value:s||""}),o.a.createElement("span",{id:"name-error",className:"popup__error"})),o.a.createElement("label",{className:"popup__label"},o.a.createElement("input",{type:"text",name:"job",className:"popup__input popup__job",required:!0,minLength:"2",maxLength:"200",placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",onChange:function(e){h(e.target.value)},value:_||""}),o.a.createElement("span",{id:"job-error",className:"popup__error"}))),isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:s,about:_})}})};var k=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,r=o.a.useContext(d),c=o.a.useRef();return o.a.createElement(g,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",cildren:o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{className:"popup__label"},o.a.createElement("input",{type:"url",name:"url",className:"popup__input popup__avatar-links",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443",required:!0,defaultValue:r.avatar,ref:c}),o.a.createElement("span",{id:"url-error",className:"popup__error"}))),isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n(c.current.value)}})};var N=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlaseSubmit,r=o.a.useState(""),c=Object(u.a)(r,2),l=c[0],s=c[1],i=o.a.useState(""),m=Object(u.a)(i,2),p=m[0],d=m[1];return o.a.createElement(g,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",cildren:o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{className:"popup__label"},o.a.createElement("input",{type:"text",name:"mesto",className:"popup__input popup__mesto",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",onChange:function(e){s(e.target.value)},value:l}),o.a.createElement("span",{id:"mesto-error",className:"popup__error"})),o.a.createElement("label",{className:"popup__label"},o.a.createElement("input",{type:"url",name:"url",className:"popup__input popup__links",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:function(e){d(e.target.value)},value:p}),o.a.createElement("span",{id:"url-error",className:"popup__error"}))),isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:l,link:p})}})};var C=function(e){var t=e.onClose,a=e.card;return o.a.createElement("section",{className:"popup popup-card ".concat(a.state&&"popup_opened")},o.a.createElement("div",{className:"popup__form"},o.a.createElement("button",{type:"button",className:"popup__close",onClick:t}),o.a.createElement("figure",{className:"popup__image-container"},o.a.createElement("img",{src:a.src,alt:"",className:"popup__image"}),o.a.createElement("figcaption",{className:"popup__image-title"},a.name))))},j=a(23),y=a(24),O=new(function(){function e(t){Object(j.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(y.a)(e,[{key:"updateAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"updateProfileInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e.name),about:"".concat(e.about)})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{authorization:this._headers,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:{authorization:this._headers}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}))}},{key:"postNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._headers,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t){return!0===t?this._addLike(e):this._deliteLike(e)}},{key:"_addLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._headers}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"_deliteLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._headers}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getAppInfo",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"_getResponseData",value:function(e){if(e.ok)return e.json()}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-15",headers:"8ba8ee25-f796-4e6c-83bd-8c6087015f7d"}),S=a(10);var w=function(e){var t=e.handleLogin,a=o.a.useState({password:"",email:""}),n=Object(u.a)(a,2),r=n[0],c=n[1];function l(e){var t=e.target,a=t.name,n=t.value;c(Object(s.a)(Object(s.a)({},r),{},Object(S.a)({},a,n)))}return o.a.createElement("div",{className:"login"},o.a.createElement("p",{className:"login__welcome"},"\u0412\u0445\u043e\u0434"),o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=r.password,n=r.email;t(a,n)},className:"login__form"},o.a.createElement("input",{required:!0,className:"login__input",id:"email",name:"email",type:"email",value:r.email||"",onChange:l}),o.a.createElement("label",{htmlFor:"email"}),o.a.createElement("input",{required:!0,className:"login__input",id:"password",name:"password",type:"password",value:r.password||"",onChange:l}),o.a.createElement("label",{htmlFor:"password"}),o.a.createElement("div",{className:"login__button-container"},o.a.createElement("button",{type:"submit",className:"login__button"},"\u0412\u043e\u0439\u0442\u0438"))))};var P=function(e){var t=e.handleRegister,a=o.a.useState({password:"",email:""}),n=Object(u.a)(a,2),r=n[0],c=n[1];function i(e){var t=e.target,a=t.name,n=t.value;c(Object(s.a)(Object(s.a)({},r),{},Object(S.a)({},a,n)))}return o.a.createElement("div",{className:"register"},o.a.createElement("p",{className:"register__welcome"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),o.a.createElement("form",{className:"register__form",onSubmit:function(e){e.preventDefault();var a=r.password,n=r.email;t(a,n)}},o.a.createElement("input",{required:!0,className:"register__input",id:"email",name:"email",type:"email",value:r.email,onChange:i}),o.a.createElement("label",{htmlFor:"email"}),o.a.createElement("input",{required:!0,className:"register__input",id:"password",name:"password",type:"password",value:r.password,onChange:i}),o.a.createElement("label",{htmlFor:"password"}),o.a.createElement("div",{className:"register__button-container"},o.a.createElement("button",{type:"submit",className:"register__button"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))),o.a.createElement("div",{className:"register__signin"},o.a.createElement(l.b,{to:"/sign-in",className:"register__link"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438")))},L=function(e){var t=e.isOpen,a=e.onClose;return o.a.createElement("section",{className:"popup ".concat(t?"popup_opened":"")},o.a.createElement("div",{className:"popup__container"},o.a.createElement("div",{className:"popup__form"},o.a.createElement("button",{type:"button",className:"popup__close",onClick:a}),o.a.createElement("div",{alt:"",className:"popup__image"}),o.a.createElement("p",{className:"popup__text"},"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"))))},T=a(26),x=function(e){var t=e.component,a=Object(T.a)(e,["component"]);return o.a.createElement(m.b,null,(function(){return!0===a.loggedIn?o.a.createElement(t,a):o.a.createElement(m.a,{to:"/sign-in"})}))},A="https://auth.nomoreparties.co",I=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))};var D=Object(m.h)((function(){var e=o.a.useState(""),t=Object(u.a)(e,2),a=t[0],n=t[1],r=o.a.useState([]),c=Object(u.a)(r,2),l=c[0],_=c[1],h=o.a.useState(!1),E=Object(u.a)(h,2),g=E[0],j=E[1],y=o.a.useState(!1),S=Object(u.a)(y,2),T=S[0],D=S[1],q=o.a.useState(!1),z=Object(u.a)(q,2),U=z[0],F=z[1],J=o.a.useState({state:!1,src:""}),R=Object(u.a)(J,2),G=R[0],B=R[1],H=o.a.useState(!1),M=Object(u.a)(H,2),V=M[0],K=M[1],Q=o.a.useState(!1),W=Object(u.a)(Q,2),X=W[0],Y=W[1],Z=Object(m.g)();function $(){j(!1),D(!1),F(!1),K(!1),B({state:!1})}return o.a.useEffect((function(){O.getAppInfo().then((function(e){var t={name:(e={cards:e[0],user:e[1]}).user.name,about:e.user.about,avatar:e.user.avatar,_id:e.user._id},a=e.cards.map((function(e){return{_id:e._id,name:e.name,likes:e.likes,link:e.link,owner:e.owner}}));n(t),_(a)})).catch((function(e){console.log(e)}))}),[]),o.a.useEffect((function(){!function(){var e=localStorage.getItem("token");(function(e){return fetch("".concat(A,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(I)})(e).then((function(e){e.data.email&&(Y(!0),Z.push("/"))}))}()}),[]),o.a.createElement(d.Provider,{value:a},o.a.createElement(f,{onLinkClick:function(){localStorage.clear("token"),Y(!1)},linkText:"\u0412\u044b\u0439\u0442\u0438"}),o.a.createElement(m.d,null,o.a.createElement(x,{exact:!0,path:"/",loggedIn:X,component:b,onEditProfile:function(){j(!0)},onAddPlace:function(){D(!0)},onEditAvatar:function(){F(!0)},onCardClick:function(e){B({state:!0,src:e.link,name:e.name})},cards:l,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===a._id}));O.changeLikeCardStatus(e._id,!t).then((function(t){var a=l.map((function(a){return a._id===e._id?t:a}));_(a)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){O.deleteCard(e._id).then((function(){var t=l.filter((function(t){return t._id!==e._id}));_(t)})).catch((function(e){console.log(e)}))}}),o.a.createElement(m.b,{path:"/sign-in"},o.a.createElement(w,{handleLogin:function(e,t){(function(e,t){return fetch("".concat(A,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:"".concat(e),email:"".concat(t)})}).then(I)})(e,t).then((function(e){e.token&&(localStorage.setItem("token",e.token),Y(!0),Z.push("/"))})).catch((function(e){return console.log(e)}))}})),o.a.createElement(m.b,{path:"/sign-up"},o.a.createElement(P,{handleRegister:function(e,t){K(!0),function(e,t){return fetch("".concat(A,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:"".concat(e),email:"".concat(t)})}).then(I)}(e,t).then((function(e){e&&(n(Object(s.a)(Object(s.a)({},a),{},{email:e.data.email})),Z.push("/sign-in"))})).catch((function(e){return console.log(e)}))}})),o.a.createElement(m.b,null,X?o.a.createElement(m.a,{to:"/"}):o.a.createElement(m.a,{to:"/sign-in"}))),o.a.createElement(p,null),o.a.createElement(v,{isOpen:g,onClose:$,onUpdateUser:function(e){var t=e.name,a=e.about;O.updateProfileInfo({name:t,about:a}).then((function(e){n(e),$()})).catch((function(e){console.log(e)}))}}),o.a.createElement(k,{isOpen:U,onClose:$,onUpdateAvatar:function(e){O.updateAvatar(e).then((function(e){n(e),$()})).catch((function(e){console.log(e)}))}}),o.a.createElement(N,{isOpen:T,onClose:$,onAddPlaseSubmit:function(e){O.postNewCard(e).then((function(e){_([e].concat(Object(i.a)(l))),$()})).catch((function(e){console.log(e)}))}}),o.a.createElement(C,{card:G,onClose:$}),o.a.createElement(L,{isOpen:V,onClose:$}))}));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,null,o.a.createElement(D,null))),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.a4014b8f.chunk.js.map