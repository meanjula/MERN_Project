# MERN PROJECT

## Backend

- initalize the project by installing node modules and express server

```shell
npm install
npm install express
```

- Using mongodb database install mongoose

```shell
npm install mongoose
```

- loading environment variables from a .env file into process.env

```shell
npm install dotenv
```

### App.js

- create middleware that checks the required condition before rendering the requested page

```shell
const middleware = (req, res, next) => {
  console.log("check the user authentication");
  next();
};
```

- create routing for all pages

  - Home page
  - About page (with middleware)
  - Contact page
  - Signup page
  - Signin page

- At last Make the server listen

```shell
app.listen(PORT, () => {
  console.log(`Server is running at localhost ${PORT}`);
});
```

### Database

#### Connection.js

- With the help of mongoose, databse is connected with the application using mongodb databse uri.
- Secure the database uri and password by including it in .env file, which is git ignored.

### Model

#### UserSchema.js

- creating userSchema and model
  - define the json format with schema

### Router

#### authentication.js

- create router
- create post request for getting data posted by user(inside postman)

##### postman

- download postman
- create new collection in postman
- include in header (content-Type:application/json)
- inside body select row and then write user input data as in userSchema format.
- send data to application

- retrieve user input and store in databse using post request and promises/async await.
- posting conditions
  - no empty fields
  - if email exist reject with err message else post data

##### login route

- conditions for login
  - no empty fields
  - email must be registered already(invalid details error)
  - password should be matched

##### hashing
