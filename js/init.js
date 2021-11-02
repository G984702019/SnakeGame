//document.addEventListener('keydown', keyPush);
  window.addEventListener("keydown",keyPush);
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const score = document.getElementById('score');
const max = document.getElementById('max');

const SIZE = 20;
const FPS = 15;
const MIN = 5;

let px = py = SIZE/2;
let xd = yd = 0;
let snake = [];
let tail = MIN;
let appleX = appleY = 15;
let nowscore=5;
let maxscore=5;
