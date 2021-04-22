# Gatsbyjs Template with Docker/Docker Compose

This is Gatsby template working with Docker and Docker Compose.  
We don't need to install Node.js in our local machine.

## Environment

- Node.jS ... 15.14.0
- Gatsbyjs ... 3.3.1

## How to run local development

You can only run the following command and see `http://localhost:8080` in the browser after build is done.

```sh
% docker-compose up -d --build

# run this command when you want to see build log
% docker-compose logs -f
```

## How to create new Gatsby site

1. When you want to create Gatsby site, please comment out `command` in docker-compose.yml temporally then run `docker-compose up` command in terminal.

```yml
services:
  develop:
    build:
      context: .
      dockerfile: Dockerfile
    # command: npm run develop
```

```sh
% docker-compose up -d --build
```

2. Then, run this command by attaching the image.

```sh
% docker-compose exec develop ash
```

3. You can use `node` and `npm` commands because the docker image is based on node image. So you can create new site with `npx` and `gatsby` commands.

```sh
# move to /app directory
/app/hello-world $ cd ..

/app $ npx gatsby new {site_name} https://github.com/gatsbyjs/gatsby-starter-hello-world
```

4. Please update following files.

- Dockerfile  
change directory to your site in `WORKDIR` (L-3)

```Dockerfile
WORKDIR /app/{site_name}
```

- docker-compose.yml
uncommment `command` commented out in the step 1

```yml
services:
  develop:
    build:
      context: .
      dockerfile: Dockerfile
    command: npm run develop
```

- package.json  
add `--host=0.0.0.0` parameter in `npm run develop` command in your new site

```json
"scripts": {
  "develop": "gatsby develop --host=0.0.0.0",
}
```
