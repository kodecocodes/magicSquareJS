class Utils {
  /**
  * 
  * @param {number} length 
  * @param {number} value 
  * @return {number[]}
  */
  static prepopulate1DArray(length, value) {
    return Array.apply(null, Array(length))
                .map(Number.prototype.valueOf, value)
  }

  /**
   * 
   * @param {number} rows 
   * @param {number} columns 
   * @param {number} value 
   * @return {number[][]}
   */
  static prepopulate2DArray(rows, columns, value) {
    return Array.apply(null, Array(rows))
                .map(_ => Utils.prepopulate1DArray(columns, value));
  }

  /**
   * 
   * @param {string} str 
   * @return {number[][]}
   */
  static extract2DArrayFromString(str) {
    var rows = str.split(/\r\n|\r|\n/);
    return rows.map(row => {
      return row.split(/\s+/)
                .filter(el => el != "")
                .map(el => Number(el));
    });
  }

  /**
   * 
   * @param {number[][]} array
   * @return {string}
   */
  static render2DArray(array) {
    const max = Math.max(...array.map(row => Math.max(...row)));
    const numChars = Math.ceil(Math.log10(max + 1));

    return array.map(row => {
      return row.map(el => Utils._pad(el, numChars, " ")).join(" ")
    }).join("\n");
  }

  /**
   * 
   * @param {number} n 
   * @param {number} width 
   * @param {string}} z 
   * @return {string}
   */
  static _pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
}
