module.exports = {
  async redirects() {
    return [
      {
        source: '/twitter',
        destination: 'https://twitter.com/_freakend',
        permanent: true,
      },
      {
        source: '/imbe-card',
        destination: 'https://imbe.xyz',
        permanent: true,
      },
      {
        source: '/bikin-web',
        destination: 'https://byferdi.com/bikinweb.png',
        permanent: true,
      },
      {
        source: 'https://redirect.byferdi.com/',
        destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        permanent: true,
      },
    ]
  },
}
