# MERN PROJECT

## Backend

- install node modules

```shell
npm install
```

```shell
npm install express
```

- for using mongodb database install mongoose

```shell
npm install mongoose
```

- for loading env variable

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
