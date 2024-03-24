import { nullable } from "../../src/primitives";
import { string, number, boolean } from "../../src/primitives";
import { parse } from "../../src/validate";

describe("string schema validation", () => {
  const stringSchema = string();

  test("valid string", () => {
    const input = "Hello, World!";

    const result = parse(input, stringSchema);

    expect(result.success).toBeTruthy();
    expect(result.data).toBe(input);
  });

  test("throw on invalid string", () => {
    expect(() => parse(12, stringSchema)).toThrow();
  });
});

describe("number schema validation", () => {
  const numberSchema = number();

  test("valid number", () => {
    const input = 12;
    const result = parse(input, numberSchema);

    expect(result.success).toBeTruthy();
    expect(result.data).toBe(input);
  });

  test("throw on invalid number", () => {
    expect(() => parse("Hello", numberSchema)).toThrow();
  });
});

describe("boolean schema validation", () => {
  const booleanSchema = boolean();

  test("valid boolean", () => {
    const input = true;
    const result = parse(input, booleanSchema);

    expect(result.success).toBeTruthy();
    expect(result.data).toBe(input);
  });

  test("throw on invalid boolean", () => {
    expect(() => parse("Hello", booleanSchema)).toThrow();
  });
});

describe("nullable schema validation", () => {
  const nullableSchema = nullable();

  test("valid nullable", () => {
    const input = true;
    const result = parse(input, nullableSchema);

    expect(result.success).toBeTruthy();
    expect(result.data).toBe(input);
  });

  test("throw on invalid nullable", () => {
    expect(() => parse(undefined, nullableSchema)).toThrow();
  });
});
