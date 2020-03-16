# Progress-Tracker 

The following application is using both React Native (Frontend) and Express
(backend) to showcase and understand the usage of REST API implementation. 

---

## NodeServer

A Simple REST API using Express.js, the following API Application is used together with a React Application to showcase the REST API implementation. The following packages that is being used is listed below.

### NodeServer - Folder Structure
```
api
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

### NodeServer - Dependencies

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

### NodeServer - Todo

- [x] Register User
- [X] Token Generation for User
- [X] Login Validation User
- [X] User Reset via Email
- [X] Fetch User Info
- [ ] User Level Clearance
- [X] Setup Profile Page
- [ ] Add new post page
- [ ] Realtionship tables
---

### Progess-Tracker App

A simple React Application that is used as a web-based front end to used as
overview project workflow and progress. The following pacjage that is being used
is listed below.

### Progress-Tracker - Folder Structure

```
app
|
|--src
|  |
|  |-- actions
|  |	|-- auth.Actions.js
|  |
|  |-- assets
|  |	|-- bootstrap.min.js
|  |	|-- img ( image resources)
|  |
|  |-- components
|  |	|-- Layouts
|  |	|	|-- Header.js
|  |	|	|-- Siderbar.js
|  |	|
|  |    |-- ForgetPass.Components.js
|  |	|-- Home.Components.js
|  |	|-- Login.Components.js
|  |	|-- Profile.Components.js
|  |	|-- Register.Components.js
|  |	
|  |-- reducers
|  |	|-- auth.Reducer.js
|  |	|-- index.js
|  |	|-- user.Reducer.js
|  |
|  |-- store
|  |	|-- store.js
|  |
|  |-- style
|  |	|-- bootstrap.min.css
|  |	|-- Reest.css
|  |	|-- Style.css
|  |
|  |-- utils
|  |	|-- axios.config.js
|  |	|-- etc.js
| 
|-- public (auto generated index.html)
|-- Dockerfile
|-- nginx.conf
|-- package.json
```
The following folder structured according to what each files are used for. As
the components folder holds the view/web page of the site. With the usage of
Redux there is actions,store and reducers folder. 

As there is an implenetation of virtualisation and Dockerisation of the project
there is a Dockerfile with and nginx.conf

#### Progress-Tracker - Dependencies

```
* axios
* react
* react-dom
* react-redux
* react-router-dom
* react-scripts
* redux
* redux-thunk
```

#### Progress-Tracker - Todo

- [X] Login Page
- [X] Register Page
- [X] Reset Password Page
- [ ] Home Dashboard
- [ ] User Profile
- [ ] Create Todos

