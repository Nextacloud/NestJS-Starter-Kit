## Description

Simple NestJS Application Starter Kit which includes Express, TypeOrm, Passport Authentication (WIP), Postgress (Using Docker Compose)

## Requirement

1. Docker Composed installed
2. Node 14.15.4 and above
3. NPM 6.14.10 and above

Note: Not sure if older node and npm would work or not

## Installation

```bash
$ npm install
$ cp .env.example .env
```

## Running the app

```bash
# spinning up the database using docker and Adminer
$ docker-composer up -d

# migrate the db
$ yarn migrate

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Logging in to Adminer for Postgres

```
server: db_pg
username: root
password: password
database: db
```

## Using MySQL

1. Uncomment `db_mysql` in `docker-compose.yml`
2. Comment `db_pg` in `docker-compose.yml`
3. Change `depends_on` from `db_pg` to `db_mysql`
4. Run `yarn add mysql`
5. Run `yarn remove pg`
6. Update `.env` file as follows

```
DATABASE_TYPE='mysql'
DATABASE_PORT=3306
DATABASE_ROOT_PASSWORD=password
DATABASE_HOST=localhost
DATABASE_USERNAME=root
DATABASE_PASSWORD=password
DATABASE_DB=db
```

## Logging in to Adminer for MySQL

```
server: db_mysql
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
