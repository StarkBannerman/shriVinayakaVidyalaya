import { defineField, defineType } from "sanity";

/**
 * News & Events.
 *
 * Field names deliberately mirror the shape the site already uses in
 * src/content/news.js, so no component has to change when this becomes
 * the source of truth.
 *
 * Copy limits are set from the real card sizes in the design — the cards
 * have fixed pixel heights and no line-clamp, so over-long text overflows
 * rather than truncating. Keep the limits until that is fixed.
 */
export default defineType({
  name: "newsEvent",
  title: "News & Events",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Title",
      type: "string",
      description: 'What the event was called, e.g. "Annual Sports Day 2026".',
      validation: (Rule) => Rule.required().max(60).warning("Long titles wrap awkwardly on the news cards."),
    }),
    defineField({
      name: "slug",
      title: "Web address",
      type: "slug",
      description: "Generated from the title. Click Generate — you rarely need to change this.",
      options: { source: "name", maxLength: 60 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date of the event",
      type: "date",
      description: "Newest events appear first on the website.",
      options: { dateFormat: "DD-MM-YYYY" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      description:
        "One photo from the event. Landscape photos look best. Drag the crop area to choose what stays visible on small screens.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Photo description",
          type: "string",
          description:
            "Describe the photo in a few words, for visually impaired visitors and for Google. e.g. 'Students performing at the Independence Day flag hoisting'.",
          validation: (Rule) => Rule.required().max(120),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "desc",
      title: "Short description",
      type: "text",
      rows: 3,
      description: "One or two sentences. Shown under the title on the News page.",
      validation: (Rule) =>
        Rule.required()
          .max(200)
          .warning("Over ~200 characters this will overflow the news card."),
    }),
    defineField({
      name: "link",
      title: "Read more link (optional)",
      type: "url",
      description:
        "Leave empty unless there is a full article or photo album to link to.",
    }),
  ],
  orderings: [
    {
      title: "Date, newest first",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "date", media: "image" },
  },
});
