import { QUESTIONS } from '@/components/Chat/constants';

const answers = [
  '관계, 호칭, 직함 등을 나타내는 단어를 입력해주세요.',
  '다음 예시처럼 호칭을 제외하고 이름만 적어주세요.\n· 지수야, 지수언니 → 지수\n· 김민석 선생님 → 김민석\n· 엄마, 아빠 → 0',
  '메시지 보내는 목적을 간결하게 입력',
  '반말, 존댓말 중 택1',
];

const QnA = () => {
  return (
    <div className="whitespace-pre-line">
      {QUESTIONS.map((question, index) => (
        <div key={question} className="border-t border-slate-200 py-4 first:border-none">
          <p className="font-medium before:mr-1 before:content-['Q.']">{question}</p>
          <p className="mt-3 font-normal before:mr-1 before:content-['A.']">{answers[index]}</p>
        </div>
      ))}
    </div>
  );
};

export default QnA;
