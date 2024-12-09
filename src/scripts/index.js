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