// eslint-disable-next-line no-unused-vars
function solution(bishop, pawn) {
  const alphabet = 'abcdefgh';
  let bishopPosition = 0;
  let pawnPosition = 0;

  const difference = Math.abs(Number(bishop[1]) - Number(pawn[1]));

  for (let i = 0; i < alphabet.length; i++) {

    if (bishop[0] === alphabet[i]) {
      bishopPosition = i;
    }
    if (pawn[0] === alphabet[i]) {
      pawnPosition = i;
    }
  }

  if (Math.abs(bishopPosition - pawnPosition) === difference) {
    return true;
  }

  return false;
}
