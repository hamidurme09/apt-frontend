System.register(["./p-c9001ae9.system.js","./p-53678cca.system.js","./p-69f5d316.system.js","./p-32fd337e.system.js","./p-fb64dbc4.system.js","./p-57233c53.system.js","./p-a55517c8.system.js","./p-5b18349f.system.js","./p-523bf5f5.system.js","./p-2a28951d.system.js"],(function(t){"use strict";var e,n,i,r,o,s,a,l;return{setters:[function(t){e=t.r;n=t.c;i=t.h},function(){},function(){},function(){},function(){},function(t){r=t.a},function(t){o=t.R},function(t){s=t.a},function(t){a=t.I},function(t){l=t.T}],execute:function(){var u=t("page_login",function(){function t(t){e(this,t);this.loading=false;this.isDirty=false;this.errors=[];this.store=n(this,"store")}t.prototype.componentWillLoad=function(){this.store.mapStateToProps(this,(function(t){return{loading:r.getIsLoading(t),loginError:r.getLoginError(t),isLoggedIn:r.isLoggedIn(t)}}));this.store.mapDispatchToProps(this,{loginAction:s})};t.prototype.loginErrorChanged=function(){if(this.loginError){var t=this.loginError;if(t==="Unauthorized"){t="Could not log in. Please check your email/password."}return l.error(t)}};t.prototype.loginChanged=function(){if(this.isLoggedIn){l.success("You have been logged in");console.log("back to admin");o.forward("/admin")}};t.prototype.validateDirtyInputs=function(){if(!this.isDirty){return true}return this.validate()};t.prototype.validate=function(){var t=[];if(!this.email.value){t.push("Please enter an email address")}else{if(!a.validate(this.email.value)){t.push("Please enter a valid email address")}}if(!this.password.value){t.push("Please enter your password")}this.errors=t;return!t.length};t.prototype.login=function(){this.isDirty=true;if(!this.validate()){return}this.loginAction(this.email.value,this.password.value)};t.prototype.render=function(){var t=this;return[i("ion-content",null,i("app-header",null),i("section",{class:"section page-login"},i("div",{class:"login-form"}),i("h1",{class:"title text-center"},"Log In"),i("form",{onSubmit:function(e){e.preventDefault();t.login()}},i("input",{type:"email",name:"email",value:"",class:"apt212-input block",placeholder:"Email",ref:function(e){return t.email=e},onChange:function(){return t.validateDirtyInputs()}}),i("input",{type:"password",name:"password",value:"",class:"apt212-input block",placeholder:"Password",ref:function(e){return t.password=e},onChange:function(){return t.validateDirtyInputs()}}),this.errors.length?i("div",{class:"errors"},this.errors.map((function(t){return i("div",null,t)}))):null,i("button",{type:"submit",class:"button-dark block login-submit",onClick:function(){return t.login()},disabled:this.loading},"Log In",this.loading?i("ion-spinner",{name:"lines",color:"light"}):null))),i("app-footer",null))]};Object.defineProperty(t,"watchers",{get:function(){return{loginError:["loginErrorChanged"],isLoggedIn:["loginChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".page-login .login-submit{height:59px;font-size:16px}.page-login .errors{color:red;padding-bottom:12px}.page-login button ion-spinner{display:inline-block;vertical-align:middle;margin-left:1rem}"},enumerable:true,configurable:true});return t}())}}}));