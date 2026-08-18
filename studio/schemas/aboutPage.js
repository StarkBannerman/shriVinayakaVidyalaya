import { defineType, defineField, defineArrayMember } from "sanity";

const txt = (name, title, group, max, rows = 4) =>
  defineField({
    name, title, group, type: rows === 1 ? "string" : "text",
    ...(rows > 1 ? { rows } : {}),
    validation: (Rule) => Rule.required().max(max),
  });

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",

  groups: [
    { name: "intro", title: "Top of page", default: true },
    { name: "story", title: "Our story" },
    { name: "mission", title: "Mission & vision" },
    { name: "why", title: "Why this school" },
  ],

  fields: [
    txt("introHeading", "Page heading", "intro", 40, 1),
    txt("introQuote", "Quote", "intro", 300, 3),
    txt("introBody", "Introduction", "intro", 500, 4),

    txt("historyHeading", "Section heading", "story", 40, 1),
    txt("historyBody", "Our story", "story", 900, 8),

    txt("missionHeading", "Mission heading", "mission", 40, 1),
    txt("missionBody", "Mission", "mission", 600, 5),
    txt("visionHeading", "Vision heading", "mission", 40, 1),
    txt("visionBody", "Vision", "mission", 500, 5),

    txt("whyHeading", "Section heading", "why", 60, 1),
    defineField({
      name: "whyPoints",
      title: "Reasons",
      type: "array",
      group: "why",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", validation: (R) => R.required().max(40) }),
            defineField({ name: "desc", title: "Description", type: "text", rows: 4, validation: (R) => R.required().max(600) }),
          ],
          preview: { select: { title: "title", subtitle: "desc" } },
        }),
      ],
      validation: (Rule) => Rule.required().length(3),
    }),
  ],

  preview: { prepare: () => ({ title: "About Page" }) },
});
