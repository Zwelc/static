FROM node:18-alpine

WORKDIR /usr/src/app

COPY dist ./

EXPOSE 8080
CMD [ "node", "api/main.js" ]