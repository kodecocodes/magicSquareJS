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
    //TODO
    return [[1]];
  }

  /**
   * 
   * @param {number} order 
   * @return {number[][]}
   */
  static _singlyEvenMagicSquare(order) {
    const p = order / 2;
    const p_squared = p * p;
    const M = MagicSquareGenerator._oddMagicSquare(p);

    var square = Utils.prepopulate2DArray(order, order, 0);

    for (var i = 0; i < p; i++) {
      for (var j = 0; j < p; j++) {
        square[i][j] = M[i][j];
        square[i+p][j] = M[i][j] + 3 * p_squared;
        square[i][j+p] = M[i][j] + 2 * p_squared;
        square[i+p][j+p] = M[i][j] + p_squared;
      }
    }

    const k = (order - 2) / 4;
    const J = Array
      .apply(null, Array(k))
      .map( (_, idx) => idx + 1 )
      .concat(
        Array
          .apply(null, Array(k - 1))
          .map( (_, idx) => idx + order - k + 2)
      );
  
    var temp = 0;
    for (i = 1; i <= p; i++) {
      for (j = 1; j <= J.length; j++) {
        temp = square[i-1][J[j-1]-1];
        square[i-1][J[j-1] - 1] = square[i + p - 1][J[j-1] - 1];
        square[i + p - 1][J[j-1] - 1] = temp;
      }
    }

    temp = square[k][0];
    square[k][0] = square[k+p][0];
    square[k+p][0] = temp;
    
    temp = square[k+p][k];
    square[k+p][k] = square[k][k];
    square[k][k] = temp;
    
    return square;
  }

}
