FROM node:latest

RUN npm install webpack -g

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install

ENV NODE_ENV=production
ENV PORT=3000

CMD [ "/usr/local/bin/node", "./server.js" ]

EXPOSE 3000
