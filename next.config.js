module.exports = {
    distDir: 'out',
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/blog': { page: '/blog' },
      }
    },
  }