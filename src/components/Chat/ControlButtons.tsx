import { AddMessageIcon, ReplayIcon } from '../../../public/icons';

interface Props {
  handleReplayClick: () => void;
  handleRestartClick: () => void;
}

const ControlButtons = ({ handleReplayClick, handleRestartClick }: Props) => {
  return (
    <div className="my-4 flex justify-center gap-4">
      <button className="btn btn-info btn-sm h-9 rounded-full" onClick={handleReplayClick}>
        <ReplayIcon className="h-4 w-4 fill-current" />
        다시 생성
      </button>
      <button className="btn btn-info btn-sm h-9 rounded-full" onClick={handleRestartClick}>
        <AddMessageIcon className="h-4 w-4 fill-current" />새 메시지
      </button>
    </div>
  );
};

export default ControlButtons;
