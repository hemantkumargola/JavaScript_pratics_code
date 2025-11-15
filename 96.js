const byId=id=>document.getElementById(id);

byId('loadBtn').onclick=async()=>{
  const out=byId('apiOut');
  out.textContent='Loading...';
  try{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    out.innerHTML=data.map(u=>`<strong>${u.name}</strong> (${u.email})`).join('<br>');
  }catch(err){
    out.textContent='Failed to load API';
  }
};
