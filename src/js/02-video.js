import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const CURRENT_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

function saveCurrentTime(data) {
    localStorage.setItem(CURRENT_KEY, data.seconds);
}

const throttleSave = throttle(saveCurrentTime, 500);

player.on('timeupdate', throttleSave);

const currentTime = localStorage.getItem(CURRENT_KEY);

if (currentTime !== null) {
    player.setCurrentTime(parseFloat(currentTime));
}