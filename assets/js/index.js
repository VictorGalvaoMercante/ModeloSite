
function toggleMenu() {
    const menu = document.querySelector('.btn-header');
    menu.classList.toggle('active'); 
}


function toggleLink() {
    const menu = document.querySelector('.btn-header'); 
    menu.classList.remove('active');  
}

const planCards = document.querySelectorAll('.plan-card');

function addFeaturedClass(event) {
    event.target.classList.add('featured');
}

function removeFeaturedClass(event) {
    event.target.classList.remove('featured');
}

planCards.forEach(card => {
    card.addEventListener('mouseenter', addFeaturedClass);
    card.addEventListener('mouseleave', removeFeaturedClass);
});



function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hidden");

    const revealOnScroll = () => {
        hiddenElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 10) {
                el.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();
});



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
