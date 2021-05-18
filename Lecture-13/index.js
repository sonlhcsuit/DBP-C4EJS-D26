// const meal = {
//     "idMeal": "52971",
//     "strMeal": "Kafteji",
//     "strDrinkAlternate": null,
//     "strCategory": "Vegetarian",
//     "strArea": "Tunisian",
//     "strInstructions": "Peel potatoes and cut into 5cm cubes.\r\nPour 1-2 cm of olive oil into a large pan and heat up very hot. Fry potatoes until golden brown for 20 minutes, turning from time to time. Place on kitchen paper to drain.\r\nCut the peppers in half and remove seeds. Rub a little olive oil on them and place the cut side down on a baking tray. Place them under the grill. Grill until the skin is dark and bubbly. While the peppers are still hot, put them into a plastic sandwich bag and seal it. Take them out after 15 minutes and remove skins.\r\nIn the meantime, heat more olive oil another pan. Peel the onions and cut into thin rings. Fry for 15 minutes until golden brown, turning them often. Add the Ras el hanout at the end.\r\nCut the pumpkin into 5cm cubes and fry in the same pan you used for the potatoes for 10-15 minutes until it is soft and slightly browned. Place on kitchen paper.\r\nPour the remaining olive oil out of the pan and put all the cooked vegetables into the pan and mix. Whisk eggs and pour them over the vegetables. Put the lid on the pan so that the eggs cook. Put the contents of the pan onto a large chopping board, add salt and pepper and chopped and mix everything with a big knife.",
//     "strMealThumb": "https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg",
//     "strTags": null,
//     "strYoutube": "https://www.youtube.com/watch?v=-TFf-Zu-xQU",
//     "strIngredient1": "Potatoes",
//     "strIngredient2": "Olive Oil",
//     "strIngredient3": "Green Pepper",
//     "strIngredient4": "Onions",
//     "strIngredient5": "Ras el hanout",
//     "strIngredient6": "Pumpkin",
//     "strIngredient7": "Eggs",
//     "strIngredient8": "Salt",
//     "strIngredient9": "Pepper",
//     "strIngredient10": "",
//     "strIngredient11": "",
//     "strIngredient12": "",
//     "strIngredient13": "",
//     "strIngredient14": "",
//     "strIngredient15": "",
//     "strIngredient16": "",
//     "strIngredient17": "",
//     "strIngredient18": "",
//     "strIngredient19": "",
//     "strIngredient20": "",
//     "strMeasure1": "5 Large",
//     "strMeasure2": "2 tbs",
//     "strMeasure3": "1",
//     "strMeasure4": "5",
//     "strMeasure5": "1 tbs",
//     "strMeasure6": "500g",
//     "strMeasure7": "24 Skinned",
//     "strMeasure8": "Pinch",
//     "strMeasure9": "Pinch",
//     "strMeasure10": " ",
//     "strMeasure11": " ",
//     "strMeasure12": " ",
//     "strMeasure13": " ",
//     "strMeasure14": " ",
//     "strMeasure15": " ",
//     "strMeasure16": " ",
//     "strMeasure17": " ",
//     "strMeasure18": " ",
//     "strMeasure19": " ",
//     "strMeasure20": " ",
//     "strSource": "http://allrecipes.co.uk/recipe/12294/kafteji--tunisian-fried-vegetables-.aspx",
//     "strImageSource": null,
//     "strCreativeCommonsConfirmed": null,
//     "dateModified": null
// }

function renderMeal(meal){
    let nutrients =[]
    for(let i =0 ; i < 20;i++){
        if (Boolean(meal['strIngredient'+ (i+1).toString()])){
            nutrients.push(`<li>${ meal['strIngredient'+ (i+1).toString()] }: ${meal['strMeasure'+ (i+1).toString()]}</li>`)
        }
    }
    let list = `<ul class="meal__information__materials flex__container--col">
            ${nutrients.join("")}
        </ul>`
    return `
    <div class="meal flex__container bd">
        <div class="meal__image flex__container--col flex--center--cross">
            <img src="${meal.strMealThumb}" />
            <input type="button" value="Youtube" class="meal__youtube" />
        </div>
        <div class="meal__information  flex__container">
            <div class="meal__information--left ">
                <h1 style="font-size: 48px;">${meal.strMeal}</h1>
                ${list}
            </div>
            <div class="meal__information--right">
                <p>
                ${meal.strInstructions}
                </p>
            </div>
        </div>
    </div>
    `
}

let main = document.querySelector("#main")
let random_btn = document.querySelector("#random")
let search_btn = document.querySelector("#search")
let search_inp = document.querySelector("#inp")


random_btn.addEventListener("click",async ()=>{
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    let body = await response.json()
    let meal = body.meals[0]
    main.insertAdjacentHTML("afterbegin",renderMeal(meal))
})
