const { object, string } = require("zod");

const validateRequest = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
      cookies: req.cookies,
    });

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateRequest;
