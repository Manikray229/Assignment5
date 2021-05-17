const searchMealName = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.meals))
        .catch(error => displayError(" Don't Match Any Food Item "))
}

const displayError = error => {
    const errorText = document.getElementById('errorText');
    errorText.innerText = error;
}

const displayData = meals => {
    const mealContainer = document.getElementById('displayMeals');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'col-md-3 col-sm-6 mt-5';
        mealDiv.innerHTML = `
        <div class="card text-center">
          <div onclick="mealInfo(${meal.idMeal})" class="card-block">
            <img src="${meal.strMealThumb}" alt="meal-image" class="img-fluid">
            <div class="card-title">
              <h3>${meal.strMeal}</h3>
            </div>
          </div>
        </div>
        `
        mealContainer.appendChild(mealDiv);
    });
}

const mealInfo = Id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Id}`
    fetch(url)
        .then(res => res.json())
        .then(data => mealNameDetails(data.meals))
}

const mealNameDetails = ingredients => {
    const mealInfoDiv = document.getElementById('mealInfo');
    mealInfoDiv.innerHTML = '';
    ingredients.forEach(ingredient => {
        const mealDetailsDiv = document.createElement('div');
        mealDetailsDiv.className = 'meal-card';
        mealDetailsDiv.innerHTML = `
            <img class="details" src="${ingredient.strMealThumb}" alt="Card image cap">
            <div class="card-body">
              <h1 class="meal-name">${ingredient.strMeal}</h1>
       
              <h5 class="meal-name">Ingredients</h5>
            </div>
            <ul class="list-group list-group-flush">
    
                <li> ${ingredient.strIngredient1}</li>
                <li> ${ingredient.strIngredient2}</li>
                <li> ${ingredient.strIngredient3}</li>
                <li> ${ingredient.strIngredient4}</li>
                <li> ${ingredient.strIngredient5}</li>
                <li> ${ingredient.strIngredient6}</li>
                <li> ${ingredient.strIngredient7}</li>
                <li> ${ingredient.strIngredient8}</li>
            </ul>
                
            `

        mealInfoDiv.appendChild(mealDetailsDiv);

    });
}
