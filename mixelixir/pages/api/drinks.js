import {generate} from '../../utils/func'
import all_drinks from '@/all_drinks';


export default async function handler(req, res) {

  //HELPER FUNCTIONS FOR YOU TO USE!
  console.log(req.query)
  //await Save("test", json);
  //const files = await Read();
var cocktails =[]
  //detect if filter/save/read
  const ings = req.query;

  if (ings){
 cocktails = generate(all_drinks, ings)
    console.log("whooooooooo", cocktails)
  }
  res.status(200).json(cocktails);
}
