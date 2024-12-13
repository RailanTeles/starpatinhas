const buttonOn = document.querySelector("#divmenu");
const buttonOff = document.querySelector("#CloseNav");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".navbar");
const navcontent = document.querySelector(".navcontent");
const itens = document.querySelectorAll(".NavBarItem")

buttonOn.addEventListener("click", ()=>{
    openNavBar(overlay, menu, navcontent);
});

buttonOff.addEventListener("click", ()=>{
    closeNavBar(overlay, menu, navcontent);
});

itens.forEach((item) => {
    item.addEventListener("click", () => {
        closeNavBar(overlay, menu, navcontent);
    });
})

function closeNavBar(overlay, menu, navcontent){
    overlay.style.display = "none";
    menu.classList.remove("On");
    navcontent.style.display = "none";
}

function openNavBar(overlay, menu, navcontent){
    overlay.style.display = "flex";
    menu.classList.add("On");
    navcontent.style.display = "flex";
}



function copyToClipboard(text) {
    // Cria um elemento de texto temporário
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);

    // Seleciona e copia o texto para a área de transferência
    tempInput.select();
    document.execCommand("copy");

    // Remove o elemento temporário
    document.body.removeChild(tempInput);

    // Feedback para o usuário (opcional)
    alert("Número copiado para a área de transferência!");
}