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
  - About page
  - Contact page
  - Register page
  - Signin page

- At last Make the server listen

```shell
app.listen(PORT, () => {
  console.log(`Server is running at localhost ${PORT}`);
});
```

### Database

#### Connection.js

- Databse is connected with the application using mongodb databse uri.
- Secure the database uri and password by including it in .env file and git ignore it.

### Model

#### UserSchema.js

- creating userSchema and model
  - define the json data format with schema

##### password hashing

- install bcryptjs

```shell
npm i bcryptjs
```

- pre save middleware should be executed to do password hashing and done before calling save method.
- notes:post save middleware send email when user account is created and done after save method

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

##### register route

- conditions for register
  - no empty fields
  - if user exist reject with err message else post data (register user).

##### login route

- conditions for login
  - no empty fields
  - email must be already registered else invalid credentials.
  - password should be matched(backend password and current password).

##### user authentication

- checking for genuine user by unique id (jwttoken) after login.

  - install jsonwebtoken

  ```shell
  npm install jsonwebtoken
  ```

  - generate jwt token and store it in database.
  - store token in cookies
  - get token from cookie and verify user.
