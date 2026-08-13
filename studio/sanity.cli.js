import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "bj87pb9z",
    dataset: "production",
  },
  // The hostname the Studio is published to by `npm run deploy`:
  // https://shrivinayakavidyalaya.sanity.studio
  studioHost: "shrivinayakavidyalaya",
});
