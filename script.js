const btn = document.querySelector('.new-board');

const createCanvas = (rowCount, columnCount) => {
  const board = document.querySelector('.board');

  // create and render a 16x16 grid of tiles.
  for (let i = 0; i < rowCount; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    board.appendChild(row);

    for (let k = 0; k < columnCount; k++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');

      tile.addEventListener("mouseover", (e) => {
        const elem = e.target;
        updateColor(elem);
      });

      const currentElm = board.lastElementChild;
      currentElm.appendChild(tile);
    };
  };
};

const updateColor = (elem) => {
  elem.style.backgroundColor = 'blue';
};

const updateBoard = () => {
  try {
    const columnAmount = Number(prompt('How many columns?'));
    const rowAmount = Number(prompt('How many rows?'));

    if (!columnAmount || !rowAmount) {
      throw new Error('Only accepts number');
    };

    createCanvas(rowAmount, columnAmount);
  } catch (error) {
    alert(error.message);
    return;
  };
}

btn.addEventListener('click', updateBoard);

createCanvas(16, 16);