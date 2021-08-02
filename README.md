# Evaluate A News Article with NLP Author by Samiha Amroune

project at [Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) Become a Front End Web Developer Nanodegree program.

In this project We will build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written on articles or blogs found on other websites. When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis), based on the contents of the article.

## Build Tools using:

* HTML
* CSS
* JavaScript
* Node
* Express
* Webpack
* meaningcloud API
* Jest
* Workbox

## Installation

Make sure [Node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) are installed from the terminal.
```
node -v
npm -v
```

1. Move to the project folder
```
cd <project directory>
```
2. Install npm
```
npm install
```
3. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

4. Configure environment variables using dotenv package
	1. Install the dotenv package
	```
	npm install dotenv
	```
	2. Create a new `.env` file in the root of your project
	3. Fill the `.env` file with your API key like this:
	```
	API_KEY=**************************
	```
5. Start the project

### To Run Project

**prod mode allows you to see the results of the API fetch**:
- cd into your new folder and run in prod mode 
- `npm install`
- `npm run build-prod to generate a dist folder for prod`
- `npm run start to run the Express server on port 8080`

**Note:** The web page can be accessed with `localhost:8080`

6. Open browser at http://localhost:8081/
