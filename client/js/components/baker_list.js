function renderBakerList() {   
  document.querySelector('#page').innerHTML = `
      <section class='baker-list card-group m-3'>
          ${renderBakers()}
      </section>
  `
}

function renderBakers() {
return state.bakers.map(baker => `  
<div class='baker card' data-id='${baker.id}' data-img='${baker.img}' data-name='${baker.name}' data-address='${baker.address}' data-contact='${baker.contact}' data-specialty='${baker.specialty}'>
  <img class="card-img-top" src="${baker.img}" alt="Card image cap">
  <div class="card-body">
      <h5 class="card-title">${baker.name}</h5>
      <p class="card-text">${baker.address}</p>
      <p class="card-text"><small class="text-muted">${baker.specialty}</small></p>
      <a onClick = "deleteBaker(event)" class="card-link">Delete</a>
      <a onClick = "renderUpdateBaker(event)" class="card-link">Update</a>
  </div>
</div>
`).join('')
} 

function deleteBaker(event) {
  const deleteBtn = event.target;

  const bakerDOM = deleteBtn.closest('.baker')
  const bakerId = bakerDOM.dataset.id;
 
  fetch(`/api/bakers/${bakerId}`, {
    method: 'DELETE'
  })
    .then(() => {
      state.bakers = state.bakers.filter(t => t.id != bakerId)
      renderBakerList()
  }) 
}