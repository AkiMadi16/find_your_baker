const state = {
  bakers: []
}
fetch('/api/bakers')
  .then(res => res.json())
  .then(bakers => {
  state.bakers = bakers
  renderBakerList()
})