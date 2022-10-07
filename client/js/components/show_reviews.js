function showReview(bakerId) {
  fetch(`/api/reviews/${bakerId}`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      state.bakerReviews = res
      renderBakerReviews()
    })
}

function renderBakerReviews() {
  document.querySelector('#page').innerHTML = `
    <section >
        ${bakerReviews()}
    </section>
`
}

function bakerReviews() {
  // console.log(state.bakerReviews)
  return state.bakerReviews.map(review => `  
    <div class='baker card' >
    
    <div class="card-body">
        <h5 class="card-title">${review.user_name}</h5>
        
        <p class="card-text">${review.review}</p>
        
    </div>
  </div>
  `).join('')
}