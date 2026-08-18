import { defineType, defineField } from "sanity";

// The /admissions page. One document, one section per group.
// Field names mirror what a visitor sees on the page, not the component names.
export default defineType({
  name: "admissionsPage",
  title: "Admissions Page",
  type: "document",

  groups: [
    { name: "intro", title: "Top of page", default: true },
    { name: "apply", title: "Apply banner" },
    { name: "timeline", title: "Admission steps" },
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
      name: "introBody",
      title: "Introduction",
      type: "text",
      rows: 3,
      group: "intro",
      description:
        "The paragraph under the heading. Keep it under about 45 words or it pushes the banner down the page.",
      validation: (Rule) => Rule.required().max(350),
    }),

    defineField({
      name: "applyHeading",
      title: "Banner heading",
      type: "string",
      group: "apply",
      description: "Shown in capitals over the school photo.",
      validation: (Rule) => Rule.required().max(30),
    }),
    defineField({
      name: "applyBody",
      title: "Banner text",
      type: "text",
      rows: 4,
      group: "apply",
      validation: (Rule) => Rule.required().max(400),
    }),
    defineField({
      name: "applyCtaLabel",
      title: "Button label",
      type: "string",
      group: "apply",
      initialValue: "Apply Now",
      validation: (Rule) => Rule.required().max(20),
    }),
    defineField({
      name: "applyCtaMode",
      title: "What the button does",
      type: "string",
      group: "apply",
      options: {
        list: [
          { title: "Go to the Contact Us form", value: "form" },
          { title: "Start a phone call", value: "phone" },
          { title: "Open an email", value: "email" },
          { title: "Open another website", value: "url" },
          { title: "Nothing (hide the button)", value: "none" },
        ],
        layout: "radio",
      },
      initialValue: "form",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "applyCtaUrl",
      title: "Website address",
      type: "url",
      group: "apply",
      description: 'Only used when the button is set to "Open another website".',
      hidden: ({ parent }) => parent?.applyCtaMode !== "url",
    }),

    defineField({
      name: "timeline",
      title: "Admission steps",
      type: "array",
      group: "timeline",
      description:
        "Shown as a numbered timeline. The numbers are added automatically — do not type them.",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Step name",
              type: "string",
              validation: (Rule) => Rule.required().max(30),
            }),
            defineField({
              name: "desc",
              title: "What happens at this step",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required().max(260),
            }),
          ],
          preview: { select: { title: "name", subtitle: "desc" } },
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(8),
    }),
  ],

  preview: {
    prepare: () => ({ title: "Admissions Page" }),
  },
});
