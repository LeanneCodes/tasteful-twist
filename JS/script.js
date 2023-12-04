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

if (window.location.pathname === '/cuisines/mexicanCuisine.html' || window.location.pathname === '/dummy.html') {
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
    var recipeContainer = document.getElementById("recipe-container");
    console.log(recipeContainer.childElementCount)
    if (recipeContainer.childElementCount === 0 || null) {
        var displayComment = document.createElement("h3");
        displayComment.textContent = "No recipes have been favourited yet!";
        recipeContainer.appendChild(displayComment);
    }
    
    if (recipeContainer.childElementCount > 0) {
        displayComment.textContent = "";
        recipeContainer.appendChild(displayComment);
    }
} else {
    console.log("No page exists");
}


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

    var recipeContainer = document.getElementById("recipe-container");
    console.log(recipeContainer.childElementCount)
    
    recipeContainer.setAttribute("class", "row");
    if (window.location.pathname === '/favourites.html') {
        recipeContainer.setAttribute("style", "justify-content: flex-start; margin: 50px;")
    } else {
        recipeContainer.setAttribute("style", "justify-content: space-around; margin: 50px;")
    }
    var recipeCard = document.createElement("div");
    recipeCard.setAttribute("class", "card col-sm-12 col-md-4 col-lg-3 p-3 text-center justify-content-between mb-3");
    if (window.location.pathname === '/favourites.html') {
        recipeCard.setAttribute("style", "width: 18rem; height: 380px; margin-right: 30px;");
    } else {
        recipeCard.setAttribute("style", "width: 18rem; height: 380px;");
    }
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
    recipeFave.setAttribute("class", isFavourited(title) ? "fa-solid fa-heart" : "fa-regular fa-heart");
    recipeFave.setAttribute("class", "fa-regular fa-heart d-flex justify-content-center align-items-center");
    recipeFave.setAttribute("style", "font-size: 1.5rem");
    recipeFave.setAttribute("data-target", title.split("+").join(" "));
    console.log(recipeFave);
    recipeDetailsBtn.setAttribute("class", "btn btn-primary");
    recipeDetailsBtn.setAttribute("type", "button");
    recipeDetailsBtn.setAttribute("style", "width: 75%;");
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

    var modalBtn = "";

    if (window.location.pathname === '/favourites.html') {
        var modalBtn = "Remove from favourites";
    } else {
        var modalBtn = "Add to Favourites";
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
                        <p class="text-muted"><sup>*</sup>Nutritional data is based on estimates. It can vary depending on specific ingredients used.</p>
                        <h2>Ingredients:</h2>
                        <ul>${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
                        <h2>Instructions:</h2>
                        <p>${instructions}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" id="fave${title.split("+").join("")}">${modalBtn}</button>
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
        togglefavourite(title, image, ingredients, instructions, recipeFave, cuisine);
    });

    recipeFave.addEventListener('click', function() {
        togglefavourite(title, image, ingredients, instructions, recipeFave, cuisine);
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


function togglefavourite(title, image, ingredients, instructions, recipeFave, cuisine) {
    var recipeDetails = {
        title: title.split("+").join(" "),
        image: image,
        ingredients: ingredients,
        instructions: instructions,
        cuisine: cuisine,
        heart: true
    };

    var recipeDetailsJSON = JSON.stringify(recipeDetails);

    var isfavourite = recipeFave.classList.contains("fa-regular");

    if (isfavourite) {
        // Add to favourites
        localStorage.setItem(title.split("+").join(" "), recipeDetailsJSON);
        recipeFave.classList.remove("fa-regular");
        recipeFave.classList.add("fa-solid");
    } else {
        // Remove from favourites
        localStorage.removeItem(title.split("+").join(" "));
        recipeFave.classList.remove("fa-solid");
        recipeFave.classList.add("fa-regular");
    };
};


function getNutrition(recipeName) {
    const nutritionURL = `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${recipeName}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8dda9d9ee6msh61bc18e73875257p1cca71jsn3ba2b933a71d',
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


function updateNutritionInfo(title, nutritionData) {
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
};


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
                
                // var faveRecipeEl = document.getElementById(`fave${recipeDetails.title}`);
                // console.log(faveRecipeEl);

                // faveRecipeEl.addEventListener('click', function() {
                //     togglefavourite(title, image, ingredients, instructions, recipeFave, cuisine);
                // });
            }
        }
    }
}



function isRecipe(value) {
    try {
        var parsedValue = JSON.parse(value);
        return parsedValue && typeof parsedValue === 'object';
    } catch (error) {
        return false;
    }
};

function getAllfavourites() {
    var favourites = [];

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var storedValue = localStorage.getItem(key);

        if (isRecipe(storedValue)) {
            var recipeDetails = JSON.parse(storedValue);

            favourites.push({
                title: recipeDetails.title,
                image: recipeDetails.image,
                ingredients: recipeDetails.ingredients,
                instructions: recipeDetails.instructions,
                cuisine: recipeDetails.cuisine
            });
        }
    }

    return favourites;
};

function isFavourited(title) {
    // Check if the recipe is favourited in localStorage
    return localStorage.getItem(title) !== null;
}