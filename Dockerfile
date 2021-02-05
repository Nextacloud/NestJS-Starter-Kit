FROM node:15.6.0-alpine3.12

WORKDIR /app

COPY package*.json ./

RUN npm install --verbose

COPY . ./

ENV PORT=3000

EXPOSE 3000

CMD [ "npm", "run", "start" ]