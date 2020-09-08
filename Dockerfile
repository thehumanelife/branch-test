FROM node:13.12.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set user 0 && npm config set unsafe-perm true

RUN npm install

COPY . .

CMD [ "node", "app.js" ]