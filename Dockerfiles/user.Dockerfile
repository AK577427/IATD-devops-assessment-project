# Dockerfile for User Service
# This Dockerfile sets up the user service environment using Node.js
FROM node:20.12-alpine

COPY package.json package-lock.json ./

RUN npm install

# Copy the application source code and test files
COPY src ./src
COPY eslint.config.mjs jest.config.mjs ./

# Clean up unnecessary files to reduce image size
RUN rm -rf node_modules \
    && rm -rf .github \
    && rm -rf .gitignore \
    && rm -rf Dockerfiles/user.Dockerfile \
    && rm -rf tests

CMD [ "npm", "test" ]