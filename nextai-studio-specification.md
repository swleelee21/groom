# NextAI Studio 웹페이지 기술명세서 (v1.0)

## 1) 프로젝트 개요

- **프로젝트명**: NextAI Studio 소개 웹페이지
- **목적**: AI 에이전트 기반 에이전시의 가치와 서비스 흐름을 명확히 전달하고, 상담/문의 전환 유도
- **타깃 사용자**:
  - 바이브코딩 입문자
  - 스타트업/소규모 팀
  - 빠른 MVP/프로덕션 전환이 필요한 기획자/개발자
- **핵심 제안 가치 (Core Value)**:
  - AI 에이전트를 이용해 현대적인 애플리케이션을 더 빠르고, 더 정교하게 빌드

## 2) 기술 스택 및 범위

- **사용 기술**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **페이지 형태**: Single Page(정적 랜딩 페이지)
- **배포 대상**: 정적 호스팅(Vercel, Netlify, GitHub Pages 등)
- **브라우저 지원**:
  - Chrome, Edge, Safari, Firefox 최신 2개 버전
- **반응형 기준**:
  - Mobile: ~767px
  - Tablet: 768~1023px
  - Desktop: 1024px~

## 3) 정보 구조(IA) 및 섹션 구성

`cursor.com/product` 흐름을 참고해 다음 구조로 설계한다.

1. **Hero 섹션**
   - NextAI Studio 소개 + 핵심 가치 헤드라인
   - 서브카피(에이전트 기반 개발 방식)
   - CTA 2개: 상담 요청, 작업 방식 보기
   - 시각 요소: 워크플로우 카드/일러스트

2. **문제 정의 / 왜 지금 AI 에이전트인가**
   - 전통 개발의 병목(속도, 커뮤니케이션 비용, 반복 작업)
   - 에이전트 기반 접근 필요성 제시

3. **솔루션 개요 (NextAI Studio 방식)**
   - 기획-설계-구현-검증 단계에서의 에이전트 개입 방식
   - Human + Agent 협업 모델 설명

4. **핵심 기능/서비스 카드**
   - Agent-Powered MVP Build
   - Legacy Modernization
   - UI/UX Prototyping
   - Automated QA & Iteration

5. **작업 프로세스 (Step by Step)**
   - Step 1: Discovery
   - Step 2: Agent Workflow Design
   - Step 3: Build Sprint
   - Step 4: Validate and Ship
   - Step 5: Continuous Improvement

6. **성과/신뢰 섹션**
   - KPI 예시(리드타임 단축, 배포 주기 개선)
   - 고객/프로젝트 유형 배지

7. **FAQ**
   - 입문자도 가능한가요?
   - 개발팀이 없어도 되나요?
   - 비용/기간은 어떻게 산정되나요?
   - 아코디언 UI 적용

8. **최종 CTA + Footer**
   - 강한 행동 유도 문구
   - 연락 채널(이메일/폼/SNS)
   - 저작권 및 정책 링크

## 4) 콘텐츠 카피 가이드(초안)

- **브랜드명**: NextAI Studio
- **메인 헤드라인 예시**:
  - AI 에이전트와 함께, 현대적인 앱 개발을 더 빠르게.
- **서브카피 예시**:
  - NextAI Studio는 기획부터 배포까지 AI 에이전트 기반 워크플로우로 MVP와 프로덕션 앱을 효율적으로 구축합니다.
- **톤앤매너**:
  - 간결함
  - 신뢰감
  - 현대적
  - 입문자 친화적 설명

## 5) 디자인 명세 (Claude 메인 테마 기반)

Claude 메인 테마 느낌을 반영해 따뜻한 뉴트럴 배경, 고대비 텍스트, 미니멀 레이아웃을 사용한다.

- **컬러 시스템(제안)**:
  - Background: `#F7F5F2`
  - Surface: `#FFFFFF`
  - Primary Text: `#1F1F1F`
  - Secondary Text: `#5B5B5B`
  - Accent: `#D97757`
  - Border: `#E8E2DA`

- **타이포그래피**:
  - `Pretendard`, `Inter`, `system-ui`, sans-serif
  - H1: 48~56px(Desktop), 32~36px(Mobile)
  - Body: 16~18px

- **레이아웃**:
  - Max-width: 1200px
  - Section padding: 80~120px
  - Desktop 12-column 그리드

- **컴포넌트 스타일**:
  - 카드: radius 16px, 얇은 border, 최소 그림자
  - 버튼:
    - Primary: Accent 배경 + 흰 글자
    - Secondary: 투명 배경 + border

## 6) 인터랙션/JS 명세

- Sticky 헤더 + 활성 섹션 하이라이트
- 스크롤 페이드업 애니메이션(`IntersectionObserver`)
- FAQ 아코디언 토글
- CTA 클릭 시 문의 섹션 스무스 스크롤
- 모바일 메뉴(햄버거) 토글

## 7) 접근성/품질 기준

- 시맨틱 태그 사용: `header`, `main`, `section`, `footer`
- 이미지 `alt` 텍스트 필수
- 키보드 포커스 스타일 제공
- 텍스트 대비 WCAG AA 권장
- Lighthouse 목표:
  - Performance 85+
  - Accessibility 95+
  - Best Practices 90+
  - SEO 90+

## 8) 파일 구조 제안

```text
/nextai-landing
  ├─ index.html
  ├─ /assets
  │   ├─ /images
  │   └─ /icons
  ├─ /styles
  │   ├─ reset.css
  │   └─ main.css
  └─ /scripts
      └─ main.js
```

## 9) 구현 우선순위 (입문자용)

1. HTML 섹션 골격 작성
2. CSS 테마 및 반응형 구현
3. JS 인터랙션(네비/FAQ/스크롤) 구현
4. 접근성/성능 점검 후 배포
