// main.js

window.onload = function () {
    document.getElementById("radio-air-horn").addEventListener("click", change);
    document.getElementById("radio-car-horn").addEventListener("click", change);
    document.getElementById("radio-party-horn").addEventListener("click", change);
    document.getElementById("horn-btn").addEventListener("click", horn(event));
}
   
function change(){
    if(document.getElementById("radio-air-horn").checked){
        document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
    }
    else if(document.getElementById("radio-car-horn").checked){
        document.getElementById("sound-image").src = "./assets/media/images/car.svg";
    }
    else if(document.getElementById("radio-party-horn").checked){
        document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
    }
}


function horn(event){
    event.preventDefault();
    if(document.getElementById("radio-air-horn").checked){
        var audio1 = new Audio('./assets/media/audio/air-horn.mp3');
        audio1.play();
    }
    else if(document.getElementById("radio-car-horn").checked){
        var audio2 = new Audio('./assets/media/audio/car-horn.mp3');
        audio2.play();
    }
    else if(document.getElementById("radio-party-horn").checked){
        var audio3 = new Audio('./assets/media/audio/party-horn.mp3');
        audio3.play();
    }
}



