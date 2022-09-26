const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const content = document.querySelector(".content")
const container = document.querySelector(".container")
let isOkey =false;
btn.addEventListener("click", function(){

    if(!input.value) {
        const p = document.createElement("p")
        p.setAttribute("class", "invalid")
        container.appendChild(p)
        p.innerText = `Please enter a valid country name`
    }
    input.value = ""


})

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

const render = (countryName) => {
    console.log(countryName)

    const {
      flags: { svg },
      name: { common },
      capital,
      continents,
      population,
      currencies,
      languages: { spa },
    } = countryName[0];
    console.log(svg,common,capital[0],continents[0],currencies.GTQ["name"],spa)
    const a = createElement("div")
  content.appendChild(a)
    a.innerHTML = `
                <div class="card" style="width: 18rem;">
  <img src="${svg}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    `;
}





