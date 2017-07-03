class Square {
  /**
   * 
   * @param {number} size 
   */
  constructor(size) {
    this.store = Utils.prepopulate2DArray(size, size, 0);
  }

  /**
   * 
   * @param {string} string 
   * @return {Square}
   */
  static fromString(string) {
    return Square.fromArray(Utils.extract2DArrayFromString(string));
  }

  /**
   * 
   * @param {number[][]} array 
   * @return {Square}
   */
  static fromArray(array) {
    const numberRows = array.length;
    for (var row of array) {
      if(row.length != numberRows) {
        console.log("This array is not square");
        return null;
      }
    }
    var square = new Square(numberRows);
    square.store = array;
    return square;
  }

  /**
   * @return {string}
   */
  toString() {
    return Utils.render2DArray(this.store);
  }

  /**
   * @return {bool}
   */
  isMagic() {
    return MagicSquareValidator.checkArrayIsMagicSquare(this.store);
  }
}

