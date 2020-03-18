# RoBorregos Web

Front-end web app for the official RoBorregos' (international robotics team) web site.
Developed by RoBorregos' members and colaborators, in order to publish general
information about the team, sponsors, news, competitions and related content.
You can consult the application on production at [roborregos.com](https://roborregos.com) or
[roborregos.mx](https://roborregos.mx).

## Table of contents

- [RoBorregos Web](#roborregos-web)
	- [Table of contents](#table-of-contents)
	- [Project details](#project-details)
		- [Development team](#development-team)
		- [Environment URLs](#environment-urls)
		- [Management tools](#management-tools)
	- [Development](#development)
		- [Setup](#setup)
		- [Running the stack for development](#running-the-stack-for-development)
		- [Stopping services](#stopping-services)

## Project Details

### Development team

| Name | Email | Github | Role |
| ---- | ----- | ------ | ---- |
| José Eduardo Sánchez | [gallo.sanchez23@gmail.com](mailto:gallo.sanchez23@gmail.com) | [@gallosanchez23](https://github.com/gallosanchez23) | PM & Developer |
| Sebastián Rivera González | [sebas.rivera96@gmail.com](mailto:sebas.rivera96@gmail.com) | [@sebasrivera96](https://github.com/sebasrivera96) | Developer |
| Aurora Tijerina Berzosa | [auro.tj@gmail.com](mailto:auro.tj@gmail.com) | [@aurotb](https://github.com/aurotb) | Developer |
| Ricardo Chapa Romero | [ricardochaparomero@gmail.com](mailto:ricardochaparomero@gmail.com) | [@RicardoChapaRomero](https://github.com/RicardoChapaRomero) | Developer |
| Clara Gutiérrez Jaime | [claragtzjaime@gmail.com](mailto:claragtzjaime@gmail.com) | [@ClaraGtz](https://github.com/ClaraGtz) | Designer & Developer |

### Environment URLs

* **Production** - [roborregos.com](https://roborregos.com)

### Management tools

You should ask for acces to this tools if you don't have ir already:

* [Github repo](https://github.com/gallosanchez23/roborregos-web)
* [Heroku](https://www.heroku.com/)
* [GoogleDrive](https://drive.google.com/drive/folders/1dZeA8SSFkDSlj61sY3vJiCqCYluquqlw?usp=sharing)

## Development

### Setup

Before setting up the project, you sould have installed the following development tools:

* [Git](https://git-scm.com/downloads)
* [Docker](https://runnable.com/docker/getting-started/)
* [Docker Compose](https://docs.docker.com/compose/install/)
* [Plis](https://github.com/IcaliaLabs/plis) (optional, but highly recommended)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable)

Once you have installed the required third-party software, you can follow this steps:

1. Clone the project repository on your local machine.

	SSH:

	```bash
	$ git clone git@github.com:gallosanchez23/roborregos-web.git
	```

	or HTTPS:
	```bash
	$ git clone https://github.com/gallosanchez23/roborregos-web.git
	```

2. You will need to create the node_modules directory needed to run react apps.

	```bash
	$ yarn install
	```

3. Create the Docker image.

	`plis`:

	```bash
	$ plis build
	```

	`docker-compose`:

	```bash
	$ docker-compose build
	```

### Running the stack for development

In your terminal, run:

`plis`:

```bash
$ plis start frontend-web && plis attach frontend-web
```

`docker-compose`:

```bash
$ docker-compose up
```

This command will start the frontend application and display the logs on your terminal. Use `Ctrl + C` to exit the logs and turn the application down. Otherwise, in order to run the service in the background, just run:

`plis`:

```bash
$ plis start frontend-web
```

`docker-compose`:

```bash
$ docker-compose up -d
```

If the service is already running, you can run the command `plis attach frontend-web` to attach current service's logs.

***NOTE: You can allways run `plis run frontend-web bash` or `docker-compose run frontend-web bash` commands to enter the container's console.***

### Stopping services

In order to stop `roborregos-frontend-web` entirely you can run:

`plis`:

```bash
$ plis stop
```

`docker-compose`:

```bash
$ docker-compose stop
```

If you want to stop the services and remove the containers:

`plis`:

```bash
$ plis down
```

`docker-compose`:

```bash
$ docker-compose down
```

If you only want to stop one service in particular, you can specify it with the following command:

`plis`:

```bash
$ plis stop frontend-web
```

`docker-compose`:

```bash
$ docker-compose stop frontend-web
```
