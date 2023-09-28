import Link from 'next/link';

export default function Home() {
  return (
    <>
      <button className="btn">
        <Link href="/chat" className="w-full h-full flex justify-center items-center">
          메시지 만들러 가기
        </Link>
      </button>
    </>
  );
}
