import {generate} from '../../utils/func'
import all_drinks from '@/all_drinks';


export default async function handler(req, res) 
{

  var cocktailMatches =[]
  const receivedParams = req.query;
  const comparitiveArray = Object.values(receivedParams)

  if (comparitiveArray)
  {
    cocktailMatches = generate(all_drinks, comparitiveArray)
  }
    res.status(200).json(cocktailMatches);
}
