import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 p-10 text-base-content">
      <aside>
        <Image src="/images/text-logo.png" alt="logo" width={70} height={20} className="mb-1" />
        <p>&copy; {new Date().getFullYear()} ChaeChae. All Rights Reserved.</p>
      </aside>
      <nav>
        <header className="footer-title mb-0 font-sans">About Us</header>
        <a
          href="https://chaechae.life"
          target="_blank"
          rel="noreferrer noopener"
          className="link-hover link"
        >
          개발자 홈페이지
        </a>
        <a href="mailto:chaechae.couple@gmail.com" className="link-hover link">
          chaechae.couple@gmail.com
        </a>
      </nav>
      <nav>
        <header className="footer-title mb-0 font-sans">Family Site</header>
        <a
          href="https://ev-charge.kr"
          target="_blank"
          rel="noreferrer noopener"
          className="link-hover link"
        >
          전기차G - 전기차 충전소 찾기
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
