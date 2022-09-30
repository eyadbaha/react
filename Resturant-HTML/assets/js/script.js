const menuButton = document.querySelector("#menu-icon");
const sideMenu = document.querySelector("#menu-items");
let menuToggle = false
const toggleMenu = ()=>{
    sideMenu.style.right = menuToggle ? 0 : "-30vw"
    menuToggle = menuToggle ? false : true
}
menuButton.addEventListener("click",()=>{
    toggleMenu()
})