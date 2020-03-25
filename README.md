# sncontact
Pour tracer les patients qui souffrent du Corona au Sénégal et de leur contact pendant une durée fixée


## Express Router and Routes

| Route           | HTTP Verb | Route Middleware   | Description                          |
| --------------- | --------- | ------------------ | ------------------------------------ |
| /users/all      | GET       |                    | Recupérer la liste des users         |
| /users/addposition      | POST      |                    | Ajouter une nouvelle position                  |
| /users/:telnumber  | GET       |   | Recupérer les positions d'un user dont le numéro de tel est donné                |
| /users/:id  | DELETE    |  | Supprimer une position |
| /contacts/all      | GET       |                    | Recupérer la liste des contacts observer entre les personnes         |
| /contacts/addcontact      | POST      |                    | Ajouter une nouveau contact                  |
| /contacts/:telnumber  | GET       |   | Recupérer les  contacts du numéro de tel                 |
| /contacts/:id  | DELETE    |  | Supprimer un contact |


## Usage

### Example **Ajouter une nouvelle position** `/users/addposition`:

Request Body:
```json
{
  "telnumber": "77xxxxxxx",
  "cni": "",
  "deviceid": "",
  "debutsejour":"2020-03-25T20:35:32.359+00:00",
  "finsejour" :"2020-03-25T20:35:32.359+00:00",
  "coord : {
        latitude: '',
        longitude: '',
        altitude: '0'
        },
  "etat" :"0",
  "description":""
}
```

Response:
```json
{
    "User added!"
}
```
### Example **Ajouter une nouveau contact** `/contacts/addcontact`:

Request Body:
```json
{
  "telnumber1": "77xxxxxxx",
  "telnumber2": "77xxxxxxx",
  "deviceid1": "",
  "deviceid2": "",
}
```

Response:
```json
{
    "Contact ajouté!"
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

4. Open browser `http://localhost:3030/users/all`.


## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| 
<!-- ALL-CONTRIBUTORS-LIST:END -->
