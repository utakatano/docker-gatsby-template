FROM node:15.14.0-buster-slim

WORKDIR /app

RUN apt-get update && \
    apt-get install -y git && \
    npm install -g gatsby-cli