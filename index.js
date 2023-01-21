const _mobileMenuButton = document.querySelector("#mobile-menu-icon");
const _mobileMenu = document.querySelector("#mobile-menu");

_mobileMenuButton.addEventListener("click", (event) => {
    const style = getComputedStyle(event.target);

    if(style.height === "25px"){
        event.target.style.height = "0px";
        event.target.style.width = "0px";
        event.target.style.opacity = "0";
        setTimeout(() => {
            event.target.style.backgroundImage = "url('./assets/images/icon-menu-close.svg')";
            event.target.style.height = "40px";
            event.target.style.width = "40px";
            event.target.style.opacity = "1";
            _mobileMenu.style.right = "0px";
        }, "250")
    }

    if(style.height === "40px"){
        event.target.style.height = "0px";
        event.target.style.width = "0px";
        event.target.style.opacity = "0";
        setTimeout(() => {
            event.target.style.backgroundImage = "url('./assets/images/icon-menu.svg')";
            event.target.style.height = "25px";
            event.target.style.width = "40px";
            event.target.style.opacity = "1";
            _mobileMenu.style.right = "-350px";
        }, "250")
    }
})