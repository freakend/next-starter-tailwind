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
    ]
  },
}
