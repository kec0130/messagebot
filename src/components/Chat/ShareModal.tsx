import clsx from 'clsx';
import { useState } from 'react';
import { useAtom } from 'jotai';

import { selectedContentAtom } from './states';
import { CheckIcon, CloseIcon, CopyIcon, GalleryIcon } from '../../../public/icons';

const ShareModal = () => {
  const [selectedContent] = useAtom(selectedContentAtom);
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(selectedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          <button
            className={clsx('btn transition-colors', copied ? 'btn-info' : 'btn-neutral')}
            onClick={handleCopyClick}
          >
            {copied ? (
              <CheckIcon className="h-5 w-5 fill-current" />
            ) : (
              <CopyIcon className="h-5 w-5 fill-current" />
            )}
            {copied ? '복사 완료' : '텍스트 복사하기'}
          </button>
          <button className="btn btn-neutral">
            <GalleryIcon className="h-5 w-5 fill-current" />
            갤러리에 공유하기
          </button>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button aria-hidden>close</button>
      </form>
    </dialog>
  );
};

export default ShareModal;
