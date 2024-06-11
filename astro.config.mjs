import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import { remarkReadingTime } from './remark-reading-time.mjs';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind(), react(), icon()]
});