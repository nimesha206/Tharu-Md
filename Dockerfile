FROM node:lts-buster

COPY package.json .

RUN yarn

COPY . .

CMD ["npm", "start"]
