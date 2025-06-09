import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { schema } from "./src/sanity/schemaTypes";

const basePlugins = [
  structureTool(),
  codeInput({
    codeModes: [
      {
        name: "cpp",
        loader: () =>
          import("@codemirror/lang-cpp").then(({ cpp }) => cpp()),
      },
    ],
  }),
];

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: isDev ? [...basePlugins, visionTool()] : basePlugins,
  schema,
});
