	function isOdd(number) {
  /**
   * This function checks if a number is odd.
   *
   * @param {number} number - The number to be checked.
   * @returns {boolean} - True if the number is odd, false otherwise.
   */
  try {
    // Check if the argument is a number
    if (typeof number !== 'number') {
      throw new TypeError('The argument must be a number');
    }
 
    // Check if the number is odd
    return number % 2 !== 0;
  } catch (error) {
    // Log the error
    console.error(`Error: ${error.message}`);
    return false;
  }
}
