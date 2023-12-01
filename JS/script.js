function getRecipe(cuisine) {
    const cuisineURL = `https://food-recipes-with-images.p.rapidapi.com/?q=${cuisine}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '42025b3a89msh8b63ea4c6bc8c91p192ed4jsnf26890e5742f',
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
                getNutrition(title);

                var ingredients = Object.values(data.d[j].Ingredients);
                console.log(ingredients.length);
                for (var k = 0; k < ingredients.length; k++) {
                    console.log(ingredients[k]);
                }
                console.log(ingredients);
                var instructions = data.d[j].Instructions;
                console.log(instructions);
                var image = data.d[j].Image;
                console.log(image);
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


var recipeContainer = document.getElementById("recipe-container");


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