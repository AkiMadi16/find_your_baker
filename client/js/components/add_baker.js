function renderAddbaker () {
  document.querySelector('#page').innerHTML = `
    <section class ="add-baker w-70 mx-auto">
      <form onSubmit="addBaker(event)">
        <div class="form-group">
            <label>Img url</label>
            <input type="text" class="form-control" name="img">
        </div>
        <div class="form-group">
          <label>Baker name</label>
          <input type="text" class="form-control" name="name">
        </div>
        <div class="form-group">
            <label>Address</label>
            <input type="text" class="form-control" name="address">
        </div>
        <div class="form-group">
          <label>Contact</label>
          <input type="text" class="form-control" name="contact">
        </div>
        <div class="form-group">
          <label>Specialty</label>
          <input type="text" class="form-control" name="specialty">
        </div>
        <button type="submit" class="btn btn-primary">Add Baker</button>
      </form>
  </section>
  `
}



function createBaker(event) {
  event.preventDefault();
  const form = event.target;

  // takes data from the form html tag and converts it into an object literal.
  const data = Object.fromEntries(new FormData(form));

  // method POST
  fetch('/api/bakers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(baker => {
      state.bakers.push(baker)
      renderBakersList()
  })
}