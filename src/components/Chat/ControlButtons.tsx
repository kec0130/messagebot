import { AddMessageIcon, ReplayIcon } from '../../../public/icons';

interface Props {
  handleReplayClick: () => void;
  handleRestartClick: () => void;
}

const ControlButtons = ({ handleReplayClick, handleRestartClick }: Props) => {
  return (
    <div className="my-4 flex justify-center gap-4">
      <button
        className="btn btn-sm h-[40px] rounded-full bg-sky-500 px-4 font-medium text-white hover:bg-sky-600"
        onClick={handleReplayClick}
      >
        <ReplayIcon className="h-4 w-4 fill-white" />
        다시 생성
      </button>
      <button
        className="btn btn-sm h-[40px] rounded-full bg-sky-500 px-4 font-medium text-white hover:bg-sky-600"
        onClick={handleRestartClick}
      >
        <AddMessageIcon className="h-4 w-4 fill-white" />새 메시지
      </button>
    </div>
  );
};

export default ControlButtons;
