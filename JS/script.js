function getTasty15() {
    const tastyURL = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_15_minutes';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c7965e32a1mshbe160fd7fa536fap1de1ccjsn06ed08451b4a',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };

    return fetch(tastyURL, options)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.results);
        });
}

getTasty15();

function getTasty30() {
    const tastyURL = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c7965e32a1mshbe160fd7fa536fap1de1ccjsn06ed08451b4a',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };

    return fetch(tastyURL, options)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.results);
        });
}

getTasty30();

function getTasty45() {
    const tastyURL = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_45_minutes';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c7965e32a1mshbe160fd7fa536fap1de1ccjsn06ed08451b4a',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };

    return fetch(tastyURL, options)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.results);
        });
}

getTasty45();

function convertAmount() {
    var ingredient = "sugar";
    var amount = 2.5;
    var imperial = "cups";
    var metric = 'grams';
    var subAPI = "8b1cea18610f4b56a5703c3300b944fe";
    var convertURL = `https://api.spoonacular.com/recipes/convert?ingredientName=${ingredient}&sourceAmount=${amount}&sourceUnit=${imperial}&targetUnit=${metric}&apiKey=${subAPI}`;

    fetch(convertURL)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
        });
}

convertAmount();


// console.log(data.results[0].sections[0].components[0].measurements[1].quantity)




