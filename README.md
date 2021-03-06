# Live Preview
This project is hosted on [GitHub Pages](https://pages.github.com/), you can have a Live Preview by clicking in this link [WeatherApp](http://paulokinjo.github.io/weatherapp)

# Architecture
<img src="./docs/architecture.png">

# Tools in a Glance
- [Material UI](https://material-ui.com/)
- [React Slick](https://react-slick.neostack.com/docs/get-started)
- [React Redux](https://react-redux.js.org/)

# Getting Started
This project is for programmers that sit inside the whole day and would like to have an app to check the weather outside so she does not actually have to go outside to see what it's like.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Environment
In order to be able to call the [OpenWeatherMap](openweathermap.org/) API, it is required to have a ```.env``` file with the following environment variables:
```
REACT_APP_CITY=<YOUR CITY>,<YOUR COUNTRY>
REACT_APP_API_KEY=<YOUR KEY>

example:

REACT_APP_CITY=Munich,de
REACT_APP_API_KEY=123456
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Unit Test Setup with Jest
> Jest Config
```bash
testPathIgnorePatterns: ['<rootDir>/.next', '<rootDir>/node_modules'],
setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
moduleNameMapper: {
  '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
},
transform: {
  '^.+\\.(js|jsx|tsx)$': '<rootDir>/node_modules/babel-jest',
  '^.+\\.jsx?$': require.resolve('babel-jest'),
  '^.+\\.tsx?$': 'ts-jest',
},
testEnvironment: 'jsdom',
```

> Setup
```bash
import '@testing-library/jest-dom'
```

> Libraries
```bash
@babel/preset-env
@babel/preset-typescript
@testing-library/jest-dom
@testing-library/react
@types/node
@types/react
identity-obj-proxy
jest
ts-jest
ts-node
typescript
```

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn testCoverage`
Same as ```yarn test``` however it shows the coverage report

##### Sample:
<img src="./docs/CoverageReport.png">

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


#Redux Boilerplate Create Action Reference
```
function makeActionCreator(type, ...argNames) {
  return function (...args) {
    const action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

const ADD_TODO = 'ADD_TODO'
const EDIT_TODO = 'EDIT_TODO'
const REMOVE_TODO = 'REMOVE_TODO'

export const addTodo = makeActionCreator(ADD_TODO, 'text')
export const editTodo = makeActionCreator(EDIT_TODO, 'id', 'text')
export const removeTodo = makeActionCreator(REMOVE_TODO, 'id')
```
