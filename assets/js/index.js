
function toggleMenu() {
    const menu = document.querySelector('.btn-header');
    menu.classList.toggle('active'); 
}


function toggleLink() {
    const menu = document.querySelector('.btn-header'); 
    menu.classList.remove('active');  
}



function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  
    });
}
