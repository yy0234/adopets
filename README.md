# Adopets

Please finish the set up step of [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.


## Cloning an Existing Repository:
```
$ git clone https://github.com/yy0234/adopets.git
$ cd adopets
$ npm install
$ npm start
```

## Please add the remote server
git remote add heroku https://git.heroku.com/adopets.git

## The full step of upload your changes
**pls follow
```
$ git checkout "branch_name"  //to make sure you are in the correct branch
$ git pull  // to make sure you have the latest version from Github  ** 
$ git add .
$ git commit -m "your message here"
$ git push    //push to heroku master (not so sure, may be need to merge before deploy git push heroku master)
$ heroku open     //optional, open the browser   
``` 

## Download the latest version from Github
```
$ git checkout "branch_name"  //eg. git checkout master
$ git fetch
$ git pull
$ npm install    //sometime need to install the new library after git pull
```

## Branch off a new branch</h4> 
**remember to create new branch when working on new function,,,don't direct modify on the master branch
```
$ git checkout -b "new_branch_name"
```

## Switch to a new branch
```
$ git checkout "branch_name"
```

## Check your git status
```
$ git status
```

## Add your changes
```
$ git add .
```

## Commit your changes
```
$ git commit -m "your message here"
```

## Upload your changes
```
$ git push
```
