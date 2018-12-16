# The Daily Sigh

A web-app to fetch current stories from the NYTimes API. Can fetch top articles from any section of NYTimes and can also filter by topics. Built for Sport Travel as an entry project. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

* [npm](https://www.npmjs.com/get-npm)
* [Vue CLI 3](https://cli.vuejs.org/guide/installation.html)

### Installing

Request an API Key from [https://developer.nytimes.com/](https://developer.nytimes.com/)
(This will be placed in the ```axios-config.js``` file)

Navigate to the folder you would like to install the app in

```
git clone https://github.com/mrspinn/the-daily-sigh.git
```

cd into the created folder

```
cd the-daily-sigh
```

Edit ```axios-config.js``` (in the /src folder) and put your API key in the place of ```XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX```

Install dependencies

```
npm install
```

Run the local server

```
npm run serve
```

To use the app, visit [localhost:8080](http://localhost:8080) in your browser.

## Deployment

To build the app for production and deployment

```
npm run build
```

## Built With

* [Vue.js 2](https://vuejs.org/) - The javascript framework used
* [Vuetify](https://maven.apache.org/) - The component framework used
* [Axios](https://github.com/axios/axios) - Promise-based HTTP client to get from API
* [Moment.js](https://momentjs.com/) - Date formatter

## Author

**Spencer Frost** - Github([MrSpinn](https://github.com/mrspinn))

## Notes

This was my first project using Vuetify and I really like it! It's like Bootstrap, but built with Vue in mind! Before beginning this project I took a crash course in Vuetify and was comfortable using it after only one day. I had to reach out to the Vuetify Discord community for help, but that proved to be incredibly useful as the community was quick to reply and help me with my issue. I look forward to future versions of Vuetify!
