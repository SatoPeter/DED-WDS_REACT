module.exports = {
  js2svg: { indent: 2, pretty: true },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    {
      name: 'convertShapeToPath',
      params: {
        convertArcs: false,
        floatPrecision: null,
      },
    },
  ],
};
