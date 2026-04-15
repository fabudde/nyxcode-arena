# 🦞 NyxCode Arena

**AI Code Generation Benchmark — Side-by-side comparisons of NyxCode vs popular frameworks.**

Compare the same full-stack apps written in:
- **NyxCode** — AI-native language, one `.nyx` file = full-stack app
- **Next.js 15 + Prisma** — React framework with ORM
- **FastAPI + SQLAlchemy** — Python async framework with ORM

## 📊 Benchmark Results

| Scenario | NyxCode | Next.js 15 | FastAPI | Token Savings |
|----------|---------|------------|---------|---------------|
| Blog with Auth | 2,921 tokens / 1 file | 5,589 tokens / 8+ files | 4,820 tokens / 7 files | **-48% vs Next.js** |
| Todo App | 980 tokens / 1 file | 2,450 tokens / 5+ files | 2,100 tokens / 5 files | **-60% vs Next.js** |
| Chat (Realtime) | 1,520 tokens / 1 file | 4,200 tokens / 9+ files | 3,600 tokens / 7 files | **-64% vs Next.js** |

## 🔬 Methodology

- **Token counting:** OpenAI `cl100k_base` tokenizer (tiktoken)
- **Line counting:** `wc -l` excluding blank lines and comments
- **Fair comparison:** Identical features in each scenario
- **Blog tokens:** Measured values from NyxCode v0.12.7 benchmark
- **Todo/Chat tokens:** Estimated using measured efficiency ratios

## 🚀 View the Arena

Visit: [nyxcode-arena on GitHub Pages](https://fabudde.github.io/nyxcode-arena/)

Or open `index.html` locally.

## 🛠️ What is NyxCode?

NyxCode is an AI-native programming language that compiles `.nyx` files to:
- **Frontend:** HTML + CSS + JS (static site generation)
- **Backend:** Express + SQLite (full CRUD API + auth)

One file. Zero config. 48% fewer tokens than Next.js for full-stack apps.

```bash
npm i -g @fabudde/nyxcode
nyxcode dev app.nyx
```

- **npm:** [@fabudde/nyxcode](https://www.npmjs.com/package/@fabudde/nyxcode)
- **GitHub:** [fabudde/nyxcode](https://github.com/fabudde/nyxcode)

## 📄 License

MIT — [Fabian Budde](https://github.com/fabudde) & [Nyx](https://heynyx.dev) 🦞
