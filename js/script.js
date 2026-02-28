function sendToWhatsApp() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let service = document.getElementById("service").value;
    let message = document.getElementById("message").value;

    let url = "https://wa.me/27783468671?text="
        + "Name: " + name + "%0a"
        + "Phone: " + phone + "%0a"
        + "Service: " + service + "%0a"
        + "Message: " + message;

    window.open(url, '_blank').focus();
}

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", function() {
    nav.classList.toggle("active");
});
