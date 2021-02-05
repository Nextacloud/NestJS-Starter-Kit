## Description

Simple NestJS Application Starter Kit which includes Express, TypeOrm, Passport Authentication (WIP), Postgress (Using Docker Compose)

## Requirement

1. Docker Composed installed
2. Node 12 and above
3. NPM 6 and above

## Installation

```bash
$ npm install
$ cp .env.example .env
```

## Running the app

```bash
# spinning up the database using docker and Adminer
$ docker-composer up -d

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Logging in to Adminer

```
server: db_pg
username: root
password: password
database: db
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

NestJS Starter Kit is [MIT licensed](LICENSE).
