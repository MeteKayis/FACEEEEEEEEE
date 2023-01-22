Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'
    });
}

  console.log('ml5 version', ml5.version);

  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GrHISI7ep/json.modelLoad', modelLoaded);

function modelLoaded()
{
     console.log("The Model is now Loaded");
}

 function check()
 {
    img = documet.getElementById('captured_image');
    classifier.classify(img, gotResult);
 }

 function gotResult(error, results)
 {
    if(error) {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("name").innerHTMl = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
 }