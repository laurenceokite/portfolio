enum ChessPiece {
  Pawn,
  Knight,
  Bishop,
  Rook,
  Queen,
  King,
}

const CP = ChessPiece;

const chessPieceValueMap = {
  [CP.Pawn]: 1,
  [CP.Knight]: 3,
  [CP.Bishop]: 3,
  [CP.Rook]: 5,
  [CP.Queen]: 9,
  [CP.King]: Infinity,
};
