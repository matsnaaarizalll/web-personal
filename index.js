(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());
const card = document.getElementById('card');
const music = document.getElementById('background-music');
const openButton = document.querySelector('#card-front button#open');  // misal tombol open ada id="open"
const closeButton = document.getElementById('close'); // asumsi tombol close sudah ada id="close"

openButton.addEventListener('click', () => {
  card.classList.add('open-fully');
  music.play();
});

closeButton.addEventListener('click', () => {
  card.classList.remove('open-fully');
  music.pause();
  music.currentTime = 0; // reset ke awal
});

