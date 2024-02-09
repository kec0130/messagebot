import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://messagebot.chaechae.life',
      lastModified: new Date(),
    },
    {
      url: 'https://messagebot.chaechae.life/chat',
      lastModified: new Date(),
    },
    {
      url: 'https://messagebot.chaechae.life/chat/tutorial',
      lastModified: new Date(),
    },
    {
      url: 'https://messagebot.chaechae.life/chat/gallery',
      lastModified: new Date(),
    },
  ];
}
