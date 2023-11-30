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



function getNutrition(recipeName) {
    const nutritionURL = `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${recipeName}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c7965e32a1mshbe160fd7fa536fap1de1ccjsn06ed08451b4a',
            'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch(nutritionURL, options)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
        });
};

getNutrition();