---
name: review
description: 手元でコードレビューを行う。PR の `@claude review` と同じ基準（REVIEW.md、.claude/rules/）を使う。「レビューして」「review」と言われたら使用する。
allowed-tools:
  - Read
  - Glob
  - Grep
---

# コードレビュー

基準は PR の `@claude review` と同じファイルを読む。このスキルに観点を書き足さず、観点を変えるときは下のファイルを直す。

## 読むもの
1. `REVIEW.md`（チーム共通。重大度の定義と必須チェック。「基準の優先順位」もここにある）
2. 変更したファイルのディレクトリにある `REVIEW.md`（あれば）
3. `.claude/rules/team-*.md`（チーム共通の規約）
4. `.claude/rules/local-*.md`（camellia 固有。NestJS・Slack Bolt の観点は `local-nestjs.md`）

共通の基準とリポジトリ固有の基準が相反するときは、REVIEW.md の「基準の優先順位」に従う。

## 前提
- 依存関係の正確なバージョンは package.json を参照する。バージョンによって挙動や非推奨 API が変わるため、推測で判断しない。

## 出力
- ファイル名・行番号・重大度（REVIEW.md の定義）・指摘内容・改善案を表にする
- 重大度の高い順に並べる
