//modal function
var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

function openModal(){
  modal.style.display = 'block';
  playMusic();

}

function closeModal(){
  modal.style.display = 'none';
}

var music = document.getElementById("myAudio");

function playMusic() {
music.play();
music.volume = 0.2;
}

