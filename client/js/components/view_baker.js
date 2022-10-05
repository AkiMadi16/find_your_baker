function showBakerDetails(bakerId) {

  const baker = state.bakers.find(baker => baker.id === bakerId)

  // console.log(baker)
  const BingMapsKey = "BING_API_KEY"

  const locationFinder = `http://dev.virtualearth.net/REST/v1/Locations?CountryRegion=AU&addressLine=${baker.address}&key=${BingMapsKey}`

  fetch(locationFinder)
    .then(res => res.json() )
    .then(res => {
      // console.log(res);
      // get lat, long from maps api
      const geo = res.resourceSets[0].resources[0].point.coordinates.join(',');

      const map = `https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/${geo}/16?mapSize=500,500&pp=${geo};66&mapLayer=Basemap,Buildings&key=${BingMapsKey}`

      renderViewBakerDetails(baker, map)
    })
}

function renderViewBakerDetails(baker, map) {
  document.querySelector('#page').innerHTML = `
    <secton class='baker-details'>
      <h2>${baker.name}</h2>
      <img src="${map}">
    </section>
    `
}
