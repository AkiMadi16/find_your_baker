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

fetch('/api/sessions')
  .then(res => res.json())
  .then(userName => {
    if (typeof userName === 'string') {
      state.loggedInEmail = userName
    }
  })