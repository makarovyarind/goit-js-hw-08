import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);



const onPlay = throttle(({ seconds }) => {
  localStorage.setItem("videoplayer-current-time", seconds);
}, 1000);

player.on('timeupdate', onPlay);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);