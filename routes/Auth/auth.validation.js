const { object, string } = require("zod");

const signupZodSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    email: string({
      required_error: "Email is required",
    }),
    password: string({
      required_error: "Password is required", // Fixed this message
    }),
  }),
});
const loginZodSchema = object({
  body: object({
    email: string({
      required_error: "Email is required",
    }),
    password: string({
      required_error: "Password is required", // Fixed this message
    }),
  }),
});

const AuthValidation = {
  signupZodSchema,
  loginZodSchema,
};

module.exports = AuthValidation;
