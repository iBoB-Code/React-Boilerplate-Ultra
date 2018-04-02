function selector(val) {
  switch (val) {
  case 1:
    return 'hand rock';
  case 2:
    return 'hand paper';
  case 3:
    return 'hand scissors';
  case 4:
    return 'hand lizard';
  case 5:
    return 'hand spock';
  default:
  }
  return '';
}

export function play(a, b) {
  let message = 'DRAW !';
  let player1 = 0;
  let player2 = 0;
  if (a === 1 && b === 2) {
    player2 += 1;
    message = 'Paper covers the rock !';
  }
  if (a === 1 && b === 3) {
    player1 += 1;
    message = 'Rock crushes scissors !';
  }
  if (a === 1 && b === 4) {
    player1 += 1;
    message = 'Rock crushes lizard !';
  }
  if (a === 1 && b === 5) {
    player2 += 1;
    message = 'Spock vaporises rock !';
  }
  if (a === 2 && b === 1) {
    player1 += 1;
    message = 'Paper covers the rock !';
  }
  if (a === 2 && b === 3) {
    player2 += 1;
    message = 'Scissors cuts paper !';
  }
  if (a === 2 && b === 4) {
    player2 += 1;
    message = 'Lizard eats paper !';
  }
  if (a === 2 && b === 5) {
    player1 += 1;
    message = 'Paper disproves spock !';
  }
  if (a === 3 && b === 1) {
    player2 += 1;
    message = 'Rock crushes scissors !';
  }
  if (a === 3 && b === 2) {
    player1 += 1;
    message = 'Scissors cuts paper !';
  }
  if (a === 3 && b === 4) {
    player1 += 1;
    message = 'Rock crushes lizard !';
  }
  if (a === 3 && b === 5) {
    player2 += 1;
    message = 'Spock smashes scissors !';
  }
  if (a === 4 && b === 1) {
    player2 += 1;
    message = 'Rock crushes lizard !';
  }
  if (a === 4 && b === 2) {
    player1 += 1;
    message = 'Lizard eats paper !';
  }
  if (a === 4 && b === 3) {
    player2 += 1;
    message = 'Rock crushes lizard !';
  }
  if (a === 4 && b === 5) {
    player1 += 1;
    message = 'Lizard poisons spock !';
  }
  if (a === 5 && b === 1) {
    player1 += 1;
    message = 'Spock vaporises rock !';
  }
  if (a === 5 && b === 2) {
    player2 += 1;
    message = 'Paper disproves spock !';
  }
  if (a === 5 && b === 3) {
    player1 += 1;
    message = 'Spock smashes scissors !';
  }
  if (a === 5 && b === 4) {
    player2 += 1;
    message = 'Lizard poisons spock !';
  }
  return {
    type: 'UPDATE_SCORE',
    payload: { player1, player2, message, a: selector(a), b: selector(b) }
  };
}

export function reset() {
  return {
    type: 'RESET',
    payload: null
  };
}
