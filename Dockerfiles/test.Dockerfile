# Dockerfile for running tests in a Node.js application
# This Dockerfile sets up the environment for running tests using Node.js
FROM node:20.12-alpine

COPY package.json package-lock.json ./

RUN npm install

# Copy the application source code and test files
COPY src ./src
COPY eslint.config.mjs jest.config.mjs ./
COPY tests ./tests

# Clean up unnecessary files to reduce image size
RUN rm -rf node_modules \
    && rm -rf .github \
    && rm -rf .gitignore \
    && rm -rf Dockerfiles/user.Dockerfile

CMD [ "npm", "test" ]