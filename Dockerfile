FROM node:latest
ENV NODE_ENV=production

WORKDIR /paulbot

COPY ["package.json", "package-lock.json*", "./paulbot"]

RUN npm install

COPY ./ /paulbot/

CMD [ "node", "bot.js" ]