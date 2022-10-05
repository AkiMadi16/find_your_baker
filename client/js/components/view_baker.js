function showBakerDetails(bakerId) {

  const baker = state.allEats.find(baker => baker.id === bakerId)

  console.log(baker)
  const BingMapsKey = "AoS33OiU3l7zMwBbSCjr22bUjtsV6oAwCDHjtQD1oxV2Zuitl9lHZmwQUJ8EK1tb"
  const locationFinder = `http://dev.virtualearth.net/REST/v1/Locations?CountryRegion=AU&addressLine=${baker.address}&key=${BingMapsKey}`

  fetch(locationFinder)
    .then(res => res.json() )
    .then(res => {
      console.log(res);
      // get lat, long from maps api
  
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