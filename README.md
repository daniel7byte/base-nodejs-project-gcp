# Base Project Backend

## Instalacion

To install the project, we had prepared the containers in Docker to facilitate the steps. So it is important that you have installed both Docker and docker compose on your operating system, whether Windows, Mac or Linux. If you don't have it, you can do it [following the Docker documentation](https://docs.docker.com/engine/install/) 🐋

<blockquote>
<span>
💡
</span>
<span>
If you install Docker Desktop (in Windows and Mac), it comes with docker compose, but if you do it in Linux you must install it separately.
</span>
</blockquote>

#### Step 1

Clone the repository

```
$ git clone git@github.com:daniel7byte/base-nodejs-project-gcp.git
```

#### Step 2

Duplicate the file `.env.example` and rename to `.env`. Then, you must put the information in the environment variables.

#### Step 3

To mount the infrastructure with the docker containers, you do this by running the following command in the terminal, being from the path of the project.

```
$ docker-compose up -d
```

This command will create a series of containers connected that make possible the operation of `base-project-backend`: node, postgres and redis.

#### Step 4

To install the dependencies

```
$ npm install
```

#### Step 5

To run the migrations, you must execute the following command

```
$ npm run db:migrate
```

#### Step 6

To run the server, you must execute the following command

```
$ npm run dev
```

#### Step 7

[Test the installation here](http://localhost:3000)

<blockquote>
<span>
💡
</span>
<span>
If you have any problem when doing one of these Steps, do not hesitate to ask.
</span>
</blockquote>

## Notes

When Google Cloud Build run the application deploy, the workflow use a Proxy to connect the project with the Postgres database. Then, for this reason, the command of the workflow is `npm run db:migration` without `production` because, that have a conflict with the proxy using `/cloudsql/`

To create a migration and model, you need to use the following command: `npx sequelize-cli model:generate --name city --attributes name:string`
