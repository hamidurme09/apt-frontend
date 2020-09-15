import{r as t,j as i,h as s}from"./p-f5b6b644.js";import"./p-19ec51eb.js";import"./p-811a61b7.js";import"./p-74149bb1.js";import{a}from"./p-08706a58.js";import{i as r}from"./p-0850846a.js";import{T as e}from"./p-2c007f74.js";import{A as o}from"./p-d2e35ecb.js";const n=class{constructor(s){t(this,s),this.updateSuccess=i(this,"updateSuccess",7)}componentDidLoad(){this.input.focus()}async handleSubmit(t){if(t.preventDefault(),!/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(this.input.value))return void e.error("Invalid date format");const i=this.input.value.split("."),s={id:this.item.id,available_date:a(`${i[0]}/${i[1]}/${i[2]}`,"m/d/Y")};try{const t=await o.updateApt(s);this.updateSuccess.emit(t)}catch(t){e.error(t.message)}}render(){return s("form",{class:"listing-availability-form",onSubmit:t=>this.handleSubmit(t),ref:t=>this.form=t},s("input",{type:"text",name:"availability",value:a(this.item.available_date),autofocus:!0,ref:t=>this.input=t,onChange:t=>this.handleSubmit(t)}))}static get style(){return".listing-availability-form{width:100%}.listing-availability-form input{width:100%;min-width:100px}"}},m=class{constructor(s){t(this,s),this.updateSuccess=i(this,"updateSuccess",7)}componentDidLoad(){this.input.focus()}async handleSubmit(t){if(t.preventDefault(),!r(this.input.value))return void e.error("Rate must be a number");if(parseFloat(this.input.value)<0)return void e.error("Rate must be a positive number");let i=[];i[this.month]={monthly_rate:this.input.value};const s={id:this.item.id,rates:i};try{const t=await o.updateApt(s);this.updateSuccess.emit(t)}catch(t){e.error(t.message)}}render(){return s("form",{class:"listing-monthly-rate-form",onSubmit:t=>this.handleSubmit(t),ref:t=>this.form=t},s("input",{type:"number",name:"rate",value:this.item.rates.find(t=>t.month==this.month).monthly_rate,autofocus:!0,ref:t=>this.input=t,onChange:t=>this.handleSubmit(t)}))}static get style(){return".listing-monthly-rate-form{width:100%}.listing-monthly-rate-form input{width:100%;min-width:100px}"}};export{n as listing_availability_form,m as listing_monthly_rate_form};