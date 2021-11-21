# Sampah.id

Sampah.id is an all-in-one tool for people to learn about recycling. 

## Description

In the website, users would be able to access different features including:
* Information: Comprehensive information about the categories of waste and which types of waste are recyclable, as well as how to recycle them
* Item detector: Allows user to upload or snapshot a picture of an object, in which an AI would detect the type of waste, as well as redirect users to the relevant recycling method
* Trash bank locator: Provides the nearest trash bank locations relative to the user’s current location. Also contains basic information regarding trash banks and how they work in general

##  How we built it
* Figma for design
* We build the website through Node.js, html, and css for both frontend and backend.
* For the item detection we used google vision API. This API takes a image file and able to detect their labels (the object name, label, etc)
* For the trash bank location detector we used Google Maps API and Google Places API

## Set up and running in local host
* Download the code
* Run "node app.js" in terminal
* Open "http://localhost:3000" in browser

## Disclaimer
APIs used in this project has not been connected yet to the HTML page, the API's functionality can only be run separately.
* Run "node camera.js" in terminal
* Run "node location.js" in terminal
