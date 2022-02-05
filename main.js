'use strict'

const canvas = document.createElement('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
const wrapper = document.getElementById('wrapper');
wrapper.append(canvas);
const ctx = canvas.getContext("2d");

// ctx.fillStyle = 'red';

// ctx.moveTo(50, 50);
// ctx.lineTo(100, 80);
// ctx.lineTo(150, 40);
// ctx.lineTo(50, 50);
// ctx.fillStyle = 'green';
// ctx.fill();

// ctx.strokeStyle = 'orange';
ctx.lineWidth = 10;
ctx.stroke();

function drawGrid(cellSize, color) {

  ctx.fillStyle = color;

  for (let y = cellSize; y < innerHeight; y += cellSize) {
  ctx.fillRect(0, y, innerWidth, 1);
  }
  for (let x = cellSize; x < innerWidth; x += cellSize) {
  ctx.fillRect(x, 0, 1, innerHeight);
  }
}

drawGrid(20, 'tomato');

function fillCell(row, column, color) {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 20, 20);
}

fillCell(1, 1, 'green');
fillCell(3, 5, 'green');