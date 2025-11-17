// Abre/fecha o dropdown
function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Seleciona a marca
function selecionarMarca(marca) {

    const textoSelecionado = document.getElementById("textoSelecionado");
    const logoSelecionada = document.getElementById("logoSelecionada");

    switch (marca) {
        case "samsung":
            textoSelecionado.textContent = "Samsung";
            logoSelecionada.src = "https://seeklogo.com/images/S/samsung-logo-90D5E71F82-seeklogo.com.png";
            break;
        case "apple":
            textoSelecionado.textContent = "Apple";
            logoSelecionada.src = "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg";
            break;
        case "motorola":
            textoSelecionado.textContent = "Motorola";
            logoSelecionada.src = "https://upload.wikimedia.org/wikipedia/commons/5/5e/Motorola_logo.svg";
            break;
        case "xiaomi":
            textoSelecionado.textContent = "Xiaomi";
            logoSelecionada.src = "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg";
            break;
        default:
            textoSelecionado.textContent = "Todas as marcas";
            logoSelecionada.src = "https://i.postimg.cc/52LyyRrY/todas.png";
    }

    document.getElementById("dropdownMenu").style.display = "none";

    aplicarFiltroMarca(marca);
}

// Aplica filtro ao selecionar marca
function aplicarFiltroMarca(marca) {
    const produtos = document.querySelectorAll(".produto");

    produtos.forEach(produto => {
        if (!marca || marca === "") {
            produto.style.display = "block"; // mostra tudo
            return;
        }

        produto.style.display = produto.dataset.marca === marca ? "block" : "none";
    });
}
