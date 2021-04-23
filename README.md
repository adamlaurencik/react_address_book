# Address Book Application

[![Netlify Status](https://api.netlify.com/api/v1/badges/5274222a-5311-4031-a14f-357ba283ebab/deploy-status)](https://app.netlify.com/sites/heuristic-mestorf-1bf72f/deploys)

Fictional address book app, where you can search for users' addresses and personal information. The app displays a list of users which you can browse and where you can see personal information for a selected user. There is also a settings page where you can select which nationalities you are interested in.

Deployed demo: https://heuristic-mestorf-1bf72f.netlify.app/

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) TypeScript template.

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Functionality

- Display contacts of contact
  - Data fetched from https://randomuser.me API
  - Lazy loading of the results (loads results even before user reaches end)
  - Optimized solution which renders only currently visible contacts
  - In case of an error during fetch, the application tries to re-fetch data every 10 seconds
- Display detail of a contact
  - Detail allows you to see user's location on Google Maps
  - Call the user / send user an email with a click of a button
- Filter contacts
  - Search box on top allows to filter the already fetched results
  - The further loading is not possible if filter is present
- Settings
  - The nationality can be set, that is used for contacts filtering
  - The application tutorial, can be reset
- Application Tutorial
  - During first visit, the application shows an tutorial, of it's functionality
  - The tutorial can be reset in the settings

## Major dependencies

- Create-React-App
  - Bootstrapped with the TypeScript template to provide quick development environment
- Material UI
  - Design system to provide quick-to-build and easy to customize design.
- react-joyride
  - Supports the creation of the interactive demo
- react-window-infinite-loader
  - Supports the table scroll feature, lazy loading
