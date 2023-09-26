import { PromptParams } from '@/types/message';

export const WELCOME = '안녕하세요! 소중한 사람들에게 따뜻한 인사를 건네는 메시지봇이에요.';

export const QUESTIONS = [
  '누구에게 메시지를 보내실 건가요?\n예) 엄마, 친구, 아는 언니, 학교 선배, 직장 동료',
  '메시지 받는 분의 성함이 무엇인가요? 만약 이름으로 부르지 않는다면 엔터키를 쳐서 넘어가주세요.',
  '어떤 이유로 메시지를 보내시나요?\n예) 생일 축하, 결혼 축하, 추석 인사, 위로',
  '반말과 존댓말 중 어떤 말투를 사용할까요?',
];

export const INITIAL_PARAMS: PromptParams = {
  relation: '',
  name: '',
  reason: '',
  manner: '',
};

export const PARAM_KEYS = Object.keys(INITIAL_PARAMS) as (keyof PromptParams)[];
