const state = {
  bakers: [],
  loggedInEmail: null
}
fetch('/api/bakers')
  .then(res => res.json())
  .then(bakers => {
  state.bakers = bakers
  renderBakerList()
})

