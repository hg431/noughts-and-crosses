const Player = (name, symbol) => ({
  name,
  symbol,
});

const display = document.getElementById('display');

const gameboard = (() => {
  const values = ['', '', '', '', '', '', '', '', ''];
  const render = () => {
    for (let i = 0; i < values.length; i++) {
      document.getElementsByClassName('square')[i].innerHTML = values[i];
    }
  };
  return {
    values,
    render,
  };
})();

const gameplay = (() => {
  const p1 = Player(document.getElementById('player1').value, 'x');
  const p2 = Player(document.getElementById('player2').value, 'o');
  let currentPlayer = p1;
  function changePlayer() {
    if (currentPlayer == p1) {
      currentPlayer = p2;
    } else if (currentPlayer == p2) {
      currentPlayer = p1;
    }
  }
  const checkWinner = () => {
    if (((gameboard.values[0] == 'x') && (gameboard.values[1] == 'x') && (gameboard.values[2] == 'x'))
            || ((gameboard.values[3] == 'x') && (gameboard.values[4] == 'x') && (gameboard.values[5] == 'x'))
            || ((gameboard.values[6] == 'x') && (gameboard.values[7] == 'x') && (gameboard.values[8] == 'x'))
            || ((gameboard.values[0] == 'x') && (gameboard.values[3] == 'x') && (gameboard.values[6] == 'x'))
            || ((gameboard.values[1] == 'x') && (gameboard.values[4] == 'x') && (gameboard.values[7] == 'x'))
            || ((gameboard.values[2] == 'x') && (gameboard.values[5] == 'x') && (gameboard.values[8] == 'x'))
            || ((gameboard.values[0] == 'x') && (gameboard.values[4] == 'x') && (gameboard.values[8] == 'x'))
            || ((gameboard.values[2] == 'x') && (gameboard.values[4] == 'x') && (gameboard.values[6] == 'x'))) {
      display.innerHTML = `${p1.name} is the winner`;
    } else if (((gameboard.values[0] == 'o') && (gameboard.values[1] == 'o') && (gameboard.values[2] == 'o'))
    || ((gameboard.values[3] == 'o') && (gameboard.values[4] == 'o') && (gameboard.values[5] == 'o'))
    || ((gameboard.values[6] == 'o') && (gameboard.values[7] == 'o') && (gameboard.values[8] == 'o'))
    || ((gameboard.values[0] == 'o') && (gameboard.values[3] == 'o') && (gameboard.values[6] == 'o'))
    || ((gameboard.values[1] == 'o') && (gameboard.values[4] == 'o') && (gameboard.values[7] == 'o'))
    || ((gameboard.values[2] == 'o') && (gameboard.values[5] == 'o') && (gameboard.values[8] == 'o'))
    || ((gameboard.values[0] == 'o') && (gameboard.values[4] == 'o') && (gameboard.values[8] == 'o'))
    || ((gameboard.values[2] == 'o') && (gameboard.values[4] == 'o') && (gameboard.values[6] == 'o'))) {
      display.innerHTML = `${p2.name} is the winner`;
    } else if (gameboard.values.every((x) => x != '')) {
      display.innerHTML = 'Draw!';
    }
  };
  for (let i = 0; i < gameboard.values.length; i++) {
    document.getElementsByClassName('square')[i].addEventListener('click', () => {
      if (gameboard.values[i] !== '') {
        return;
      }
      gameboard.values[i] = currentPlayer.symbol;
      gameboard.render();
      checkWinner();
      changePlayer();
    });
  }
});
