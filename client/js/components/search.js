function searchByWord(event) {
  event.preventDefault()
  let inputDOM = document.querySelector('.form-control')
  let searchWord = inputDOM.value

  fetch(`/api/bakers/${searchWord}`)
    .then(res => res.json())
    .then(baker => {
      console.log(baker)
      state.searches = baker
      renderSearchList()
    })
}

function renderSearchList() {
  document.querySelector('#page').innerHTML = `
    <section class='baker-list card-group m-3'>
      ${renderSearchs()}
    </section>
  `
}

function renderSearchs() {
  return state.searches.map(baker => `  
    <div class='baker card' data-id='${baker.id}' data-img='${baker.img}' data-name='${baker.name}' data-address='${baker.address}' data-suburb='${baker.suburb}' data-postcode='${baker.postcode}' data-contact='${baker.contact}' data-specialty='${baker.specialty}'>
    <img class="card-img-top" src="${baker.img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${baker.name}</h5>
      <p class="card-text">${baker.address}, ${baker.suburb}, ${baker.postcode}</p>
      <p class="card-text">${baker.contact}</p>
      <p class="card-text"><small class="text-muted">${baker.specialty}</small></p>
    </div>
  </div>
`).join('')
} 
