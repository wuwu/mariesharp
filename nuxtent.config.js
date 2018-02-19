
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
    ["products", {
      page: '/shop/_product',
      permalink: "/shop/:slug",
      isPost: false,
      generate: ['get', 'getAll'],
    }]
  ],
  api: {
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://mariesharp.zknft.de'
        : 'http://localhost:4500'
  }
}
