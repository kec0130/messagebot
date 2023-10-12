# 메시지봇

## 서비스 소개

> <https://messagebot.chaechae.life>

AI를 활용해 안부 메시지를 쉽고 빠르게 생성해주는 챗봇 서비스입니다.

![messagebot](https://github.com/kec0130/messagebot/assets/77032760/47196773-db5b-4fbe-8f57-ffea2e3edda7)

<br />

## 기술 스택

| 분류       | 기술 스택              |
| ---------- | ---------------------- |
| Framework  | Next.js                |
| Language   | TypeScript             |
| Deployment | Vercel                 |
| Styling    | Tailwind CSS, Daisy UI |

<br />

## 주요 기능 및 구현 내용

- 상대방과의 관계, 상대방의 이름, 메시지의 목적, 반말/존댓말 여부를 챗봇 UI를 통해 입력받음
- 사전에 정의된 프롬프트로 [OpenAI API](https://platform.openai.com/docs/api-reference)에 요청을 보내 메시지 생성
- 로딩 시간 최소화를 위해 stream 형태로 응답을 받고, TextDecoder를 통해 string으로 변환하여 실시간 출력
- 사용자가 선택할 수 있도록 3개의 메시지를 생성하고, stream을 즉시 split하여 각각 독립된 말풍선에 출력
- 각 메시지 복사 기능 제공
- 메시지 출력이 완료되면 동일한 프롬프트로 메시지를 재생성하거나, 처음으로 돌아가 새 메시지를 생성하는 기능 제공
