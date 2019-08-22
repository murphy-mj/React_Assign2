```
# ICT Skills 2 Assignment - Single Page app.

####Name: pointsandviews 
####name Martin Murphy
## Overview.

The App is based on data from
https://edeleastar.github.io/oileain-api/all.json
The model is set up for two types of users, 
Admin user, which has restricted access and views, and the
SeniorAdmin, which has additional access to edit and delete points of interest
The authorisation uses a fake Authorisation
The login page, has two button one for each user, the general admin, has a simple isAuthenticated and isAdmin flags
/App is the main page of the Application, and once you are logged in.
The seniorAdmin can edit and delete a point.
all users can add a comment, view public and private data
Senior and General Admin, have different views displayed, at the /app view.

*List of user features*

* at the login Page, if you try to manipulate the url to go directly to /app, it will redirect you back to login.
* users have different options available, depending on the type of user
* cpress tests in place
* storybooks in place
* SeniorAdmin can edit and delete points of interest
* props use locations and history are used to hold state data
* the use of private route to restrict accesss, geting to private page on position id 115601 eg localhost:3000/point/115601/private
* comments are votable and are listed based on rank
* points of interest are votable
* additional state properties are used to pass data 
* additional properties are added to each point, eg comments [] and an upvotes property, with a default value of one 


initializePoints3(pointsIn) {
 let items = pointsIn.map((point) =>({...point,['comments']:[],['upvotes']:1}));

## Setup.
. . . . 
Having cloned the repo, 
the package.json includes all the modules required, 
##*'npm install'* to download and install these packages
and to run the app
## *'npm start'*
once the app is running on local host 3000
## *'npx cypress open'*
to run the cypress tests
for the story books to run on local host 9001
## *'npx start-storybook -p 9001 -c .storybook'*







## Data Model Design.

the header is composed of a *filter* component, which the user can filter based on area and name.
Each point is displayed as a **card**, the level of information and options on the card is determined by the user type, *pointofinterest* and  *pointofinterestview* are the two components.
*poiList* component lists the points
*pointPage* hold the *poiPublic*, the *commentlist* and the *Private* component
poiPublic displays the map and limited data, as well as the comment and private data component.
poiPrivate is has controlled access, and displays data about the point
*newsItem* is the comment comonent
*newsList* is the component that lists all the comments
*newsForm* is the input for comments
*AuthButton* - displays the status of the user, and rquests that they log out
*fakeAuth* – set the flag for authentication and the senior isAdmin flag
*filtercontrols* – allows for filtering of the points 
*header* component renders the greeting to the user
*login* provides the login buttons
*map* this is google maps component
*privateRoute* 
**dataStore** dir hold the *stubAPI* and the all file containing all the point of interest data.
*App* and *index* are the two main files. 


 
 Sample of the test data used (JSON or equivalent).

the data is source from this api, https://edeleastar.github.io/oileain-api/all.json.
the data is divided  into a number regions, each region  has its own array of points of interest.
In order to hold additional information required for the app eg Comments Array and an Upvotes property, 
the original json file from the api is fed into the initializePoints3 function and 

initializePoints3(pointsIn) {
        let items = pointsIn.map((point) =>({...point,['comments']:[],['upvotes']:1}));
        this.points = items;



extract from json file
​```javascript
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
          by the Martello Tower. Access is by the B202 past the prison and rifle range. Do not block roads..... 
​```
       
          
   
   
post this call to i have added a console.log to display the first point of the first array, to prove the existance of the additional properties 
 console.log("display a point to show additional properties")
 console.log(api.points1[0].pois[0]);
 



## UI Design.
Shows a card for each point of interest in the datastore. 
point list can be filtered by name and location. 
A point of interest can be edited or deleted, please see cypress tests 

![Login](https://github.com/murphy-mj/React_Assign2/blob/master/pointsandviews/ScreenPrints/login.jpg?raw=true)
![Snr Admin Initial View](https://github.com/murphy-mj/React_Assign2/blob/master/pointsandviews/ScreenPrints/snrAdmin_initial.png?raw=true)
![Area Selection](https://github.com/murphy-mj/React_Assign2/blob/master/pointsandviews/ScreenPrints/SnrAdmin_AreaSelect.png.jpg?raw=true)
![Snr Admin Edit Point](https://github.com/murphy-mj/React_Assign2/blob/master/pointsandviews/ScreenPrints/SnrAdmin_Edit.png?raw=true)
![Comment Box](https://github.com/murphy-mj/React_Assign2/blob/master/pointsandviews/ScreenPrints/commentBox.png?raw=true)
![Public View](https://github.com/murphy-mj/React_Assign2/blob/master/pointsandviews/ScreenPrints/public_withImage_comments.png?raw=true)
![Private](https://github.com/murphy-mj/React_Assign2/blob/master/pointsandviews/ScreenPrints/Private.png?raw=true)
![Admin initial View](https://github.com/murphy-mj/React_Assign2/blob/master/pointsandviews/ScreenPrints/Admin_initial.png?raw=true)


## Routing.

.List each route supported by the app. 
​```javascript
<Route exact path="/point/:id" component={PointPage} />
<Route exact path="/point/:id/comment" component={NewsForm}/>
<Route exact path="/" component={Login} />
<Route exact path="/app" component={App} />
<PrivateRoute exact path="/point/:id/private" component={PoiPrivate}  />
<Redirect from="*" to="/" />
​```
The the main /app page requires that the user goes through login, rather than diection changing url
the Private page of the Point of interest require auth. 






## Storybook.


![Story Book stories](https://github.com/murphy-mj/React_Assign2/blob/master/pointsandviews/ScreenPrints/stories.png?raw=true)






##Cypress Tests

![Cypress Tests](https://github.com/murphy-mj/React_Assign2/blob/master/pointsandviews/ScreenPrints/cypressTests.png?raw=true)



## Backend.

The app is set up to access the api and is commented out.
The App uses the full json file save to the directory for testing purposes


## Independent learning.
I spent a lot of the summer, working on understanding React, it was mostly repeatly re-running the lectutres, and a couple of online tutorials,  https://docs.cypress.io, https://storybook.js.org/docs/guides/guide-react/
. . . . . . . .

Outstanding issues with App.

For EDIT and Delete, the select area needs to be set to something other than 'all'
I cannot get the environment variable to feed in, have tried using env-cmd with in the scripts, but all it does is open the file and does not progress to start the react app, so i had to remove.

"scripts": {
  "start": "env-cmd .env react-scripts start",














#Standard output from Create React App

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

**Note: this is a one-way operation. Once you `eject`, you canâ€™t go back!**

If you arenâ€™t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point youâ€™re on your own.

You donâ€™t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldnâ€™t feel obligated to use this feature. However we understand that this tool wouldnâ€™t be useful if you couldnâ€™t customize it when you are ready for it.

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
```