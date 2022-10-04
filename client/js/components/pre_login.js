function renderBakerList() {   
  document.querySelector('#page').innerHTML = `
      <section class='baker-list card-group m-3'>
          ${renderBakers()}
      </section>
  `
}

function renderPreLoginBakers() {
return state.bakers.map(baker => `  
<div class='baker card' data-id ='${baker.id}'>
  <img class="card-img-top" src="${baker.img}" alt="Card image cap">
  <div class="card-body">
      <h5 class="card-title">${baker.name}</h5>
      <p class="card-text">${baker.address}</p>
      <p class="card-text"><small class="text-muted">${baker.specialty}</small></p>  
  </div>
</div>
`).join('')
} 