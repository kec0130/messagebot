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
    <div className="fixed z-10 bottom-0 left-0 right-0 max-w-lg mx-auto p-2 bg-sky-100 shadow-up">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="메시지를 입력하세요"
          className="w-full h-11 rounded-full px-4"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={disabled}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 -translate-x-1 bg-sky-500 rounded-full w-9 h-9 flex justify-center items-center"
        >
          <SendIcon className="fill-white" />
        </button>
      </form>
    </div>
  );
};

export default Input;
