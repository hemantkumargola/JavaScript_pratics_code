const byId=id=>document.getElementById(id);

// Number example
byId('doubleBtn').onclick=()=>{
  const val=parseFloat(byId('numInput').value);
  byId('numOut').textContent=isNaN(val)?'Enter a number':`Double: ${val*2}`;
};

// Date example
byId('dateBtn').onclick=()=>{
  byId('dateOut').textContent=new Date().toLocaleString();
};

// Math example
byId('randBtn').onclick=()=>{
  byId('mathOut').textContent=Math.floor(Math.random()*100)+1;
};

