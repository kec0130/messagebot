import Link from 'next/link';

export default function Home() {
  return (
    <>
      <button className="btn">
        <Link href="/chat">메시지 만들러 가기</Link>
      </button>
    </>
  );
}
