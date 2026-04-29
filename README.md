# NextAI Studio 웹페이지 구현 요약

이 프로젝트는 `g:\groom\groom-0429-01-webpage.html` 단일 HTML 파일로 구성된 싱글 페이지 랜딩/소개 페이지입니다.

## 포함된 주요 기능

### 1) 라이트/다크 테마 토글

- CSS 변수 기반 테마 전환: `:root`(라이트) + `[data-theme="dark"]`(다크)
- 상단 헤더 `테마 전환` 버튼으로 전환
- 선택값은 `localStorage`에 저장/복원
  - 키: `nextai-theme`

### 2) 다국어 UI 전환 (ko / en / ja / zh)

- 상단 헤더 `언어 선택` 드롭다운으로 전환
- `translations` 사전 + `data-i18n` 속성을 기반으로 텍스트를 교체
- 선택값은 `localStorage`에 저장/복원
  - 키: `nextai-lang`

### 3) 하단 고객 문의 폼 (메일 전송: `mailto:`)

- 기존 하단 `mailto:` 링크 대신, `이름/이메일/문의 사항` 입력 폼을 제공
- 제출 시 `swleelee860921@naver.com`으로 `mailto:` URL을 생성해 메일 앱을 열도록 처리
- 프론트단 간단 검증
  - 이름 필수
  - 이메일 형식 검증
  - 문의 내용 필수
- 메일 내용 구성
  - subject: `NextAI Studio 문의`(언어별 번역 반영)
  - body: 이름/이메일/메시지 + `문의 언어`(선택 언어 라벨)

### 4) 접근성/UX 보강

- FAQ 아코디언에 `aria-expanded` 및 `aria-controls`/`id` 연결 보강
- 포커스 링은 다크 테마에서도 보이도록 변수 기반으로 조정
- 네비 활성화(스크롤 기반) / FAQ 아코디언 / 스크롤 reveal(IntersectionObserver) 기존 동작 유지

## 파일 구조(현재 사용 중)

- `g:\groom\groom-0429-01-webpage.html`
  - HTML/CSS/JS가 한 파일에 모두 포함됨
  - 테마/다국어/문의 폼 로직은 하단 `<script>`에서 동작
- `g:\groom\nextai-studio-specification.md`
  - 웹페이지 기술명세(구현 기준)

## 로컬에서 실행/확인

- 브라우저에서 `groom-0429-01-webpage.html`을 열면 바로 동작합니다.
- 확인 포인트
  - 상단에서 `테마`와 `언어`가 즉시 반영되는지
  - 하단 문의 폼 제출 시 메일 앱이 열리고 제목/본문이 채워지는지

