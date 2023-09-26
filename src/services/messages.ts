import axios from 'axios';
import { PromptParams } from '@/types/message';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

export const generateMessages = async (params: PromptParams) => {
  const { data } = await api.post<{ results: string[] }>(
    '/apis/messages/',
    {
      ...params,
      max_length: '200',
    },
    {
      headers: {
        secret: 'dev',
        'Content-Type': 'application/json',
      },
    }
  );
  return data.results;
};
