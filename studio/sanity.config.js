import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

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
    // Hide the "duplicate" action — staff duplicating a news item and
    // forgetting to change the date is a predictable mess.
    actions: (prev) => prev.filter(({ action }) => action !== "duplicate"),
  },
});
