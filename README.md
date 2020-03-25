# sncontact
Pour tracer les patients qui souffrent du Corona au Sénégal et de leur contact pendant une durée fixée


## Express Router and Routes

| Route           | HTTP Verb | Route Middleware   | Description                          |
| --------------- | --------- | ------------------ | ------------------------------------ |
| /api/users      | GET       |                    | Get list of users                    |
| /api/users      | POST      |                    | Creates a new user                   |
| /api/users/:id  | GET       | `isAuthenticated`  | Get a single user                    |
| /api/users/:id  | DELETE    | `hasRole('admin')` | Deletes a user, restriction: 'admin' |
| /api/users/me   | GET       | `isAuthenticated`  | Get my info                          |
| /api/users:id/password | PUT| `isAuthenticated`  | Change a users password              |

## Usage

### Basic example **Create USER** `/api/users`:

Request Body:
```json
{
  "name": "CRISTIAN MORENO",
  "email": "khriztianmoreno@myemail.com",
  "password": "my-secret-password"
}
```

Response:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWFiNzkyMWQ1Yzk3NjJlZGQzZmUwZDgiLCJpYXQiOjE1MDQ0MDk4ODksImV4cCI6MTUwNDQyNzg4OX0.2gZPXZ-dQc3kQ1fcIDryHm4gIqWLvcw6guAOnP0ueGU"
}
```

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 4.x.x, npm >= 2.x.x
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `npm run dev` to start the development server. It should automatically open the client in your browser when ready.

4. Open browser `http://localhost:3030/api/helloworld`.


## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| 
<!-- ALL-CONTRIBUTORS-LIST:END -->
