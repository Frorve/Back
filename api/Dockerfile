FROM node:16

WORKDIR ./api

COPY package*.json ./

RUN npm install

COPY .. .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]