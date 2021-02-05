// main.js

window.onload = function () {
    document.getElementById("radio-air-horn").addEventListener("click", change);
    document.getElementById("radio-car-horn").addEventListener("click", change);
    document.getElementById("radio-party-horn").addEventListener("click", change);
    
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

/*
document.getElementById("horn-sound").addEventListener("click", horn);

function horn(){
    if(document.getElementById("radio-air-horn").checked){
        horn1=document.getElementById('radio-air-horn');
    }
    else if(document.getElementById("radio-car-horn").checked){
        horn2=document.getElementById('radio-car-horn');
    }
    else if(document.getElementById("radio-party-horn").checked){
        horn3=document.getElementById('radio-party-horn'); 
    }


    var audio1 = new Audio('audio/air-horn.mp3');
    var audio2 = new Audio('audio/car-horn.mp3');
    var audio3 = new Audio('audio/party-horn.mp3');

    horn1.addEventListener('click',plays1,false);
    horn2.addEventListener('click',plays2,false);
    horn3.addEventListener('click',plays3,false);


}

function plays1(){
    audio1.play();
}

function plays2(){
    audio2.play();
}

function plays3(){
    audio3.play();
} */


