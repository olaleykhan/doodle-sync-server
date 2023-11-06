# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /usr/src/app
COPY . .
RUN yarn install --production

CMD ["yarn", "serve"]
EXPOSE 3000

