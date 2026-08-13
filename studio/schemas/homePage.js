import { defineType, defineField, defineArrayMember } from "sanity";

const obj = (fields, preview) =>
  defineArrayMember({ type: "object", fields, preview });
const str = (name, max, title) =>
  defineField({ name, title, type: "string", validation: (R) => R.required().max(max) });
const txt = (name, max, rows, title) =>
  defineField({ name, title, type: "text", rows, validation: (R) => R.required().max(max) });

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  __experimental_actions: ["update", "publish"],

  groups: [
    { name: "hero", title: "Banner slideshow", default: true },
    { name: "welcome", title: "Welcome" },
    { name: "facilities", title: "Facilities strip" },
    { name: "expertise", title: "Our expertise" },
    { name: "stats", title: "Numbers" },
    { name: "feedback", title: "Testimonials" },
  ],

  fields: [
    defineField({
      name: "heroSlides",
      title: "Banner slideshow",
      type: "array",
      group: "hero",
      description:
        "The big slideshow at the top of the home page. Drag the handle on the left of a slide to change the order. Slides change every 3 seconds.",
      of: [
        obj(
          [
            defineField({
              name: "image",
              title: "Photo",
              type: "image",
              options: { hotspot: true },
              description:
                "Use a wide, landscape photo. Click the crop icon after uploading to choose which part stays visible.",
              validation: (R) => R.required(),
            }),
            defineField({
              name: "mobileImage",
              title: "Photo for phones (optional)",
              type: "image",
              options: { hotspot: true },
              description:
                "Only needed if the wide photo looks wrong on a phone. Leave empty to use the same photo.",
            }),
            defineField({
              name: "alt",
              title: "Describe the photo",
              type: "string",
              description:
                "For visually impaired visitors and for Google. For example: Students at the science fair.",
              validation: (R) => R.required().max(120),
            }),
            defineField({
              name: "caption",
              title: "Text over the photo (optional)",
              type: "string",
              description: "Leave empty for no text.",
              validation: (R) => R.max(60),
            }),
          ],
          { select: { title: "alt", subtitle: "caption", media: "image" } },
        ),
      ],
      validation: (R) => R.required().min(1).max(8),
    }),

    defineField({ name: "bannerText", title: "Scrolling banner", type: "string", group: "welcome",
      validation: (R) => R.required().max(80) }),
    defineField({ name: "welcomeHeading", title: "Heading", type: "text", rows: 2, group: "welcome",
      validation: (R) => R.required().max(120) }),
    defineField({ name: "welcomeTagline", title: "Tagline", type: "string", group: "welcome",
      description: "Shown on phones only.", validation: (R) => R.required().max(120) }),
    defineField({ name: "welcomeBody", title: "Introduction", type: "text", rows: 8, group: "welcome",
      validation: (R) => R.required().max(1200) }),

    defineField({ name: "facilities", title: "Facilities", type: "array", group: "facilities",
      description: "Icons are part of the design and cycle in order.",
      of: [obj([str("name", 30)], { select: { title: "name" } })],
      validation: (R) => R.required().min(1).max(8) }),

    defineField({ name: "expertiseHeading", title: "Section heading", type: "string", group: "expertise",
      validation: (R) => R.required().max(50) }),
    defineField({ name: "expertise", title: "Cards", type: "array", group: "expertise",
      of: [obj([
        str("heading", 40),
        defineField({ name: "paragraph", type: "text", rows: 6 }),
        defineField({ name: "listItems", title: "Bulleted list", type: "array", of: [{ type: "string" }] }),
        defineField({ name: "subItems", title: "Sub-sections", type: "array",
          of: [obj([str("subHeading", 40), txt("paragraph", 400, 4)], { select: { title: "subHeading" } })] }),
        defineField({ name: "link", title: "Links to", type: "string",
          description: 'A path such as /about, or # for no link.' }),
      ], { select: { title: "heading" } })],
      validation: (R) => R.required().length(3) }),

    defineField({ name: "statsHeading", title: "Section heading", type: "string", group: "stats",
      validation: (R) => R.required().max(50) }),
    defineField({ name: "stats", title: "Numbers", type: "array", group: "stats",
      of: [obj([str("value", 10), str("label", 60)], { select: { title: "value", subtitle: "label" } })],
      validation: (R) => R.required().length(3) }),

    defineField({ name: "feedbackHeading", title: "Section heading", type: "text", rows: 2, group: "feedback",
      validation: (R) => R.required().max(100) }),
    defineField({ name: "reviews", title: "Testimonials", type: "array", group: "feedback",
      description: "Photos are part of the design.",
      of: [obj([
        str("name", 40), str("profession", 60),
        txt("reviewDesc", 700, 6, "Quote"),
      ], { select: { title: "name", subtitle: "profession" } })],
      validation: (R) => R.required().min(1).max(8) }),
  ],

  preview: { prepare: () => ({ title: "Home Page" }) },
});
