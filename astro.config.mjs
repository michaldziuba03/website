// @ts-check
import { loadEnv } from "vite";
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from '@astrojs/react';

import sanity from '@sanity/astro';

import expressiveCode from 'astro-expressive-code';

// @ts-ignore
const env = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: 'https://michaldziuba.dev',
  integrations: [react(), sanity({
    projectId: env.PUBLIC_SANITY_PROJECT_ID,
    dataset: env.PUBLIC_SANITY_DATASET,
    useCdn: true,
    studioBasePath: '/studio',
  }), expressiveCode({
    themes: ['catppuccin-latte'],
    styleOverrides: {
      codeFontSize: '1rem',
    }
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});