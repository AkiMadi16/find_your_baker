function renderUpdateBaker(event) {
  const updateBtn = event.target
  const bakerDOM = updateBtn.closest('.baker')

  const bakerId = bakerDOM.dataset.id
  const bakerImg = bakerDOM.dataset.img
  const bakerName = bakerDOM.dataset.name
  const bakerAddress = bakerDOM.dataset.address
  const bakerContact = bakerDOM.dataset.contact
  const bakerSpecialty = bakerDOM.dataset.specialty
  console.log(bakerDOM.dataset)
 


  document.querySelector('#page').innerHTML = `
    <section class ="update-baker w-70 mx-auto">
      <form onSubmit="updateBaker(event)">
        <input type="hidden" name="id" value="${bakerId}"></input>
        <div class="form-group">
            <label>Img url</label>
            <input type="text" class="form-control" name="img" value="${bakerImg}">
        </div>
        <div class="form-group">
          <label>Baker name</label>
          <input type="text" class="form-control" name="name" value="${bakerName}">
        </div>
        <div class="form-group">
            <label>Address</label>
            <input type="text" class="form-control" name="address" value="${bakerAddress}">
        </div>
        <div class="form-group">
          <label>Contact</label>
          <input type="text" class="form-control" name="contact" value="${bakerContact}">
        </div>
        <div class="form-group">
          <label>Specialty</label>
          <input type="text" class="form-control" name="specialty" value="${bakerSpecialty}">
        </div>
        <button type="submit" class="btn btn-primary">Update Baker</button>
      </form>
  </section>
  `
}

function updateBaker(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form))
  console.log(data);
  bakerId = data.id;
  var bakerIndex = 0
  state.bakers.forEach((baker, index) => {
    if (baker.id == bakerId) {
        bakerIndex = index
    }
})

  fetch(`/api/bakers/${bakerId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(data)
  })
      .then(res => res.json())
      .then(baker => {
        console.log(baker)
          state.bakers[bakerIndex] = baker;
          renderBakerList()
      })
}

