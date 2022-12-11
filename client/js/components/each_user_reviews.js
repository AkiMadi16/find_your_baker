function showEachUserReviews() {
  const userName = state.loggedInName;

  fetch(`/api/reviews/${userName}/eachUser`)
    .then((res) => res.json())
    .then((res) => {
      reviews.reviews = res;
      addBakerNameToReviews();
    });
}

function renderEachUserReviews() {
  document.querySelector(".each-user-review").innerHTML = `
    <section >  
      ${userReviews()}
    </section>
`;
}

function addBakerNameToReviews() {
  reviews.reviews.forEach((review) => {
    fetch(`/api/bakers/${review.baker_id}/find`)
      .then((res) => res.json())
      .then((res) => {
        review.bakerName = res.name;
        renderEachUserReviews();
      });
  });
}

function userReviews() {
  return reviews.reviews
    .map((review) => {
      const starTotal = 5;
      const starPercentage = (review.rating / starTotal) * 100;
      const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
      return ` 
    <div class='baker card' data-id='${review.id}' data-review='${review.review}' data-rating='${review.rating}'>
      <div class="card-body">
        <h5 class="card-title">${review.bakerName}</h5>
        <div class="d-inline-flex">
          <div class="stars-outer">
            <div class="stars-inner" style="width:${starPercentageRounded};"></div>
          </div>
          <a class="attribution" href="http://fontawesome.io/"><i class="fa fa-font-awesome"></i></a>
          <p class="ms-3">${review.rating}</p>
        </div>
          <p class="card-text">${review.review}</p>
          <a onClick = "deleteAReview(event)" class="card-link">Delete</a>
          <a onClick = "renderUpdateReview(event)" class="card-link">Update</a>
      </div>
    </div>
  `;
    })
    .join("");
}

function deleteAReview(event) {
  const deleteReviewBtn = event.target;
  const reviewDOM = deleteReviewBtn.closest(".baker");
  const reviewId = reviewDOM.dataset.id;
  fetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  }).then(() => {
    reviews.reviews = reviews.reviews.filter((t) => t.id != reviewId);
    renderLoginPage();
  });
}
