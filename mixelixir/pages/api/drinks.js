import {generate, filtering} from '../../utils/func'
import all_drinks from '@/all_drinks';
import ax from 'axios';
import { useState } from 'react';

export default async function handler(req, res) 
{

  var drinks = []

  
    const result = await ax.get('https://mix-elixir.herokuapp.com/')
    drinks = result.data
    // console.log(drinks)


  var cocktailMatches =[]
  const receivedParams = req.query;
  const comparitiveArray = Object.values(receivedParams)

  const {value,searchBy} = req.query;
  // console.log(searchBy)
  console.log(receivedParams)


  // if (comparitiveArray)
  // {
  //   cocktailMatches = generate(drinks, comparitiveArray)
  // }
  
  if (searchBy) {
    // console.log(searchBy)
    cocktailMatches = filtering(drinks, {
      [searchBy]:value
    })
  }

  // cocktailMatches = cocktailMatches.slice(0,10)
  // console.log(cocktailMatches)
  res.status(200).json(cocktailMatches);


  
}
