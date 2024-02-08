import { supabase } from './supabase';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const getMessages = async () => {
  const { data } = await supabase
    .from('message_gallery')
    .select()
    .order('created_at', { ascending: true });

  return { data: data || [] };
};

export const postMessage = async (content: string) => {
  const { data, error } = await supabase
    .from('message_gallery')
    .insert({
      content,
      created_at: dayjs().tz('Asia/Seoul').format(),
    })
    .select();

  return {
    data: data || [],
    error,
  };
};
