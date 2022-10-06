const state = {
  bakers: [],
  loggedInEmail: null,
  bakersForBaker: []
}
fetch('/api/bakers')
  .then(res => res.json())
  .then(bakers => {
  state.bakers = bakers
  renderBakerList()
})

