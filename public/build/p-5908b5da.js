import{A as r}from"./p-811a61b7.js";const e=new class{async getDashboardCounts(){try{let e=await fetch(r.getAPIUrl()+"/admin/dashboard_counts",{headers:r.getHeaders()});if(!e.ok){if(401===e.status)throw new Error("You have been logged out.  Please log in an try again");throw new Error(e.statusText)}return await e.json()}catch(r){throw new Error(r.message)}}async getListings(e){try{const t=encodeURIComponent(JSON.stringify(Object.assign({},e)));let a=await fetch(r.getAPIUrl()+"/admin/listings?params="+t,{headers:r.getHeaders()});if(!a.ok){if(401===a.status)throw new Error("You have been logged out.  Please log in an try again");throw new Error(a.statusText)}return await a.json()}catch(r){throw new Error(r.message)}}async updateListing(e){try{let t=await fetch(r.getAPIUrl()+`/admin/apartments/${e.id}`,{method:"PATCH",body:JSON.stringify(e),headers:r.getHeaders()});if(!t.ok){if(401===t.status)throw new Error("You have been logged out.  Please log in an try again");throw new Error(t.statusText)}return(await t.json()).access_token}catch(r){throw new Error(r.message)}}async getAptOwners(){try{let e=await fetch(r.getAPIUrl()+"/admin/apt-owners",{headers:r.getHeaders()});if(!e.ok){if(401===e.status)throw new Error("You have been logged out.  Please log in an try again");throw new Error(e.statusText)}return await e.json()}catch(r){throw new Error(r.message)}}async updateOwnerGlobal(e){try{if(!e.owner_name)throw new Error("Owner Name is required");const t=encodeURIComponent(e.owner_name);let a=await fetch(r.getAPIUrl()+`/admin/owner-global/${t}`,{method:"POST",headers:r.getHeaders(),body:JSON.stringify(e)});if(!a.ok){if(401===a.status)throw new Error("You have been logged out.  Please log in an try again");throw new Error(a.statusText)}return await a.json()}catch(r){throw new Error(r.message)}}async getOwnerStats(e){const t=encodeURIComponent(e);try{let e=await fetch(r.getAPIUrl()+`/admin/owner-global/${t}`,{headers:r.getHeaders()});if(!e.ok){if(401===e.status)throw new Error("You have been logged out.  Please log in an try again");throw new Error(e.statusText)}return await e.json()}catch(r){throw new Error(r.message)}}async getAgents(){try{let e=await fetch(r.getAPIUrl()+"/admin/agents",{headers:r.getHeaders()});if(!e.ok){if(401===e.status)throw new Error("You have been logged out.  Please log in an try again");throw new Error(e.statusText)}return await e.json()}catch(r){throw new Error(r.message)}}async getAgent(e){try{let t=await fetch(r.getAPIUrl()+"/admin/agent/"+e,{headers:r.getHeaders()});if(!t.ok)throw new Error(t.statusText);return await t.json()}catch(r){throw new Error(r.message)}}async updateAgent(e){const t=e.hasOwnProperty("id")&&e.id?"PATCH":"POST",a=e.hasOwnProperty("id")&&e.id?`${r.getAPIUrl()}/admin/agent/${e.id}`:`${r.getAPIUrl()}/admin/agent`;try{let n=await fetch(a,{headers:r.getHeaders(),method:t,body:JSON.stringify(e)});const o=await n.json();if(!n.ok){if(o&&o.errors){const r=[];throw Object.keys(o.errors).forEach(e=>r.push(o.errors[e][0])),new Error(r.join("\n"))}if(o&&o.message)throw new Error(o.message);throw new Error(n.statusText)}return o}catch(r){throw new Error(r.message)}}async deleteAgent(e){try{let t=await fetch(`${r.getAPIUrl()}/admin/agents/${e}`,{headers:r.getHeaders(),method:"DELETE"});const a=await t.json();if(!t.ok){if(a&&a.errors)return{success:!1,errors:a.errors};if(a&&a.message)throw new Error(a.message);throw new Error(t.statusText)}return{success:!0}}catch(r){throw new Error(r.message)}}async getReferrals(e){try{const t=encodeURIComponent(JSON.stringify(Object.assign({},e)));let a=await fetch(r.getAPIUrl()+"/admin/referrals?params="+t,{headers:r.getHeaders()});if(!a.ok){if(401===a.status)throw new Error("You have been logged out.  Please log in an try again");throw new Error(a.statusText)}return await a.json()}catch(r){throw new Error(r.message)}}async deleteReferral(e){try{let t=await fetch(`${r.getAPIUrl()}/admin/referral/${e}`,{headers:r.getHeaders(),method:"DELETE"});const a=await t.json();if(!t.ok){if(a&&a.errors)return{success:!1,errors:a.errors};if(a&&a.message)throw new Error(a.message);throw new Error(t.statusText)}return{success:!0}}catch(r){throw new Error(r.message)}}};export{e as A};