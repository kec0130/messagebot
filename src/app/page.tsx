import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="fixed z-10 top-0 left-0 right-0 max-w-lg h-[56px] mx-auto flex justify-center items-center bg-white shadow">
        <h1 className="text-center font-bold text-lg">메시지봇</h1>
      </header>

      <main className="flex min-h-screen flex-col max-w-lg mx-auto pt-[72px] px-4 bg-sky-50">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image src="/images/avatar.png" alt="avatar" width={40} height={40} />
            </div>
          </div>
          <div className="chat-header">메시지봇</div>
          <div className="chat-bubble">
            안녕하세요, 소중한 사람들에게 따뜻한 인사를 건네는 메시지봇입니다.
          </div>
        </div>

        <div className="chat chat-end">
          <div className="chat-bubble">호호호</div>
        </div>
      </main>

      <div className="fixed z-10 bottom-0 left-0 right-0 max-w-lg mx-auto p-2 bg-sky-100 shadow-up">
        <form>
          <input
            type="text"
            placeholder="메시지를 입력하세요"
            className="w-full h-11 rounded-full px-4"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 -translate-x-1 bg-sky-500 rounded-full w-9 h-9 flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="fill-white"
            >
              <path d="M120-160v-240l320-80-320-80v-240l760 320-760 320Z" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
