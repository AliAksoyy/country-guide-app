const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const content = document.querySelector(".content")
const container = document.querySelector(".container")
let isOkey =false
btn.addEventListener("click",()=> {


    fetchByCountry(input.value);
    input.value= ""
})



const  fetchByCountry = (name)=> {

  const url = `https://restcountries.com/v3.1/name/${name}`;

  fetch(url)
    .then((res) => {
        console.log(res.ok);

      if (!res.ok) {
        renderError(`${res.status}`)
        throw new Error()
      }
      return res.json();
    })
    .then(function (data) {
      renderData(data);
    })
    .catch((err) => console.log(err));
}


  const renderError = ()=> {

  
      content.innerHTML = `
      <p class="error">Please enter a avlid country name</p>
      `;
      setTimeout(() => {
        document.querySelector(".error").innerHTML = ""
        
      }, 2000);
  
    }
  

  const renderData = (countries)=> {
    console.log(countries)

  
      const {
        flags: { svg },
        name: { common },
        capital,
        continents,
        population,
        currencies,
        languages: { tur },
        maps: { googleMaps },
      } = countries[0];
      console.log(
        svg,
        common,
        capital,
        continents,
        population,
        Object.values(currencies)[0].name,
        tur
      );
      content.innerHTML = `
      
      <img src="${svg}" class="flag-img">
      <h2>${common}</h2>
       <div class=" wrapper">
        <div class="data-wrapper>
        <h4>Capital:</h4>
        <span>${capital}</span>
        </div>
       </div>
       <div class=" wrapper">
        <div class="data-wrapper>
        <h4>Continent:</h4>
        <span>${continents}</span>
        </div>
       </div>
       <div class=" wrapper">
        <div class="data-wrapper>
        <h4>Population:</h4>
        <span>${population}</span>
        </div>
       </div>
       <div class=" wrapper">
        <div class="data-wrapper>
        <h4>Currency:</h4>
        <span>${Object.values(currencies)[0].name} ${
        Object.values(currencies)[0].symbol
      }</span>
        </div>
       </div>
       <div class=" wrapper">
        <div class="data-wrapper>
        <h4>Languages:</h4>
        <span>${tur}</span>
        </div>
       </div>

      `;
    
  }
 



  fetchByCountry("turkey");
  // fetchByCountry("south africa");

  


























// let isOkey =false;
// btn.addEventListener("click", function(){

//     if(!input.value) {
//         const p = document.createElement("p")
//         p.setAttribute("class", "invalid")
//         container.appendChild(p)
//         p.innerText = `Please enter a valid country name`
//     }
//     input.value = ""


// })





//     
//     console.log(svg,common,capital[0],continents[0],currencies.GTQ["name"],spa)
//     const a = createElement("div")
//   content.appendChild(a)
//     a.innerHTML = `
//                 <div class="card" style="width: 18rem;">
//   <img src="${svg}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">An item</li>
//     <li class="list-group-item">A second item</li>
//     <li class="list-group-item">A third item</li>
//   </ul>
//   <div class="card-body">
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>
//     `;
// }





