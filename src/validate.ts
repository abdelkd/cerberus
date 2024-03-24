import { TypeMismatchError } from "./errors";

const parse = <T>(input: T, schema: SchemaShape) => {
  const validatedSchema = schema.validate(input);

  if (validatedSchema.success === false) {
    if (validatedSchema.type === "mismatch") {
      throw new TypeMismatchError({ expected: schema.type, got: typeof input });
    }

    throw new Error(validatedSchema.message);
  }

  return {
    data: input,
    success: true,
  };
};

const safeParse = <T>(input: T, schema: SchemaShape) => {
  const validatedSchema = schema.validate(input);

  if (validatedSchema.success === false) {
    return {
      success: false,
      error: {
        type: validatedSchema.type,
        message: validatedSchema.message,
      },
    };
  }

  return {
    data: input,
    success: true,
  };
};

export { parse, safeParse };
