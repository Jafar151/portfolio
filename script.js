const menu=document.getElementById('menu'), links=document.getElementById('links');
menu.addEventListener('click',()=>links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
