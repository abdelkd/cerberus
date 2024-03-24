type AllowedPrimitives = "string" | "number" | "boolean" | "null";

type ErrorTypes = "mismatch" | "null" | "undefined";
type ErrorShape = {
  success: false;
  type: ErrorTypes;
  message: string;
};

type ResultShape<T> = {
  success: true;
  data: T;
};

type SchemaShape = {
  type: AllowedPrimitives;
  validate: <T>(input: T) => ErrorShape | ResultShape<T>;
};
