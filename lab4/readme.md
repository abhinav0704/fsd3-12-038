#   NPM project 
    1.Go to project folder (by cd)
    2.type " npm init -y"
    3.open package.json
    4.update "type:module"
    5.install nodemon by `npm i nodemon -D`
    6.update script in pacakge .json


    script{
        "start":"node app.js",
        "dev":"nodemon prg7.js"
    }

    7.add node module in the gitignore
    8.to use npm run dev
 ## REST API
 - majority backend servers
## REQUEST TYPE
1. GET- Get all , get by ID             
- Get:/api/products (get all for all)    
- Get:/api/products/101 (get by id for particular)
2. POST- /api/products --> data iwll be shared by echoapi by body

3. PUT/PATCH- /apii/products/201 --> both ID and echoapi body is used.

4. DELETE- /api/products/110 --> sigle data is deleted from database.
## exported fxn
- exported function 