// main.js

<fieldset id="audio-selection">
    <div id="radio-air-horn-container">
    <input type="radio" id="radio-air-horn" name="radio-sound" onClick="change()" checked>
    <label for="radio-air-horn">Air Horn</label>
    </div>
    <div id="radio-car-horn-container">
    <input type="radio" id="radio-car-horn" name="radio-sound" onClick="change()">
    <label for="radio-car-horn">Car Horn</label>
    </div>
    <div id="radio-party-horn-container">
    <input type="radio" id="radio-party-horn" name="radio-sound" onClick="change()">
    <label for="radio-party-horn">Party Horn</label>
    </div>
</fieldset>

function change(){}
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

function horn(){

    horn1=document.getElementById('radio-air-horn');
    horn2=document.getElementById('radio-car-horn');
    horn3=document.getElementById('radio-party-horn');
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
}


window.addEventListener('load',doFirst,false);
