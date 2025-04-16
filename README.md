# to-tesla-mile

Convert actual miles to Tesla-reported miles based on alleged odometer discrepancies.

## Description

This package provides a function that converts actual miles to Tesla-reported miles, simulating the alleged odometer discrepancies reported in the Tesla class-action lawsuit. The function applies a random multiplier between 1.15 (15% increase) and 2.17 (117% increase) to simulate the alleged odometer inflation.

## Installation

```bash
npm install to-tesla-mile
```

## Usage

```javascript
const toTeslaMile = require('to-tesla-mile');

// Convert 100 actual miles to Tesla-reported miles
const teslaMiles = toTeslaMile(100);
console.log(teslaMiles); // Example output: 167.45 (varies due to random multiplier)
```

## API

### toTeslaMile(actualMile)

- `actualMile` (number): The actual number of miles driven
- Returns: (number) The Tesla-reported miles, rounded to 2 decimal places
- Throws:
  - TypeError: If actualMile is not a number
  - RangeError: If actualMile is negative

## Example

```javascript
const toTeslaMile = require('to-tesla-mile');

// Convert various mileages
console.log(toTeslaMile(50));   // Example: 78.25
console.log(toTeslaMile(100));  // Example: 167.45
console.log(toTeslaMile(1000)); // Example: 1567.80
```

## Background

This package is based on allegations from a class-action lawsuit against Tesla, which claims that Tesla's odometer system inflates mileage readings by 15% to 117% compared to actual miles driven. The lawsuit suggests this was done to avoid repair obligations under mileage-capped warranties.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
