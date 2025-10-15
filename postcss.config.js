// postcss.config.js
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

const removeLayersPlugin = {
  postcssPlugin: 'remove-layers',
  Once(root) {
    root.walkAtRules('layer', (rule) => {
      rule.replaceWith(rule.nodes)
    })
  },
}

export default {
  plugins: [tailwindcss(), removeLayersPlugin, autoprefixer],
}
