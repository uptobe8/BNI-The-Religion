
const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('[data-menu]');
if(menuBtn && nav){menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));}
window.addEventListener('scroll',()=>{ if(nav) nav.classList.toggle('scrolled', window.scrollY>12); },{passive:true});
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
const revealEls=[...document.querySelectorAll('.reveal')];
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  revealEls.forEach(el=>io.observe(el));
}else{revealEls.forEach(el=>el.classList.add('in'));}
