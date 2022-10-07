function showReview(bakerId) {
  fetch(`/api/reviews/${bakerId}`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      bakerReviews(res)
      // state.bakerReviews = res
    })
  
}
function bakerReviews(res) {
  // console.log(state.bakerReviews)
  return res.map(review => `  
    <div class='baker card' >
    
    <div class="card-body">
        <h5 class="card-title">${review.user_name}</h5>
        
        <p class="card-text">${review.review}</p>
        
    </div>
  </div>
  `).join('')
}