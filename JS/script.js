var subAPI = "8b1cea18610f4b56a5703c3300b944fe";

console.log(
  "https://api.spoonacular.com/food/ingredients/substitutes?ingredientName=butter"
);
//------------------------------Starts Subscription Form ------------------------------
// Multiple Selection Dropdown with Checkbox
// byTimeDropdown
const timeDropdownButton = document.getElementById("multiSelectTimeDropdown");
const timeDropdownMenu = document.querySelector(".timeDropdown-menu");
let timeSelectedItems = [];

function handleCB(event) {
  const timeCheckbox = event.target;
  if (timeCheckbox.checked) {
    timeSelectedItems.push(timeCheckbox.value);
  } else {
    timeSelectedItems = timeSelectedItems.filter(
      item => item !== timeCheckbox.value
    );
  }

  timeDropdownButton.innerText =
    timeSelectedItems.length > 0 ? timeSelectedItems.join(", ") : "Select Items";
}

timeDropdownMenu.addEventListener("change", handleCB);


// byCuisineDropdown
const cuisineDropdownButton = document.getElementById("multiSelectCuisineDropdown");
const cuisineDropdownMenu = document.querySelector(".cuisineDropdown-menu");
let cuisineSelectedItems = [];

function handleCB(event) {
  const cuisineCheckbox = event.target;
  if (cuisineCheckbox.checked) {
    cuisineSelectedItems.push(cuisineCheckbox.value);
  } else {
    cuisineSelectedItems = cuisineSelectedItems.filter(
      item => item !== cuisineCheckbox.value
    );
  }

  cuisineDropdownButton.innerText =
    cuisineSelectedItems.length > 0
      ? cuisineSelectedItems.join(", ") : "Select Items";
}

cuisineDropdownMenu.addEventListener("change", handleCB);

//------------------------------Ends Subscription Form ------------------------------