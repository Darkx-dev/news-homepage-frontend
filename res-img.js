const imgElement = document.querySelector(".main-image-container img")
if (window.innerWidth > 1024) imgElement.src = "/assets/images/image-web-3-desktop.jpg"
else imgElement.src = "/assets/images/image-web-3-mobile.jpg"