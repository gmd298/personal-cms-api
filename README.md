# Installation

* clone repo `git clone git@github.com:gmd298/personal-cms-api.git`
* Install dependencies. `npm install`
* make data folder `mkdir data`
* start db `npm run db`
* start server `npm start`

# Docs

### POST `/v1/admins`

#### example body:

```
{
  name: "John Doe",
  email: "john@example.com",
  password: "hello1234",
}
```
#### example response:

```
{
  name: "John Doe",
  email: "john@example.com",
  id: 1234,
  createdAt: 1234,
  updatedAt: 1234,
}
```

