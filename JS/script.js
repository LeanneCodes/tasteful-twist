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
            console.log(data.d[0].Title);
            var titleSplit = data.d[0].Title.split(" ");
            console.log(titleSplit); 
            var title = titleSplit.join("+");
            console.log(title);
            getNutrition(title);
        });
}

// getRecipe("mexican");
// getRecipe("spanish");
// getRecipe("italian");
// getRecipe("greek");
// getRecipe("asian");
// getRecipe("indian");
// getRecipe("french");
// getRecipe("moroccan");



function getNutrition() {
    const name = "sausage and mash potato";
    const nameSplit = name.split(" ");
    console.log(nameSplit);
    const join = nameSplit.join("+");
    console.log(join);
    const recipeName = join;
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