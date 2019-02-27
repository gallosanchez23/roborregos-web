FROM node:latest

RUN apt-get update -qq && \
		apt-get install -y vim nano

COPY . /app
WORKDIR /app

ENV HOME=/app PATH=/app/node_modules/.bin:$PATH

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]