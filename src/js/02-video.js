import Player from '@vimeo/player';
import throttle from 'lodash/throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeupdate, 1000));
function onTimeupdate({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
