(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.rendererItems=r,this._renderer=o,this._container=n}var n,r;return n=t,(r=[{key:"setItems",value:function(t){this.rendererItems=t}},{key:"addItem",value:function(t){this._container.append(t)}},{key:"addNewItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(){var t=this;this.rendererItems.forEach((function(e){var n=t._renderer(e);t.addItem(n)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n,r,o,i,u,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._id=e._id,this._likes=e.likes,this._owner=e.owner._id,this._templateSelector=n,this._handleCardClick=r,this._userId=userId,this._like=i,this._dislike=u,this._handleDeleteButtonClick=a}var e,n;return e=t,(n=[{key:"getCardId",value:function(){return this._id}},{key:"handleLikeCard",value:function(t){this._likes=t.likes,this._countLikeElement.textContent=this._likes.length,this._likeButton.classList.toggle("element__like_active")}},{key:"_userLiked",value:function(){var t=this;this._likes.forEach((function(e){e._id===t._userId?t._likeButton.classList.add("element__like_active"):t._likeButton.classList.remove("element__like_active")}))}},{key:"_hasDeleteBtn",value:function(){this._userId!==this._ownerId&&this._deleteBtn.remove()}},{key:"_getTemplate",value:function(){return this._templateSelector.content.querySelector(".element").cloneNode(!0)}},{key:"_toggleLike",value:function(){this._likeButton.classList.contains("element__like_active")?this._dislike(this._id):this._like(this._id)}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._toggleLike()})),this._deleteButton.addEventListener("click",(function(){t._handleDeleteButtonClick()})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._link,t._name)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__img"),this._catdTitle=this._element.querySelector(".element__title"),this._deleteButton=this._element.querySelector(".element__delete"),this._likeButton=this._element.querySelector(".element__like"),this._countLikeElement=this._cardElement.querySelector(".element__like-counter"),this._countLikeElement.textContent=this._likes.length,this._setEventListeners(),this._userLiked(),this._hasDeleteBtn(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._catdTitle.textContent=this._name,this._element}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showInfoError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id).concat(this._errorClass));t.classList.add(this._inputErrorClass),e.textContent=t.validationMessage}},{key:"_hideInfoError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id).concat(this._errorClass));t.classList.remove(this._inputErrorClass),e.textContent=""}},{key:"_checkInfoValidity",value:function(t){t.validity.valid?this._hideInfoError(t):this._showInfoError(t)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this._enableSubmitButton()}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInfoValidity(e),t._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInfoError(e)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupSelector=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupSelector.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__closed"))&&t.close()}))}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},p.apply(this,arguments)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(r);if(o){var n=m(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitForm=e,n._form=n._popupSelector.querySelector(".form"),n._formInputs=n._form.querySelectorAll(".form__info"),n._submitButton=n._form.querySelector(".form__save-button"),n._submitButtonText=n._submitButton.textContent,n}return e=u,(n=[{key:"load",value:function(t){this._submitButton.textContent=t?"Сохранение...":this._submitButtonText}},{key:"_getInputValues",value:function(){var t=this;return this._values={},this._formInputs.forEach((function(e){t._values[e.name]=e.value})),this._values}},{key:"setEventListeners",value:function(){var t=this;p(m(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitForm(t._getInputValues()),t.close()}))}},{key:"close",value:function(){p(m(u.prototype),"close",this).call(this),this._form.reset()}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(o){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._deleteButton=e._popupSelector.querySelector(".form"),e}return e=u,(n=[{key:"setSubmitCallback",value:function(t){this._handlerSubmitForm=t}},{key:"setEventListeners",value:function(){var t=this;k(g(u.prototype),"setEventListeners",this).call(this),this._deleteButton.addEventListener("submit",(function(e){e.preventDefault(),t._handlerSubmitForm()}))}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}var j=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"editProfile",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then((function(t){return e._checkResponse(t)}))}},{key:"addNewCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then((function(t){return e._checkResponse(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"putLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"deleteLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"editProfileAvatar",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(avatar)}).then((function(t){return e._checkResponse(t)}))}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),O=document.querySelector(".elements"),P=document.querySelector("#element-template"),L=(document.querySelector(".profile__edit-button"),document.querySelector(".profile__add-button")),I=(document.querySelector(".profile__avatar-button"),document.forms.editProfileForm),B=(I.elements.name,I.elements.job,document.forms.addCardForm),T=(document.forms.editAvatarForm,document.forms.deleteElement);function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var q=new j({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-63",headers:{authorization:"3b6ba49e-c6c2-4141-aac3-86d97f08d7ae","Content-Type":"application/json"}});Promise.all([q.getUserInfo(),q.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(s)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return R(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1],u=o.name,a=o.job,c=o.avatar,s=o._id;o.setUserId(s),o.setUserInfo({name:u,job:a}),o.setUserAvatar(c),x.setItems(i),x.renderItems()})).catch((function(t){console.log("Ошибка: ".concat(t))}));var U=new w(T);U.setEventListeners();var A=function(t){var e=new i(t,P,(function(t,e){popupShowCard.open(t,e)}),(function(){U.open(),U.setSubmitCallback((function(){var t=e.getCardId();q.deleteCard(t).then((function(){U.close(),e.deleteCard()})).catch((function(t){console.log("Ошибка: ".concat(t))}))}))}),(function(t){q.putLike(t).then((function(t){e.handleLikeCard(t)})).catch((function(t){console.log("Ошибка: ".concat(t))}))}),(function(t){q.deleteLike(t).then((function(t){e.handleLikeCard(t)})).catch((function(t){console.log("Ошибка: ".concat(t))}))}));return e.generateCard()},x=new n({items:[],renderer:A},O),D=new v(".popup_type_add-card",(function(t){var e=t.place,n=t.link;q.addNewCard({name:e,link:n}).then((function(t){x.addNewItem(A(t)),D.close()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){return D.load(!1)}))}));D.setEventListeners(),L.addEventListener("click",(function(){D.open(),N.resetValidation()}));var N=new c({formSelector:".form",inputSelector:".form__info",submitButtonSelector:".form__save-button",inactiveButtonClass:"form__save-button_disabled",inputErrorClass:"form__info_type_error",errorClass:"-error"},B);N.enableValidation()})();