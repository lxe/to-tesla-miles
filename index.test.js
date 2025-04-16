const toTeslaMile = require('./index');

describe('toTeslaMile', () => {
  test('should return a number between 1.15x and 2.17x of input', () => {
    const actualMile = 100;
    const result = toTeslaMile(actualMile);
    
    expect(result).toBeGreaterThanOrEqual(actualMile * 1.15);
    expect(result).toBeLessThanOrEqual(actualMile * 2.17);
    expect(typeof result).toBe('number');
  });

  test('should handle zero miles', () => {
    expect(toTeslaMile(0)).toBe(0);
  });

  test('should throw TypeError for non-number input', () => {
    expect(() => toTeslaMile('100')).toThrow(TypeError);
    expect(() => toTeslaMile(null)).toThrow(TypeError);
    expect(() => toTeslaMile(undefined)).toThrow(TypeError);
    expect(() => toTeslaMile({})).toThrow(TypeError);
  });

  test('should throw RangeError for negative input', () => {
    expect(() => toTeslaMile(-100)).toThrow(RangeError);
  });

  test('should return a number with 2 decimal places', () => {
    const result = toTeslaMile(100);
    const decimalPlaces = (result.toString().split('.')[1] || '').length;
    expect(decimalPlaces).toBeLessThanOrEqual(2);
  });
});
