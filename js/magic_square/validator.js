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
    if (!MagicSquareValidator._checkRange(array, 1, array.length * array.length)) {
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

  /**
   * 
   * @param {number[][]} array 
   * @param {number} min 
   * @param {number} max 
   * @return {bool}
   */
  static _checkRange(array, min, max) {
    var elementSet = new Set();

    for (var row of array) {
      for (var element of row) {
        elementSet.add(element);
      }
    }

    if (elementSet.size != max - min + 1) {
      return false;
    }

    if (Math.min( ...elementSet ) != min) {
      return false;
    }

    if (Math.max( ...elementSet ) != max) {
      return false;
    }

    return true;
  }

    /**
   * 
   * @param {number[][]} array 
   * @param {number} target 
   * @return bool
   */
  static _checkRowSums(array, target) {
    return array.reduce((previousValue, row) => {
      return previousValue && (row.reduce((cumulativeTotal, value) => {
        return cumulativeTotal + value;
      }, 0)) == target;
    }, true);
  }


    /**
   * 
   * @param {number[][]} square 
   * @param {number} target 
   * @return bool
   */
  static _checkColumnSums(square, target) {
    const zip = (arr, ...arrs) => {
      return arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));
    }
    const colSums = square.reduce((cumulativeTotal, row) => {
      return zip(cumulativeTotal, row).map(res => res[0] + res[1]);
    }, Utils.prepopulate1DArray(square.length, 0));
    return colSums.reduce((res, colSum) => res && (colSum == target), true)
  }
}

