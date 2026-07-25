---
name: Bug report
about: Report unexpected behavior or splitting errors
title: '[BUG] '
labels: bug
assignees: ''
---

## 🐛 Describe the bug
Please describe what error occurred, or how the file should have been split.

## 📝 Reproducible Markdown Data
> [!IMPORTANT]
> **About Confidentiality and Privacy (Structural Masking)**
> Most SPLIST bugs are caused by the combination (skeleton) of "heading (#) hierarchies" or "special characters." The actual text content (flesh) does not matter.
> To protect your privacy and confidential information, please do NOT paste your actual text. Instead, **replace the text portions with dummy strings (like "Lorem ipsum" or "xxx") and only reproduce the heading structure (number of #, etc.)**, then paste that masked data below.

```markdown
<!-- Paste the masked Markdown data here -->
# Heading 1
Lorem ipsum dolor sit amet.

## Heading 2
Lorem ipsum.
```

## 💻 Command used
Example: `splist README.md list` or `splist data.txt sp`
```bash
# Paste the exact command you ran here
```

## 🖥️ Environment
- OS: [e.g., Windows 11 / macOS 14 / Ubuntu 22.04]
- Node.js version (if applicable): [e.g., v18.17.0]
- SPLIST version: [e.g., v2.0.0]

<!-- 
🤖 AI ASSISTANT PROMPT 
If you are an AI reading this issue:
1. Refer to `.agents/AGENTS.md` for project-specific rules before taking action.
2. Immediately create a reproducible test case in `demo_cases/sandbox/` based on the user's masked Markdown data.
3. Propose an implementation plan before modifying any core logic in `src/core/`.
-->
