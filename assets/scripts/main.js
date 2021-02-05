// main.js


function doFirst(){
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
