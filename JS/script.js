/*
    This if statement will load recipes from the API, for a specific cuisine, only when
    the user is on a pathname that matches the cuisine and when the page has fully loaded.
    Additionally, if the user has previously favourited recipes for that specific cuisine,
    it will also show on the cuisine page, as that data has been retrieved from local storage.
*/
if (window.location.pathname === '/cuisines/mexicanCuisine.html') {
    document.addEventListener("DOMContentLoaded", function() {
        var cuisine = window.location.pathname.split("/cuisines/")[1].split("Cuisine.html")[0].toLowerCase();
        console.log(cuisine);
        getRecipe(cuisine);
        showAllFavourites(cuisine);
    });
} else if (window.location.pathname === '/cuisines/italianCuisine.html') {
    document.addEventListener("DOMContentLoaded", function() {
        var cuisine = window.location.pathname.split("/cuisines/")[1].split("Cuisine.html")[0].toLowerCase();
        console.log(cuisine);
        getRecipe(cuisine);
        showAllFavourites(cuisine);
    });
} else if (window.location.pathname === '/cuisines/greekCuisine.html') {
    document.addEventListener("DOMContentLoaded", function() {
        var cuisine = window.location.pathname.split("/cuisines/")[1].split("Cuisine.html")[0].toLowerCase();
        console.log(cuisine);
        getRecipe(cuisine);
        showAllFavourites(cuisine);
    });
} else if (window.location.pathname === '/cuisines/asianCuisine.html') {
    document.addEventListener("DOMContentLoaded", function() {
        var cuisine = window.location.pathname.split("/cuisines/")[1].split("Cuisine.html")[0].toLowerCase();
        console.log(cuisine);
        getRecipe(cuisine);
        showAllFavourites(cuisine);
    });
} else if (window.location.pathname === '/cuisines/indianCuisine.html') {
    document.addEventListener("DOMContentLoaded", function() {
        var cuisine = window.location.pathname.split("/cuisines/")[1].split("Cuisine.html")[0].toLowerCase();
        console.log(cuisine);
        getRecipe(cuisine);
        showAllFavourites(cuisine);
    });
} else if (window.location.pathname === '/cuisines/frenchCuisine.html') {
    document.addEventListener("DOMContentLoaded", function() {
        var cuisine = window.location.pathname.split("/cuisines/")[1].split("Cuisine.html")[0].toLowerCase();
        console.log(cuisine);
        getRecipe(cuisine);
        showAllFavourites(cuisine);
    });
} else if (window.location.pathname === '/cuisines/spanishCuisine.html') {
    document.addEventListener("DOMContentLoaded", function() {
        var cuisine = window.location.pathname.split("/cuisines/")[1].split("Cuisine.html")[0].toLowerCase();
        console.log(cuisine);
        getRecipe(cuisine);
        showAllFavourites(cuisine);
    });
} else if (window.location.pathname === '/cuisines/moroccanCuisine.html') {
    document.addEventListener("DOMContentLoaded", function() {
        var cuisine = window.location.pathname.split("/cuisines/")[1].split("Cuisine.html")[0].toLowerCase();
        console.log(cuisine);
        getRecipe(cuisine);
        showAllFavourites(cuisine);
    });
} else if (window.location.pathname === '/favourites.html') {
    document.addEventListener("DOMContentLoaded", function() {
        showAllFavourites();
    });
} else {
    console.log("No page exists");
};


