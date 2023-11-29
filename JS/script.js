function getTastyData() {
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
            console.log(data.results[0].sections[0].components[1].ingredient.name)
            return data.results[0].sections[0].components[1].ingredient.name;
        });
}

function getSubData() {
    getTastyData().then(function(ingredient) {
        console.log(ingredient);
        var subAPI = "8b1cea18610f4b56a5703c3300b944fe";
        var subURL = `https://api.spoonacular.com/food/ingredients/substitutes?ingredientName=${ingredient}&apiKey=${subAPI}`;

        fetch(subURL)
            .then(function(response) {
                return response.json();
            }).then(function(data) {
                console.log(data);
                if (data.status === 'success') {
                    console.log(data.substitutes);
                }
            });
    });
}

getSubData();







