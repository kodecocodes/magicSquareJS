class MagicSquareValidator {
  /**
   * 
   * @param {number[][]} array 
   * @returns {bool}
   */
  static checkArrayIsMagicSquare(array) {
    // TODO
    if (!MagicSquareValidator._checkSquare(array)) {
      return false;
    }
  }

  /**
   * 
   * @param {number[][]} array
   * @returns {bool}
   */
  static _checkSquare(array) {
    const rowCount = array.length;
    return array.reduce((previousValue, currentValue) => {
      return previousValue && (rowCount == currentValue.length);
    }, true);
  }
}

