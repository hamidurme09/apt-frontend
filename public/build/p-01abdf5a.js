import{A as t}from"./p-1ba263c2.js";import{A as a}from"./p-811a61b7.js";const r=new class{async login(t,r){try{let e={username:t,password:r},o=await fetch(a.getAPIUrl()+"/auth",{method:"POST",body:JSON.stringify(e),headers:a.getHeaders()});if(!o.ok)throw new Error(o.statusText);return(await o.json()).access_token}catch(t){throw new Error(t.message)}}async logout(){try{let t=a.getHeaders();return a.removeAccessToken(),await fetch(a.getAPIUrl()+"/logout",{method:"POST",headers:t})}catch(t){throw new Error(t)}}async getUser(){try{let t=await fetch(a.getAPIUrl()+"/user",{headers:a.getHeaders()});if(!t.ok)throw new Error(t.statusText);return await t.json()}catch(t){throw new Error(t)}}};function e(t,e){return async o=>{o(c());try{let c=await r.login(t,e);a.setAccessToken(c);let s=await r.getUser();o(n(s,c)),o(y())}catch(t){o(s(t))}}}function o(){return async a=>{a({type:t.LOGOUT}),a(y());try{r.logout()}catch(t){}}}const c=()=>async a=>a({type:t.LOGIN_BEGIN}),s=a=>async r=>r({type:t.LOGIN_FAIL,payload:a}),n=(a,r)=>async e=>e({type:t.LOGIN_SUCCESS,payload:{user:a,access_token:r}}),y=()=>async(a,r)=>a({type:t.SAVE_STATE,payload:r()});export{e as a,o as l};