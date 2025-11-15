// function example 

const byId=id=>document.getElementById(id);

// Greet function
function greet(name){
  return `Hello, ${name}!`;
}
byId('greetBtn').onclick=()=>{
  const name=byId('nameInput').value||'Guest';
  byId('greetOut').textContent=greet(name);
};

// Sum function
function add(a,b){ return a+b; }
byId('sumBtn').onclick=()=>{
  const a=parseFloat(byId('num1').value)||0;
  const b=parseFloat(byId('num2').value)||0;
  byId('sumOut').textContent=`Sum: ${add(a,b)}`;
};

// Random function
function rand(max){ return Math.floor(Math.random()*max)+1; }
byId('randBtn').onclick=()=>byId('randOut').textContent=rand(50);
