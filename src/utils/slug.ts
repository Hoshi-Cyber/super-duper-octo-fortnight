import slugify from "slugify";

export const slug = (input: string) =>
  slugify(String(input), { lower: true, strict: true, trim: true });
