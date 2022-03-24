// generate function for matching comparative array of ingredients with the database's drinks' ingredients
export function generate (data,ing)
{
    try{
        var drinkMatches =[]
            
                // if a comparitive array exists i.e. the second parameter of the function which will be a user inputted array of ingredients from a textbox on front end
                if(ing)
                {   
                    // using filter as a loop to go over all the data
                    const filtered = data.map((o)=>
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
                // returning all not null drinking matches and filtering out the empty arrays
                return drinkMatches.length === 0 ? null : drinkMatches
    }
    catch(err){ console.log(err), 'not workingg'}
}


// search filter function for searching through the data of drinks being received by the custom made REST API
export function filtering(
  arr=[],
  config={strDrink:null, strAlcoholic:null,strGlass:null} //function taking 2 arguments an array and an object
  ,val
){
  //console.log(arr.slice(0,5));

  const {strDrink, strAlcoholic, strGlass} = config;

  if(strDrink || strAlcoholic || strGlass) // condition checking if any of the parameters exist in search function
  {
    const filtered_arr = arr.filter((o)=>{ //filter through the data(arr) being received by the API

      var cond = true;
  
      if(strDrink){
        // if the value of the search bar exist in the databases drinks' name
        cond = cond && o.strDrink.toLowerCase().includes(strDrink);
      }
  
      if(strAlcoholic  && o.strAlcoholic==='Non alcoholic' && strDrink){
        // if the value of the search bar exist in the databases drinks' type
          cond = cond && o.strAlcoholic ==='Non alcoholic';
          if (cond)
          {
            // console.log(cond)
            cond = cond && o.strDrink.toLowerCase().includes(val);
          }
      }

      if(strGlass){
        // if the value of the search bar exist in the databases drinks' glass type
          cond = cond && o.strGlass.toLowerCase().includes(strGlass);
      }
  
      return cond;
    })
  
  //   console.log(filtered_arr);
    return filtered_arr;
  } else {

    return [];
  }

}


// take the drinksjson and paginate it generate 
export function GoToPage(drinks=[], page=1, num=5)
{
    const result = drinks.slice((page-1)*num, page*num)
    // num is the number of items we wanna display per page
    //two arguments in the splice function
    // what item to start from ((page-1)*num)
    // is the number of items  to be shown page * number ==> creating multiples of the same   

    return result
}