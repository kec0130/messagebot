import { Dispatch, FormEvent, SetStateAction } from 'react';
import { SendIcon } from '../../../public/icons';

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  disabled?: boolean;
}

const Input = ({ value, setValue, handleSubmit, disabled }: Props) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 mx-auto max-w-lg bg-sky-200 p-2 shadow-up">
      <form className="mb-safe relative focus-within:mb-0" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="메시지를 입력하세요"
          className="h-11 w-full rounded-full px-4"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={disabled}
        />
        <button
          type="submit"
          className="absolute right-0 top-1/2 flex h-9 w-9 -translate-x-1 -translate-y-1/2 transform items-center justify-center rounded-full bg-sky-500 transition-colors hover:bg-sky-600"
        >
          <SendIcon className="fill-white" />
        </button>
      </form>
    </div>
  );
};

export default Input;
