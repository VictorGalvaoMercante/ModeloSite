
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


const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-btn");


setTimeout(() => {
    modal.style.display = "flex";
}, 5000);

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});


window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
