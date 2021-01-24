<img src="public/images/black_icon.ico" width="80" ><img> 

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
    - [VSCode setup](#vscode-setup)
    - [Setup](#setup)
    - [Running the stack for development](#running-the-stack-for-development)
    - [Stopping services](#stopping-services)
    - [Check your code](#check-your-code)

## Project Details

### Development team

| Name                    | Email                                                               | Github                                                       | Role      |
| ----------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------ | --------- |
| Aurora Tijerina Berzosa | [auro.tj@gmail.com](mailto:auro.tj@gmail.com)                       | [@AuroTB](https://github.com/aurotb)                         | PM |
| José Alfonso Cisneros   | [joseacisnerosm@gmail.com](mailto:joseacisnerosm@gmail.com)         | [@Josecisneros001](https://github.com/Josecisneros001)       | Developer |
| Osvaldo Alvarez Valdez  | [jorgeosvaldoav@gmail.com](mailto:jorgeosvaldoav@gmail.com)         | [@Osvaldoav](https://github.com/Osvaldoav)                   | Developer |
| José Francisco Pacheco Quintana  | [pacocheco7@gmail.com](mailto:pacocheco7@gmail.com)         | [@JFPach98](https://github.com/JFPach98)                   | Developer |
| Ana Lucía Garza         | [analuciagarzamtz@gmail.com](mailto:analuciagarzamtz@gmail.com)     | [@AnaGarza](https://github.com/AnaGarza)                     | Designer  |
| Mauricio Juárez Ibáñez  | [mji2000.741@gmail.com](mailto:mji2000.741@gmail.com)               | [@zJuarez](https://github.com/zJuarez)                       | Developer |
| Gabriela Jazmín Álvarez Espinoza | [gabrielaj.alvarez@outlook.com](mailto:gabrielaj.alvarez@outlook.com)               | [@gabyjazzmin](https://github.com/gabyjazzmin)                       | Developer |
| Jamir Leal Cota  | [jamirleal200@gmail.com](mailto:jamirleal200@gmail.com)               | [@JamirLeal](https://github.com/JamirLeal)                       | Developer |
| Aldo Jesus Samaniego Silva  | [aldojesussam0@gmail.com](mailto:aldojesussam0@gmail.com)               | [@AldoSamaniego](https://github.com/AldoSamaniego)                       | Developer |
| Héctor Rubén Cortés Hernández | [hector.ruben.cortes.hernandezj@gmail.com](mailto:hector.ruben.cortes.hernandez@gmail.com)                       | [@HectorRuben](https://github.com/HectorRuben)                         | Designer |


### Environment URLs

- **Production** - [roborregos.com](https://roborregos.com)

### VSCode setup

For the development of the project the following tools will be used:

- [ESLint](https://eslint.org/): Following Airbnb's style and using the es2020 standard.
- [Flow](https://flow.org/): A static type checker for Javascript.
- [Babel](https://babeljs.io/): A javascript compiler, which is required for Flow.
- [Jest](https://jestjs.io/): The main Javascript test framework.

It is strongly recommended to use VSCode in order tu automatize some of the checks used by the tools above mentioned. For that, install the following extension:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): to check automatically syntax errors and fix them.

**_NOTE: The following are not as strongly recommended, but are helpful too._**

- [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode): to show flow's errors on intellisense.
- [Babel ES6/ES7](https://marketplace.visualstudio.com/items?itemName=dzannotti.vscode-babel-coloring): it helps to visualize better the code in the most recent standard.

Once installed, everything should be running smoothly, because the setting.json is already configured.

### Project setup

Before setting up the project, you should have installed the following development tools:

- [Git](https://git-scm.com/downloads)
- [Docker](https://runnable.com/docker/getting-started/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Plis](https://github.com/IcaliaLabs/plis) (optional, but highly recommended)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable)

Once you have installed the required third-party software, you can follow this steps:

**_NOTE: You may need sudo privileges to run some of these commands._**

1. Clone the project repository on your local machine.

   SSH:

   ```bash
   $ git clone git@github.com:RoBorregos/roborregos-web.git
   ```

   or HTTPS:

   ```bash
   $ git clone https://github.com/RoBorregos/roborregos-web.git
   ```

2. You will need to create the node_modules directory needed to run react apps.

   ```bash
   $ yarn install
   ```

3. You will need to create .env file. And fill its variables.

	```bash
	$ cp .sample-env .env
	```
   
4. Create the Docker image.

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

**_NOTE: You can allways run `plis run frontend-web bash` or `docker-compose run frontend-web bash` commands to enter the container's console._**

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
