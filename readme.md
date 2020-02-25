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



## Demo data

This might come in handy for use with PostMan to reset the data.  

 ```json
{
  "ipAddressPi": "127.0.0.8",
  "orgId": "FlexWhere Company",
  "pods": [
    {
      "podId": 1,
      "podType": "Philips Proximity Sensor",
      "podSensitivity": 5,
      "podIpAddress": "192.178.1.124",
      "podMacAddress": "00:00:00:00:22"
    },
    {
      "podId": 2,
      "podType": "Philips Proximity Sensor",
      "podSensitivity": 2,
      "podIpAddress": "192.178.1.235",
      "podMacAddress": "00:00:00:00:33"
    },
    {
      "podId": 3,
      "podType": "Philips Proximity Sensor",
      "podSensitivity": 5,
      "podIpAddress": "192.178.1.3",
      "podMacAddress": "00:00:00:00:44"
    },
    {
      "podId": 4,
      "podType": "Philips Proximity Sensor",
      "podSensitivity": 5,
      "podIpAddress": "192.178.1.140",
      "podMacAddress": "00:00:00:00:44"
    }
  ]
}
```