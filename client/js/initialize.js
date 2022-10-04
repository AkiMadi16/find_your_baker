const state = {
  bakers: []
}
fetch('/api/bakes')
  .then(res => res.json())
  .then(bakers => {
  state.bakers = bakers
  renderBakersList()
})