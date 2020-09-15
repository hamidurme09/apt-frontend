import{r as e,j as t,h as c,d as h}from"./p-f5b6b644.js";const s=class{constructor(c){e(this,c),this.checked=!1,this.checkBoxChange=t(this,"checkBoxChange",7)}checkboxChangeHandler(){const e=this.getCheckbox();this.checkBoxChange.emit({name:this.name,value:this.value,checked:e.checked})}async check(){this.getCheckbox().checked=!0,this.valueChanged()}async uncheck(){this.getCheckbox().checked=!1,this.valueChanged()}async isChecked(){return this.getCheckbox().checked}getCheckbox(){return this.el.querySelector('input[type="checkbox"]')}valueChanged(){this.getCheckbox().checked?this.el.querySelector(".checkbox").classList.add("checked"):this.el.querySelector(".checkbox").classList.remove("checked"),this.checkboxChangeHandler()}render(){let e={name:this.name,value:this.value,onChange:()=>this.valueChanged()};return this.checked&&(e.checked=!0),c("label",{class:"apt212-checkbox"},c("input",Object.assign({type:"checkbox"},e)),c("span",{class:{checkbox:!0,checked:this.checked}}),c("slot",null))}get el(){return h(this)}static get style(){return".apt212-checkbox{position:relative;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-top:var(--apt212-checkbox-padding-top,0)}.apt212-checkbox input[type=checkbox]{position:absolute;opacity:0;height:0;width:0}.apt212-checkbox .checkbox{display:inline-block;width:var(--apt212-checkbox-width,10px);height:var(--apt212-checkbox-height,10px);margin-right:var(--apt212-margin-right,.25rem);background-color:var(--apt212-checkbox-bg-color,#f8f8f8);border:var(--apt212-checkbox-border,1px solid #c7c7c7);border-radius:var(--apt212-checkbox-border-radius,0)}.apt212-checkbox .checkbox.checked{background-color:var(--apt212-checkbox-checked-bg-color,#000);border-color:var(--apt212-checkbox-checked-border-color,#454545)}"}};export{s as apt212_checkbox};