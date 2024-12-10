// navbar 

const openBtn = document.getElementById('btn-open');
const closeBtn = document.getElementById('btn-close');
const mobileMenu = document.getElementById('mobile');


openBtn.addEventListener('click', function(){
    openBtn.children[0].classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');
    setTimeout(() => {
        mobileMenu.classList.add('active');
    }, 10);


})