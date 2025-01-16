
function toggleMenu() {
    const menu = document.querySelector('.btn-header');
    menu.classList.toggle('active'); 
}


function toggleLink() {
    const menu = document.querySelector('.btn-header'); 
    menu.classList.remove('active');  
}

    // Função para rolar até o topo da página
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // Faz a rolagem ser suave
        });
    }

    // Adicionando evento de clique aos links para chamar a função de rolar até o topo
    document.querySelectorAll('.btn-header link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            scrollToTop();  // Chama a função de rolar até o topo
        });
    });