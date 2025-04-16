/**
 * Converts actual miles to Tesla-reported miles based on alleged odometer discrepancies.
 * The function applies a random multiplier between 1.15 (15% increase) and 2.17 (117% increase)
 * to simulate the alleged odometer inflation reported in the Tesla class-action lawsuit.
 * 
 * @param {number} actualMile - The actual number of miles driven
 * @returns {number} The Tesla-reported miles, rounded to 2 decimal places
 * @throws {TypeError} If actualMile is not a number
 * @throws {RangeError} If actualMile is negative
 * 
 * @example
 * // Returns a value between 115 and 217
 * toTeslaMile(100);
 */
function toTeslaMile(actualMile) {
  if (typeof actualMile !== 'number') {
    throw new TypeError('actualMile must be a number');
  }
  
  if (actualMile < 0) {
    throw new RangeError('actualMile cannot be negative');
  }

  const multiplier = 1.15 + Math.random() * (2.17 - 1.15);
  const teslaMile = actualMile * multiplier;
  return Number(teslaMile.toFixed(2));
}

module.exports = toTeslaMile;
