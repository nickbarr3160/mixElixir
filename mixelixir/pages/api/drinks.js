import {generate, filtering,GoToPage} from '../../utils/func'
import all_drinks from '@/all_drinks';
import ax from 'axios';


export default async function handler(req, res) 
{

    var drinks = []

  
    const result = await ax.get('https://mix-elixir.herokuapp.com/')
    drinks = result.data

  var cocktailMatches =[]
  const receivedParams = req.query;
  const comparitiveArray = req.query['array[]']
  const {value,searchBy,page,d_id,curPage} = req.query;


if (req.body.favDrink)
{
  var drink = req.body.favDrink
  var user = req.body.user
  console.log(req.body.user)
  try{
    const addFav = await ax.post(`https://mix-elixir.herokuapp.com/fav`,
      {drink,
      user
    }
    )

  }
  catch (err) {console.log(err)}
  // console.log(req.body)
}

if(req.body.login)
{
  var email = req.body.email
  var password = req.body.pass
  try
    {const login = await ax.post(`https://mix-elixir.herokuapp.com/login`,{ 
    email,
    password })
    if(login.status ==201)
    {
      
      cocktailMatches = [login.status,login.data]
    }
    console.log(login.data)
  
  }
    catch (err) {console.log(err)}
}


if(req.body.signup)
{
  var user = req.body.user
  var email = req.body.email
  var password = req.body.pass
  try
    {const login = await ax.post(`https://mix-elixir.herokuapp.com/signup`,{ 
    user,
    email,
    password })
    // console.log(login)
  
  }
    catch (err) {console.log(err)}
}


  if (comparitiveArray)
  {
    var nuDrinks = generate(drinks, comparitiveArray)
    cocktailMatches = GoToPage(nuDrinks,curPage,5)
    
    // cocktailMatches = GoToPage(nuDrinks, 1,15)
  }
  
  
    
  if (searchBy) {

    // if(req.query.page)
    // {
    //   console.log(req.query.page)
    // }
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
