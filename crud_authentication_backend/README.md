# CRUD Authentication Backend

This is a CRUD (Create, Read, Update, Delete) authentication backend built on Node.js and Express.js that allows users to register, login, delete, list, and filter users.

# Features

   - User registration: Users can sign up using their name, email, and password. All fields are mandatory.
   - User login: Users can login using their email and password.
   - List users: An endpoint is provided to list all users in ascending order of their names.
   - Delete user: A user account can be deleted by specifying the user ID in the URL.
   - User detail: A particular user can be searched using a unique identifier.

# Installation

To run the server, you will need to have Node.js installed on your machine.

   1. Clone the repository or download the source code.
   2. Navigate to the project directory and install the dependencies by running the following command:

```bash
 npm install
 ```

   3. Create a `.env` file in the root directory and add the following environment variables:

makefile

```bash
PORT=3000
JWT_SECRET=mysecretkey
```

Note that you can set the `PORT` environment variable to any value that you prefer. The `JWT_SECRET` is used to sign and verify JSON Web Tokens (JWTs) that are used for user authentication.

   4. Start the server by running the following command:


```bash
npm start
```

