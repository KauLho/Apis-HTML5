const videoPlayer = document.getElementById('video');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const volumeUpButton = document.getElementById('volume-up');
const volumeDownButton = document.getElementById('volume-down');
const videoSource = document.getElementById('videoSource');

//Para darle al play

playButton.addEventListener('click', () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
});
//Para que pare el vídeo

stopButton.addEventListener('click', () => {
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
});

// Subir volumen

volumeUpButton.addEventListener('click', () => {
  if (videoPlayer.volume < 1.0) {
    videoPlayer.volume += 0.1;
  }
});

// Bajar volumen

volumeDownButton.addEventListener('click', () => {
  if (videoPlayer.volume > 0.0) {
    videoPlayer.volume -= 0.1;
  }
});

// Para cargar fichero y reproducirlo

const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = 'video/mp4';

if (window.File && window.FileReader && window.FileList) {
  console.log('Todas las APIs soportadas');
} else {
  alert('La API de FILE no es soportada en este navegador.');
}

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file.type === 'video/mp4') {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener('load', () => {
      videoSource.setAttribute('src', fileReader.result);
      videoPlayer.load();
      videoPlayer.play();
      alert('El video se está cargando. Por favor, espere unos segundos.');
    });
  } else {
    alert('El fichero seleccionado no es un vídeo MP4.');
  }
});

document.body.appendChild(fileInput);
