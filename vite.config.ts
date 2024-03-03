import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "unplugin-vue-markdown/vite";
import Shiki from '@shikijs/markdown-it'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      wrapperClasses: 'prose prose-sm m-auto text-left',
      headEnabled: true,
      async markdownItSetup(md) {
        md.use(await Shiki({
          defaultColor: 'dark',
          themes: {
            light: 'github-dark-dimmed',
            dark: 'github-dark-dimmed',
          },
        }))
      },
    }),
    Unocss(),
  ],
});
