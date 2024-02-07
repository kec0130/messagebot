import Header from '@/components/Chat/Header';
import { getMetaData } from '@/app/sharedMetadata';
import Mockup from '@/components/Tutorial/Mockup';
import QnA from '@/components/Tutorial/QnA';

export const metadata = getMetaData({ url: '/chat/tutorial' });

const TutorialPage = () => {
  return (
    <>
      <Header title="사용방법" leftUrl="/chat" />
      <h2 className="pt-2 text-lg font-medium">
        더 나은 메시지를 생성하려면 질문에 이렇게 답변해주세요! 🤗
      </h2>
      <Mockup />
      <QnA />
    </>
  );
};

export default TutorialPage;
