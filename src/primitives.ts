// string, number, boolean, nullable

type CreatePrimitiveArgs = { type: AllowedPrimitives };

const createPrimitive = ({ type }: CreatePrimitiveArgs): SchemaShape => {
  return {
    type,
    validate: (input) => {
      if (typeof input !== type) {
        return {
          success: false,
          type: "mismatch",
          message: `value of type ${typeof input} doesn't match type ${type}`,
        };
      }

      return {
        success: true,
        data: input,
      };
    },
  };
};

const string = () => {
  return createPrimitive({ type: "string" });
};

const number = () => {
  return createPrimitive({ type: "number" });
};

const boolean = () => {
  return createPrimitive({ type: "boolean" });
};

const nullable = (): SchemaShape => {
  return {
    type: "null" as const,
    validate: <T>(input: T) => {
      if (input === undefined) {
        return {
          success: false,
          type: "null",
          message: `value of type ${typeof input} cannot be undefined`,
        };
      }

      return {
        success: true,
        data: input,
      };
    },
  };
};

export { string, number, boolean, nullable };
