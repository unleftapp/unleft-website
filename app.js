
const header=document.querySelector('[data-header]');
const menuButton=document.querySelector('[data-menu-button]');
const menu=document.querySelector('[data-menu]');
const setHeader=()=>header?.classList.toggle('scrolled',window.scrollY>8);
setHeader();window.addEventListener('scroll',setHeader,{passive:true});
menuButton?.addEventListener('click',()=>{const open=menu?.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(Boolean(open)));});
menu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
const items=document.querySelectorAll('[data-reveal]');
if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target);}})},{threshold:.12});items.forEach(item=>observer.observe(item));}else{items.forEach(item=>item.classList.add('revealed'));}
