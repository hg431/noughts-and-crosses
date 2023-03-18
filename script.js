const Player = (name, symbol) => ({
  name,
  symbol,
});

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
  const display = document.getElementById('display');
  const p1 = Player(document.getElementById('player1').value, 'x');
  const p2 = Player(document.getElementById('player2').value, 'o');
  let currentPlayer = p1;
  function changePlayer() {
    return (currentPlayer == p1 ? currentPlayer = p2 : currentPlayer = p1);
  }
  const checkWinner = () => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const combination of combinations) {
      if (gameboard.values[combination[0]] == gameboard.values[combination[1]]
                && gameboard.values[combination[1]] == gameboard.values[combination[2]]
                && gameboard.values[combination[0]] != '') {
        function getPlayerName() {
          return (gameboard.values[combination[0]] == p1.symbol ? p1.name : p2.name);
        }
        display.innerHTML = `${getPlayerName()} is the winner`;
      } else if (gameboard.values.every((x) => x != '')) {
        display.innerHTML = 'Draw!';
      }
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
