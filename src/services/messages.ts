import axios from 'axios';
import { PromptParams } from '@/types/message';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000 * 30,
  headers: {
    secret: process.env.NEXT_PUBLIC_API_SECRET,
    'Content-Type': 'application/json',
  },
});

export const generateMessages = async (params: PromptParams) => {
  const { data } = await axiosInstance.post<{ results: string[] }>('/apis/messages/', {
    ...params,
    max_length: '200',
  });

  return data.results;
};

const BASE_URL =
  process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL : 'http://127.0.0.1:8000';

const SECRET = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_SECRET : 'dev';

export const generateStream = async (params: PromptParams) => {
  const response = await fetch(`${BASE_URL}/apis/messages/streaming/`, {
    method: 'POST',
    headers: {
      secret: SECRET!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...params,
      max_length: '200',
    }),
  });

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return response.body;
};

async function* getIterableStream(body: ReadableStream<Uint8Array>): AsyncIterable<string> {
  const reader = body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    const decodedChunk = decoder.decode(value, { stream: true });
    yield decodedChunk;
  }
}
