# 둥가리 코퍼레이션 홈페이지

AI 기반 애니메이션 뮤직비디오 제작 스튜디오 — 둥가리 코퍼레이션의 온보딩 페이지입니다.

🔗 **사이트**: https://doongari-corp.github.io/homepage/

## 기술 스택

- React + Vite
- Tailwind CSS v4
- GitHub Pages (정적 배포)

## 로컬 실행

```bash
make install
make dev
```

## Make 명령어

| 명령어 | 설명 |
|--------|------|
| `make install` | 의존성 설치 |
| `make dev` | 로컬 개발 서버 실행 |
| `make build` | 프로덕션 빌드 |
| `make lint` | ESLint 검사 |
| `make preview` | 빌드 결과 미리보기 |
| `make clean` | 빌드 산출물 삭제 (`dist/`, `node_modules/`) |
| `make help` | 사용 가능한 명령어 목록 |

## 배포

`main` 브랜치에 push하면 GitHub Actions를 통해 GitHub Pages로 자동 배포됩니다.

> Settings → Pages → Source를 **GitHub Actions**으로 설정해야 합니다.
