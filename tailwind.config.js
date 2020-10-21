const defaultTheme = require("tailwindcss/defaultTheme");
const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: {
    applyComplexClasses: true,
    darkModeVariant: true,
  },
  purge: {
    mode: "layers",
    layers: ["utilities"],
    enabled: production,
    content: ["./static/*.html", "./src/**/*.svelte"],
    options: {
      whitelistPatternsChildren: [/svelte-/],
      defaultExtractor: (content) => {
        const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g);
        const matchedTokens = [];
        let match = regExp.exec(content);
        while (match) {
          if (match[0].startsWith("class:")) {
            matchedTokens.push(match[0].substring(6));
          } else {
            matchedTokens.push(match[0]);
          }
          match = regExp.exec(content);
        }
        return matchedTokens;
      },
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
