# Spacestagram

 [Spacestagram](https://spacestagram-webapp.herokuapp.com/) is a webapp created to help share photos from one of NASA’s image APIs, [apod](https://api.nasa.gov/#apod). The webapp is hosted on heroku using a free acount, so if the app was not recently accessed it will take a while for the app to load up. If it happens to show "Application Error" this is also due to the webpage sleeping when not recently accessed. Just refresh and it should be good.
 <br />
 Here is the [dev enivronment](http://dev-spacestagram-webapp.herokuapp.com/).

![plot](./preview.png)


## Local environment installation guidelines
From the `root` directory, run 
```
yarn install
yarn start
```
This will start the react app locally on [http://localhost:3000](http://localhost:3000).

## Testing
```
yarn test
```

Launches the tests in the src directory. Runs everytime by github actions when  the code is pushed to the Dev or main branch.

## Deployment

Auto-deployment to the dev environment when pushed code to the Dev branch and to the prod environment when pushed to the main branch.

## Icon
Icon comes from [https://icon-icons.com/](https://icon-icons.com/)
