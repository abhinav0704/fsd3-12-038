## Eexpress
# Steps
Step-1: create prject folder
Step-2:create 2 folder frontend and backend in root folder(lab5)
Step-3: open terminal and reach to backend by 
cd..
cd lab5
cd backend
Step-4: npm init -y
Step-5: install nodemone npm i nodemon -d
Step-6:install express npm i express
Step-7:update backend/package.json
    - change type : "type" : "mudule"
    - change script : 
      "scripts": {
    "start": "node app.js",
    "dev": "nodemon prg1.js"
  }
 

 # static import
  In xpress we can add any static html pages with the help of express.static method.
  
  Express support middleware, when we have to execute some function before server execution then we use middleware app.use always apply to insert any middleware.