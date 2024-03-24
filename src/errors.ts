class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

class TypeMismatchError extends Error {
  constructor({ expected, got }: { expected: string; got: string }) {
    const message = `value of type ${expected} cannot be ${got}`;
    super(message);
    this.name = "TypeMismatchError";
  }
}

class RangeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RangeError";
  }
}

class RegexError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RegexError";
  }
}

class RequiredError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RegexError";
  }
}

export {
  ValidationError,
  TypeMismatchError,
  RangeError,
  RegexError,
  RequiredError,
};
