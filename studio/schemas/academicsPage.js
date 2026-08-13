import { defineType, defineField, defineArrayMember } from "sanity";

const ICON_OPTIONS = [
  { title: "Sports (lightning)", value: "sports" },
  { title: "Art (brush)", value: "art" },
  { title: "Music (note)", value: "music" },
  { title: "Language (puzzle)", value: "language" },
  { title: "Science (flask)", value: "science" },
  { title: "Sparkle", value: "sparkle" },
  { title: "School", value: "school" },
  { title: "Trophy", value: "trophy" },
  { title: "Technology", value: "code" },
  { title: "Heritage (scroll)", value: "heritage" },
  { title: "Flare", value: "flare" },
  { title: "Heart", value: "heart" },
];

const iconField = defineField({
  name: "icon",
  title: "Icon",
  type: "string",
  options: { list: ICON_OPTIONS },
  validation: (Rule) => Rule.required(),
});

export default defineType({
  name: "academicsPage",
  title: "Academics Page",
  type: "document",
  __experimental_actions: ["update", "publish"],

  groups: [
    { name: "intro", title: "Top of page", default: true },
    { name: "extracurriculars", title: "Extracurriculars" },
    { name: "electives", title: "Electives & clubs" },
    { name: "approach", title: "Our approach" },
  ],

  fields: [
    defineField({
      name: "introHeading",
      title: "Page heading",
      type: "string",
      group: "intro",
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: "introSubheading",
      title: "Subheading",
      type: "string",
      group: "intro",
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: "introBody",
      title: "Introduction",
      type: "array",
      group: "intro",
      description:
        "Select any words and press Bold to highlight them in black, the way the current page does.",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [{ title: "Bold", value: "strong" }],
            annotations: [],
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "extracurricularsHeading",
      title: "Section heading",
      type: "string",
      group: "extracurriculars",
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: "extracurricularsSubheading",
      title: "Section subheading",
      type: "string",
      group: "extracurriculars",
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: "extracurricularsIntro",
      title: "Section introduction",
      type: "text",
      rows: 3,
      group: "extracurriculars",
      validation: (Rule) => Rule.required().max(600),
    }),
    defineField({
      name: "extracurriculars",
      title: "Activities",
      type: "array",
      group: "extracurriculars",
      description: "Card colours are set by the design and cycle automatically.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            iconField,
            defineField({
              name: "title",
              type: "string",
              validation: (Rule) => Rule.required().max(40),
            }),
            defineField({
              name: "desc",
              title: "Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required().max(400),
            }),
          ],
          preview: { select: { title: "title", subtitle: "desc" } },
        }),
      ],
      validation: (Rule) => Rule.required().min(1).max(12),
    }),

    defineField({
      name: "electivesHeading",
      title: "Section heading",
      type: "string",
      group: "electives",
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: "electivesSubheading",
      title: "Section subheading",
      type: "string",
      group: "electives",
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: "electivesTagline",
      title: "Tagline",
      type: "string",
      group: "electives",
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: "electivesIntro",
      title: "Section introduction",
      type: "text",
      rows: 3,
      group: "electives",
      validation: (Rule) => Rule.required().max(600),
    }),
    defineField({
      name: "electives",
      title: "Electives & clubs",
      type: "array",
      group: "electives",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
              validation: (Rule) => Rule.required().max(40),
            }),
            defineField({
              name: "subtitle",
              type: "string",
              validation: (Rule) => Rule.required().max(60),
            }),
            defineField({
              name: "desc",
              title: "Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required().max(400),
            }),
          ],
          preview: { select: { title: "title", subtitle: "subtitle" } },
        }),
      ],
      validation: (Rule) => Rule.required().min(1).max(12),
    }),

    defineField({
      name: "approachHeading",
      title: "Section heading",
      type: "string",
      group: "approach",
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: "approachSubheading",
      title: "Section subheading",
      type: "string",
      group: "approach",
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: "approachIntro",
      title: "Section introduction",
      type: "text",
      rows: 3,
      group: "approach",
      validation: (Rule) => Rule.required().max(600),
    }),
    defineField({
      name: "approachFeatures",
      title: "Features",
      type: "array",
      group: "approach",
      description:
        "Laid out in three columns of two. Keep the count at six unless the layout is changed.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            iconField,
            defineField({
              name: "title",
              type: "string",
              validation: (Rule) => Rule.required().max(40),
            }),
            defineField({
              name: "desc",
              title: "Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required().max(300),
            }),
          ],
          preview: { select: { title: "title", subtitle: "desc" } },
        }),
      ],
      validation: (Rule) => Rule.required().length(6),
    }),
  ],

  preview: { prepare: () => ({ title: "Academics Page" }) },
});
