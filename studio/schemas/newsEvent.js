import { defineField, defineType, defineArrayMember } from "sanity";

/**
 * News & Events.
 *
 * One document per event. Whether an event shows under "Upcoming" or in the
 * "Latest News" archive is decided by its date, in the visitor's browser —
 * so a passed event moves itself across without anyone editing it.
 *
 * Copy limits come from the real card sizes in the design: the cards have
 * fixed pixel heights and no line-clamp, so over-long text overflows rather
 * than truncating. Keep the limits until that is fixed.
 */
export default defineType({
  name: "newsEvent",
  title: "News & Events",
  type: "document",

  groups: [
    { name: "main", title: "Event", default: true },
    { name: "detail", title: "Full description" },
    { name: "gallery", title: "Photo gallery" },
  ],

  fields: [
    defineField({
      name: "name",
      title: "Heading",
      type: "string",
      group: "main",
      description: 'What the event was called, e.g. "Annual Sports Day 2026".',
      validation: (Rule) =>
        Rule.required().max(60).warning("Long headings wrap awkwardly on the news cards."),
    }),
    defineField({
      name: "subheading",
      title: "Subheading (optional)",
      type: "string",
      group: "main",
      description: "A short line under the heading on the event's own page.",
      validation: (Rule) => Rule.max(90),
    }),
    defineField({
      name: "slug",
      title: "Web address",
      type: "slug",
      group: "main",
      description: "Generated from the heading. Click Generate — you rarely need to change this.",
      options: { source: "name", maxLength: 60 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date of the event",
      type: "date",
      group: "main",
      description:
        "Today or later shows under Upcoming Events. Earlier moves into Latest News automatically — you never have to change it back.",
      options: { dateFormat: "DD-MM-YYYY" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "time",
      title: "Time (optional)",
      type: "string",
      group: "main",
      description:
        'Only shown while the event is still upcoming, e.g. "8:00 AM - 9:00 AM". Leave empty for past events.',
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: "image",
      title: "Cover photo",
      type: "image",
      group: "main",
      description:
        "The photo used on the news cards and the home page. Landscape looks best. Click the crop icon to choose what stays visible on small screens.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Photo description",
          type: "string",
          description:
            "Describe the photo in a few words, for visually impaired visitors and for Google.",
          validation: (Rule) => Rule.required().max(120),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "desc",
      title: "Short summary",
      type: "text",
      rows: 3,
      group: "main",
      description: "One or two sentences. This is the text on the news card.",
      validation: (Rule) =>
        Rule.required().max(200).warning("Over ~200 characters this overflows the news card."),
    }),

    defineField({
      name: "body",
      title: "Full description (optional)",
      type: "array",
      group: "detail",
      description:
        "The full write-up, shown on the event's own page. Leave empty if the short summary is enough.",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [{ title: "Bullets", value: "bullet" }],
          marks: { decorators: [{ title: "Bold", value: "strong" }], annotations: [] },
        }),
      ],
    }),
    defineField({
      name: "link",
      title: "External link (optional)",
      type: "url",
      group: "detail",
      description:
        "A Facebook album, a news article or a PDF. Shown as a link on the event's page.",
    }),

    defineField({
      name: "gallery",
      title: "Photo gallery (optional)",
      type: "array",
      group: "gallery",
      description:
        "Extra photos, shown as a slideshow on the event's own page. Drag the handle to reorder. The cover photo is always the first slide.",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Photo description",
              type: "string",
              validation: (Rule) => Rule.required().max(120),
            }),
            defineField({
              name: "caption",
              title: "Caption (optional)",
              type: "string",
              description: "Shown under the photo in the slideshow.",
              validation: (Rule) => Rule.max(120),
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.max(30),
    }),
  ],

  orderings: [
    { title: "Date, newest first", name: "dateDesc", by: [{ field: "date", direction: "desc" }] },
    { title: "Date, oldest first", name: "dateAsc", by: [{ field: "date", direction: "asc" }] },
  ],

  preview: {
    select: { title: "name", subtitle: "date", media: "image" },
  },
});
