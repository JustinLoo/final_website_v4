

  function PlaySound(soundobj) {
    if (event.target!=event.currentTarget) return;
    var thissound=document.getElementById(soundobj);
    thissound.volume = 0.2;
    thissound.play();
}

function StopSound(soundobj) {
  if (event.target!=event.currentTarget) return;
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}


  
  






function play() {
	var audio = new Audio('whoosh.mp3');
	audio.play();
  }
  