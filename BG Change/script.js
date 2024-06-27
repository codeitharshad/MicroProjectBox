const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id === "grey"){
            body.style.backgroundColor = "rgb(92, 74, 194)";
        }
        if(e.target.id === "white"){
            body.style.backgroundColor = "rgb(255, 44, 154)";
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = "rgb(228, 21, 255)";
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = "rgb(255, 72, 72)";
        }
    })
})