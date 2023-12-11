<p align="center"><img src="https://bitly-clone-frontend.vercel.app/favicon.png"/></p>
<h1 align="center">bitly-clone-backend</h1>
- Simple rest api for bitly-clone frontend with 2 main endpoints.

## Endpoints list

create shortUrl (https://bitly-clone-backend.onrender.com/url/)
- method : POST
- require body : `{"url" : "https://domain.tld/"}`

get full url
- method : GET
- require PATH : shorturl
- example https://bitly-clone-backend.onrender.com/url/vcXkw/

## setup your own server
- clone repo!!!
- rename `.env.example` to `.env`

edit this following `.env`

```env
MONGO_URI=
MONGO_DB_NAME=
PORT=
```

require 
- `MONGO_URI=...`

optional
- `MONGO_DB_NAME=`
- `PORT=` (Default is port 3000)

after setup .env
- `npm install`
- `npm run start:dev (for watch mode)`
