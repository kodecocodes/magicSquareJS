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
    //TODO
    return [[1]];
  }

  /**
   * 
   * @param {number} order
   * @return {number[][]} 
   */
  static _doublyEvenMagicSquare(order) {
    var square = Utils.prepopulate2DArray(order, order, 0);
    const n_squared = order * order;
    for (var i = 0; i < order; i++) {
      for (var j = 0; j < order; j++) {
        if (((i + 1) % 4) / 2 == ((j + 1) % 4) / 2) {
          square[i][j] = n_squared + 1 - index;
        } else {
          square[i][j] = index;
        }
        index += 1;
      }
    }
    return square;
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
