(this.webpackJsonpfoodtopia=this.webpackJsonpfoodtopia||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(30),l=a.n(c),s=a(7),o=(a(58),a(59),a(60),a(1)),i=a(2),u=a(4),m=a(3),d=a(8),p=a(21),h=(a(72),function(e){var t=e.user;return n.a.createElement("nav",{className:"topnav container-nav",id:"navbar"},n.a.createElement("div",{className:"wrapper"},n.a.createElement(s.b,{className:"navbar-brand",to:"/"},"FoodTopia"),n.a.createElement(s.b,{to:"",className:"icon nav-link"},n.a.createElement("i",{class:"fa fa-bars","aria-hidden":"true"})),n.a.createElement(s.c,{className:"nav-item nav-link",to:""},"ContactUs"),n.a.createElement(s.c,{className:"nav-item nav-link active",to:""},"About Us"),!t&&n.a.createElement(n.a.Fragment,null,n.a.createElement(s.c,{className:"nav-item nav-link",to:"/register"},"Register"),n.a.createElement(s.c,{className:"nav-item nav-link",to:"/login"},"Login")),t&&n.a.createElement(n.a.Fragment,null,n.a.createElement(s.c,{className:"nav-item nav-link",to:"/logout"},"Logout"),n.a.createElement(s.c,{className:"nav-item nav-link",to:"/orders"},t.name))))}),g=(a(75),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("a",{className:"icon",href:"#"},n.a.createElement("i",{class:"fa fa-facebook","aria-hidden":"true"})),n.a.createElement("a",{className:"icon",href:"#"},n.a.createElement("i",{class:"fa fa-twitter","aria-hidden":"true"})),n.a.createElement("a",{className:"icon",href:"#"},n.a.createElement("i",{class:"fa fa-instagram","aria-hidden":"true"})),n.a.createElement("a",{className:"icon",href:"#"},n.a.createElement("i",{class:"fa fa-linkedin","aria-hidden":"true"})),n.a.createElement("a",{className:"icon",href:"#"},n.a.createElement("i",{class:"fa fa-envelope-o","aria-hidden":"true"})),n.a.createElement("p",null,n.a.createElement("i",{class:"fa fa-copyright","aria-hidden":"true"})," 2020 Elisha George. Created using React.js"))))))}}]),a}(r.Component)),v=a(47),b=a.n(v),f=a(48),E=a.n(f),y=a(49),w=a.n(y),k=(a(76),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleClick=function(){e.props.history.push("/menuPage")},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h3",{style:{marginTop:"4rem",textAlign:"center"}},"Register to start exploring!!"),n.a.createElement("div",{className:"home-container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-4"},n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("img",{className:"card-img-top",style:{width:"286px",height:"180px"},src:b.a,alt:"Card image cap"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Card title"),n.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement(s.b,{to:"#",className:"btn btn-primary",onClick:this.handleClick},"Explore Now")))),n.a.createElement("div",{className:"col-4"},n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("img",{className:"card-img-top",style:{width:"286px",height:"180px"},src:E.a,alt:"Card image cap"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Card title"),n.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement(s.b,{to:"#",className:"btn btn-primary",onClick:this.handleClick},"Explore Now")))),n.a.createElement("div",{className:"col-3"},n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("img",{className:"card-img-top",style:{width:"286px",height:"180px"},src:w.a,alt:"Card image cap"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Card title"),n.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement(s.b,{to:"#",className:"btn btn-primary",onClick:this.handleClick},"Explore Now")))))))}}]),a}(r.Component)),j=a(5),N=a.n(j),O=a(12),x=a(10),S=a(6),C=a.n(S),P=a(22),A=a(50),R=function(e){return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:e.name},e.label),n.a.createElement("input",{value:e.value,id:e.name,type:e.type,className:"form-control",name:e.name,onChange:e.onChange}),e.errors&&n.a.createElement("div",{className:"alert alert-danger"},e.errors))},T=a(26),I=function(e){var t=e.name,a=e.options,r=e.label,c=e.errors,l=Object(T.a)(e,["name","options","label","errors"]);return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:t},r),n.a.createElement("select",Object.assign({name:t,id:t},l,{className:"form-control"}),n.a.createElement("option",{value:""}),a.map((function(e){return n.a.createElement("option",{value:e._id,key:e._id},e.name)}))),c&&n.a.createElement("div",{className:"alert alert-danger"},c))},U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},errors:{}},e.validate=function(){var t=C.a.validate(e.state.data,e.Schema,{abortEarly:!1}).error;if(!t)return null;var a,r={},n=Object(A.a)(t.details);try{for(n.s();!(a=n.n()).done;){var c=a.value;r[c.path[0]]=c.message}}catch(l){n.e(l)}finally{n.f()}return r},e.validateProperty=function(t){var a=t.name,r=t.value,n=Object(P.a)({},a,r),c=Object(P.a)({},a,e.Schema[a]),l=C.a.validate(n,c).error;return l&&l?l.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({errors:a||{}}),a||e.doSubmit()},e.handleChange=function(t){var a=Object(O.a)({},e.state.errors),r=e.validateProperty(t.currentTarget);a[t.currentTarget.name]=r||"";var n=Object(O.a)({},e.state.data);n[t.currentTarget.name]=t.currentTarget.value,e.setState({data:n,errors:a})},e}return Object(i.a)(a,[{key:"renderButton",value:function(e){return n.a.createElement("button",{disabled:this.validate(),className:"btn btn-primary"},e)}},{key:"renderInput",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",r=this.state,c=r.data,l=r.errors;return n.a.createElement(R,{type:a,value:c[e],onChange:this.handleChange,name:e,label:t,errors:l[e]})}},{key:"renderSelect",value:function(e,t,a){var r=this.state,c=r.data,l=r.errors;return n.a.createElement(I,{name:e,value:c[e],label:t,options:a,onChange:this.handleChange,errors:l[e]})}}]),a}(r.Component),q=a(20),M=a.n(q);M.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(console.log(e),p.toast.error("An unexpected error occurrred.")),Promise.reject(e)}));var _={get:M.a.get,post:M.a.post,put:M.a.put,delete:M.a.delete,setJwt:function(e){return M.a.defaults.headers.common["x-auth-token"]=e}},D=a(13),B=a(51),F=a.n(B),J=D.apiUrl+"/auth";function L(){return(L=Object(x.a)(N.a.mark((function e(t,a){var r,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.post(J,{email:t,password:a});case 2:r=e.sent,n=r.data,localStorage.setItem("token",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return localStorage.getItem("token")}_.setJwt(W());var V={login:function(e,t){return L.apply(this,arguments)},loginWithJwt:function(e){localStorage.setItem("token",e)},logout:function(){localStorage.removeItem("token")},getCurrentUser:function(){try{var e=localStorage.getItem("token");return F()(e)}catch(t){return null}},getJwt:W},z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).Schema={email:C.a.string().required().label("Email").email(),password:C.a.string().required().label("Password")},r.doSubmit=Object(x.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=r.state.data,e.next=4,V.login(t.email,t.password);case 4:window.location="/menuPage",e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&((a=Object(O.a)({},r.state.errors)).email=e.t0.response.data,r.setState({errors:a}));case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),r.state={data:{email:"",password:""},errors:{}},r}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:{marginTop:"4rem"}},n.a.createElement("h3",{style:{textAlign:"center"}},"Restraunt/User Login"),n.a.createElement("form",{onSubmit:this.handleSubmit,style:{marginBottom:"7.5rem"}},this.renderInput("email","Email"),this.renderInput("password","Password","password"),this.renderButton("Login")))}}]),a}(U),Q=function(){return n.a.createElement("div",{style:{marginTop:"11rem",marginBottom:"8.5rem",textAlign:"center"},className:"col"},n.a.createElement(s.b,{className:"btn btn-primary",to:"/userRegisterForm"},"User Register"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(s.b,{className:"btn btn-primary",to:"/restrauntRegisterForm"},"Restraunt Register"))},G=D.apiUrl+"/user";function Y(e){return _.post(G,{email:e.email,password:e.password,name:e.name,role:e.role})}var $=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{name:"",email:"",password:"",role:"User"},errors:{}},e.Schema={email:C.a.string().required().label("Email").email(),name:C.a.string().required().label("Name"),password:C.a.string().required().label("Password").min(5),role:C.a.string().required().label("Role")},e.doSubmit=Object(x.a)(N.a.mark((function t(){var a,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y(e.state.data);case 3:a=t.sent,console.log(a),V.loginWithJwt(a.headers["x-auth-token"]),window.location="/menuPage",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((r=Object(O.a)({},e.state.errors)).email=t.t0.response.data,e.setState({errors:r}));case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"col",style:{marginTop:"4rem"}},n.a.createElement("h3",{style:{textAlign:"center"}},"Registration Form For Users"),n.a.createElement("form",{onSubmit:this.handleSubmit,style:{marginBottom:"2rem"}},this.renderInput("email","Email"),this.renderInput("password","Password","password"),this.renderInput("name","Name"),this.renderInput("role","Role"),this.renderButton("Register")))}}]),a}(U),H=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{name:"",email:"",password:"",role:"Admin"},errors:{}},e.Schema={name:C.a.string().required().label("Name"),email:C.a.string().required().label("Email").email({minDomainAtoms:2}),password:C.a.string().required().label("Password").min(5),role:C.a.string().required().label("Role")},e.doSubmit=Object(x.a)(N.a.mark((function t(){var a,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y(e.state.data);case 3:a=t.sent,V.loginWithJwt(a.headers["x-auth-token"]),window.location="/menuPage",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((r=Object(O.a)({},e.state.errors)).email=t.t0.response.data,e.setState({errors:r}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"col",style:{marginTop:"4rem"}},n.a.createElement("h3",{style:{textAlign:"center"}},"Registration Form For Restraunt Managers"),n.a.createElement("form",{onSubmit:this.handleSubmit,style:{marginBottom:"2rem"}},this.renderInput("email","Email"),this.renderInput("password","Password","password"),this.renderInput("name","Name"),this.renderInput("role","Role"),this.renderButton("Register")))}}]),a}(U),K=D.apiUrl+"/meals";function X(e){return _.post(K,e)}var Z=a(11),ee=a.n(Z),te=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.count,a=e.pageSize,r=e.currentPage,c=e.onClick,l=Math.ceil(t/a),s=ee.a.range(1,l+1);return 1===l?null:n.a.createElement("nav",{"aria-label":"Page navigation example"},n.a.createElement("ul",{className:"pagination"},s.map((function(e){return n.a.createElement("li",{key:e,className:e===r?"page-item active":"page-item"},n.a.createElement("a",{className:"page-link",onClick:function(){return c(e)}},e))}))))}}]),a}(r.Component);var ae=function(e){var t=e.value,a=e.onChange;return n.a.createElement("input",{type:"text",name:"query",placeholder:"Search...",value:t,className:"form-control",onChange:a})},re=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={user:{},id:""},e.handleClick=function(t){e.state.user||(window.location="/login")},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=V.getCurrentUser();this.setState({user:e||{}}),console.log(this.state.user)}},{key:"render",value:function(){var e=this,t=this.props.data,a=this.state.user;return n.a.createElement("table",{className:"table",style:{marginTop:"2rem"}},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"MEALS"),n.a.createElement("th",null,"PRICE"),n.a.createElement("th",null,"CATEGORY"),n.a.createElement("th",null,"RESTRAUNT"),n.a.createElement("th",null))),n.a.createElement("tbody",null,t.map((function(t){return n.a.createElement("tr",{key:t._id},n.a.createElement("td",null,ee.a.get(t,"name","[Name Unknown]")),n.a.createElement("td",null,t.price),n.a.createElement("td",null,t.category),n.a.createElement("td",null,n.a.createElement(s.b,{to:"/restraunt/".concat(ee.a.get(t,"restaurant[0]._id"))},ee.a.get(t,"restaurant[0].name"))),!a||"User"==a.role&&n.a.createElement("td",null,n.a.createElement(s.b,{className:"btn btn-primary",onClick:function(){return e.handleClick(t._id)}},"Add to Cart")),a&&"Admin"==a.role&&n.a.createElement("td",null,n.a.createElement(s.b,{className:"btn btn-success",to:"/addMenuPage/".concat(ee.a.get(t,"restaurant[0]._id"))},"Add Meal")))}))))}}]),a}(r.Component),ne=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={meals:[],restaurant:[],pageSize:4,currentPage:1,searchQuery:"",user:{}},e.handlePagination=function(t){e.setState({currentPage:t})},e.handleSearch=function(t){e.setState({searchQuery:t.currentTarget.value,currentPage:1})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(x.a)(N.a.mark((function e(){var t,a,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.get(K);case 2:t=e.sent,a=t.data,console.log(a),this.setState({meals:a}),r=V.getCurrentUser(),this.setState({user:r||{}}),console.log(this.state.user);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.pageSize,a=e.currentPage,r=e.meals,c=e.searchQuery,l=e.user;e.role;if(0===this.state.meals.length)return n.a.createElement("h4",{className:"head"},"There are no meals in the Database");var o=r;c&&(o=r.filter((function(e){return e.name.toLowerCase().startsWith(c.toLowerCase())})));var i=function(e,t,a){var r=(t-1)*a;return ee()(e).slice(r).take(a).value()}(o,a,t);return n.a.createElement("div",{style:{marginTop:"4rem"}},n.a.createElement("div",{className:"d-flex justify-content-between align-items-baseline"},n.a.createElement("h3",{style:{marginBottom:"2rem"}},"Click your Pick !!"),l&&"Admin"==l.role&&n.a.createElement(s.b,{className:"btn btn-danger",to:"/restraunt/new"},"Add New Restraunt")),n.a.createElement(ae,{onChange:this.handleSearch,value:c}),n.a.createElement(re,{data:i}),n.a.createElement(te,{count:this.state.meals.length,pageSize:t,currentPage:a,onClick:this.handlePagination}))}}]),a}(r.Component);function ce(e){return _.get(D.apiUrl+"/restraunt/"+e)}function le(e){if(e._id){var t=Object(O.a)({},e);return delete t._id,_.put(D.apiUrl+"/restraunt/"+e._id,t)}return _.post(D.apiUrl+"/restraunt",e)}var se=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={errors:{},data:{name:"",type:"",description:""}},e.Schema={_id:C.a.string(),name:C.a.string().required().label("Name"),type:C.a.string().required().label("Restraunt Type"),description:C.a.string().required().label("Description")},e.doSubmit=Object(x.a)(N.a.mark((function t(){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le(e.state.data);case 2:window.location="/menuPage";case 3:case"end":return t.stop()}}),t)}))),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(x.a)(N.a.mark((function e(){var t,a,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"!==(t=this.props.match.params.id)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,ce(t);case 5:a=e.sent,r=a.data,console.log(r),this.setState({data:this.mapToViewModel(r)});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mapToViewModel",value:function(e){return{_id:e._id,name:e.name,type:e.type,description:e.description}}},{key:"render",value:function(){return n.a.createElement("div",{style:{marginTop:"4rem"}},n.a.createElement("h3",{style:{textAlign:"center"}},"Restraunt Details"),n.a.createElement("form",{onSubmit:this.handleSubmit,style:{marginBottom:"2rem"}},this.renderInput("name","Name"),this.renderInput("type","Type"),this.renderInput("description","Description"),this.renderButton("Save")))}}]),a}(U),oe=a(52),ie=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{name:"",price:"",description:"",category:"Veg/Non-veg"},errors:{},restaurant:[]},e.doSubmit=Object(x.a)(N.a.mark((function t(){var a,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.state.data),a=Object(oe.a)(e.state.restaurant),r=Object(O.a)(Object(O.a)({},e.state.data),{},{restaurant:a}),console.log(r),t.next=6,X(r);case 6:window.location="/menuPage";case 7:case"end":return t.stop()}}),t)}))),e.Schema={_id:C.a.string(),name:C.a.string().required().label("Name"),price:C.a.number().required().label("Price"),description:C.a.string().required().label("Description"),category:C.a.string().required().label("Category")},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(x.a)(N.a.mark((function e(){var t,a,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,ce(t);case 3:a=e.sent,r=a.data,console.log(r),this.setState({restaurant:[this.mapToViewModelRestraunt(r)]}),console.log(this.state.restaurant);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mapToViewModelRestraunt",value:function(e){return{name:e.name,type:e.type,description:e.description}}},{key:"render",value:function(){return n.a.createElement("div",{style:{marginTop:"4rem"},className:"col"},n.a.createElement("h3",{style:{textAlign:"center"}},"Add Meal Details"),n.a.createElement("form",{onSubmit:this.handleSubmit,style:{marginBottom:"2rem"}},this.renderInput("name","Name"),this.renderInput("price","Price"),this.renderInput("description","Description"),this.renderInput("category","Category"),this.renderButton("Save")))}}]),a}(U),ue=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){V.logout(),window.location="/menuPage"}},{key:"render",value:function(){return null}}]),a}(r.Component),me=function(){return n.a.createElement("h1",{style:{marginTop:"4rem"}},"Not Found")},de=function(e){var t=e.component,a=e.render,r=Object(T.a)(e,["component","render"]);return n.a.createElement(d.b,Object.assign({},r,{render:function(e){return V.getCurrentUser()?t?n.a.createElement(t,e):a(e):n.a.createElement(d.a,{to:"/login"})}}))},pe=(a(100),D.apiUrl+"/order");var he=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(x.a)(N.a.mark((function e(){var t,a,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V.getCurrentUser(),e.next=3,_.get(pe);case 3:t=e.sent,a=t.data,r=ee.a.get(a,"[3].user._id"),console.log(r),this.setState({data:a});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return n.a.createElement("div",{className:"col",style:{marginTop:"4rem"}},n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("th",null,"Restaurant Name"),n.a.createElement("th",null,"Item Ordered"),n.a.createElement("th",null,"Price"),n.a.createElement("th",null,"Category")),n.a.createElement("tbody",null,e.map((function(e){return n.a.createElement("tr",{key:e._id},n.a.createElement("td",null,ee.a.get(e,"restaurant.name")),n.a.createElement("td",null,ee.a.get(e,"meal[0].name")),n.a.createElement("td",null,ee.a.get(e,"meal[0].price")),n.a.createElement("td",null,ee.a.get(e,"meal[0].category")))})))))}}]),a}(r.Component),ge=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=V.getCurrentUser();console.log(e),this.setState({user:e})}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.ToastContainer,null),n.a.createElement(h,{user:this.state.user}),n.a.createElement("main",{className:"container"},n.a.createElement(d.d,null,n.a.createElement(de,{path:"/order",component:he}),n.a.createElement(de,{path:"/addMenuPage/:id",component:ie}),n.a.createElement(de,{path:"/restraunt/:id",component:se}),n.a.createElement(d.b,{path:"/menuPage",render:function(t){return n.a.createElement(ne,Object.assign({},t,{user:e.state.user}))}}),n.a.createElement(d.b,{path:"/login",component:z}),n.a.createElement(d.b,{path:"/logout",component:ue}),n.a.createElement(d.b,{path:"/register",component:Q}),n.a.createElement(d.b,{path:"/restrauntRegisterForm",component:H}),n.a.createElement(d.b,{path:"/userRegisterForm",component:$}),n.a.createElement(d.b,{path:"/not-found",component:me}),n.a.createElement(d.b,{path:"/",exact:!0,component:k}))),n.a.createElement(g,null))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(s.a,null,n.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},13:function(e){e.exports=JSON.parse('{"apiUrl":"http://localhost:3900/api"}')},47:function(e,t,a){e.exports=a.p+"static/media/card_1.b5066171.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/card_2.4cd6b9f9.jpg"},49:function(e,t,a){e.exports=a.p+"static/media/card_3.9eef2f2f.jpg"},53:function(e,t,a){e.exports=a(101)},60:function(e,t,a){},72:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.7944959d.chunk.js.map