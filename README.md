# Installing TypeScript

This is a skeleton app for people who want to use TypeScript. A docker-compose file is included for those who want to run it in a container.

You don't have to use the docker-compose file if you're fine with installing NodeJS and NPM locally. Feel free to delete it if that's the case.

## Instructions

1. Clone this repository to your computer
2. Make sure you have [NodeJS](https://nodejs.org/en/download/) installed (preferably the LTS version). This will also install `npm`.
3. Open a terminal window (command prompt, git bash, powershell)
4. Check if NodeJS is installed by typing `node --version` into the terminal. It should print a line with something like `v18.12.0`.
5. Check if NPM is installed by typing  `npm --version` into the terminal. It should print a line with something like `8.19.0`.
6. Open a terminal in the project directory.
6. Install the dependencies by running `npm install`.
7. Compile the project by running `npm run build`. If you want to run the build script everytime you make changes automatically, you can use `npm run watch`.
8. Open the `tsconfig.json` file in this project.
9. Look through the [TypeScript documentation](https://www.typescriptlang.org/docs/home.html) and try to explain what every line in the `package.json` file means. Don't understand something? That's fine! Just don't copy stuff for the sake of filling up your answers.
10. Install the [EditorConfig](https://editorconfig.org/#download) plugin in your code editor by either using its marketplace or manually installing it.
11. Install the [ESLint Plugin](https://eslint.org/docs/user-guide/integrations) in your code editor by either using its marketplace or manually installing it.
12. Run the application. You cannot just open the `index.html` file (see the following section). If everything worked properly, you should see "Hello World" printed to the document. 

## Webserver

Applications built with es6 (and higher) modules must be run on a webserver. On Visual Studio Code, [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) is recommended. Otherwise [XAMPP](https://www.apachefriends.org/index.html) or [MAMP](https://www.mamp.info/) can be used.

An example `index.html` is provided. **You cannot load the index.html from your filesystem. It will not work!**

## Using Docker

If you're like me and you dislike NodeJS and NPM piling up heaps of folders on your pc, run TypeScript in Docker!

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop).
2. Open a terminal window (Powershell on Windows, regular command prompt will not work).
3. Clone this repository.
4. Move to this folder inside the terminal.
5. Run `docker-compose up` and open a new terminal OR run `docker-compose up -d` which allows you to work in the same terminal.
6. Follow the steps from [Instructions](#instructions) from step 4, but prefix all the commands with `docker-compose exec ts-app`.
7. Close the docker container by pressing `ctrl` + `c` or `docker-compose down`, respectively for step 5






PS: Insta@ simple_smilez
