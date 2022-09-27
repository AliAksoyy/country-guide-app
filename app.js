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
      <div class="card" style="width: 14rem;">
      <img src="${svg}" class="card-img-top" alt="...">
       <div class="card-body">
        <h5 class="card-title text-center text-uppercase">${common}</h5>
       </div>
       <ul class="list-group list-group-flush">
       <li class="list-group-item"><span class="fw-bold">Capital:</span> ${capital}</li>
       <li class="list-group-item"><span class="fw-bold">Continent:</span> ${continents}</li>
       <li class="list-group-item"><span class="fw-bold">Population:</span> ${population}</li>
       <li class="list-group-item"><span class="fw-bold">Currency:</span> ${
         Object.values(currencies)[0].name
       } ${Object.values(currencies)[0].symbol}</li>
       <li class="list-group-item"><span class="fw-bold">Languages:</span> ${tur}</li>
       </ul>
       <div class="card-body">
         <a href="${googleMaps}" class="card-link btn btn-danger mx-auto w-100">Google Maps</a>
        
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





