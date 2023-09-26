'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { INITIAL_PARAMS, PARAM_KEYS, QUESTIONS, WELCOME } from '@/constants/message';
import { IMessage, PromptParams } from '@/types/message';
import Message from './Message';
import Input from './Input';

const ChatRoom = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState<IMessage[]>([{ from: 'bot', content: QUESTIONS[0] }]);
  const [params, setParams] = useState<PromptParams>(INITIAL_PARAMS);

  const bottomRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = value.trim();
    if (!inputValue || currentStep === PARAM_KEYS.length) return;

    setMessages((prev) => [
      ...prev,
      { from: 'user', content: inputValue },
      { from: 'bot', content: QUESTIONS[currentStep + 1] },
    ]);
    setParams((prev) => ({ ...prev, [PARAM_KEYS[currentStep]]: inputValue }));
    setCurrentStep((prev) => prev + 1);
    setValue('');
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

        <Message from="bot" content={WELCOME} />
        {messages.map((message) => (
          <Message key={message.content} from={message.from} content={message.content} />
        ))}
        <div ref={bottomRef} />
      </main>

      <Input value={value} setValue={setValue} handleSubmit={handleSubmit} />
    </>
  );
};

export default ChatRoom;
