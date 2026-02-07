# 둥가리 코퍼레이션 홈페이지

React + Tailwind CSS v4 + Vite 기반 정적 온보딩 페이지. GitHub Pages로 배포.

## Commands

- `npm run dev`: 로컬 개발 서버
- `npm run build`: 프로덕션 빌드 (`dist/` 출력)
- `npm run lint`: ESLint 검사
- `npm run preview`: 빌드 결과 미리보기

## Architecture

- `src/App.jsx`: 메인 페이지 컴포넌트 (단일 페이지 구조)
- `src/main.jsx`: React 엔트리포인트
- `src/index.css`: Tailwind CSS 임포트
- `vite.config.js`: Vite 설정 (`base: '/homepage/'` for GitHub Pages)
- `.github/workflows/deploy.yml`: GitHub Pages 자동 배포

## Code Style

- Tailwind CSS utility 클래스 사용 (별도 CSS 파일 작성 금지)
- 컴포넌트는 `src/App.jsx`에 함수 선언으로 작성
- 한국어 콘텐츠 사용

## Important

- `vite.config.js`의 `base: '/homepage/'`는 GitHub Pages 경로와 일치해야 함
- DB 없음 — 모든 데이터는 컴포넌트 내 하드코딩
- 배포는 `main` 브랜치 push 시 GitHub Actions가 자동 처리

## Git

- Author: `doongari-corp <doongari.iragnood@gmail.com>`
- SSH alias: `github-doongari` (`~/.ssh/config`)
- Remote: `git@github-doongari:doongari-corp/homepage.git`
