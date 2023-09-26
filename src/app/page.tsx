'use client';

import Image from 'next/image';
import { FormEvent, useEffect, useRef, useState } from 'react';

interface PromptParams {
  relation: string;
  name?: string;
  reason: string;
  manner: string;
}

interface Message {
  from: 'bot' | 'user';
  content: string;
}

const WELCOME = '안녕하세요! 소중한 사람들에게 따뜻한 인사를 건네는 메시지봇이에요.';

const QUESTIONS = [
  '누구에게 메시지를 보내실 건가요?\n예) 엄마, 친구, 아는 언니, 학교 선배, 직장 동료',
  '메시지 받는 분의 성함이 무엇인가요? 만약 이름으로 부르지 않는다면 엔터키를 쳐서 넘어가주세요.',
  '어떤 이유로 메시지를 보내시나요?\n예) 생일 축하, 결혼 축하, 추석 인사, 위로',
  '반말과 존댓말 중 어떤 말투를 사용할까요?',
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([{ from: 'bot', content: QUESTIONS[0] }]);
  const [params, setParams] = useState<PromptParams>({
    relation: '',
    name: '',
    reason: '',
    manner: '',
  });

  const bottomRef = useRef<HTMLDivElement>(null);

  const promptKeys = Object.keys(params) as (keyof PromptParams)[];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (!value || currentStep === promptKeys.length) return;

    setMessages((prev) => [
      ...prev,
      { from: 'user', content: value },
      { from: 'bot', content: QUESTIONS[currentStep + 1] },
    ]);
    setParams((prev) => ({ ...prev, [promptKeys[currentStep]]: value }));
    setCurrentStep((prev) => prev + 1);
    setInputValue('');
  };

  const convertDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
  };

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <header className="fixed z-10 top-0 left-0 right-0 max-w-lg h-[56px] mx-auto flex justify-center items-center bg-white shadow">
        <h1 className="text-center font-bold text-lg">메시지봇</h1>
      </header>

      <main className="flex min-h-[100dvh] flex-col max-w-lg mx-auto py-[70px] px-4 bg-sky-50">
        <div className="w-fit text-sm rounded-full px-3 py-1 mx-auto my-2 bg-slate-200 text-slate-600">
          {convertDate(new Date())}
        </div>

        <div className="chat chat-start py-2">
          <div className="chat-image avatar">
            <div className="w-10 h-10 rounded-full">
              <Image src="/images/avatar.png" alt="avatar" width={40} height={40} />
            </div>
          </div>
          <div className="chat-header">메시지봇</div>
          <div className="chat-bubble">{WELCOME}</div>
        </div>

        {messages.map((message) =>
          message.from === 'bot' ? (
            <div key={message.content}>
              <div className="chat chat-start py-2 whitespace-pre-line">
                <div className="chat-image avatar">
                  <div className="w-10 h-10 rounded-full">
                    <Image src="/images/avatar.png" alt="avatar" width={40} height={40} />
                  </div>
                </div>
                <div className="chat-header">메시지봇</div>
                <div className="chat-bubble">{message.content}</div>
              </div>
            </div>
          ) : (
            <div className="chat chat-end py-2" key={message.content}>
              <div className="chat-bubble bg-sky-200 text-inherit">{message.content}</div>
            </div>
          )
        )}

        <div ref={bottomRef} />
      </main>

      <div className="fixed z-10 bottom-0 left-0 right-0 max-w-lg mx-auto p-2 bg-sky-100 shadow-up">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="메시지를 입력하세요"
            className="w-full h-11 rounded-full px-4"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
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
