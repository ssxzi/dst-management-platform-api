import{_ as P,r as $,X as U,o as C,d as k,e as I,i as d,Y as N,j as _,Z as j,u as B,g as F,c as H,J as M,A as p,f as a,w as r,t as u,m as R,V as q,Q as E,x as Z,$ as D,a0 as J,a1 as v}from"./index-Er8_s2TA.js";import{S as L,a as S}from"./tools-Cv-d-7it.js";const O={class:"sc-password-strength"},Q={__name:"index",props:{modelValue:{type:String,default:""}},setup(x){const m=x;let o=$(0);const f=t=>{let e=0,w=t.length>=6,l=/\d/.test(t),g=/[a-z]/.test(t),h=/[A-Z]/.test(t),n=!/(\w)\1{2}/.test(t),s=/[`~!@#$%^&*()_+<>?:"{},./;'[\]]/.test(t);if(t.length<=0)return e=0,o.value=e,!1;if(!w)return e=1,o.value=e,!1;l&&(e+=1),g&&(e+=1),h&&(e+=1),n&&(e+=1),s&&(e+=1),o.value=e};return U(()=>m.modelValue,(t,e)=>{f(t)},{immediate:!0}),C(()=>{f(m.modelValue)}),(t,e)=>(k(),I("div",O,[d("div",{class:N([`sc-password-strength-level-${_(o)}`,"sc-password-strength-bar"])},null,2)]))}},W=P(Q,[["__scopeId","data-v-e34f7d17"]]),X={class:"page-div"},Y={class:"card-header"},G={class:"parent"},K={class:"child",style:{"font-size":"28px"}},ee={class:"child",style:{"font-size":"14px",color:"#73767a","margin-top":"5px"}},se={class:"card-header"},oe={class:"el-form-item-msg"},te={style:{display:"flex","justify-content":"flex-end","padding-top":"80px"}},ae=q({name:"profile"}),le=Object.assign(ae,{setup(x){const m=j(),{t:o}=B(),f=m.userInfo,t=F(),e=H(()=>t.language),w=$(),l=M({password:"",passwordTwice:""}),g={password:[{required:!0,message:o("profile.plzInputPassword")}],passwordTwice:[{required:!0,message:o("profile.plzInputAgainPassword")},{validator:(n,s,i)=>{s!==l.password?i(new Error(o("profile.passwordNotMatch"))):i()}}]},h=()=>{w.value.validate(n=>{n&&E.updatePassword.post({password:L(l.password)}).then(async s=>{Z(s.message),await S(1e3),D(o("profile.passwordUpdated"),o("profile.passwordUpdatedTitle"),3e3),await S(3e3),J.clear(),v.remove("user"),v.remove("keepAlive"),v.remove("tabs"),window.location.replace("/")})})};return(n,s)=>{const i=p("el-card"),y=p("el-col"),V=p("el-input"),b=p("el-form-item"),T=p("el-button"),z=p("el-form"),A=p("el-row");return k(),I("div",X,[a(A,{gutter:10},{default:r(()=>[a(y,{span:12,lg:12,md:12,sm:24,xs:24,style:{"margin-top":"10px"}},{default:r(()=>[a(i,{style:{"min-height":"500px"}},{header:r(()=>[d("div",Y,u(_(o)("profile.cardHeaderInfo")),1)]),default:r(()=>[d("div",G,[d("div",K,u(e.value==="zh"?"管理员":"Admin"),1),d("div",ee,u(_(f).username),1)])]),_:1})]),_:1}),a(y,{span:12,lg:12,md:12,sm:24,xs:24,style:{"margin-top":"10px"}},{default:r(()=>[a(i,{style:{"min-height":"500px"}},{header:r(()=>[d("div",se,u(_(o)("profile.cardHeaderPassword")),1)]),default:r(()=>[a(z,{ref_key:"updatePasswordFormRef",ref:w,model:l,rules:g,"label-width":"150","label-position":"top",style:{"margin-top":"20px"}},{default:r(()=>[a(b,{label:n.$t("profile.password"),prop:"password"},{default:r(()=>[a(V,{modelValue:l.password,"onUpdate:modelValue":s[0]||(s[0]=c=>l.password=c),"show-password":""},null,8,["modelValue"]),a(W,{modelValue:l.password,"onUpdate:modelValue":s[1]||(s[1]=c=>l.password=c)},null,8,["modelValue"]),d("div",oe,u(_(o)("profile.suggestedPassword")),1)]),_:1},8,["label"]),a(b,{label:n.$t("profile.passwordTwice"),prop:"passwordTwice"},{default:r(()=>[a(V,{modelValue:l.passwordTwice,"onUpdate:modelValue":s[2]||(s[2]=c=>l.passwordTwice=c),"show-password":""},null,8,["modelValue"])]),_:1},8,["label"]),d("div",te,[a(T,{type:"primary",onClick:h},{default:r(()=>s[3]||(s[3]=[R("修改")])),_:1})])]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})])}}}),ne=P(le,[["__scopeId","data-v-bee730c5"]]);export{ne as default};
