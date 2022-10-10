function showEachUserReviews() {
  const userName = state.loggedInName

  fetch(`/api/reviews/${userName}/eachUser`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      reviews.reviews = res
      addBakerNameToReviews ()
      
    })
    
}


function renderEachUserReviews() {
  
  document.querySelector('.each-user-review').innerHTML = `
    
    <section >  
      ${userReviews()}
    </section>
    
`

}



function addBakerNameToReviews () {
  reviews.reviews.forEach(review => {
    fetch(`/api/bakers/${review.baker_id}/find`)
      .then(res => res.json())
      .then(res => {
        console.log(res.name)
        review.bakerName = res.name
        
        renderEachUserReviews()
      })
  })


}

function userReviews() {
  console.log(reviews.reviews)
  return reviews.reviews.map(review =>  
    
    ` 
    <div class='baker card' >
    <div class="card-body">
        <h5 class="card-title">${review.bakerName}</h5>
        <p class="card-text">${review.review}</p>
    </div>
  </div>
  `).join('')


}