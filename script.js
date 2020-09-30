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
      restaurantSection.innerHTML += generateHTMLForRestaurants(resto);
    });
  });

const generateHTMLForRestaurants = (resto) => {
  const restoImg = addImage(resto.restaurant.featured_image);
  const restoName = resto.restaurant.name;
  const restoPrice = averageCost(resto.restaurant.average_cost_for_two);
  const restoCuisine = resto.restaurant.cuisines;
  const restoRating = resto.restaurant.user_rating.aggregate_rating;
  const restoAdress = resto.restaurant.location.address;

  let restoHTML = '';
  restoHTML += `<div class="restaurant-wrapper">`;
  restoHTML += `<img class="restaurant-image" src="${restoImg}" alt="">`;
  restoHTML += `<h3 class="restaurant-title">${restoName}</h3>`;
  restoHTML += `<p class="restaurant-text">${restoAdress}</p>`;
  restoHTML += `<div class="restaurant-price-wrapper">`;
  restoHTML += `<p class="restaurant-text">${restoPrice}</p>`;
  restoHTML += `<p class="restaurant-text">${restoCuisine}</p>`;
  restoHTML += `</div>`;
  restoHTML += `<div class="restaurant-rating-wrapper">`;
  restoHTML += `<p class="restaurant-rating">${restoRating}</p>`;
  restoHTML += `<img class="icon-rating" src="#" alt="">`;
  restoHTML += `</div>`;
  restoHTML += `</div>`;
  return restoHTML;
}

//create function for averages cost to $
const averageCost = (cost) => {
  if(cost <= 20) {
    return ('$');
  } else if (cost <= 50) {
    return ('$$');
  } else {
    return ('$$$');
  }
}

//create function for image n/a 

const addImage = (image) => {
  if (image === '') {
    return ('./breakfast.jpg');
  } else {
    return image;
  }
}

//function for checkboxes
//https://codepen.io/piotrek/pen/mXpRmQ