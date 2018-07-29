# RAJAONGKIR REST-API

## How To Use

### Run Your Teminal

-   Clone this repository

```sh
git clone https://github.com/herdanuyp/rajaongkir-starter.git
```

```sh
npm install
```

-   Run Your Server

```sh
nodemon server.js
```

-   Open/Test this API using POSTMAN

```sh
http://localhost:3000/dot/province

to get all provinces
```

```sh
http://localhost:3000/dot/province/:id

to get each province
```

```sh
http://localhost:3000/dot/city

to get all cities
```

```sh
http://localhost:3000/dot/city/:id

to get each city
```

```sh
http://localhost:3000/dot/city/:id/province/:province

to get each city and each province
```

## API Endpoints

| HTTP | Routes                       | Description                       |
| ---- | ---------------------------- | --------------------------------- |
| GET  | `/dot/city`                  | to get all cities                 |
| GET  | `/dot/city/:id`              | to get each city                  |
| GET  | `/dot/city/:id/province/:id` | to get specific city and province |
| GET  | `/dot/province`              | to get all provinces              |
| GET  | `/dot/province/:id`          | to get each city                  |
