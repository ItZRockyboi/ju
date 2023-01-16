prediction_1="";
prediction_2="";
Webcam.set({
    width:350,height:300,image_format:"png",png_quaility:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'> ";
    });
}

console.log("ml5 version: ",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/B6aW9qHuo/model.json",model_loaded);
 
function model_loaded(){
    console.log("model loaded");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1="the first prediction is "+prediction_1;
    speak_data_2="the second prediction is "+prediction_2;
    var utter_this=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utter_this);
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
if(error){
    console.error(error);
}

else{
    console.log(results);
    document.getElementById("result_gesture_name").innerHTML=results[0].label;
    document.getElementById("result_gesture_name_2").innerHTML=results[1].label;
    prediction_1=results[0].label;
    prediction_2=results[1].label;
    speak();
    if(results[0].label=="amazing"){
    document.getElementById("update_gesture").innerHTML="&#128076;";
    }

    if(results[0].label=="best"){
        document.getElementById("update_gesture").innerHTML="&#128077;";
     }

    if(results[0].label=="victory"){
         document.getElementById("update_gesture").innerHTML="&#9996;";
     }

     if(results[0].label=="peace"){
        document.getElementById("update_gesture").innerHTML="&#9996;";
    }
        

     if(results[1].label=="amazing"){
        document.getElementById("update_gesture_2").innerHTML="&#128076;";
        }
    
     if(results[1].label=="best"){
            document.getElementById("update_gessture_2").innerHTML="&#128077;";
         }
    
     if(results[1].label=="victory"){
             document.getElementById("update_gesture_2").innerHTML="&#9996;";
         }

     if(results[1].label=="victory"){
            document.getElementById("update_gesture_2").innerHTML="&#9996;";
         }
}
}