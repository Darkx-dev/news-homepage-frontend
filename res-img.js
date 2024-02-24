const imgElement = document.querySelector(".main-image-container img")
const dropElement = document.querySelector(".navs-container")
const toggleBtnImg = document.querySelector("button.sidebar-drop img")
let toggleCheck = false

if (window.innerWidth > 1024) imgElement.src = "assets/images/image-web-3-desktop.jpg"
else imgElement.src = "assets/images/image-web-3-mobile.jpg"

const handleDrop = () => {
    if (toggleCheck == false) {
        dropElement.style.transform = "translateX(0px)"
        toggleCheck = true
    } else {
        dropElement.style.transform = "translateX(100%)"
        toggleCheck = false
    }
}