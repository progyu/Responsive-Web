const open = document.querySelector('.all');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav');
const dim = document.querySelector('.dim');

open.onclick = () => {
  nav.classList.add('on');
  dim.setAttribute('style', 'display: block');
} 
close.onclick = () => {
  nav.classList.remove('on');
  dim.setAttribute('style', 'display: none');
} 