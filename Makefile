.PHONY: install dev build lint preview clean

install: ## 의존성 설치
	npm install

dev: ## 로컬 개발 서버 실행
	npm run dev

build: ## 프로덕션 빌드
	npm run build

lint: ## ESLint 검사
	npm run lint

preview: ## 빌드 결과 미리보기
	npm run preview

clean: ## 빌드 산출물 삭제
	rm -rf dist node_modules

help: ## 사용 가능한 명령어 목록
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2}'
