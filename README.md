# 🦞 NyxCode Arena

**AI Code Generation Benchmark — built IN NyxCode.**

This benchmark page is itself a NyxCode app. The `arena.nyx` file compiles to the `index.html` you see deployed. That's the best proof that NyxCode works.

## 📊 Benchmark Results

| Scenario | NyxCode | Next.js 15 | FastAPI | Token Savings |
|----------|---------|------------|---------|---------------|
| Blog with Auth | 2,921 tokens / 1 file | 5,589 tokens / 8+ files | 4,820 tokens / 7 files | **-48% vs Next.js** |
| Todo App | 980 tokens / 1 file | 2,450 tokens / 5+ files | 2,100 tokens / 5 files | **-60% vs Next.js** |
| Chat (Realtime) | 1,520 tokens / 1 file | 4,200 tokens / 9+ files | 3,600 tokens / 7 files | **-64% vs Next.js** |

## 🔧 Build

```bash
npm i -g @fabudde/nyxcode
nyxcode build arena.nyx
# → dist-site/index.html
```

Or with the local compiler:
```bash
cd nyxcode-arena
node ../nyxcode/dist/cli.js build arena.nyx
cp dist-site/index.html index.html
```

## 🔬 Methodology

- **Token counting:** OpenAI `cl100k_base` tokenizer (tiktoken)
- **Line counting:** `wc -l` excluding blank lines and comments
- **Fair comparison:** Identical features in each scenario
- **Blog tokens:** Measured values from NyxCode v0.12.7 benchmark
- **Todo/Chat tokens:** Estimated using measured efficiency ratios

## 🚀 View the Arena

**Live:** [fabudde.github.io/nyxcode-arena](https://fabudde.github.io/nyxcode-arena/)

## What is NyxCode?

One `.nyx` file = full-stack app with DB, Auth, API, and frontend. Compiles to HTML+CSS+JS (frontend) and Express+SQLite (backend).

```bash
npm i -g @fabudde/nyxcode
nyxcode dev app.nyx
```

- **npm:** [@fabudde/nyxcode](https://www.npmjs.com/package/@fabudde/nyxcode)
- **GitHub:** [fabudde/nyxcode](https://github.com/fabudde/nyxcode)

## 📄 License

MIT — [Fabian Budde](https://github.com/fabudde) & [Nyx](https://heynyx.dev) 🦞
