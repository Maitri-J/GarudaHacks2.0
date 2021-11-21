// Detect function, output json from photo
function detect() {
    const vision = require("@google-cloud/vision");

    // Creates a client
    const client = new vision.ImageAnnotatorClient({
        keyFilename: "visionAPIKey.json",
    });

    // photo = document.getElementById("photo");

    // Performs label detection on the image file
    client
        .labelDetection("./Images/apple.jpg") //temporary img, use img from id=photo "./Images/apple.jpg"
        .then((results) => {
            const labels = results[0].labelAnnotations;

            console.log("Labels:");
            labels.forEach((label) => console.log(label));
            //console.log(results);
        })
        .catch((err) => {
            console.error("ERROR:", err);
        });
}

// detect("./Images/apple.jpg");