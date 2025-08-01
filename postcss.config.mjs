const postcssConfig = {
  plugins: {
    // this plugin doesn't work with 'tailwindcss v3'
    '@tailwindcss/postcss': {},
  },
};

export default postcssConfig;
