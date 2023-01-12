# Base Project Backend

## Instalacion

Para instalar el proyecto, hemos preparado los contenedores en Docker para facilitar los pasos. Asi que es importante que tengas instalado tanto Docker como docker compose en tu sistema operativo, ya sea Windows, Mac o Linux. Si no lo tienes, puedes hacerlo [siguiendo la documentacion de Docker](https://docs.docker.com/engine/install/) 🐋

<blockquote>
<span>
💡
</span>
<span>
Si instalas Docker Desktop (en Windows y Mac), ya viene con docker compose, pero si lo haces en Linux debes instalarlo a parte.
</span>
</blockquote>

#### Paso 1

Clonar el proyecto

```
$ git clone git@github.com:daniel7byte/base-nodejs-project-gcp.git
```

#### Paso 2

Duplicar el archivo `.env.example` y renombrar al nuevo archivo `.env`. Luego, debes colocar la informacion correspondiente en las variables de entorno.

#### Paso 3

Montar la infraestructura con los contenedores de docker, esto lo haces ejecutando el siguiente comando en la terminal, estando desde el path del proyecto.

```
$ docker-compose up -d
```

Este comando construira una serie de contenedores conectados que hacen posible el funcionamiento de `base-project-backend`: node, postgres y redis.

#### Paso 4

Instalar dependencias

```
$ npm install
```

#### Paso 5

Realizar las migraciones de la base de datos ejecutando el siguiente comando

```
$ npm run db:migrate
```

#### Paso 6

Levantar el servidor

```
$ npm run dev
```

#### Paso 7

[Probar instalacion](http://localhost:3000)

<blockquote>
<span>
💡
</span>
<span>
Si tienes algun problema al momento de realizar uno de estos pasos, no dudes en preguntar.
</span>
</blockquote>

## Notes

When Google Cloud Build run the application deploy, the workflow use a Proxy to connect the project with the Postgres database. Then, for this reason, the command of the workflow is `npm run db:migration` without `production` because, that have a conflict with the proxy using `/cloudsql/`

To create a migration and model, you need to use the following command: `npx sequelize-cli model:generate --name city --attributes name:string`
