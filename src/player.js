function Player(player) {
  let turn = player === true;

  const makePlay = () => {
    const x = parseInt(Math.random() * 10, 10);
    const y = parseInt(Math.random() * 10, 10);

    return [x, y];
  };

  const switchTurn = () => {
    turn = !turn;
  };

  return { player, turn, makePlay, switchTurn };
}

export default Player;
