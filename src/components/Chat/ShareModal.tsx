import Link from 'next/link';
import clsx from 'clsx';
import { useState } from 'react';
import { useAtom } from 'jotai';

import { selectedContentAtom } from './states';
import { CheckIcon, CopyIcon, ErrorIcon, GalleryIcon, SuccessIcon } from '../../../public/icons';
import { postMessage } from '@/services/gallery';

type CurrentStep = 'init' | 'share' | 'result';
type PostStatus = 'idle' | 'loading' | 'success' | 'error';

const ShareModal = () => {
  const [selectedContent] = useAtom(selectedContentAtom);
  const [copied, setCopied] = useState(false);
  const [currentStep, setCurrentStep] = useState<CurrentStep>('init');
  const [postStatus, setPostStatus] = useState<PostStatus>('idle');

  const handleCopyClick = () => {
    navigator.clipboard.writeText(selectedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareClick = () => {
    setPostStatus('loading');
    postMessage(selectedContent)
      .then((res) => {
        if (res.error) setPostStatus('error');
        else setPostStatus('success');
      })
      .catch(() => setPostStatus('error'))
      .finally(() => setCurrentStep('result'));
  };

  const handleCloseClick = () => {
    setCopied(false);
    setCurrentStep('init');
    setPostStatus('idle');
  };

  return (
    <dialog id="message-share-modal" className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">메시지 공유하기</h3>
        {currentStep === 'init' && (
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
            <button className="btn btn-neutral" onClick={() => setCurrentStep('share')}>
              <GalleryIcon className="h-5 w-5 fill-current" />
              갤러리에 공유하기
            </button>
          </div>
        )}

        {currentStep === 'share' && (
          <>
            <p className="mt-2 text-sm text-slate-500">
              나만 보기 아까운 멋진 메시지를 갤러리에 공유해보세요! 다른 사람들도 함께 볼 수 있어요.
            </p>
            <textarea
              className="mb-3 mt-4 h-32 w-full rounded-md border p-2"
              value={selectedContent}
              readOnly
            />
            {/* <div className="form-control">
              <label className="label w-fit cursor-pointer justify-start gap-1.5">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                  checked={blurChecked}
                  onChange={() => setBlurChecked((prev) => !prev)}
                />
                <span className="label-text">이름 가리기</span>
              </label>
            </div> */}
            <div className="flex justify-end gap-3">
              <button className="btn btn-ghost" onClick={() => setCurrentStep('init')}>
                취소
              </button>
              <button className="btn btn-neutral" onClick={handleShareClick}>
                {postStatus === 'loading' && <span className="loading loading-spinner" />}
                공유하기
              </button>
            </div>
          </>
        )}

        {currentStep === 'result' && (
          <div>
            {postStatus === 'success' ? (
              <>
                <div className="my-8 flex flex-col items-center">
                  <SuccessIcon className="h-16 w-16 fill-current text-sky-500" />
                  <p className="mt-3">메시지가 갤러리에 공유되었습니다.</p>
                </div>
                <div className="flex justify-end gap-3">
                  <button className="btn btn-ghost" onClick={handleCloseClick}>
                    확인
                  </button>
                  <Link href="/chat/gallery" className="btn btn-neutral">
                    갤러리로 이동
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="my-8 flex flex-col items-center">
                  <ErrorIcon className="h-16 w-16 fill-current" />
                  <p className="mt-3 whitespace-pre-line text-center">{`오류가 발생했습니다.\n다시 시도해주세요.`}</p>
                </div>
                <div className="flex justify-center">
                  <button className="btn btn-neutral" onClick={handleCloseClick}>
                    확인
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <form method="dialog" className="modal-backdrop">
        <button onClick={handleCloseClick} aria-hidden>
          close
        </button>
      </form>
    </dialog>
  );
};

export default ShareModal;
