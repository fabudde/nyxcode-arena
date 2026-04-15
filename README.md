# 🦞 NyxCode Arena

**AI Code Generation Benchmark** — Compare NyxCode against Next.js, FastAPI, and more.

## Live Demo
🔗 [arena.nyxcode.io](https://arena.nyxcode.io)

## Built with NyxCode
This entire benchmark page is written in NyxCode (`arena.nyx`) and compiled to static HTML.

```bash
npm i -g @fabudde/nyxcode
nyxcode build arena.nyx
```

**579 lines of NyxCode → 27KB static HTML with interactive benchmark.**

## Benchmarks (tiktoken cl100k_base)

| Scenario | NyxCode | Next.js 15 | FastAPI | Savings |
|----------|---------|------------|---------|---------|
| Blog with Auth | 2,921 tokens | 5,589 tokens | 4,820 tokens | **48%** |
| Todo App | 1,850 tokens | 3,200 tokens | 3,400 tokens | **42%** |
| Realtime Chat | 2,100 tokens | 6,800 tokens | 5,200 tokens | **69%** |

## License
MIT
