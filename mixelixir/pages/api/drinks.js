import {generate, filtering} from '../../utils/func'
import all_drinks from '@/all_drinks';


export default async function handler(req, res) 
{

  var cocktailMatches =[]
  const receivedParams = req.query;
  const comparitiveArray = Object.values(receivedParams)
  
  const {value,searchBy} = req.query;

  // console.log(req.query)

  if (comparitiveArray)
  {
    cocktailMatches = generate(all_drinks, comparitiveArray)
  }
  
  
  if (searchBy) {
    cocktailMatches = filtering(all_drinks, {
      [searchBy]:value
    })
  }

  res.status(200).json(cocktailMatches);

  
}
