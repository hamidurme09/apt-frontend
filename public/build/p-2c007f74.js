const t=new class{success(t){this.createToast(t,{color:"success"})}error(t,e){let o={color:"error"};e&&(o=Object.assign(Object.assign({},o),e)),this.createToast(t,o)}createToast(t,e={}){const o=document.createElement("apt212-toast");return o.message=t,o.duration=e.hasOwnProperty("duration")?e.duration:5e3,o.color=e.hasOwnProperty("color")?e.color:"neutral",document.body.appendChild(o),o.present()}};export{t as T};