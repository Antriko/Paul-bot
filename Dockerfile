FROM node:latest
WORKDIR /paulbot
COPY package*.json /paulbot/
RUN npm install

COPY ./ /paulbot/
CMD ["node", "bot.js"]