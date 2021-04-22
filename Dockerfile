FROM node:15.14.0-alpine3.10

WORKDIR /app/hello-world

RUN apk update && \
    apk add git