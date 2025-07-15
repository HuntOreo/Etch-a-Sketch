console.log('Hello, World!');

const createCanvas = () => {
  const board = document.querySelector('.board');
  for (let i = 0; i < 16; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    board.appendChild(column)
    for (let k = 0; k < 16; k++) {
      const tile = document.createElement('div');
      tile.classList.add('tile')
      const currentElm = board.lastElementChild
      currentElm.appendChild(tile);
    }
  }
}

createCanvas();