const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const content = document.querySelector(".content")
const container = document.querySelector(".container")
let isOkey =false;
// btn.addEventListener("click", function(){

//     if(!input.value) {
//         const p = document.createElement("p")
//         p.setAttribute("class", "invalid")
//         container.appendChild(p)
//         p.innerText = `Please enter a valid country name`
//     }
//     input.value = ""


// })

const fetchByName = ()=> {

    const url = "https://restcountries.com/v3.1/all"

    fetch(url).then(function(res) {
        if(!res.ok){
        isOkey=true;
        throw new Error(`something went wrong ${res.status}`)
        }
        return res.json()
    }).then((data)=> render(data)).catch((err)=> console.log(err))
}

fetchByName();


const render = (countryName)=> {
    clg

const content = document.querySelector(".content");
        console.log(countryName)
    if(isOkey) {
        container.style.display = "none"
        content.innerHTML = `
        <h2>Something wrong</h2>
        <img src="./img/404.png">
        `
    }
}

