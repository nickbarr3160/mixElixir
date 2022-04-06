This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
* start with npm install to install dependencies in both directories. mixElixir and Socket

* run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

## Login Credentials / Signup
* you can use a dummy user to login using 
    * a@a.com email
    * 1234567 password
    
* Or you can create your own user

## Locations 
* There are 2 main directories
    * MixElixir - for the front end 
    * Sockets - for the sockets
* All the components can be found under the comps folder
* All the pages can be found under /pages

## Utility
* CUSTOM HOOKS for search and themeing can be found under in utils/provider.js
* Server side functions for Generator, Filtering, and Pagination can be found in utils/func.js
* the Local API that imports the utility funcitons can be found in pages/api/drinks.js

## Socket
* A network socket is initialized and referred to as 'io' in our code. 
* The device that communicated with he server (io) is referred to as the socket in our code. 
* There is a basic communication setup between the two programs. 
* Text and saved react states are sent to the io from one singular socket and is then sent back by the io allowing for access of many sockets to view the text and saved states. 
* The socket will run perfectly when ran on localhost however is not setup on a live server.
* # backend  https://github.com/npm-i-abhay/mixElixirAPI

