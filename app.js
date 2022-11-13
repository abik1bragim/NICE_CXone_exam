const form = document.querySelector("form")

form.addEventListener("submit", Register)

function Register(e) {
    e.preventDefault()

    console.log(e);

    const Email = e.target[0].value
    const Password = e.target[1].value

    const localEmail = localStorage.getItem("email")
    const localPassword = localStorage.getItem("password")

    if (localEmail === Email, localPassword === Password) {
        location.replace("./main_page.html")
    } else if (Email === "") {
        alert("emailni to'ldiring")
    } else if (Password === "") {
        alert("passwordni to'ldiring")
    } else {
        alert("royhatan o'ting")
    }

    // const localData = localStorage.setItem("email")
}