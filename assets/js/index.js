// Função para alternar o menu
function toggleMenu() {
    const menu = document.querySelector('.btn-header');
    menu.classList.toggle('active');
}

// Adiciona uma classe 'scrolled' quando o usuário rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
