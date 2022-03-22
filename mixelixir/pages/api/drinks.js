import {generate, filtering,GoToPage} from '../../utils/func'
import all_drinks from '@/all_drinks';
import ax from 'axios';

// this is a local api server that will communicating with the backend REST API.
export default async function handler(req, res) 
{

    // empty array to store all the drinks from the API
  var drinks = []
  
  const result = await ax.get('https://mix-elixir.herokuapp.com/')
  drinks = result.data

  // cocktail matches is what is being sent as data in the end of this function
  var cocktailMatches =[]

  // if/when the user is using the generator, comparitive array is defined below
  const comparitiveArray = req.query['array[]']

  const {value,searchBy,page,d_id,curPage} = req.query;

  // when the user goes on the favourites page, a get request is automatically sent
  // where the token is being passed
  if(req.query.token)
  {
    // extracting out the token from the paramater
    var info = JSON.parse(req.query.token)
    var token = info.token
    
    try{
      // GET request to the api that takes in a param called token
      const getFavs = await ax.get(`https://mix-elixir.herokuapp.com/myFavs`,{
        params:{
          token: token
        }
      })
      // assigning cocktail matches to whatever the data is being sent by the API
      cocktailMatches = getFavs.data

    } catch (err) {console.log(err,"yooooo")}
  }

  // whenever the user clickes add to fav
  // a post request is made to this Local API
  // request contains a body with favDrink
  if (req.body.favDrink)
  {
    // whatever drink was favourited
    var favDrink = req.body.favDrink
    // the user who favourited it
    var user = req.body.user

    try{
      // make a post request to the API with the following body
      const addFav = await ax.post(`https://mix-elixir.herokuapp.com/fav`,
        {
        favDrink,
        user
      }
      )

    }
    catch (err) {console.log(err)}

  }

  if(req.body.login)
  {

    // the email and password that is being passed over here by the front end 
    var email = req.body.email
    var password = req.body.pass
    try
      {
      // make a post request to authenticate the user with backend authentication and use the email and password being received from the front-end
      // compare it with the data in the users collection
      const login = await ax.post(`https://mix-elixir.herokuapp.com/login`,{ 
      email,
      password })
      if(login.status ==201)
      {
        // sending back the status and the data to store it in the front end
        cocktailMatches = [login.status,login.data]
      }

    }
      catch (err) {console.log(err)}
  }


  if(req.body.signup)
  {
    // the email, username, and password that is being passed over here by the front end 
    var username = req.body.user
    var email = req.body.email
    var password = req.body.pass
    try
      {
      // sending the body to make a post request
      // to create a new user
      const signup = await ax.post(`https://mix-elixir.herokuapp.com/signup`,{ 
      username,
      email,
      password })
    }
      catch (err) {console.log(err)}
  }

    // if comparitive array exists 
    if (comparitiveArray)
    {
      // use the generate function to store all the matches in nuDrinks
      var nuDrinks = generate(drinks, comparitiveArray)
      
      // set cocktail matches to GoToPage that takes in nuDrinks as an argument to paginate all the results
      cocktailMatches = GoToPage(nuDrinks,curPage,5)
    }
      
    // if(req.query.suggest)
    // {
    //   console.log(req.query.suggest)
    // }
    
    
    // if searchBy Exist.
    // when the user is just on searching through the drinks using different variables. 
    if (searchBy) {

      // use the filering function to store all the matches in nuDrinks
      var nuDrinks = filtering(drinks, {
        [searchBy]:value
      })
      // set cocktail matches to GoToPage that takes in nuDrinks as an argument to paginate all the results
      cocktailMatches = GoToPage(nuDrinks,page,5)
    }
      
      // function for when clicked on an individual drink and go to an individual drinks page
      if(req.query.d_id)
      {
        cocktailMatches = drinks.filter(o=> o.idDrink === Number(req.query.d_id))
        
      }

      // function that recieves the ingredients of the drink that was clicked on and putting them in the generate function to display suggestions of the similar drinks
      if(req.query['suggest[]'])
      {
        // use the generate function to store all the matches in nuDrinks
      var nuDrinks = generate(drinks, req.query['suggest[]'])
      
      // set cocktail matches to GoToPage that takes in nuDrinks as an argument to paginate all the results
      cocktailMatches = GoToPage(nuDrinks,curPage,5)
      }
      
    


  res.status(200).json(cocktailMatches);


  
}
