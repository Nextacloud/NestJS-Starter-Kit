FROM node:14.15.4-alpine3.10

ARG APP_PORT

WORKDIR /app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE ${APP_PORT}

CMD [ "yarn", "start:dev" ]