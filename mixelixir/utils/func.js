const all_drinks = require('../all_drinks.js')
const drinks = require('../all_drinks.js')

// var ing = ['orange peel', 'whiskey', 'lemon', 'gin']


 export function generate (data,ing)
{
    try{
        var drinkMatches =[]
        data.map(obj =>
        {
                
                let storedIngredients =[]// array to extract and store all the ingredients from the data in an array format
                let ingredients = [] // array to store all extracted ingredients by after filtering out the empty values
                let formatedDrinks =[] // array to store the data in a formated manner i.e consolidating seperate ingredient key value pairs into one singular array of key : [array of ingredients for each drink in the data]
                

                // reformating data into the aforementioned format
                for (var i=1; i<16;i++)
                {
                    storedIngredients.push(obj["strIngredient"+i])
                }

                storedIngredients.map((o,i)=>
                {
                    if(o != '')
                    {ingredients.push(o)}
                })

                // constructing a new object with the everything but the ingredients 
                formatedDrinks.push(Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('strIngredient'))));
                // pushing the formatted ingredients into the newly constructed object
                formatedDrinks.map((o,i)=> Object.assign(o,{ingredients:ingredients}))
                
                // if a comparitive array exists i.e. the second parameter of the function which will be a user inputted array of ingredients from a textbox on front end
                if(ing)
                {   
                    // using filter as a loop to go over all the data
                    const filtered = formatedDrinks.map((o)=>
                    {   
                        var count = 0 //keeping track of how many items inside the comparitive array matches with the dataset's ingredient arrays
                                    o.ingredients.filter((el)=>
                                    { 
                                        var work = false
                                        for(var i = 0; i<ing.length; i++)
                                        {
                                            // comparing if dataset's contains mutual ingredients with the comparitive array regardless of the case senstivity on both ends
                                            if (el.toLowerCase().includes(ing[i].toLowerCase()))
                                            {
                                                count ++//increases the count by one everytime there's a match.
                                                
                                            }

                                        }

                                        // condition to check if there's at least 2 or more matches
                                        if(count >= 2 && !drinkMatches.includes(o))
                                        {
                                            drinkMatches.push(o);//push the drink object that meets the condition
                                        }
                                        return work;

                                    })
                                        

                    })
                        

                }
        })
                // returning all not null drinking matches and filtering out the empty arrays
                return drinkMatches.length === 0 ? null : drinkMatches
    }
    catch(err){ console.log(err), 'not workingg'}
}

// generate(all_drinks,ing)
