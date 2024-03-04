import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
})