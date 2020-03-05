# NodeServer

A Simple REST API using Express.js, the following API Application is used together with a React Application to showcase the REST API implementation. The following packages that is being used is listed below.

## Folder Structure
```
project
|
|--config
|   |-- database.js
|
|-- controller
|    |-- auth.Controller.js
|    |-- db.Controller.js
|    |-- user.Controller.js
|
|-- model
|    |-- auth.Model.js
|    |-- user.Model.js
|
|-- route
|    |-- auth.Route.js
|
|-- utils
|    |-- bcrypt.Utils.js
|    |-- joi.Validator.js
|    |-- jwt.Utils.js
|    |-- mail.Utils.js
|
|-- index.js
|-- package.json
|-- package-lock.json
|-- Dockerfile
|-- fabfile.py
```
The folder structure is structed according to what each files are used for and filed according to thier defition or function. 

## Dependencies

These are the following Node Modules that is being used in the project.
```
* @hapi/joi
* dotenv
* express
* morgan
* mysql2
* nodemon
* path
* sequelize
* bcryptjs
* jsonwebtoken
* cors 
```

## Todo
- [x] Register User
- [X] Token Generation for User
- [X] Login Validation User
- [X] User Reset via Email
- [ ] Fetch User Info
- [ ] User Level Clearance
- [ ] Setup Profile Page
- [ ] Add new post page 
