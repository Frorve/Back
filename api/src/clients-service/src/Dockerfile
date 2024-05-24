FROM node:16

WORKDIR /home/general/Escritorio/nestjs-basic-project-dev/api/src

COPY ../../../package*.json ./

RUN npm install

COPY ../../src ./src

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
