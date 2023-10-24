let esqueleto="off";
let esqueletoStop=document.getElementById("esqueletoOff");
let boton= new Audio ("/sound/botonbailar.mp3");
let boton2= new Audio ("/sound/audio.mp3");
function bailar() {
    if (esqueleto=="off") {
        esqueleto="on"
       
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener('click', ()=>{
        boton.play();
        })
        esqueletoStop.addEventListener('click', ()=>{
            boton2.play();
        
        })
        console.log("on")
    } else{
        esqueleto="off"
        esqueletoStop.classList.remove("on")
        esqueletoStop.addEventListener('click', ()=>{
            boton2.pause();
        })
        console.log("off")

    }
    
}