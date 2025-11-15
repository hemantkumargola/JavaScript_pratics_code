const byId=id=>document.getElementById(id);

byId('btnClick').onclick=()=>byId('outClick').textContent='Clicked! '+new Date().toLocaleTimeString();

byId('txtInput').oninput=()=>byId('outInput').textContent='Typed: '+byId('txtInput').value;

const hoverBox=byId('hoverBox');
hoverBox.onmouseover=()=>hoverBox.style.background='#eef';
hoverBox.onmouseout=()=>hoverBox.style.background='';
