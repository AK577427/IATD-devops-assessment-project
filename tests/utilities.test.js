import { generateFlightId, isValidDateString, wrapString } from "../src/utilities";

test("wrapString: wrap single word over two lines", () => {
    expect(wrapString("Long", 3)).toBe("Lo-\nng");
});

test("wrapString: wrap multiple words over two lines", () => {
    expect(wrapString("Too long", 4)).toBe("Too\nlong");
});

test("wrapString: wrap complex sentence", () => {
    expect(wrapString("This is a complex sentence that needs to be wrapped", 6)).toBe("This\nis a\ncompl-\nex se-\nntence\nthat\nneeds\nto be\nwrapp-\ned");
});

test("wrapString: wrap very long words", () => {
    expect(wrapString("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbbbbbbbbbbbbb ccccccccccccccccccccccccccc", 6)).toBe(
`aaaaa-
aaaaa-
aaaaa-
aaaaa-
aaaaa-
aaaaa-
aaaaa
bbbbb-
bbbbb-
bbbbb-
bbbbb-
bbbbb-
bbb c-
ccccc-
ccccc-
ccccc-
ccccc-
cccccc`
    );
});

// Test for invalid string
test("isValidDateString: invalid string", () => {
    expect(isValidDateString("notavaliddate")).toBe(false);
  });
  
  // Test for the wrong amount of "date segments" (see comments in utilities.js for more info)
  test("isValidDateString: wrong number of date segments", () => {
    expect(isValidDateString("12/12/2012/20")).toBe(false);
  });
  
  // Test for wrong number of digits in the day
  test("isValidDateString: wrong number of digits in day", () => {
    expect(isValidDateString("1/12/2012")).toBe(false);
  });
  
  // Test for wrong number of digits in the month
  test("isValidDateString: wrong number of digits in month", () => {
    expect(isValidDateString("12/1/2012")).toBe(false);
  });
  
  // Test for wrong number of digits in the year
  test("isValidDateString: wrong number of digits in year", () => {
    expect(isValidDateString("12/12/201")).toBe(false);
  });
  
  // Test for day outside of month's number of day's
  test("isValidDateString: day greater than permitted", () => {
    expect(isValidDateString("32/81/2812")).toBe(false);
  });
  
  // Test for month greater than 12
  test("isValidDateString: month greater than 12", () => {
    expect(isValidDateString("12/13/2012")).toBe(false);
  });
  
  // Test for day <= 0
  test("isValidDateString: day <= 0", () => {
    expect(isValidDateString("00/12/2012")).toBe(false);
  });
  
  // Test for month <= 0
  test("isValidDateString: month <=0", () => {
    expect(isValidDateString("12/00/2012")).toBe(false);
  });
  
  // Test for year <= 0
  test("isValidDateString: year <= 0", () => {
    expect(isValidDateString("12/12/0000")).toBe(false);
  });
  
  // Test for valid date
  test("isValidDateString: valid date", () => {
    expect(isValidDateString("12/12/2012")).toBe(true);
  });

  ///// PUT YOUR TESTS FOR generateFlightId HERE /////
  //Test the first two characters of the ID should be the first two letters of the airline name provided
  test("generateFlightId: first two letters of airline", () => {
    expect(generateFlightId("Qantas").substring(0, 2)).toBe("QA"); //Qantas starts with Q and A
    expect(generateFlightId("Jetstar").substring(0, 2)).toBe("JE"); //Jetstar starts with J and E
    expect(generateFlightId("Virgin").substring(0, 2)).toBe("VI"); //Virgin starts with V and I
  });


  // Test uppercase
  test("generateFlightId: is uppercase", () => {
    expect(generateFlightId("Qantas").substring(0, 2)).toBe("QA");
    expect(generateFlightId("Qantas").substring(0,2)).toMatch(/^[A-Z]{2}/); // Check if the first two characters are uppercase letters
    expect(generateFlightId("Jetstar").substring(0, 2)).toMatch(/^[A-Z]{2}/); // Check if the first two characters are uppercase letters
    expect(generateFlightId("Virgin").substring(0, 2)).toMatch(/^[A-Z]{2}/); // Check if the first two characters are uppercase letters
  });

  // Test for length
  test("generateFlightId: length is 5", () => {
    expect(generateFlightId("Qantas").length).toBe(5);
    expect(generateFlightId("Jetstar").length).toBe(5);
    expect(generateFlightId("Virgin").length).toBe(5);
  });

  // Test for blank string
  test("generateFlightId: blank string", () => {
    expect(generateFlightId("")).toBe(undefined);
    expect(generateFlightId(" ")).toBe(undefined); //single space
    expect(generateFlightId("\n\t")).toBe(undefined);// next line and tab characters
  });

  // Test for string of whitespace
  test("generateFlightId: whitespace string", () => {
    expect(generateFlightId("   \n")).toBe(undefined);
    expect(generateFlightId("  ")).toBe(undefined);
    //expect(generateFlightId("A")).toBe(undefined);
  });