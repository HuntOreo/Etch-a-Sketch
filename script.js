console.log('Hello, World!');

const createCanvas = () => {
  const board = document.querySelector('.board');

  // create and render a 16x16 grid of tiles.
  for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    board.appendChild(row)

    for (let k = 0; k < 16; k++) {
      const tile = document.createElement('div');
      tile.classList.add('tile')

      tile.addEventListener("mouseover", (e) => {
        const elem = e.target;
        updateColor(elem);
      })

      const currentElm = board.lastElementChild
      currentElm.appendChild(tile);
    }
  }
}

const updateColor = (elem) => {
  elem.style.backgroundColor = 'blue';
}

createCanvas();