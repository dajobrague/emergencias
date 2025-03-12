module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://*.softr.app https://*.softr.io https://www.softr.app https://app.softr.io *;",
          },
        ],
      },
    ]
  },
} 