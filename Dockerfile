FROM amd64/node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install                                                  

EXPOSE 3000

CMD [ "npm", "start"]