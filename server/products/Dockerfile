FROM node:16.5.0-alpine

ENV CI=true
ENV WDS_SOCKET_PORT=0

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . .

CMD ["npm", "start"]

