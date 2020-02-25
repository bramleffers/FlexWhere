# <img src="https://flexwhere.nl/wp-content/themes/FlexWhere/img/logo.png" width="10%"> DutchView FlexwherePI Gateway Access Portal

## Installation

### To start development

Startup your favorite editor. To start the backend simply install its depencies with `npm install` in the respective folder (`./backend`, `./frontend`) and then press `npm start` to start the express application. Same process needs to be repeated for the front-end.

PS: BACKEND NEEDS TO RUN AT PORT 3000; 

## Back-end API calls

`POST` http://localhost:3000/configurations

        Saves a JSON configuration in `./models/data.json`

`GET`  http://localhost:3000/configurations

        Gets a JSON configuration in `./models/data.json`

## Requirements

* NPM 5+
* NodeJS LTS

## License

DutchView software, and may be redistributed under the terms specified in their [LICENSE] file.

[LICENSE]: https://flexwhere.co.uk/wp-content/uploads/2019/03/General-Terms-and-Conditions-Dutchview-Limited-1.0.pdf