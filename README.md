# Gatsbyjs Template with Docker/Docker Compose

This is Gatsby template working with Docker and Docker Compose.  
We don't need to install Node.js in our local machine.

## Environment

- Node.jS ... 15.14.0
- Gatsbyjs ... 3.3.1

## How to run local development

You can only run the following commands and see `http://localhost:8080` in your browser after build is done.

```sh
% docker-compose up -d --build

% docker-compose exec develop bash

# in the container
/app $ cd hello-world
/app/hello-world $ npm install # if node_modules does not exist
/app/hello-world $ npm run develop # it can be `npm start`
```

## How to create new Gatsby site

1. When you want to create another Gatsby site, please run `docker-compose up` command in terminal.

```sh
% docker-compose up -d --build
```

2. Then, run this command by attaching the container.

```sh
% docker-compose exec develop bash
```

3. You can use `node` and `npm` commands because the docker image is based on node image. So you can create new site with `gatsby` commands.

```sh
/app $ gatsby new {site_name} https://github.com/gatsbyjs/gatsby-starter-hello-world
```

4. Add `--host=0.0.0.0` parameter in `npm run develop` command in your new site.

```json
"scripts": {
  "develop": "gatsby develop --host=0.0.0.0",
}
```

5. You can see the result in `http://localhost:8080` with `npm run develop` or `npm start` command.

## How to start 'npm run develop' after docker build

1. Please update following files.

- Dockerfile  
change directory to your site in `WORKDIR` (L-3)

```Dockerfile
WORKDIR /app/{site_name}
```

- docker-compose.yml
add `command` field and set `npm run develop` or `npm start`

```yml
services:
  develop:
    build:
      context: .
      dockerfile: Dockerfile
    command: npm run develop
```

2. Run belo `docker-compose up` command, then you can see `http://localhost:8080` in your browser after build is done.

```sh
% docker-compose up -d --build

# when you want to see the progress of the build
% docker-compose logs -f
```