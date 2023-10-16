import Link from 'next/link';
import Image from 'next/image';
import BuyMeACoffeeButton from '../BuyMeACoffee/Button';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="flex h-[100dvh] flex-col justify-between">
      <div className="flex flex-1 flex-col items-center justify-center gap-5">
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
        />
        <p className="text-center text-lg md:my-4 md:text-xl">
          특별한 안부 인사로
          <br />
          따뜻한 마음을 전하세요.
        </p>

        <button className="btn btn-neutral h-[50px] w-[235px] rounded-[10px] text-lg">
          <Link href="/chat" className="flex h-full w-full items-center justify-center gap-2">
            메시지 만들러 가기
          </Link>
        </button>
        <BuyMeACoffeeButton />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
