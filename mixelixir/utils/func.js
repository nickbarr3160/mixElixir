const drinks = require('../all_drinks.js')

// var ing = ['orange peel', 'whiskey', 'lemon', 'gin']

 export function generate(data,ing)
{
    var sorted =[]
    data.map(obj =>{
    let temp =[]
    let temp_two =[]
    let ingredients = []
    for (let i=1; i<16;i++)
    {
        temp.push(obj["strIngredient"+i])
        // temp_two.push(Object.entries(obj).includes('strMeasure'+ i))
    }

    temp.map((o,i)=>{
        if(o != '')
        {ingredients.push(o)}
    })

    temp_two.push(Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('strIngredient'))));

    temp_two.map((o,i)=> Object.assign(o,{ingredients:ingredients}))

    if(ing)
    {
        const filtered = temp_two.map((o)=>
        {
            // console.log(o)
            var count = 0
                        o.ingredients.filter((el)=>
                        { 
                            var work = false
                            for(var i = 0; i<ing.length; i++)
                            {
                                if (el.toLowerCase().includes(ing[i].toLowerCase()))
                                {
                                    count ++
                                    // else if (count < 2)
                                    // {
                                    //     // el.splice(0,i)
                                    //     // sorted.splice(i,1)
                                    //     return false
                                    // }
                                }

                            }
                            //console.log(el, count, ing)

                            if(count >= 2)
                            {
                                sorted.push(o);
                            }
                            return work;

                        })
                            

        })
                        
                        //console.log( filtered)
    }
                })
                console.log(sorted)
                return sorted.length === 0 ? null : sorted
}




// generate(drinks, ing)
