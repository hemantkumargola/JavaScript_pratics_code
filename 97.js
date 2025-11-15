const byId=id=>document.getElementById(id);

// Async fetch example
byId('fetchBtn').onclick=async()=>{
  const out=byId('fetchOut');
  out.textContent='Loading...';
  try{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    out.innerHTML=data.map(u=>`<strong>${u.name}</strong> (${u.email})`).join('<br>');
  }catch(err){
    out.textContent='Failed to fetch API';
  }
};

// Async delay example
function delay(ms){ return new Promise(res=>setTimeout(res, ms)); }

byId('delayBtn').onclick=async()=>{
  const out=byId('delayOut');
  out.textContent='Waiting...';
  await delay(2000);
  out.textContent='Done waiting 2 seconds!';
};
