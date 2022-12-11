function showBakerDetails(bakerId) {
    showRating(bakerId)
    showReview(bakerId)
    gettingMap(bakerId)
}

function gettingMap(bakerId) {
  const baker = state.bakers.find(baker => baker.id === bakerId)
  var bingApiKey = "apiKey"    
  fetch('/bingMapsKey') 
    .then(res => res.json())
    .then(apiKey => {
    bingApiKey = apiKey;
        return fetch(`https://dev.virtualearth.net/REST/v1/Locations?CountryRegion=AU&addressLine=${baker.address}&key=${apiKey}`)
    })
    .then(res => res.json())
    .then(res => {
    // get lat, long from maps api
    const geo = res.resourceSets[0].resources[0].point.coordinates.join(',');
    const map = `https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/${geo}/18?mapSize=1000,1000&pp=${geo};66&mapLayer=Basemap,Buildings&key=${bingApiKey}`
    
    renderViewBakerDetails(baker, map)
    })
}

function showRating(bakerId) {
  fetch(`/api/ratings/${bakerId}`)
    .then(res => res.json())
    .then(rating => { 
      state.bakerRating = rating.avg
      renderViewBakerDetails()
  })
}

function showReview(bakerId) {
  fetch(`/api/reviews/${bakerId}`)
    .then(res => res.json())
    .then(res => {
      state.bakerReviews = res
      renderViewBakerDetails(state.bakerReviews)
  })
}

function renderViewBakerDetails(baker, map) {
    const bakerRating = state.bakerRating
    const bakerRatingShow = Math.round(bakerRating * 10) / 10
    const starTotal = 5;
    const starPercentage = (bakerRating/ starTotal) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    document.querySelector('#page').innerHTML = `
        <div class='baker-details container align-conter-center mx-auto'>
          <a onClick = "renderBakerList()">◀︎ Back to Home</a>
          <section>
            <h2>${baker.name}</h2>
            <p>Address: ${baker.address}, ${baker.suburb}, ${baker.postcode} </p>
            <img class="map" src="${map}">
          </section>
          <section class="mt-2">
            <h3>Rating and Reviews</h3>
            <div class="d-inline-flex">
              <div class="stars-outer">
                <div class="stars-inner" style="width:${starPercentageRounded};"></div>
              </div>
                <a class="attribution" href="http://fontawesome.io/"><i class="fa fa-font-awesome"></i></a>
                <p class="ms-3">${bakerRatingShow}</p>
            </div>
          </section>
          <section>  
            ${bakerReviews()}
          </section>
        </div>
          `   
}

function bakerReviews() {
  const bakerReviews = state.bakerReviews
  return bakerReviews.map(review =>{
    const starTotal = 5;
    const starPercentage = ((review.rating)/ starTotal) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    return  `  
    <div class='baker card' >
    <div class="card-body">
        <h5 class="card-title">${review.user_name}</h5>
        <div class="d-inline-flex">
          <div class="stars-outer">
            <div class="stars-inner" style="width:${starPercentageRounded};"></div>
          </div>
            <a class="attribution" href="http://fontawesome.io/"><i class="fa fa-font-awesome"></i></a>
            <p class="ms-3">${review.rating}</p>
        </div>
        <p class="card-text">${review.review}</p>
    </div>
  </div>
  `
  }).join('')
}