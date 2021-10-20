Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
})

webcam=document.getElementById("webcam");

Webcam.attach(webcam);

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img src='+data_uri+'  id="result">'
    });
}

console.log("ml5_version", ml5.version);

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/grXmUGjJ_/model.json' , modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}
function check(){
    img= document.getElementById("result").src;
    classifier.classify(img, resultobtained);
}
function resultobtained(error,result)
{
   if(error){
    console.error(error)
   }
   else{
       document.getElementById("result_object_").innerHTML=result[0].label;
       document.getElementById("result_accuracy").innerHTML=result[0].confidence.toFixed(1);
   }
}