import { CloseIcon, CopyIcon, GalleryIcon } from '../../../public/icons';

const ShareModal = () => {
  return (
    <dialog id="message-share-modal" className="modal">
      <div className="modal-box">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold">메시지 공유하기</h3>
          <form method="dialog">
            <button className="btn btn-circle btn-ghost btn-sm">
              <CloseIcon className="h-4 w-4 fill-slate-400" />
            </button>
          </form>
        </div>
        <div className="my-4 flex flex-col justify-center gap-3">
          <button className="btn btn-neutral">
            <CopyIcon className="h-5 w-5 fill-current" />
            텍스트 복사하기
          </button>
          <button className="btn btn-neutral">
            <GalleryIcon className="h-5 w-5 fill-current" />
            갤러리에 공유하기
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ShareModal;
