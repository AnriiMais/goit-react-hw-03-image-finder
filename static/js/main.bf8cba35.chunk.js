(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={overlay:"Modal_overlay__155Z0",modal:"Modal_modal__1ivZu",modalImage:"Modal_modalImage__IxRuU",modalBtnClose:"Modal_modalBtnClose__1-GWx"}},19:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2kVTF",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2IvyP"}},37:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__cmRN4"}},38:function(e,t,a){e.exports={Button:"Button_Button__VNThX"}},43:function(e,t,a){},45:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var r,n,o=a(0),c=a.n(o),l=a(4),i=a.n(l),s=(a(43),a(20)),u=a(5),m=a(6),g=a(8),h=a(7),d=a(14),p=(a(44),a(45),a(31)),b=a(2),f=a(32),j=a(1),y=b.a.div(r||(r=Object(p.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate (-50%, -50%);\n"]))),O=function(){return Object(j.jsx)(y,{children:Object(j.jsx)(f.a,{})})},v=["title","titleId"];function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},I.apply(this,arguments)}function x(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function _(e,t){var a=e.title,r=e.titleId,c=x(e,v);return o.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",width:25,height:25,viewBox:"0 0 32 32",ref:t,"aria-labelledby":r},c),void 0===a?o.createElement("title",{id:r},"Close"):a?o.createElement("title",{id:r},a):null,n||(n=o.createElement("path",{d:"M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"})))}var S=o.forwardRef(_),w=(a.p,a(10)),C=a.n(w),k=document.querySelector("#modal-root"),F=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).componentDidMount=function(){window.addEventListener("keydown",e.handleKeyPress)},e.componentWillUnmount=function(){window.removeEventListener("keydown",e.handleKeyPress)},e.handleKeyPress=function(t){"Escape"===t.code&&e.props.onClickToggle()},e.handleClickOverlay=function(t){t.target===t.currentTarget&&e.props.onClickToggle()},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onClickToggle,a=e.modalImageUrl;return Object(l.createPortal)(Object(j.jsx)("div",{className:C.a.overlay,onClick:this.handleClickOverlay,children:Object(j.jsxs)("div",{className:C.a.modal,children:[Object(j.jsx)("img",{src:a,alt:"",className:C.a.modalImage}),Object(j.jsx)("button",{type:"button",className:C.a.modalBtnClose,onClick:t,children:Object(j.jsx)(S,{})})]})}),k)}}]),a}(o.Component),B=a(36),M=a(15),q=a.n(M);q.a.defaults.baseURL="https://pixabay.com/api/";var N=function(e){var t,a=e.query,r=e.page;return t={q:a,page:r,image_type:"photo",orientation:"horizontal",per_page:12},q.a.defaults.params=Object(B.a)({key:"24241606-9742d85c442620a082ce02ff4"},t),q.a.get().then((function(e){return e.status>=200&&e.status<399?e.data:Promise.reject(new Error("Oops something wrong..."))})).catch((function(e){throw e}))},L=a(13),T=a(9),G=a.n(T),P=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleQueryForm=function(t){var a=t.target,r=a.name,n=a.value;e.setState(Object(L.a)({},r,n))},e.submitQueryForm=function(t){t.preventDefault(),""!==e.state.query.trim()?(e.props.getOnSubmit(e.state.query.toLowerCase()),e.setState({query:""})):d.b.warn("Please enter text",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(j.jsx)("header",{className:G.a.Searchbar,children:Object(j.jsxs)("form",{className:G.a.SearchForm,onSubmit:this.submitQueryForm,children:[Object(j.jsx)("button",{type:"submit",className:G.a.SearchFormButton,children:Object(j.jsx)("span",{className:G.a.SearchFormButtonLabel,children:"Search"})}),Object(j.jsx)("input",{className:G.a.SearchFormInput,type:"text",autoComplete:"off",name:"query",value:e,autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleQueryForm})]})})}}]),a}(o.Component),E=a(37),A=a.n(E),U=a(19),Q=a.n(U);function R(e){var t=e.imgData,a=e.onClickModal,r=e.setModalImage,n=t.webformatURL,o=t.largeImageURL;return Object(j.jsx)("li",{className:Q.a.ImageGalleryItem,children:Object(j.jsx)("img",{src:n,alt:"thumb",className:Q.a.ImageGalleryItemImage,onClick:function(){a(),r(o)}})})}function D(e){var t=e.data,a=e.handleToggleForImage,r=e.setModalImage;return Object(j.jsx)("ul",{className:A.a.ImageGallery,children:t.map((function(e){return Object(j.jsx)(R,{imgData:e,onClickModal:a,setModalImage:r},e.id)}))})}var J=a(38),K=a.n(J);function Z(e){var t=e.onClickBtn;return Object(j.jsx)("button",{className:K.a.Button,type:"button",onClick:function(){return t()},children:"Load more"})}var z=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).per_page=12,e.state={isActiveModal:!1,isLoading:!1,hits:[],page:1,query:"",error:null,modalImage:""},e.componentDidUpdate=function(t,a){var r=e.state,n=r.query,o=r.page;a.query===e.state.query&&a.page===e.state.page||N({query:n,page:o}).catch((function(t){return e.setState({error:t})})).then((function(t){var a=t.hits;return e.setState((function(e){return{hits:[].concat(Object(s.a)(e.hits),Object(s.a)(a))}}))})).finally((function(){return e.setState({isLoading:!1})})),a.hits!==e.state.hits&&1!==a.page&&window.scrollTo({top:document.documentElement.offsetHeight,behavior:"smooth"})},e.getQueryOnSubmit=function(t){e.state.query!==t&&e.setState({query:t,hits:[],page:1,isLoading:!0})},e.handleToggle=function(t){var a=e.state.isActiveModal;e.setState({isActiveModal:!a})},e.onClickChangePage=function(){e.setState((function(e){return{page:e.page+1,isLoading:!0}}))},e.setModalImage=function(t){e.setState({modalImage:t})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isActiveModal,a=e.hits,r=e.isLoading,n=e.error,o=e.modalImage;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(P,{getOnSubmit:this.getQueryOnSubmit}),n&&Object(j.jsx)("h1",{children:n.message}),t&&Object(j.jsx)(F,{onClickToggle:this.handleToggle,modalImageUrl:o}),r&&Object(j.jsx)(O,{}),a&&a.length>0&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(D,{data:a,handleToggleForImage:this.handleToggle,setModalImage:this.setModalImage}),a.length>=this.per_page&&Object(j.jsx)(Z,{onClickBtn:this.onClickChangePage})]}),Object(j.jsx)(d.a,{})]})}}]),a}(o.Component);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3fmI3",SearchForm:"Searchbar_SearchForm__14ffJ",SearchFormButton:"Searchbar_SearchFormButton__1u0ZY",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3bBjf",SearchFormInput:"Searchbar_SearchFormInput__d0tTA"}}},[[67,1,2]]]);
//# sourceMappingURL=main.bf8cba35.chunk.js.map