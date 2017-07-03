class MagicSquareGenerator {
  /**
   * 
   * @param {number} order 
   * @return {number[][]}
   */
  static generateMagicSquare(order) {
    if (order == 2 || order < 1) {
      throw "A magic square doesn't exist for that order";
    }
    switch (order % 4) {
      case 0:
        return Square.fromArray(MagicSquareGenerator._doublyEvenMagicSquare(order));
      case 2:
        return Square.fromArray(MagicSquareGenerator._singlyEvenMagicSquare(order));
      default:
        return Square.fromArray(MagicSquareGenerator._oddMagicSquare(order));
    }
  }

  /**
   * 
   * @param {number} order 
   * @return {number[][]}
   */
  static _oddMagicSquare(order) {
    const n_squared = order * order;
    var i = 0;
    var j = Math.floor(order / 2);
    var square = Utils.prepopulate2DArray(order, order, 0);

    for(var k = 1; k <= n_squared; k++) {
      square[i][j] = k;
      i = i - 1;
      j = j + 1;

      if (k % order === 0) {
        i = i + 2;
        j = j - 1;
      } else if (j == order) {
        j = j - order;
      } else if (i < 0) {
        i = i + order;
      }
    }
    return square;
  }

  /**
   * 
   * @param {number} order
   * @return {number[][]} 
   */
  static _doublyEvenMagicSquare(order) {
    //TODO
    return [[1]];
  }

  /**
   * 
   * @param {number} order 
   * @return {number[][]}
   */
  static _singlyEvenMagicSquare(order) {
    //TODO
    return [[1]];
  }

}
