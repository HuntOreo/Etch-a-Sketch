let _OPACITY = 100;

const createBoard = (rowCount, columnCount) => {
  _OPACITY = 100; // Reset opacity value.
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

const updateBoard = () => {
  try {
    const columnAmount = Number(prompt('How many columns?'));
    const rowAmount = Number(prompt('How many rows?'));

    if (!columnAmount || !rowAmount) {
      throw new Error('Only accepts number');
    };

    if (columnAmount > 100 || rowAmount > 100) {
      wipeBoard();
      createBoard(100, 100);
      throw new Error('Limit reached!');
    };

    wipeBoard();
    createBoard(rowAmount, columnAmount);
  } catch (error) {
    alert(error.message);
  };
};

const wipeBoard = () => {
  const board = document.querySelector('.board')
  board.replaceChildren();
};

const updateColor = (elem) => {
  const redVal = Math.floor(Math.random() * (255 + 1));
  const greenVal = Math.floor(Math.random() * (255 + 1));
  const blueVal = Math.floor(Math.random() * (255 + 1));
  elem.style.backgroundColor = `
    rgb(${redVal}, ${greenVal}, ${blueVal}, ${_OPACITY}%)
  `;

  _OPACITY--;
};

const btn = document.querySelector('.new-board');
btn.addEventListener('click', updateBoard);

createBoard(16, 16);