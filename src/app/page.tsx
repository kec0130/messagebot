import Link from 'next/link';
import Image from 'next/image';

import BuyMeACoffeeButton from '@/components/BuyMeACoffee/Button';
import Footer from '@/components/Common/Footer';
import { AddMessageIcon, GalleryIcon } from '../../public/icons';

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center gap-5 py-20">
        <Image
          src="/images/text-logo.png"
          alt="logo"
          width={140}
          height={40}
          className="w-[100px] md:w-[140px]"
        />
        <Image
          src="/images/chatbot.png"
          alt="메시지봇"
          width={160}
          height={170}
          className="w-[120px] md:w-[160px]"
          priority
        />
        <p className="mb-2 text-center text-lg md:my-4 md:text-xl">
          특별한 안부 인사로
          <br />
          따뜻한 마음을 전하세요.
        </p>

        <div className="flex w-[200px] flex-col gap-4 md:gap-5">
          <Link href="/chat" className="btn btn-neutral">
            <AddMessageIcon className="h-5 w-5 fill-current" />
            메시지 만들기
          </Link>
          <Link href="/chat/gallery" className="btn btn-outline border-2">
            <GalleryIcon className="h-5 w-5 fill-current" />
            메시지 구경하기
          </Link>
          <BuyMeACoffeeButton />
        </div>
      </main>

      <Footer />
    </>
  );
}
