const testRunner = new Bconatr();

testRunner.prepFunction("removeSpaces");

testRunner.runTest(
  "removeSpaces should remove any spaces from the start of the string, test 1",
  'removeSpaces(" AnnieCannons")',
  "AnnieCannons"
);

testRunner.runTest(
  "removeSpaces should remove any spaces from the start of the string, test 2",
  'removeSpaces("  AnnieCannons")',
  "AnnieCannons"
);

testRunner.runTest(
  "removeSpaces should remove any spaces from the end of the string, test 1",
  'removeSpaces("AnnieCannons ")',
  "AnnieCannons"
);

testRunner.runTest(
  "removeSpaces should remove any spaces from the end of the string, test 2",
  'removeSpaces("AnnieCannons  ")',
  "AnnieCannons"
);

testRunner.runTest(
  "removeSpaces should remove any spaces from the middle of the string, test 1",
  'removeSpaces("Annie Cannons")',
  "AnnieCannons"
);

testRunner.runTest(
  "removeSpaces should remove any spaces from the middle of the string, test 2",
  'removeSpaces("Annie  Cannons")',
  "AnnieCannons"
);

testRunner.prepFunction("getMeasurement");

testRunner.runTest(
  "getMeasurement should return the measurement type, test 1",
  'getMeasurement("30C")',
  "C"
);

testRunner.runTest(
  "getMeasurement should return the measurement type, test 2",
  'getMeasurement("60F")',
  "F"
);

testRunner.runTest(
  "getMeasurement should return the measurement type from a string with a negative number in it, test 1",
  'getMeasurement("-30C")',
  "C"
);

testRunner.runTest(
  "getMeasurement should return the measurement type from a string with a negative number in it, test 2",
  'getMeasurement("-60F")',
  "F"
);

testRunner.runTest(
  "getMeasurement should return the measurement type from a string with a single digit number in it, test 1",
  'getMeasurement("3C")',
  "C"
);

testRunner.runTest(
  "getMeasurement should return the measurement type from a string with a single digit number in it, test 2",
  'getMeasurement("6F")',
  "F"
);

testRunner.runTest(
  "getMeasurement should return the measurement type from a string with a triple digit number in it, test 1",
  'getMeasurement("300C")',
  "C"
);

testRunner.runTest(
  "getMeasurement should return the measurement type from a string with a triple digit number in it, test 2",
  'getMeasurement("600F")',
  "F"
);

testRunner.prepFunction("getDegrees");

testRunner.runTest(
  "getDegrees should convert the string to a number",
  'typeof getDegrees("30C")',
  "number"
);

testRunner.runTest(
  "getDegrees should return the number of degrees, test 1",
  'getDegrees("30C")',
  30
);

testRunner.runTest(
  "getDegrees should return the number of degrees, test 2",
  'getDegrees("50F")',
  50
);

testRunner.runTest(
  "getDegrees should handle single digit numbers, test 1",
  'getDegrees("3C")',
  3
);

testRunner.runTest(
  "getDegrees should handle single digit numbers, test 2",
  'getDegrees("5F")',
  5
);

testRunner.runTest(
  "getDegrees should handle triple digit numbers, test 1",
  'getDegrees("300C")',
  300
);

testRunner.runTest(
  "getDegrees should handle triple digit numbers, test 2",
  'getDegrees("500F")',
  500
);

testRunner.runTest(
  "getDegrees should handle negative numbers, test 1",
  'getDegrees("-30F")',
  -30
);

testRunner.runTest(
  "getDegrees should handle negative numbers, test 2",
  'getDegrees("-10C")',
  -10
);

testRunner.prepFunction("convertCToF");

testRunner.runTest(
  "convertCToF should convert degrees to Fahrenheit, test 1",
  "convertCToF(20)",
  68
);

testRunner.runTest(
  "convertCToF should convert degrees to Fahrenheit, test 2",
  "convertCToF(15)",
  59
);

testRunner.runTest(
  "convertCToF should convert freezing points",
  "convertCToF(0)",
  32
);

testRunner.prepFunction("convertFToC");

testRunner.runTest(
  "convertFToC should convert degrees to Celsius, test 1",
  "convertFToC(77)",
  25
);

testRunner.runTest(
  "convertFToC should convert degrees to Celsius, test 2",
  "convertFToC(14)",
  -10
);

testRunner.runTest(
  "convertFToC should convert freezing points",
  "convertFToC(32)",
  0
);

testRunner.prepFunction("convertTemperature");

testRunner.runTest(
  "convertTemperature can convert a Celsius to a Fahrenheit, test 1",
  "convertTemperature('30C')",
  86
);

testRunner.runTest(
  "convertTemperature can convert a Celsius to a Fahrenheit, test 2",
  "convertTemperature('-10C')",
  14
);

testRunner.runTest(
  "convertTemperature can convert a Fahrenheit to a Celsius, test 1",
  "convertTemperature('95F')",
  35
);

testRunner.runTest(
  "convertTemperature can convert a Fahrenheit to a Celsius, test 2",
  "convertTemperature('212F')",
  100
);

testRunner.runTest(
  "convertTemperature can handle lowercase letters, test 1",
  "convertTemperature('30c')",
  86
);

testRunner.runTest(
  "convertTemperature can handle lowercase letters, test 2",
  "convertTemperature('-10c')",
  14
);

testRunner.runTest(
  "convertTemperature can handle lowercase letters, test 3",
  "convertTemperature('95f')",
  35
);

testRunner.runTest(
  "convertTemperature calls getDegrees",
  "convertTemperature.toString().includes('getDegrees')",
  true
);

testRunner.runTest(
  "convertTemperature calls getMeasurement",
  "convertTemperature.toString().includes('getMeasurement')",
  true
);

testRunner.runTest(
  "convertTemperature calls convertCToF",
  "convertTemperature.toString().includes('convertCToF')",
  true
);

testRunner.runTest(
  "convertTemperature calls convertFToC",
  "convertTemperature.toString().includes('convertFToC')",
  true
);

testRunner.runTest(
  "convertTemperature returns a helpful error message if the input is invalid, test 1",
  "convertTemperature('30')",
  "Measurements must be in degrees Celsius or Fahrenheit--please try something like 32C or 100F"
);

testRunner.runTest(
  "convertTemperature returns a helpful error message if the input is invalid, test 2",
  "convertTemperature('30Celsius')",
  "Measurements must be in degrees Celsius or Fahrenheit--please try something like 32C or 100F"
);

testRunner.runTest(
  "convertTemperature returns a helpful error message if the input is invalid, test 3",
  "convertTemperature('30x')",
  "Measurements must be in degrees Celsius or Fahrenheit--please try something like 32C or 100F"
);

testRunner.endTests();
