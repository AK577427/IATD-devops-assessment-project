# Dockerfile for running tests in a Node.js application
# This Dockerfile sets up the environment for running tests using Node.js
FROM node:20.12-alpine

COPY package.json package-lock.json ./

RUN npm install

COPY src ./src
COPY eslint.config.mjs jest.config.mjs ./
COPY tests ./tests

CMD [ "npm", "test" ]