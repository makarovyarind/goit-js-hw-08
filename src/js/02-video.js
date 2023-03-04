import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
console.log(iframe);
const player = new Player(iframe);

const onPlay = throttle(({ seconds }) => {
  localStorage.setItem(TIME_KEY, seconds);
}, 1000);

player.on('timeupdate', onPlay);
player.setCurrentTime(localStorage.getItem(TIME_KEY) || 0);


