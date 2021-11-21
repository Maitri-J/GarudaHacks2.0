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

## Accomplishments that we're proud of
As a team, we were able to complete our first hackathon and create our first website from scratch. In addition, we were able to learn and troubleshoot issues regarding node.js. Moreover, for some of us it was the first time doing website development and also the tools such as Git, Visual Studio, and node.js.

## What we learned
This project was a new experience for us, equipping the team with better understanding and knowledge as to the preparation before the hack starts. For example, with a strict time constraint, proper scheduling and planning as well as realistic MVP goals should be set. Furthermore, we learned how to develop a website and use different tools to do it.

## What's next for Sampah.id
We plan to make the API work, or if time allows we may build and teach an AI to detect the waste instead of using an API. If the base website is complete, we have thoughts of providing the incentive for people to use our object detection system, in which using it once generates an amount of money, possibly from ads, in which the proceeds can be donated to a non-profit organization geared towards sustainability or waste management in Indonesia.

### Set up and running in local host

* Download the code
* Run "node app.js" in terminal
* Open "http://localhost:3000" in browser
