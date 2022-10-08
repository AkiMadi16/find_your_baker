function showRating(bakerId) {
  fetch(`/api/ratings/${bakerId}`)
    .then(res => res.json())
    .then(rating => {
      console.log(rating) 
    })
}