import { defineType, defineField, defineArrayMember } from "sanity";

// Must match the keys in src/content/socialRegistry.jsx.
const PLATFORMS = [
  { title: "Facebook", value: "facebook" },
  { title: "Instagram", value: "instagram" },
  { title: "YouTube", value: "youtube" },
  { title: "LinkedIn", value: "linkedin" },
  { title: "X (Twitter)", value: "x" },
  { title: "WhatsApp", value: "whatsapp" },
  { title: "Other website", value: "website" },
];

// Only real pages — a free-text field here would let a broken link ship.
const PAGES = [
  { title: "Home", value: "/" },
  { title: "About", value: "/about" },
  { title: "Infrastructure", value: "/infrastructure" },
  { title: "Academics", value: "/academics" },
  { title: "Admissions", value: "/admissions" },
  { title: "News & Events", value: "/news" },
  { title: "Contact Us", value: "/contactus" },
  { title: "Privacy Policy", value: "/privacy" },
];

const linkList = (name, title, description) =>
  defineField({
    name,
    title,
    type: "array",
    group: "links",
    description,
    of: [
      defineArrayMember({
        type: "object",
        fields: [
          defineField({
            name: "title",
            title: "Label",
            type: "string",
            validation: (R) => R.required().max(28),
          }),
          defineField({
            name: "link",
            title: "Goes to",
            type: "string",
            options: { list: PAGES },
            validation: (R) => R.required(),
          }),
        ],
        preview: { select: { title: "title", subtitle: "link" } },
      }),
    ],
    validation: (R) => R.max(6),
  });

export default defineType({
  name: "footer",
  title: "Footer & Contact Details",
  type: "document",

  groups: [
    { name: "contact", title: "Contact details", default: true },
    { name: "social", title: "Social links" },
    { name: "links", title: "Footer link columns" },
  ],

  fields: [
    defineField({
      name: "phone",
      title: "Phone number",
      type: "string",
      group: "contact",
      description:
        "Shown in the footer and on the Contact page, and used by the call button.",
      validation: (R) => R.required().max(30),
    }),
    defineField({
      name: "email",
      title: "Email address",
      type: "string",
      group: "contact",
      description: "Where enquiry form submissions are sent.",
      validation: (R) => R.required().email(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
      group: "contact",
      validation: (R) => R.required().max(220),
    }),
    defineField({
      name: "copyrightName",
      title: "Name in the copyright line",
      type: "string",
      group: "contact",
      description: "The year is added automatically.",
      validation: (R) => R.required().max(60),
    }),

    defineField({
      name: "socials",
      title: "Social links",
      type: "array",
      group: "social",
      description:
        "Pick the platform and paste the address of your page. Drag to reorder. Remove one to hide it from the site.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: { list: PLATFORMS },
              validation: (R) => R.required(),
            }),
            defineField({
              name: "url",
              title: "Address",
              type: "url",
              description: "The full address, starting with https://",
              validation: (R) => R.required().uri({ scheme: ["http", "https"] }),
            }),
          ],
          preview: { select: { title: "platform", subtitle: "url" } },
        }),
      ],
      validation: (R) => R.max(7),
    }),

    linkList("usefulLinks", "First column", 'Headed "Useful Links" on the site.'),
    linkList("updateLinks", "Second column", 'Headed "Updates" on the site.'),
    linkList("legalLinks", "Third column", 'Headed "Legal" on the site.'),
  ],

  preview: { prepare: () => ({ title: "Footer & Contact Details" }) },
});
