---
name: workflow
description: Git feature workflow — pull latest main, create branch, implement feature, make PR, return to original branch
argument-hint: "[branch-name] [feature-description]"
disable-model-invocation: false
allowed-tools:
  - Bash(git *)
  - Bash(gh pr create *)
  - Bash(npm run build *)
  - Bash(npm run lint *)
---

Feature development workflow. Follow each step strictly in order.

## 1. Save current branch

Remember the current branch name so you can return to it at the end:
```
git rev-parse --abbrev-ref HEAD
```

## 2. Pull latest main

```
git checkout main
git pull origin main
```

## 3. Create feature branch

Create and checkout a new branch named `$0`. If no branch name is provided, derive one from the feature description using kebab-case (e.g., `feature/add-login-page`).

```
git checkout -b <branch-name>
```

## 4. Implement the feature

Implement the feature described by: **$1**

- Follow the project code style defined in CLAUDE.md
- Run `npm run build` to verify the build passes after changes
- Keep commits atomic and focused

## 5. Commit and push

- Stage only the relevant files (never use `git add .`)
- Write a clear commit message in Korean
- Push the branch to origin:
```
git push -u origin <branch-name>
```

## 6. Create a Pull Request

Create a PR against `main` using `gh pr create`. Use Korean for the title and body.

```
gh pr create --base main --title "<PR 제목>" --body "$(cat <<'EOF'
## 요약
<변경 사항 요약>

## 테스트
<테스트 내용>

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

Return the PR URL to the user.

## 7. Return to original branch

Switch back to the branch you were on before starting:
```
git checkout <original-branch>
```
