import Link from 'next/link';
import Image from 'next/image';
import BuyMeACoffeeButton from '../Common/BuyMeACoffee/Button';

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-between h-[100dvh] pt-[10dvh] md:pt-[20dvh]">
      <div className="flex flex-col gap-5 justify-center items-center">
        <Image src="/images/text-logo.png" alt="logo" width={140} height={40} />
        <Image
          src="/images/chatbot.png"
          alt="메시지봇"
          width={160}
          height={170}
          className="mb-5 md:mb-10"
        />

        <button className="btn btn-neutral w-[235px] h-[50px] rounded-[10px] text-lg">
          <Link href="/chat" className="w-full h-full flex justify-center items-center gap-2">
            메시지 만들러 가기
          </Link>
        </button>
        <BuyMeACoffeeButton />
      </div>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content gap-4">
        <aside>
          <p>문의: chaechae.couple@gmail.com</p>
          <p>&copy; 메시지봇 - 인사말 생성 AI 챗봇</p>
        </aside>
        <nav>
          <header className="footer-title">Family Site</header>
          <a href="https://ev-charge.kr" target="_blank" className="link link-hover">
            전기차 충전소 찾기 - 전기차G
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage;
