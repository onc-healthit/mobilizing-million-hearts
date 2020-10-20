FROM node:11-alpine

# Build for production by default

ARG NODE_ENV=production

# RUN curl -o- -L https://yarnpkg.com/install.sh | \  bash -s -- --version 0.26.1

RUN mkdir -p /usr/src/app/data

WORKDIR /usr/src/app

# Copy this server into the container
COPY server server

# Copy the app into the container

COPY app app

# Set ui build path

WORKDIR /usr/src/app/app

# Install
RUN yarn install

# Build app

RUN yarn run build

WORKDIR /usr/src/app/server

# Install the server

RUN yarn install

# Migrate the SQLite3 database

RUN yarn migrate

# Start api

EXPOSE 3000:3000

CMD ["yarn", "start"]
