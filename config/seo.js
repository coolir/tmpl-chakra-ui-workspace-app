const siteUrl = 'https://__DOTCOM__';
const siteAddress = new URL(siteUrl);
const canonical = siteAddress.href.slice(0, -1);
const title = '__DOTCOM__';
const description = '__MODULEDESC__';
const fbAppId = null;
module.exports = {
    title,
    canonical,
    description,
    openGraph: {
      type: 'website',
      url: siteUrl,
      title,
      description,
      site_name: title,
      images: [
        {
          url: canonical + '/og/image.jpg',
          width: 942,
          height: 466,
          alt: title,
        }
      ]
    },
    twitter: {
      handle: '',
      site: ''
    },
    facebook: fbAppId ? {
      appId: fbAppId
    } : undefined,
  };