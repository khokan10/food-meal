const searchFood =async () =>{
    const searchFiled = document.getElementById('searchFiled');
    const searchText = searchFiled.value;
    searchFiled.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
    `
    const res = await fetch(url);
    const data = await res.json();
    desplayFood(data.meals)
};

const desplayFood = (data) =>{
    console.log(data);
    const searchResult = document.getElementById('searchResult');
    searchResult.innerHTML='';
    data.forEach(meal =>{
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML= `
        <div onclick="loadMeal(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
            </div>
        </div>
        `
        searchResult.appendChild(div);
    })

}

    const loadMeal = async (mealDetails)=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDetails}`
        const res = await fetch(url);
        const data = await res.json();
        displayMealDetail (data.meals[0]);
}

const displayMealDetail =(displayMeal) =>{
    console.log(displayMeal)

    const mealDetail = document.getElementById('mealDetail')
mealDetail.innerHTML='';
const div = document.createElement('div')
div.classList.add('card')
div.innerHTML=`
<img src="${displayMeal.strMealThumb}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${displayMeal.strMeal}</h5>
  <p class="card-text">${displayMeal.strInstructions.slice(0,150)}</p>
  <a href="${displayMeal.strYoutube}" class="btn btn-primary">Go somewhere</a>
</div>
`
mealDetail.appendChild(div)
}