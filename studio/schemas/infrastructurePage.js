import { defineType, defineField, defineArrayMember } from "sanity";

const named = (nameLabel, descMax) =>
  defineArrayMember({
    type: "object",
    fields: [
      defineField({
        name: "name",
        title: nameLabel,
        type: "string",
        validation: (Rule) => Rule.required().max(45),
      }),
      defineField({
        name: "desc",
        title: "Description",
        type: "text",
        rows: 4,
        validation: (Rule) => Rule.required().max(descMax),
      }),
    ],
    preview: { select: { title: "name", subtitle: "desc" } },
  });

export default defineType({
  name: "infrastructurePage",
  title: "Infrastructure Page",
  type: "document",

  groups: [
    { name: "intro", title: "Top of page", default: true },
    { name: "labs", title: "Laboratories" },
    { name: "common", title: "Common facilities" },
    { name: "sports", title: "Sports" },
    { name: "classrooms", title: "Classrooms" },
  ],

  fields: [
    defineField({
      name: "introHeading", title: "Page heading", type: "string", group: "intro",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "introBody", title: "Introduction", type: "text", rows: 3, group: "intro",
      validation: (Rule) => Rule.required().max(400),
    }),

    defineField({
      name: "labsHeading", title: "Section heading", type: "string", group: "labs",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "laboratories", title: "Laboratories", type: "array", group: "labs",
      description: "Photos are part of the design and are not editable here.",
      of: [named("Lab name", 700)],
      validation: (Rule) => Rule.required().min(1).max(6),
    }),

    defineField({
      name: "commonFacilitiesHeading", title: "Section heading", type: "string", group: "common",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "commonFacilities", title: "Facilities", type: "array", group: "common",
      description: "Card colours cycle automatically through the school's palette.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", validation: (R) => R.required().max(30) }),
            defineField({ name: "desc", title: "Description", type: "text", rows: 5, validation: (R) => R.required().max(900) }),
          ],
          preview: { select: { title: "title", subtitle: "desc" } },
        }),
      ],
      validation: (Rule) => Rule.required().min(1).max(6),
    }),

    defineField({
      name: "sportsHeading", title: "Section heading", type: "string", group: "sports",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "sports", title: "Sports facilities", type: "array", group: "sports",
      of: [named("Facility name", 600)],
      validation: (Rule) => Rule.required().min(1).max(6),
    }),

    defineField({
      name: "classroomsHeading", title: "Section heading", type: "string", group: "classrooms",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "classroomsIntro", title: "Introduction", type: "text", rows: 4, group: "classrooms",
      validation: (Rule) => Rule.required().max(700),
    }),
    defineField({
      name: "classroomFeatures", title: "Features", type: "array", group: "classrooms",
      description: "Shown as a bulleted list. One short line each.",
      of: [defineArrayMember({ type: "string", validation: (R) => R.max(120) })],
      validation: (Rule) => Rule.required().min(1).max(8),
    }),
  ],

  preview: { prepare: () => ({ title: "Infrastructure Page" }) },
});
