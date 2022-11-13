const Form = document.querySelector("form")
const Select = document.querySelector("select")

Form.addEventListener("submit", LoginRegistor)

function LoginRegistor(e) {
    e.preventDefault()

    console.log(e);

    let FirtsName = e.target[0].value
    let LastName = e.target[1].value
    let Email = e.target[2].value
    let Password = e.target[3].value
    let ComName = e.target[4].value
    let Title = e.target[5].value

    console.log(Select.value);
    localStorage.setItem("countries", Select.value)

    const localName = localStorage.setItem("firtsname", FirtsName)
    const localLastName = localStorage.setItem("lastname", LastName)
    const localEmail = localStorage.setItem("email", Email)
    const localPhone = localStorage.setItem("password", Password)
    const localComName = localStorage.setItem("comname", ComName)
    const localTitle = localStorage.setItem("title", Title)

    if (FirtsName === "") {
        alert("Firtsname ni toldiring")
    } else if (LastName === "") {
        alert("Lastname ni toldiring")
    } else if (Email === "") {
        alert("Email ni toldiring")
    } else if (Password === "") {
        alert("Telefon raqamingizni kiriting")
    } else if (ComName === "") {
        alert("Company ni toldiring")
    } else if (Title === "") {
        alert("Title ni toldiring")
    } else if (Select === "") {
        alert("Davlatingizni kiriting")
    }

    const localData = localStorage.getItem("email")
    const localData2 = localStorage.getItem("password")
    location.replace("./index.html")
}