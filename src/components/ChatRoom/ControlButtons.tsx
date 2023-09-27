import { AddMessageIcon, ReplayIcon } from '../../../public/icons';

interface Props {
  handleReplayClick: () => void;
  handleRestartClick: () => void;
}

const ControlButtons = ({ handleReplayClick, handleRestartClick }: Props) => {
  return (
    <div className="flex justify-center gap-4 my-4">
      <button className="btn btn-sm rounded-full bg-sky-500 text-white" onClick={handleReplayClick}>
        <ReplayIcon className="w-4 h-4 fill-white" />
        다시 생성
      </button>
      <button
        className="btn btn-sm rounded-full bg-sky-500 text-white"
        onClick={handleRestartClick}
      >
        <AddMessageIcon className="w-4 h-4 fill-white" />새 메시지
      </button>
    </div>
  );
};

export default ControlButtons;
