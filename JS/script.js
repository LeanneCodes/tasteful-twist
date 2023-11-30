// function getMexicanFood() {
//     const mexicanURL = 'https://food-recipes-with-images.p.rapidapi.com/?q=mexican';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'c7965e32a1mshbe160fd7fa536fap1de1ccjsn06ed08451b4a',
//             'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
//         }
//     };


//     return fetch(mexicanURL, options)
//         .then(function(response) {
//             return response.json();
//         }).then(function(data) {
//             console.log("Mexican recipes", data);
//         });
// }

// getMexicanFood();


// function getSpanishFood() {
//     const spanishURL = 'https://food-recipes-with-images.p.rapidapi.com/?q=spanish';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'c7965e32a1mshbe160fd7fa536fap1de1ccjsn06ed08451b4a',
//             'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
//         }
//     };


//     return fetch(spanishURL, options)
//         .then(function(response) {
//             return response.json();
//         }).then(function(data) {
//             console.log("Spanish recipes", data);
//         });
// }

// getSpanishFood();


// function getItalianFood() {
//     const italianURL = 'https://food-recipes-with-images.p.rapidapi.com/?q=italian';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'c7965e32a1mshbe160fd7fa536fap1de1ccjsn06ed08451b4a',
//             'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
//         }
//     };


//     return fetch(italianURL, options)
//         .then(function(response) {
//             return response.json();
//         }).then(function(data) {
//             console.log("Italian recipes", data);
//         });
// }

// getItalianFood();


// function getGreekFood() {
//     const greekURL = 'https://food-recipes-with-images.p.rapidapi.com/?q=greek';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'c7965e32a1mshbe160fd7fa536fap1de1ccjsn06ed08451b4a',
//             'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
//         }
//     };


//     return fetch(greekURL, options)
//         .then(function(response) {
//             return response.json();
//         }).then(function(data) {
//             console.log("Greek recipes", data);
//         });
// }

// getGreekFood();


// function getAsianFood() {
//     const asianURL = 'https://food-recipes-with-images.p.rapidapi.com/?q=asian';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'c7965e32a1mshbe160fd7fa536fap1de1ccjsn06ed08451b4a',
//             'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
//         }
//     };


//     return fetch(asianURL, options)
//         .then(function(response) {
//             return response.json();
//         }).then(function(data) {
//             console.log("Asian recipes", data);
//         });
// }

// getAsianFood();


// function getIndianFood() {
//     const indianURL = 'https://food-recipes-with-images.p.rapidapi.com/?q=indian';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'c7965e32a1mshbe160fd7fa536fap1de1ccjsn06ed08451b4a',
//             'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
//         }
//     };


//     return fetch(indianURL, options)
//         .then(function(response) {
//             return response.json();
//         }).then(function(data) {
//             console.log("Indian recipes", data);
//         });
// }

// getIndianFood();


// function getFrenchFood() {
//     const frenchURL = 'https://food-recipes-with-images.p.rapidapi.com/?q=french';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'c7965e32a1mshbe160fd7fa536fap1de1ccjsn06ed08451b4a',
//             'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
//         }
//     };


//     return fetch(frenchURL, options)
//         .then(function(response) {
//             return response.json();
//         }).then(function(data) {
//             console.log("French recipes", data);
//         });
// }

// getFrenchFood();


// function getMoroccanFood() {
//     const moroccanURL = 'https://food-recipes-with-images.p.rapidapi.com/?q=moroccan';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'c7965e32a1mshbe160fd7fa536fap1de1ccjsn06ed08451b4a',
//             'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
//         }
//     };


//     return fetch(moroccanURL, options)
//         .then(function(response) {
//             return response.json();
//         }).then(function(data) {
//             console.log("Moroccan recipes", data);
//         });
// }

// getMoroccanFood();


// function convertAmount() {
//     var ingredient = "sugar";
//     var amount = 2.5;
//     var imperial = "cups";
//     var metric = 'grams';
//     var subAPI = "8b1cea18610f4b56a5703c3300b944fe";
//     var convertURL = `https://api.spoonacular.com/recipes/convert?ingredientName=${ingredient}&sourceAmount=${amount}&sourceUnit=${imperial}&targetUnit=${metric}&apiKey=${subAPI}`;

//     fetch(convertURL)
//         .then(function(response) {
//             return response.json();
//         }).then(function(data) {
//             console.log(data);
//         });
// }

// convertAmount();


function getNutrition() {
    const recipeName = "Greek Salad";
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