alert("welcome to Drum Kit");
var nobut = document.querySelectorAll(".drum").length;
for(var i=0;i<nobut;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var button = this.innerHTML;
    makeSound(button);
    buttonAnime(button);
    
});
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnime(event.key);
})

function makeSound(y) {
    switch (y) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        default:
            break;
    }

}

function buttonAnime(currentkey){
    let activebutton = document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
}
