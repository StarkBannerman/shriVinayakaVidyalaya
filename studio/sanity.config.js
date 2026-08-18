import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

// One document each — created once, edited forever, never deleted.
const SINGLETONS = new Set([
  "homePage",
  "aboutPage",
  "academicsPage",
  "infrastructurePage",
  "admissionsPage",
  "contactPage",
  "footer",
  "privacyPolicy",
]);

export default defineConfig({
  name: "default",
  title: "Shri Vinayaka Vidyalaya",

  projectId: "bj87pb9z",
  dataset: "production",

  plugins: [
    structureTool({
      // Name things after the parts of the website staff recognise,
      // not after abstract document types.
      structure: (S) =>
        S.list()
          .title("Website")
          .items([
            // Pages — one entry per tab of the website.
            S.listItem()
              .title("Home Page")
              .id("homePage")
              .child(
                S.document()
                  .schemaType("homePage")
                  .documentId("homePage")
                  .title("Home Page"),
              ),

            S.listItem()
              .title("About Page")
              .id("aboutPage")
              .child(
                S.document()
                  .schemaType("aboutPage")
                  .documentId("aboutPage")
                  .title("About Page"),
              ),

            S.listItem()
              .title("Infrastructure Page")
              .id("infrastructurePage")
              .child(
                S.document()
                  .schemaType("infrastructurePage")
                  .documentId("infrastructurePage")
                  .title("Infrastructure Page"),
              ),

            S.listItem()
              .title("Academics Page")
              .id("academicsPage")
              .child(
                S.document()
                  .schemaType("academicsPage")
                  .documentId("academicsPage")
                  .title("Academics Page"),
              ),

            S.listItem()
              .title("Admissions Page")
              .id("admissionsPage")
              .child(
                S.document()
                  .schemaType("admissionsPage")
                  .documentId("admissionsPage")
                  .title("Admissions Page"),
              ),

            S.listItem()
              .title("Contact Page")
              .id("contactPage")
              .child(
                S.document()
                  .schemaType("contactPage")
                  .documentId("contactPage")
                  .title("Contact Page"),
              ),

            S.divider(),

            S.listItem()
              .title("Footer & Contact Details")
              .id("footer")
              .child(
                S.document().schemaType("footer").documentId("footer")
                  .title("Footer & Contact Details"),
              ),

            S.listItem()
              .title("Privacy Policy")
              .id("privacyPolicy")
              .child(
                S.document().schemaType("privacyPolicy").documentId("privacyPolicy")
                  .title("Privacy Policy"),
              ),


            S.listItem()
              .title("News & Events")
              .child(
                S.documentTypeList("newsEvent")
                  .title("News & Events")
                  .defaultOrdering([{ field: "date", direction: "desc" }]),
              ),
          ]),
    }),
  ],

  schema: { types: schemaTypes },

  document: {
    /**
     * There is exactly one of each page document, and the site reads them by a
     * fixed id. Deleting or duplicating one would silently drop that page back
     * to its hardcoded fallback copy, so those actions are removed.
     *
     * News & events are ordinary documents — they keep Delete and Unpublish.
     * Only Duplicate is removed there, because a copied event with the old
     * date is a predictable mess.
     *
     * NOTE: the v2 `__experimental_actions` field is silently ignored in
     * Sanity 3 — this resolver is what actually enforces any of it.
     */
    actions: (prev, { schemaType }) => {
      if (SINGLETONS.has(schemaType)) {
        return prev.filter(({ action }) =>
          ["publish", "discardChanges", "restore"].includes(action),
        );
      }
      return prev.filter(({ action }) => action !== "duplicate");
    },
  },
});
