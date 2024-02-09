'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';

import type { MessageGallery } from '@/types/supabase';
import { getMessages } from '@/services/gallery';
import Header from '@/components/Common/Header';
import DateBadge from '@/components/Chat/DateBadge';
import Message from '@/components/Chat/Message';

const GalleryPage = () => {
  const [messages, setMessages] = useState<MessageGallery[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getMessages()
      .then(({ data }) => {
        setMessages(data);
      })
      .finally(() => {
        bottomRef.current?.scrollIntoView();
      });
  }, []);

  let lastDate = '';

  return (
    <div className="pb-10">
      <Header title="메시지 갤러리" />
      {messages.map((message) => {
        const messageDate = dayjs(message.created_at).format('YYYY-MM-DD');
        let dateDisplay = null;
        if (messageDate !== lastDate) {
          dateDisplay = <DateBadge date={new Date(messageDate)} />;
          lastDate = messageDate;
        }

        return (
          <Fragment key={message.id}>
            {dateDisplay}
            <Message from="bot" content={message.content} />
          </Fragment>
        );
      })}
      <div ref={bottomRef} />
    </div>
  );
};

export default GalleryPage;
