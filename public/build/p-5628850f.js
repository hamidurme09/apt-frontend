const t=window.localStorage,s=()=>{try{const s=t.getItem("state");if(null==s)return;return JSON.parse(s)}catch(t){return}},r=s=>{let r=(({auth:t,wishlist:s})=>({auth:t,wishlist:s}))(s);try{t.setItem("state",JSON.stringify(r))}catch(t){console.log(t)}};export{s as l,r as s};