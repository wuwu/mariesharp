
module.exports = {
  content: [
    [
      'pages',
      {
        page: '/_slug',
        permalink: '/:slug',
        generate: ['get', 'getAll'],
        isPost: false,
      },
    ],
    [
      'products',
      {
        page: '/_slug',
        permalink: "/shop/:slug",
        generate: ['get', 'getAll'],
        isPost: false,
      }]
  ],
  api: {
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://mariesharp.zknft.de'
        : 'http://localhost:4500'
  }
}
