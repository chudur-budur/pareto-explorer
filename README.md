![Logo of ParetoExplorer](./src/assets/img/pareto-explorer-logo.svg)

A [React.js](https://reactjs.org/) app to showcase the capabilities of [pviz](https://github.com/chudur-budur/pviz). Built on top of [CoreUI-React](https://github.com/coreui/coreui-react) and Apache [echarts](https://github.com/apache/incubator-echarts).

## Workflow

<p float="left">
  <img src="https://i.postimg.cc/QN7kZL3Z/2020-10-11-07-37-15.gif" width="250" />
  <img src="https://i.postimg.cc/6qxZp3XJ/2020-10-11-07-38-37.gif" width="250" /> 
  <img src="https://i.postimg.cc/tgV7njDX/2020-10-11-07-48-31.gif" width="250" />
  <img src="https://i.postimg.cc/BZCbKN51/2020-10-11-07-51-22.gif" width="250" /> 
  <img src="https://i.postimg.cc/sX4j5DWR/2020-10-11-07-54-07.gif" width="250" />
  <img src="https://i.postimg.cc/wjR90kN2/2020-10-11-07-57-29.gif" width="250" />
 </p>

### [Try the app!!](https://pareto-explorer.herokuapp.com/#/analytics)

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses Sass (with .scss). The styles are loaded at the template level with `node-sass-chokidar` css preprocessor. The frontend dependencies are handled by **npm** and the backend dependencies are handled by **pip**. The backend runs on `flask` and the python requirements can be
found in the `requirements.txt`. The backend requires `gunicorn` to be deployed on server.

### Usage

- `$ npm install` - to install dependencies for the frontend
- `$ pip install -r requirements.txt` - to install dependencies for the backend

## Running and Deployment Sctipts

- `npm start` - to run the frontend and development (it runs webpack-dev-server)
- `npm run start-api` - to run the backend and development
- `npm run build` - for production build, to run, invoke `serve -s build`
- `npm run start-heroku` - to locally run the production build through [heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
- `npm run deploy-heroku` - to deploy the production build on [heroku](https://www.heroku.com/).

## See also

- [Create-React-App](CRA.md)
- [Readme CoreUI React](./COREUI-REACT.md)
- [Readme CoreUI](./COREUI.md)
- [Readme Yarn](./YARN.md)
