var len = $(".drum").length;
for (var i = 0; i < len; i++) {
    $(".drum").click( function () {
        var mbtn = this.innerHTML;
        instruments(mbtn);
        ButtonAnimation(mbtn);
    });
}
$("body").keypress( function (event) {
    var kbtn = event.key;
    instruments(kbtn);
    ButtonAnimation(kbtn);
})
function instruments(letter) {
    switch (letter) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        default:
            alert("press buttons to play instruments")
            break;
    }
}
function ButtonAnimation(currentkey) {
    var activebtn=document.querySelector("."+currentkey);

    activebtn.classList.add("pressed");
    setTimeout(function () {
        activebtn.classList.remove("pressed");
        
    },100);
    
}