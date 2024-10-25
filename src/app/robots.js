export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: [ '/anime/', '/api/' ],
      },
      sitemap: 'https://anywave.marcus7i.net/sitemap.xml',
    }
  }