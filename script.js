//DECLARATIONS

const cityLocation = document.getElementById('locationName');
const restaurantSection = document.getElementById('restaurantSection');

const apiKey = "d2ca3ff087d8d706993caefea7730371";

const cityId = 282; // Las Vegas
const cuisineId = 182; // Breakfast

const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}`;

fetch(url, { headers: { "user-key": apiKey } })
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    //city title
    cityLocation.innerHTML = json.restaurants[0].restaurant.location.city;

    json.restaurants.forEach((resto) => {
      console.log(resto);
    });
  });

/*
const generateHTMLForRestaurants = (resto) => {
  const pictures = 

}*/