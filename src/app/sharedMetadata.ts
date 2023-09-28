import { Metadata } from 'next';

interface Props {
  url: string;
  title?: string;
  description?: string;
  keywords?: string[];
}

const BASE_URL = 'https://messagebot.chaechae.life';

const sharedMetadata = {
  url: BASE_URL,
  title: '메시지봇 - 인사말 생성 AI 챗봇',
  description:
    '소중한 사람들에게 따뜻한 인사말을 전하세요. 생일 축하, 명절 인사, 축하 메시지, 안부 메시지를 AI가 쉽고 빠르게 만들어드립니다.',
  keywords: [
    '인사말',
    '인사말 생성',
    '인사말 챗봇',
    '인사말 생성 챗봇',
    '인사말 생성 AI',
    '메시지봇',
    '메시지 생성',
    '메시지 생성 챗봇',
    '메시지 생성 AI',
    '생일 축하',
    '명절 인사',
    '축하 메시지',
    '안부 메시지',
  ],
};

export const getMetaData = ({
  url,
  title = sharedMetadata.title,
  description = sharedMetadata.description,
  keywords = sharedMetadata.keywords,
}: Props): Metadata => ({
  title,
  description,
  keywords,
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: '메시지봇',
  },
  twitter: {
    title,
    description,
  },
});
