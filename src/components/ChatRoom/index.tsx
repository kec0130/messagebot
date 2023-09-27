'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { INITIAL_PARAMS, PARAM_KEYS, QUESTIONS, WELCOME } from '@/constants/message';
import { IMessage, PromptParams } from '@/types/message';
import { generateStream } from '@/services/messages';
import Message from './Message';
import Input from './Input';
import ControlButtons from './ControlButtons';

const ChatRoom = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState<IMessage[]>([{ from: 'bot', content: QUESTIONS[0] }]);
  const [params, setParams] = useState<PromptParams>(INITIAL_PARAMS);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const getNextMessage = (user: string | null, bot: string) => {
    const newMessages: IMessage[] = user
      ? [
          { from: 'user', content: user },
          { from: 'bot', content: bot },
        ]
      : [{ from: 'bot', content: bot }];

    setMessages((prev) => [...prev, ...newMessages]);
    setValue('');
  };

  const showGeneratedMessages = async (params: PromptParams) => {
    setCurrentStep((prev) => prev + 1);
    const stream = await generateStream(params);
    if (!stream) return;

    const reader = stream.getReader();
    const decoder = new TextDecoder();
    const newMessages = [...messages];
    let text = '';

    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        break;
      }

      const decodedChunk = decoder.decode(value, { stream: true });
      text += decodedChunk;
      newMessages.splice(newMessages.length - 1, 1, {
        from: 'bot',
        content: text,
      });
      setMessages(newMessages);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = value.trim();
    if (!inputValue || currentStep === PARAM_KEYS.length) return;

    if (inputValue.length > 8) {
      getNextMessage(inputValue, '8자 이내로 입력해주세요.');
      return;
    }

    if (currentStep === PARAM_KEYS.length - 1) {
      if (inputValue !== '반말' && inputValue !== '존댓말') {
        getNextMessage(inputValue, '"반말" 또는 "존댓말" 중 하나를 입력해주세요.');
        return;
      }

      const newParams = { ...params, [PARAM_KEYS[currentStep]]: inputValue };
      setParams(newParams);
      setIsInputDisabled(true);
      getNextMessage(inputValue, '메시지를 생성하는 중입니다. 잠시만 기다려주세요.');
      await showGeneratedMessages(newParams);
      return;
    }

    setParams((prev) => ({
      ...prev,
      [PARAM_KEYS[currentStep]]: currentStep === 1 && inputValue === '0' ? '' : inputValue,
    }));
    setCurrentStep((prev) => prev + 1);
    getNextMessage(inputValue, QUESTIONS[currentStep + 1]);
  };

  const handleReplayClick = async () => {
    setCurrentStep((prev) => prev - 1);
    getNextMessage(null, '메시지를 생성하는 중입니다. 잠시만 기다려주세요.');
    await showGeneratedMessages(params);
  };

  const handleRestartClick = () => {
    setCurrentStep(0);
    setIsInputDisabled(false);
    getNextMessage(null, QUESTIONS[0]);
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
        {messages.map((message, index) => (
          <Message
            key={index}
            from={message.from}
            content={message.content}
            copyId={message.copyId}
            delay
          />
        ))}

        {currentStep === PARAM_KEYS.length && (
          <ControlButtons
            handleReplayClick={handleReplayClick}
            handleRestartClick={handleRestartClick}
          />
        )}

        <div ref={bottomRef} />
      </main>

      <Input
        value={value}
        setValue={setValue}
        handleSubmit={handleSubmit}
        disabled={isInputDisabled}
      />
    </>
  );
};

export default ChatRoom;
