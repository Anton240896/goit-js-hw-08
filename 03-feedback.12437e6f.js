!function(){var e,t=document.querySelector(".feedback-form"),a="feedback-form-state";t.addEventListener("input",(function(e){o[e.target.name]=e.target.value,localStorage.setItem(a,JSON.stringify(o))})),t.addEventListener("submit",(function(e){e.preventDefault(),console.log(o),t.reset(),localStorage.removeItem(a),o={}}));var l,n,o=null!==(e=JSON.parse(localStorage.getItem(a)))&&void 0!==e?e:{},r=t.elements,i=r.email,m=r.message;i.value=null!==(l=o.email)&&void 0!==l?l:"",m.value=null!==(n=o.message)&&void 0!==n?n:""}();
//# sourceMappingURL=03-feedback.12437e6f.js.map