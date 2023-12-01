function getRecipe(cuisine) {
    const cuisineURL = `https://food-recipes-with-images.p.rapidapi.com/?q=${cuisine}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f2c0025551msh634b76b514de39bp12e43cjsn68aa06d692f3',
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
                // getNutrition(title);

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

                createRecipeCard(title, image, ingredients, instructions);
            }
        });
};

if (window.location.pathname === '/mexican.html' || window.location.pathname === '/dummy.html') {
    getRecipe("mexican");
} else if (window.location.pathname === '/italian.html') {
    getRecipe("italian");
} else if (window.location.pathname === '/greek.html') {
    getRecipe("greek");
} else if (window.location.pathname === '/asian.html') {
    getRecipe("asian");
} else if (window.location.pathname === '/indian.html') {
    getRecipe("indian");
} else if (window.location.pathname === '/french.html') {
    getRecipe("french");
} else if (window.location.pathname === '/spanish.html') {
    getRecipe("spanish");
} else if (window.location.pathname === '/moroccan.html') {
    getRecipe("moroccan");
} else {
    console.log("No page exists");
}


function createRecipeCard(title, image, ingredients, instructions) {
    var recipeContainer = document.getElementById("recipe-container");
    recipeContainer.setAttribute("class", "row");
    recipeContainer.setAttribute("style", "justify-content: space-around; margin: 50px;")
    var recipeCard = document.createElement("div")
    recipeCard.setAttribute("class", "card col-sm-12 col-md-4 col-lg-3");
    recipeCard.setAttribute("style", "width: 18rem; padding: 20px; text-align: center; justify-content: space-between; margin-bottom: 2rem; height: 380px;");
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
    recipeFave.setAttribute("class", "fa-regular fa-heart");
    recipeFave.setAttribute("style", "display: flex; justify-content: center; align-items: center; font-size: 1.5rem");
    recipeDetailsBtn.setAttribute("class", "btn btn-primary");
    recipeDetailsBtn.setAttribute("type", "button");
    recipeDetailsBtn.setAttribute("style", "width: 75%;");
    recipeDetailsBtn.innerText = "View Recipe";
    recipeDetailsBtn.setAttribute("data-bs-target", "#"+title.split("+").join(""));
    recipeDetailsBtn.setAttribute("data-bs-toggle", "modal");
    recipeTitleBody.append(recipeCardTitle);
    recipeBtnBody.append(recipeDetailsBtn, recipeFave);
    recipeCard.append(recipeImage, recipeTitleBody, recipeBtnBody);
    recipeContainer.append(recipeCard);

    var modalHTML = `
        <div class="modal fade" id="${title.split("+").join("")}" tabindex="-1" aria-labelledby="${title.split("+").join("")}label" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-3" style="width: 90%;" id="${title.split("+").join("")}label">${title.split("+").join(" ")}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h2>Ingredients:</h2>
                        <ul>${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
                        <h2>Instructions:</h2>
                        <p>${instructions}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

createRecipeCard();


function getNutrition(recipeName) {
    const nutritionURL = `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${recipeName}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c7965e32a1mshbe160fd7fa536fap1de1ccjsn06ed08451b4a',
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
                    calories: totalCalories + " kcal",
                    fat: totalFat + "g",
                    satFat: totalSaturatedFat + "g",
                    protein: totalProtein + "g",
                    sodium: totalSodium + "mg",
                    potassium: totalPotassium + "mg",
                    cholesterol: totalCholesterol + "mg",
                    carbs: parseInt((totalCarbs).toFixed(2)) + "g",
                    fibre: totalFibre + "g",
                    sugar: totalSugar + "g",
                    servingSize: servingSize + "g"
                }

                console.log(recipeTotal);
            }
        });
};

getNutrition();