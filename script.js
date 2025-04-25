// seleciono o menu principal e o submenu
const menu = document.getElementById('menuCategorias');
const submenu = document.getElementById('submenuCategorias');

// seleciono o departamento e o conteudo dentro dele
const deptLi = document.querySelector('li[data-dept="1"]');
const content = deptLi.querySelector('.categorias-content2');

// quando o mouse entra no menu principal, mostra o submenu
menu.addEventListener('mouseenter', () => {
  submenu.classList.add('show');
});

// Para quando o mouse sai do menu, escode o submenu.
menu.addEventListener('mouseleave', () => {
  submenu.classList.remove('show');

  // Remove todas as categorias ativas
  categorias.forEach(cat => cat.classList.remove('active'));

  // Remove o destaque visual do link de departamento
  deptLinks.forEach(el => el.classList.remove('ativo'));
});


// seleciono os departamento e as seções de conteudo das categorias 
const deptLinks = document.querySelectorAll('.departamento-lista a');
const categorias = document.querySelectorAll('.categorias-content');

deptLinks.forEach(link => {

  link.addEventListener('mouseenter', () => {
    const target = link.getAttribute('data-dept'); // pega o número do departamento

    // remove o destaque das categorias
    categorias.forEach(cat => cat.classList.remove('active'));

    //apenas a categoria correspondente ao departamento
    const activeCat = document.getElementById(`cat-${target}`);
    if (activeCat) {
      activeCat.classList.add('active');
    }
  });


  //   ---------Usei para quando passar o mouse em cima fica outra cor----
  link.addEventListener('mouseenter', () => {
    deptLinks.forEach(el => el.classList.remove('ativo')); // remove dos outros
    link.classList.add('ativo'); // adiciona ao atual ativo
  });
});


deptLi.addEventListener('mouseenter', () => {
  content.style.display = 'flex'; // Mostra o conteúdo
});

deptLi.addEventListener('mouseleave', () => {
  content.style.display = 'none'; // Esconde o conteúdo
});



// Seleciona todos os botões de busca e adiciona o evento de clique
document.querySelectorAll('#searchButton').forEach((button) => {
  button.addEventListener('click', function () {
    const container = button.closest('.barra-de-pesquisa');
    const input = container.querySelector('#searchInput');
    const message = container.querySelector('#searchMessage');
    const messageText = message.querySelector('.message-text');
    const closeBtn = message.querySelector('.close-message');

    const searchTerm = input.value.trim();

    if (searchTerm) {
      messageText.textContent = `Você buscou por: '${searchTerm}'`;
      message.style.display = 'flex';
      message.classList.add('mt-2');
      closeBtn.style.display = 'inline-block'; // Mostra o botão de fechar
    } else {
      message.style.display = 'none';
      messageText.textContent = '';
      message.classList.add('mt-2');
      closeBtn.style.display = 'none'; // Garante que o botão fique escondido
    }

    if (!closeBtn.dataset.listenerAdded) {
      closeBtn.addEventListener('click', function () {
        message.style.display = 'none';
        messageText.textContent = '';
        closeBtn.style.display = 'none';
      });
      closeBtn.dataset.listenerAdded = 'true';
    }
  });
});

