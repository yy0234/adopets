[Getting Started with Node on Heroku]--(https://devcenter.heroku.com/articles/getting-started-with-nodejs)

****pls finish the "set up" step of the above website

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

---Cloning an Existing Repository:
$ git clone https://github.com/yy0234/adopets.git
$ cd adopets
$ npm install
$ npm start


##--------------------download the latest version from Github 
$ git checkout "branch_name"  //eg. git checkout master
$ git fetch
$ git pull
<br/><br/>
##--------------------Branch off a new branch   
****remember to create new branch when working on new function,,,don't direct modify on the master branch***********
<br/><br/>
$ git checkout -b "new_branch_name"
<br/><br/>
##--------------------Switch to a new branch
$ git checkout "branch_name"
<br/><br/>
##--------------------Check your git status
$ git status
<br/><br/>
##--------------------Add your changes
$ git add .
<br/><br/>
##--------------------Commit your changes
$ git commit -m "your message here"
<br/><br/>
##--------------------Upload your changes
$ git push
<br/><br/><br/>

-------*****the full step of upload your changes******* pls follow
$ git checkout "branch_name"  //to make sure you are in the correct branch
$ git fetch
$ git pull    // to make sure you have the latest version from Github  ** 
$ git add .
$ git commit -m "your message here"
$ git push    // push to Github
$ git push heroku master    //push to heroku master (not so sure, may be need to merge before deploy git push heroku master)
$ heroku open     //optional, open the browser    