import {generate, filtering,GoToPage} from '../../utils/func'
import all_drinks from '@/all_drinks';
import ax from 'axios';
import { useState } from 'react';


export default async function handler(req, res) 
{

    var drinks = []

  
    const result = await ax.get('https://mix-elixir.herokuapp.com/')
    drinks = result.data

  var cocktailMatches = []
  const receivedParams = req.query;
  const comparitiveArray = Object.values(receivedParams)

  const {value,searchBy,page,d_id} = req.query;

      // console.log(receivedParams)


  // if (comparitiveArray)
  // {
  //   var nuDrinks = generate(drinks, comparitiveArray)
  //   cocktailMatches = GoToPage(nuDrinks,page,5)
    
  //   // cocktailMatches = GoToPage(nuDrinks, 1,15)
  // }
  
  // if (page && searchBy )
  //   {
  //     console.log(page)
  //     // cocktailMatches = GoToPage(nuDrinks, 1,15)
  //   }
    
  if (searchBy) {

    // if(req.query.page)
    // {
    //   console.log(req.query.page)
    // }
    console.log(req.query)
    var nuDrinks = filtering(drinks, {
      [searchBy]:value
    })

    cocktailMatches = GoToPage(nuDrinks,page,5)
    
  }
    
    if(req.query.d_id)
    {
      cocktailMatches = drinks.filter(o=> o.idDrink === Number(req.query.d_id))

    }

  


  res.status(200).json(cocktailMatches);


  
}
