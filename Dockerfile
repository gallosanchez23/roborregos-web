FROM node:latest

RUN mkdir /app
WORKDIR /app

RUN yarn

COPY package.json /app

ENV PATH /app/node_modules/.bin:$PATH

CMD ["yarn"]
CMD ["yarn", "start"]