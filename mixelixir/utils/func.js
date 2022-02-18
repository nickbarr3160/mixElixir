const drinks = require('../all_drinks.js')

var ing = ['orange peel', 'whiskey', 'lemon', 'gin']



drinks.map(obj =>{
    let temp =[]
    let temp_two =[]
    let ingredients = []
    for (i=1; i<16;i++)
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
            var sorted =[]
            var count = 0
            for(let i=0;i<ing.length;i++)
                    {
                        o.ingredients.filter((el)=>
                        { 
                            if (el.toLowerCase().includes(ing[i].toLowerCase()))
                            {
                                count ++
                                if(count >= 2)
                                {
                                    // console.log(o)
                                    return sorted = o
                                }
                                else if (count < 2)
                                {
                                    
                                    // el.splice(0,i)
                                    // sorted.splice(i,1)
                                    return
                                }
                            }

                            else {
                                return
                            }
                            

                        })
                    }
            // console.log(sorted)
            return sorted
            
        })
        
        console.log( filtered)
    }
})
