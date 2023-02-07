alert("welcome to Drum Kit");
var nobut = document.querySelectorAll(".drum").length;
for(var i=0;i<nobut;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var button = this.innerHTML;
    switch (button) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        case "d":
                var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        default:
            break;
    }
});

}





function wbtton(){
    
}