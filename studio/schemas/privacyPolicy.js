import { defineType, defineField, defineArrayMember } from "sanity";

/**
 * The privacy notice.
 *
 * This is a legal document. It must keep describing what the website actually
 * does — the enquiry form collects a parent's name, email and phone plus a
 * prospective student's name and age, and delivers them via EmailJS. If the
 * form changes, this has to change with it. Have any rewrite checked by the
 * school's legal advisor before publishing.
 */
export default defineType({
  name: "privacyPolicy",
  title: "Privacy Policy",
  type: "document",
  __experimental_actions: ["update", "publish"],

  fields: [
    defineField({
      name: "heading",
      title: "Page heading",
      type: "string",
      initialValue: "Privacy Policy",
      validation: (R) => R.required().max(40),
    }),
    defineField({
      name: "lastUpdated",
      title: "Last updated",
      type: "date",
      description:
        "Change this whenever you edit the text below — visitors and regulators rely on it.",
      options: { dateFormat: "DD-MM-YYYY" },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      description:
        "Each section is a heading and its text. Drag to reorder. This describes how you handle people's personal information — have changes checked by your legal advisor before publishing.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "heading",
              title: "Section heading",
              type: "string",
              validation: (R) => R.required().max(60),
            }),
            defineField({
              name: "body",
              title: "Text",
              type: "array",
              of: [
                defineArrayMember({
                  type: "block",
                  styles: [{ title: "Normal", value: "normal" }],
                  lists: [{ title: "Bullets", value: "bullet" }],
                  marks: {
                    decorators: [{ title: "Bold", value: "strong" }],
                    annotations: [
                      {
                        name: "link",
                        type: "object",
                        title: "Link",
                        fields: [
                          { name: "href", type: "url", title: "Address" },
                        ],
                      },
                    ],
                  },
                }),
              ],
              validation: (R) => R.required(),
            }),
          ],
          preview: { select: { title: "heading" } },
        }),
      ],
      validation: (R) => R.required().min(1).max(12),
    }),
  ],

  preview: { prepare: () => ({ title: "Privacy Policy" }) },
});
