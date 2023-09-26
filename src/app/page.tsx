'use client';

import Image from 'next/image';
import { FormEvent, useState } from 'react';

export default function Home() {
  const [value, setValue] = useState('');
  const [form, setForm] = useState();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue('');
  };

  return (
    <>
      <header className="fixed z-10 top-0 left-0 right-0 max-w-lg h-[56px] mx-auto flex justify-center items-center bg-white shadow">
        <h1 className="text-center font-bold text-lg">메시지봇</h1>
      </header>

      <main className="flex min-h-[100dvh] flex-col max-w-lg mx-auto py-[70px] px-4 bg-sky-50">
        <div className="w-fit text-sm rounded-full px-3 py-1 mx-auto my-2 bg-slate-200 text-slate-600">
          2023년 9월 25일
        </div>

        <div className="chat chat-start py-2">
          <div className="chat-image avatar">
            <div className="w-10 h-10 rounded-full">
              <Image src="/images/avatar.png" alt="avatar" width={40} height={40} />
            </div>
          </div>
          <div className="chat-header">메시지봇</div>
          <div className="chat-bubble">
            안녕하세요! 소중한 사람들에게 따뜻한 인사를 건네는 메시지봇이에요.
          </div>
        </div>

        <div className="chat chat-start py-2">
          <div className="chat-image avatar">
            <div className="w-10 h-10 rounded-full">
              <Image src="/images/avatar.png" alt="avatar" width={40} height={40} />
            </div>
          </div>
          <div className="chat-header">메시지봇</div>
          <div className="chat-bubble">
            누구에게 메시지를 보내실 건가요?
            <br />
            예) 엄마, 친구, 아는 언니, 학교 선배, 직장 동료
          </div>
        </div>

        <div className="chat chat-end py-2">
          <div className="chat-bubble bg-sky-200 text-inherit">호호호</div>
        </div>

        <div className="chat chat-start py-2">
          <div className="chat-image avatar">
            <div className="w-10 h-10 rounded-full">
              <Image src="/images/avatar.png" alt="avatar" width={40} height={40} />
            </div>
          </div>
          <div className="chat-header">메시지봇</div>
          <div className="chat-bubble">
            메시지 받는 분의 성함이 무엇인가요? 만약 이름으로 부르지 않는다면 엔터키를 쳐서
            넘어가주세요.
          </div>
        </div>

        <div className="chat chat-end py-2">
          <div className="chat-bubble bg-sky-200 text-inherit">호호호</div>
        </div>

        <div className="chat chat-start py-2">
          <div className="chat-image avatar">
            <div className="w-10 h-10 rounded-full">
              <Image src="/images/avatar.png" alt="avatar" width={40} height={40} />
            </div>
          </div>
          <div className="chat-header">메시지봇</div>
          <div className="chat-bubble">
            어떤 이유로 메시지를 보내시나요?
            <br />
            예) 생일 축하, 결혼 축하, 추석 인사, 위로
          </div>
        </div>

        <div className="chat chat-end py-2">
          <div className="chat-bubble bg-sky-200 text-inherit">호호호</div>
        </div>

        <div className="chat chat-start py-2">
          <div className="chat-image avatar">
            <div className="w-10 h-10 rounded-full">
              <Image src="/images/avatar.png" alt="avatar" width={40} height={40} />
            </div>
          </div>
          <div className="chat-header">메시지봇</div>
          <div className="chat-bubble">반말과 존댓말 중 어떤 어투를 사용할까요?</div>
        </div>

        <div className="chat chat-end py-2">
          <div className="chat-bubble bg-sky-200 text-inherit">호호호</div>
        </div>
      </main>

      <div className="fixed z-10 bottom-0 left-0 right-0 max-w-lg mx-auto p-2 bg-sky-100 shadow-up">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="메시지를 입력하세요"
            className="w-full h-11 rounded-full px-4"
            value={value}
            onChange={(e) => setValue(e.target.value)}
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
