const express = require('express');
const app = express();
const vision = require("@google-cloud/vision");

// Creates a client
const client = new vision.ImageAnnotatorClient({
    keyFilename: 'visionAPIKey.json'
});

// Performs label detection on the image file
client
    .labelDetection("apple.jpg") //temporary img, use img from id=photo
    .then((results) => {
        const labels = results[0].labelAnnotations;

        console.log("Labels:");
        labels.forEach((label) => console.log(label));
        //console.log(results);
    })
    .catch((err) => {
        console.error("ERROR:", err);
    });

app.listen(3000,'127.0.0.1',() => console.log('Server running'));