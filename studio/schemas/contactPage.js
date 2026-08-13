import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  __experimental_actions: ["update", "publish"],

  groups: [
    { name: "intro", title: "Top of page", default: true },
    { name: "details", title: "Contact details" },
    { name: "form", title: "Enquiry form" },
  ],

  fields: [
    defineField({
      name: "introBody",
      title: "Introduction",
      type: "text",
      rows: 3,
      group: "intro",
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "imageHeading",
      title: "Text over the photo",
      type: "string",
      group: "intro",
      validation: (Rule) => Rule.required().max(45),
    }),
    defineField({
      name: "imageCtaLabel",
      title: "Button under the photo",
      type: "string",
      group: "intro",
      initialValue: "Contact Us",
      validation: (Rule) => Rule.required().max(20),
    }),

    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
      group: "details",
      description: "Shown in the contact card. Phone and email come from the school's settings.",
      validation: (Rule) => Rule.required().max(220),
    }),
    defineField({
      name: "officeHours",
      title: "Office hours",
      type: "string",
      group: "details",
      description: 'For example "9am - 6 pm" or "Mon-Sat, 9am - 6pm".',
      validation: (Rule) => Rule.required().max(60),
    }),

    defineField({
      name: "formHeading",
      title: "Form heading",
      type: "string",
      group: "form",
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: "formSubheading",
      title: "Form subheading",
      type: "string",
      group: "form",
      description: "The large orange line under the heading.",
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: "formIntro",
      title: "Text above the form",
      type: "text",
      rows: 3,
      group: "form",
      validation: (Rule) => Rule.required().max(320),
    }),
    defineField({
      name: "programs",
      title: "Programmes in the dropdown",
      type: "array",
      of: [{ type: "string" }],
      group: "form",
      description:
        "What a parent can choose as their programme of interest. Keep these matching what the school actually offers.",
      validation: (Rule) => Rule.required().min(1).max(12),
    }),
    defineField({
      name: "successMessage",
      title: "Message after a successful submission",
      type: "text",
      rows: 2,
      group: "form",
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "errorMessage",
      title: "Message if sending fails",
      type: "text",
      rows: 2,
      group: "form",
      description:
        "Always keep the phone number and email here — it is the parent's way through if the form breaks.",
      validation: (Rule) => Rule.required().max(300),
    }),
  ],

  preview: { prepare: () => ({ title: "Contact Page" }) },
});
