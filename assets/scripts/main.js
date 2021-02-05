// main.js


document.getElementById("radio-air-horn").addEventListener("click", change);
document.getElementById("radio-car-horn").addEventListener("click", change);
document.getElementById("radio-party-horn").addEventListener("click", change);
document.getElementById("honk-btn").addEventListener("click", horn);

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
    var volLevel = document.getElementById("volume-slider").value / 100;
    event.preventDefault();
    if(document.getElementById("radio-air-horn").checked){
        var audio1 = new Audio('./assets/media/audio/air-horn.mp3');
        audio1.volume = volLevel;
        audio1.play();
        
    }
    else if(document.getElementById("radio-car-horn").checked){
        var audio2 = new Audio('./assets/media/audio/car-horn.mp3');
        audio2.volume = volLevel;
        audio2.play();
    }
    else if(document.getElementById("radio-party-horn").checked){
        var audio3 = new Audio('./assets/media/audio/party-horn.mp3');
        audio3.volume = volLevel;
        audio3.play();
    }
}

var slider = document.getElementById("volume-slider");
var numInp = document.getElementById("volume-number");
slider.oninput = function(){
    document.getElementById("volume-number").value = document.getElementById("volume-slider").value;
    document.getElementById("honk-btn").disabled = false; 
    if(slider.value >= 67 && slider.value <= 100 || numInp.value <= 67 && numInp >= 100){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg"
    }
    if(slider.value >= 34 && slider.value <= 66 || numInp.value <= 34 && numInp >= 66){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg"
    }
    if(slider.value >= 1 && slider.value <= 33 || numInp.value <= 1 && numInp >= 33){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg"
    }
    if(slider.value == 0 || numInp.value == 0){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg"
        document.getElementById("honk-btn").disabled = true;
    }
}  
numInp.oninput = function(){
    document.getElementById("volume-slider").value = document.getElementById("volume-number").value;
    document.getElementById("honk-btn").disabled = false;  
    if(slider.value >= 67 && slider.value <= 100 || numInp.value <= 67 && numInp >= 100){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg"
    }
    if(slider.value >= 34 && slider.value <= 66 || numInp.value <= 34 && numInp >= 66){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg"
    }
    if(slider.value >= 1 && slider.value <= 33 || numInp.value <= 1 && numInp >= 33){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg"
    
    }
    if(slider.value == 0 || numInp.value == 0){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg"
        document.getElementById("honk-btn").disabled = true;
    }
}
