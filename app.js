
const KEY="financeSupaData";
function getData(){try{return JSON.parse(localStorage.getItem(KEY))||{user:"Supa",accounts:[],transactions:[]}}catch(e){return {user:"Supa",accounts:[],transactions:[]}}}
function saveData(d){localStorage.setItem(KEY,JSON.stringify(d))}
function resetData(){saveData({user:"Supa",accounts:[],transactions:[]});location.reload()}
function rupiah(n){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(Number(n)||0)}
function totals(){const d=getData();let income=0,expense=0;d.transactions.forEach(t=>t.type==="income"?income+=Number(t.amount):expense+=Number(t.amount));return {income,expense,balance:income-expense}}
function txIcon(t){return t.type==="income"?"↓":"↑"}
function renderShared(){const d=getData();document.querySelectorAll("[data-user]").forEach(e=>e.textContent=d.user||"Supa");}
document.addEventListener("DOMContentLoaded",renderShared);