/*
    Here, we are calling the food recipes API and passing in the cuisine name. This is dynamic,
    so depending on the html page the user is on, the cuisine name changes. We iterate through
    the API data and create variables for title, ingredients, images, instructions and cuisine.
    We then call the createRecipeCard function, which passes through the variables as arguments.
*/
function getRecipe(cuisine) {
    const cuisineURL = `https://food-recipes-with-images.p.rapidapi.com/?q=${cuisine}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c7965e32a1mshbe160fd7fa536fap1de1ccjsn06ed08451b4a',
            'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
        }
    };

    fetch(cuisineURL, options)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(cuisine + " recipes", data);
            console.log(data.d.length);

            for (var j = 0; j < data.d.length; j++) {
                
                var dataTitle = data.d[j].Title;
                console.log(dataTitle);
                var titleClean = dataTitle.replace("(", "").replace(")", "");
                console.log(titleClean);
                var titleSplit = titleClean.split(" ");
                console.log(titleSplit); 
                var title = titleSplit.join("+");
                console.log(title);

                var ingredients = Object.values(data.d[j].Ingredients);
                console.log(ingredients.length);
                for (var k = 0; k < ingredients.length; k++) {
                    console.log(ingredients[k]);
                }
                console.log(ingredients);
                var instructions = data.d[j].Instructions.split(".").join(".<br><br>");
                console.log(instructions);
                var image = data.d[j].Image;
                console.log(image);

                createRecipeCard(title, image, ingredients, instructions, cuisine);
            }
        });
};

/*
    We now create a recipe card for each recipe for the cuisine html page we are on. Within that
    recipe card, a bootstrap card is built and it contains a title, image, a view recipe button
    and a heart icon, so that the user can favourite the recipe, which is stored in local storage.
    When the user clicks on the view recipe button, a modal opens and it is specific to the recipe
    the user clicked on. Here you will see the title, nutritional information, ingredients,
    instructions and an option to add to favourites from the modal and a close button. If the user
    clicks to "add to favourites", the heart icon changes to a solid heart and the recipe is stored
    in local storage.

    If the user is on the favourites html page, and they want to view the recipe, the modal opens
    again, but this time with the option to remove from favourites. If they click to remove, the
    recipe is removed from local storage, the card is removed from the page and the heart icon on
    the individual cuisine page return to a regular heart icon.
*/
function createRecipeCard(title, image, ingredients, instructions, cuisine) {
    // remove duplicate cards from the cuisine page if the user has already add them to their favourites
    var existingRecipeCards = document.querySelectorAll(`.card-title`);
    var duplicateFound = false;

    existingRecipeCards.forEach(function (cardTitle) {
        if (cardTitle.innerText.trim() === title.split("+").join(" ")) {
            duplicateFound = true;
            // Update favourite icon only if it's not already set to fa-solid
            var existingFaveIcon = cardTitle.closest('.card').querySelector(".fa-heart");
            if (existingFaveIcon && !existingFaveIcon.classList.contains("fa-solid")) {
                existingFaveIcon.classList.remove("fa-regular");
                existingFaveIcon.classList.add("fa-solid");
            }
        }
    });

    if (duplicateFound) {
        console.log("Duplicate recipe found. Removing the second occurrence:", title);
        return;
    }

    console.log("recipe container")
    var recipeContainer = document.getElementById("recipe-container");
    console.log(typeof recipeContainer.childElementCount)
    
    
    recipeContainer.setAttribute("class", "row justify-content-center");
    recipeContainer.setAttribute("style", "margin: 50px auto;")

    var recipeCard = document.createElement("div");
    recipeCard.setAttribute("class", "card col-sm-12 col-md-6 col-lg-4 p-3 m-4 text-center justify-content-between");
    recipeCard.setAttribute("style", "max-width: 21rem; height: 400px; background-color: #fdefdc; border: 1px solid #fdefdc; color: #404146;");

    var recipeImage = document.createElement("img")
    if (!image) {
        console.log("no image available")
    } else {
        recipeImage.setAttribute("src", image)
        recipeImage.setAttribute("class", "card-img-top")
        recipeImage.setAttribute("alt", title.split("+").join(" "));
    }
    var recipeTitleBody = document.createElement("div");
    var recipeCardTitle = document.createElement("h5");
    recipeCardTitle.setAttribute("class", "card-title");
    recipeCardTitle.setAttribute("style", "margin-bottom: 0 !important");
    recipeCardTitle.innerText = title.split("+").join(" ");
    var recipeBtnBody = document.createElement("div");
    recipeBtnBody.setAttribute("style", "display: flex; justify-content: space-around;")
    var recipeDetailsBtn = document.createElement("button");

    var recipeFave = document.createElement("i");
    // if title is stored in local storage, it will have the class name of fa-solid
    var isFav = isFavourited(title);
    recipeFave.setAttribute("class", isFav ? "fa-solid fa-heart" : "fa-regular fa-heart");
    recipeFave.setAttribute("style", "font-size: 1.5rem");
    recipeFave.setAttribute("data-target", title.split("+").join(" "));
    console.log(recipeFave);

    recipeDetailsBtn.setAttribute("class", "btn bg-gold");
    recipeDetailsBtn.setAttribute("type", "button");
    recipeDetailsBtn.setAttribute("style", "width: 75%; color: white;");
    recipeDetailsBtn.innerText = "View Recipe";
    recipeDetailsBtn.setAttribute("data-bs-target", "#"+title.split(" ").join(""));
    recipeDetailsBtn.setAttribute("data-bs-toggle", "modal");
    recipeTitleBody.append(recipeCardTitle);
    recipeBtnBody.append(recipeDetailsBtn, recipeFave);
    recipeCard.append(recipeImage, recipeTitleBody, recipeBtnBody);
    recipeContainer.append(recipeCard);

    var heartId = document.querySelector(`[data-target="${title.split("+").join(" ")}"]`).dataset.target;
    console.log(heartId);

    var heartClassRegular = document.querySelectorAll(".fa-regular");
    console.log(heartClassRegular);

    var modalBtnText = "";

    if (window.location.pathname === '/favourites.html') {
        modalBtnText = "Remove from favourites";
    }

    if (window.location.pathname === `/cuisines/${cuisine}Cuisine.html` && recipeFave.classList.contains("fa-regular")) {
        modalBtnText = "Add to Favourites";
    }

    if (window.location.pathname === `/cuisines/${cuisine}Cuisine.html` && recipeFave.classList.contains("fa-solid")) {
        modalBtnText = "Remove from favourites";
    }

    var modalHTML = `
        <div class="modal fade" id="${title.split(" ").join("")}" tabindex="-1" aria-labelledby="${title.split(" ").join("")}label" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content" id="Modal-${title.split("+").join("")}">
                    <div class="modal-header">
                        <h1 class="modal-title fs-3" style="width: 90%;" id="${title.split("+").join("")}label">${title.split("+").join(" ")}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h2>Nutritional Information<sup>*</sup></h2>
                        <div id="nutritionInfo${title.split("+").join("")}"></div><br>
                        <p class="text-muted"><sup>*</sup>Nutritional data is based on estimates and can vary depending on the specific ingredients used.</p>
                        <h2>Ingredients:</h2>
                        <ul>${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
                        <h2>Instructions:</h2>
                        <p>${instructions}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn bg-gold text-white" id="fave${title.split("+").join("")}">${modalBtnText}</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    var faveRecipeEl = document.getElementById(`fave${title.split("+").join("")}`);
    console.log(faveRecipeEl);
    
    getNutrition(title);

    faveRecipeEl.addEventListener('click', function() {
        toggleFavourite(title, image, ingredients, instructions, recipeFave, cuisine);
    });

    recipeFave.addEventListener('click', function() {
        toggleFavourite(title, image, ingredients, instructions, recipeFave, cuisine);
    });

    return {
        title: title,
        image: image,
        ingredients: ingredients,
        instructions: instructions,
        recipeFave: recipeFave,
        cuisine: cuisine
    };
};

/*
    This function helps with toggling the heart icon from a regular icon to a solid heart icon. If
    the class name is fa-regular, the recipe is not in local storage and if the class name is
    fa-solid, the recipe is in local storage.
*/
function toggleFavourite(title, image, ingredients, instructions, recipeFave, cuisine) {
    var isfavourite = recipeFave.classList.contains("fa-regular");

    if (isfavourite) {
        // Add to favourites
        localStorage.setItem(title.split("+").join(" "), JSON.stringify({
            title: title.split("+").join(" "),
            image: image,
            ingredients: ingredients,
            instructions: instructions,
            cuisine: cuisine,
            heart: true
        }));
        recipeFave.classList.remove("fa-regular");
        recipeFave.classList.add("fa-solid");
    } else {
        // Remove from favourites
        localStorage.removeItem(title.split("+").join(" "));
        recipeFave.classList.remove("fa-solid");
        recipeFave.classList.add("fa-regular");
    }
    
    updateModalButtonText(title, cuisine);
};


/*
    Depending on whether the heart class list contains fa-regular or fa-solid, the modal text will change
    to either add to favourites or remove from favourites.
*/
function updateModalButtonText(title, cuisine) {
    var modalBtnText = "";
    
    if (window.location.pathname === '/favourites.html') {
        modalBtnText = "Remove from favourites";
    }

    var heartClassList = document.querySelector(`[data-target="${title.split("+").join(" ")}"]`).classList;

    if (window.location.pathname === `/cuisines/${cuisine}Cuisine.html` && heartClassList.contains("fa-regular")) {
        modalBtnText = "Add to Favourites";
    }

    if (window.location.pathname === `/cuisines/${cuisine}Cuisine.html` && heartClassList.contains("fa-solid")) {
        modalBtnText = "Remove from favourites";
    }

    var modalButton = document.getElementById(`fave${title.split("+").join("")}`);
    
    if (modalButton) {
        modalButton.textContent = modalBtnText;
    }
};


/*
    Here, we are using our second API, where we are calculating the approximate nutritional value based
    on the ingredients mentioned in the recipe title. For example, if a recipe is called
    "Italian Sundaes with Nutella", the function will split each word into it's own query and calculate
    what the approximate nutritional value would be for "Italian", "Sundaes", "with" and "Nutella". If it
    has nutritional data for that query, it will be added together and listed at the top of the modal,
    below the title.
*/
function getNutrition(recipeName) {
    const nutritionURL = `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${recipeName}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1d9e9c2c69mshd454e4259937dedp174d96jsnfd22249786f7',
            'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
        }
    };

    let totalCalories = 0;
    let totalFat = 0;
    let totalSaturatedFat = 0;
    let totalProtein = 0;
    let totalSodium = 0;
    let totalPotassium = 0;
    let totalCholesterol = 0;
    let totalCarbs = 0;
    let totalFibre = 0;
    let totalSugar = 0;

    fetch(nutritionURL, options, recipeName)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
            for (let i = 0; i< data.length; i++) {
                console.log(data[i]);
                let name = data[i].name;

                let calories = data[i].calories;
                totalCalories += calories;

                let servingSize = data[i].serving_size_g;
                
                let fatTotal = data[i].fat_total_g;
                totalFat += fatTotal;

                let saturatedFat = data[i].fat_saturated_g;
                totalSaturatedFat += saturatedFat;

                let protein = data[i].protein_g;
                totalProtein += protein;

                let sodium = data[i].sodium_mg;
                totalSodium += sodium;

                let potassium = data[i].potassium_mg;
                totalPotassium += potassium;

                let cholesterol = data[i].cholesterol_mg;
                totalCholesterol += cholesterol;

                let carbs = data[i].carbohydrates_total_g;
                totalCarbs += carbs;

                let fibre= data[i].fiber_g;
                totalFibre += fibre;

                let sugar = data[i].sugar_g;
                totalSugar += sugar;

                var recipeTotal = {
                    name: recipeName.split("+").join(" "),
                    calories: parseInt((totalCalories).toFixed(2)) + " kcal",
                    fat: parseInt((totalFat).toFixed(2)) + "g",
                    satFat: parseInt((totalSaturatedFat).toFixed(2)) + "g",
                    protein: parseInt((totalProtein).toFixed(2)) + "g",
                    sodium: parseInt((totalSodium).toFixed(2)) + "mg",
                    potassium: parseInt((totalPotassium).toFixed(2)) + "mg",
                    cholesterol: parseInt((totalCholesterol).toFixed(2)) + "mg",
                    carbs: parseInt((totalCarbs).toFixed(2)) + "g",
                    fibre: parseInt((totalFibre).toFixed(2)) + "g",
                    sugar: parseInt((totalSugar).toFixed(2))+ "g",
                    servingSize: parseInt((servingSize).toFixed(0)) + "g"
                }

                console.log(recipeTotal);
            }

            updateNutritionInfo(recipeName, recipeTotal);
        });
};


/*
    To display the nutritional value for each recipe, we have created a span using bootstrap classes, so
    that the data looks more appealing to the user.
*/
function updateNutritionInfo(title, nutritionData) {
    console.log(nutritionData);
    if (nutritionData === undefined) {
        var nutritionInfoDiv = document.getElementById(`nutritionInfo${title.split("+").join("")}`);
        // nutritionInfoDiv.innerHTML = "No nutritional data is available for this recipe at this moment in time.";
        nutritionInfoDiv.innerHTML = `
        <div class="mt-2 p-3" style="margin-bottom: -1rem;"><span class="badge text-bg-info">Info:</span> No nutritional data is available for this recipe at this moment in time.</div>
        `;
    } else {
        var nutritionInfoDiv = document.getElementById(`nutritionInfo${title.split("+").join("")}`);
        nutritionInfoDiv.innerHTML = `
        <span style="display: inline-flex;" class="badge text-bg-info">Calories: ${nutritionData.calories}</span>
        <span style="display: inline-flex;" class="badge text-bg-info">Fat: ${nutritionData.fat}</span>
        <span style="display: inline-flex;" class="badge text-bg-info">Saturated Fat: ${nutritionData.satFat}</span>
        <span style="display: inline-flex;" class="badge text-bg-info">Protein: ${nutritionData.protein}</span>
        <span style="display: inline-flex;" class="badge text-bg-info">Sodium: ${nutritionData.sodium}</span>
        <span style="display: inline-flex;" class="badge text-bg-info">Potassium: ${nutritionData.potassium}</span>
        <span style="display: inline-flex;" class="badge text-bg-info">Cholesterol: ${nutritionData.cholesterol}</span>
        <span style="display: inline-flex;" class="badge text-bg-info">Carbs: ${nutritionData.carbs}</span>
        <span style="display: inline-flex;" class="badge text-bg-info">Fibre: ${nutritionData.fibre}</span>
        <span style="display: inline-flex;" class="badge text-bg-info">Sugar: ${nutritionData.sugar}</span>
        <span style="display: inline-flex;" class="badge text-bg-info">Serving Size: ${nutritionData.servingSize}</span>
    `;
    }
};


/*
    For each cuisine page, we are displaying the saved recipes the user chose. If the user saved recipes from
    the French page, the Mexican page and the Italian page, each page will only show the saved recipes for that
    cuisine and the remaining unsaved recipes.

    For the favourites page, this will show all the saved recipes across all cuisines. And if a user removes a
    saved recipe from the favourites page, that same recipe will also be unsaved from the individual cuisine page.
*/
function showAllFavourites(currentPageCuisine) {
    // Get the recipe container
    var recipeContainer = document.getElementById("recipe-container");

    // Loop through all keys in localStorage
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var storedValue = localStorage.getItem(key);

        if (isRecipe(storedValue)) {
            var recipeDetails = JSON.parse(storedValue);

            // Check if the recipe matches the current cuisine or if no specific cuisine is provided
            var shouldShowRecipe = !currentPageCuisine || (recipeDetails.cuisine && recipeDetails.cuisine.toLowerCase() === currentPageCuisine.toLowerCase());

            if (shouldShowRecipe) {
                // Display the recipe card
                createRecipeCard(recipeDetails.title, recipeDetails.image, recipeDetails.ingredients, recipeDetails.instructions, recipeDetails.cuisine);
                console.log(recipeDetails.title);
            }

            if (window.location.pathname === '/favourites.html') {
                var heart = document.querySelector(`[data-target="${recipeDetails.title}"]`);
                if (heart) {
                    // Toggle the class for the specific heart icon
                    heart.classList.remove("fa-regular");
                    heart.classList.add("fa-solid");
                };

                heart.addEventListener('click', function() {
                    localStorage.removeItem(recipeDetails.title.split(" ").join(""));
                    location.reload();
                })
                
                var faveRecipeEl = document.getElementById(`fave${recipeDetails.title}`);
                console.log(faveRecipeEl);
                faveRecipeEl.setAttribute("id", `fave${recipeDetails.title.split(" ").join("")}`)

                faveRecipeEl.addEventListener('click', function() {
                    localStorage.removeItem(recipeDetails.title.split(" ").join(""));
                    location.reload();
                });

            }
            
        }
    }

    var recipeContainer = document.getElementById("recipe-container");
    console.log(recipeContainer.childElementCount)
    if (recipeContainer.childElementCount === 0 && window.location.pathname === '/favourites.html') {
        var displayComment = document.createElement("p");
        displayComment.setAttribute("class", "text-center mt-5 text-muted fs-5");
        displayComment.textContent = "No recipes have been saved yet!";
        recipeContainer.appendChild(displayComment);
    } else if (!recipeContainer.childElementCount === 0 && window.location.pathname === '/favourites.html') {
        var displayComment = document.createElement("p");
        displayComment.setAttribute("class", "text-center mt-5 text-muted fs-5");
        displayComment.textContent = "";
        recipeContainer.appendChild(displayComment);
    };
};


/*
    If the recipe card does exist in local storage, the recipe details is checked that it is an object,
    and if it is, the function is called within the showAllFavourites function and the data from the
    recipe is then extracted.
*/
function isRecipe(value) {
    try {
        var parsedValue = JSON.parse(value);
        return parsedValue && typeof parsedValue === 'object';
    } catch (error) {
        return false;
    }
};


// Checks if the recipe is favourited in localStorage.
function isFavourited(title) {
    return localStorage.getItem(title) !== null;
};