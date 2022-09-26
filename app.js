const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const content = document.querySelector(".content")
const container = document.querySelector(".container")

btn.addEventListener("click", function(){

    if(!input.value) {
        const p = document.createElement("p")
        p.setAttribute("class", "invalid")
        container.appendChild(p)
        p.innerText = `Please enter a valid country name`
    }
    input.value = ""


})