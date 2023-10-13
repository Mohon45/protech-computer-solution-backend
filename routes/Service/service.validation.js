const { z } = require("zod");

const createServiceZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "title is required",
    }),
    category: z.enum(["repair", "software", "dataRecovery", "automation"], {
      required_error:
        "Category is required and must be one of: repair, software, dataRecovery, automation",
    }),
    image: z.string({
      required_error: "image is required",
    }),
    location: z.string({
      required_error: "location is required",
    }),
    description: z.string({
      required_error: "description is required",
    }),
    minPrice: z.number({
      required_error: "minPrice is required",
    }),
    maxPrice: z.number({
      required_error: "maxPrice is required",
    }),
  }),
});

const ServiceValidation = {
  createServiceZodSchema,
};

module.exports = ServiceValidation;
