const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content gap-4">
      <aside>
        <p>문의: chaechae.couple@gmail.com</p>
        <p>&copy; 메시지봇 - 인사말 생성 AI 챗봇</p>
      </aside>
      <nav>
        <header className="footer-title mb-0">Family Site</header>
        <a
          href="https://ev-charge.kr"
          target="_blank"
          rel="noreferrer noopener"
          className="link link-hover"
        >
          전기차 충전소 찾기 - 전기차G
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
