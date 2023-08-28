import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveTimeToLocalStorage = throttle(currentTime => {
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

player.ready().then(() => {
  const storedTime = localStorage.getItem('videoplayer-current-time');
  if (storedTime) {
    player.setCurrentTime(parseFloat(storedTime));
  }
  player.on('timeupdate', data => {
    const currentTime = data.seconds;
    saveTimeToLocalStorage(currentTime);
  });
});
