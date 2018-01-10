# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
"# adopets" 


#[Getting Started with Node on Heroku]--(https://devcenter.heroku.com/articles/getting-started-with-nodejs)</p>

pls finish the "set up" step of the above website
Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

#Cloning an Existing Repository:
```
$ git clone https://github.com/yy0234/adopets.git
$ cd adopets
$ npm install
$ npm start
```

#download the latest version from Github</h4>
```
$ git checkout "branch_name"  //eg. git checkout master
$ git fetch
$ git pull
```

#Branch off a new branch</h4> 
****remember to create new branch when working on new function,,,don't direct modify on the master branch
```
$ git checkout -b "new_branch_name"
```

#Switch to a new branch
```
$ git checkout "branch_name"
```

#Check your git status
```
$ git status
```

#Add your changes
```
$ git add .
```

#Commit your changes
```
$ git commit -m "your message here"
```

#Upload your changes
```
$ git push
```
#the full step of upload your changes
****pls follow
```
$ git checkout "branch_name"  //to make sure you are in the correct branch
$ git fetch
$ git pull    // to make sure you have the latest version from Github  ** 
$ git add .
$ git commit -m "your message here"
$ git push    // push to Github
$ git push heroku master    //push to heroku master (not so sure, may be need to merge before deploy git push heroku master)
$ heroku open     //optional, open the browser   
``` 