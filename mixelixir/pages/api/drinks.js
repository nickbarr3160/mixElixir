
import {generate} from '../../utils/func';
import drinks from '@/all_drinks';

export default async function handler(req, res) {

  //HELPER FUNCTIONS FOR YOU TO USE!
//   console.log(req.query, req.body)
  //await Save("test", json);
  //const files = await Read();

  //detect if filter/save/read
  const ings = req.query;
  console.log(req.query.ings)

  if (ings){
    console.log("this is ings when recognized by API:", ings)
    generate(drinks, ings)
  }


}
