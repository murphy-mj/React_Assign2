# ICT Skills 2 Assignment - Single Page app.

Name: pointsandviews 
your name Martin Murphy
## Overview.

...... A statement of the app concept and objectives (about a half-page) ........

. . . . . 
The App is based on data from
https://edeleastar.github.io/oileain-api/all.json
The model is set up for two types of users, 
Admin user, which has restricted access and views, and the
SeniorAdmin, which has additional access to edit and delete.
The authorisation uses a fake Authorisation
The login page, has two button one for each user, the general admin, has a simple isAuthenticated and isAdmin flags
/App is the main page of the Application, and once you are logged in.

List of user features  . . . .

- at the login Page, if you try to manipulate the url to go directly to /app, it will redirect you back to logn.
- users have different options available, depending on the type of user
- cpress tests in place
- storybooks in place
- SeniorAdmin can edit and delete points of interest
- props use locations and history are used to hold state data
- the use of private route to restrict accesss, geting to private page on position id 115601 eg localhost:3000/point/115601/private
- comments are votable and are listed based on rank
- additional state properties are used to pass data 
- additional properties are added to each point, eg comments [] and a upvotes property, witha default value of one 


initializePoints3(pointsIn) {
        let items = pointsIn.map((point) =>({...point,['comments']:[],['upvotes']:1}));
## Setup.
. . . . 
Having cloned the repo, 
the package.json includes all the modules required, 
##'npm install' to download and install these packages
to run  the app
## 'npm start'
once the app is running on local host
## 'npx cypress open'
to run the cppress tests
for the story books to run on local host 9001
## ' npx start-storybook -p 9001 -c .storybook'


## Data Model Design.

. . . . . 
the header is composed of a filter component.
which can filter
each point is displayed as a card, the level of information and options on the card is determined by the user type




A diagram of app's data model (see example below) 
AND/OR a sample of the test data used (JSON or equivalent).
the data is source from this api, https://edeleastar.github.io/oileain-api/all.json.
the data is divided  into a number regions, each region will have its own array of points of inteest.
In order to hold additional information required for the app eg Comments Array and an Upvotes proprty, 
the original json file from the api is fed into the initializePoints3 function and 

initializePoints3(pointsIn) {
        let items = pointsIn.map((point) =>({...point,['comments']:[],['upvotes']:1}));
        this.points = items;



extract from json file
{
    "title": "North East",
    "variable": "northEast",
    "identifier": "**The North East**",
    "geo": {
      "lat": 54.7,
      "long": -6.141
    },
    "pois": [
      {
        "name": "**Lough Foyle**",
        "nameHtml": "<p><strong>Lough Foyle</strong></p>\n",
        "safeName": "Lough-Foyle",
        "coordinates": {
          "irishGrid": {
            "sheet": "C",
            "eastings": "660",
            "northings": "390"
          },
          "fullIrishGrid": {
            "sheet": "",
            "eastings": "266000",
            "northings": "439000"
          },
          "tmcGrid": {
            "sheet": "",
            "eastings": "665938.067",
            "northings": "938982.474"
          },
          "geo": {
            "lat": "55.19369052",
            "long": -6.96442359
          }
        },
        "cursor": 142,
        "description": "<p><strong>Lough Foyle</strong> C660-390         
         Sheet 3/4 Embarkation The logical embarkation point for the outer regions of Lough Foyle is Magilligan Point,
          by the Martello Tower. Access is by the B202 past the prison and rifle range. Do not block roads. 
          Park by the h.....
          
   
   post this call to i have added an console log to sisplay the first point of the first array, to prove the existance
   of the additional properties 
   
   console.log("display a point to show additional properties")
         console.log(api.points1[0].pois[0]);
       
          

. . . 
Briefly explain any non-trivial aspects of the model . . . . .


## UI Design.

. . . . . 
Screenshots of app's views with brief statements of their use 
(see examples below) . . . . . . .

![][main]

>> Shows a card for each contact in the datastore. Contact list can be filtered by name and gender. A contact can be edited or deleted a contact. 


## Routing.

. . . . List each route supported by the app. For each one state the associated view and whether it's public/private (requires authentication) . . . . .

- /articles (public)- displays all published articles - title and author only.
- /articles/:id (private) - detail view of a particular article.
- etc
- etc

## Storybook.

. . . . . Include a screenshot of the fully expanded list of stories from the tool's UI (see below). Group the stories appropriately (e.g. Contact page group) . . . .



. . . . State any Storybook add-ons used and include a screenshot(s) to illustrate.

## Backend.

. . . . . Briefly explain the backend/API used by the app (Stub, JSON-server, Custom Node, Open). For custom Node or Open API, list the endpoints it provides to your app and state the purpose of each


## Authentication (if relevant).

. . . . 
Briefly state the server-side authentication service used by your React app 
Only a Mock-auth is used, depending on the login button chosen.

## Independent learning.

. . . . . 
State the non-standard aspects of React or other related technologies that you researched and applied in this assignment . . . . .




















This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
