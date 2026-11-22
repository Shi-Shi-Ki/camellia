---
paths:
  - "src/**/*.ts"
  - "test/**/*.ts"
---
# camellia 固有のレビュー観点（NestJS + Slack Bolt）

共通の基準（REVIEW.md、team-*.md）に加えて見る観点。共通の基準と重なる項目（シークレットのハードコード、ログへの機密情報の出力など）はここに書かない。

## モジュールの組み方（NestJS）
- domain / application / infrastructure / presentation の責務が分かれているか（domain が NestJS や外部 SDK に依存していないか）
- Module 間に循環依存（`forwardRef` での回避を含む）がないか
- DI を使わずに Provider を直接インスタンス化していないか
- 1 つの Service が肥大化・多責務化していないか

## Slack Bolt
- リクエストの署名検証（`SLACK_SIGNING_SECRET`）を無効にしていないか
- コマンドやメッセージ本文などの Slack からの入力を、検証してから LLM や外部 API に渡しているか
- 誰でも実行できてはいけないコマンドに、実行者の確認があるか

## 冗長性
- 同じロジックが複数箇所に重複していないか
- 不要な条件分岐、到達しないコード
- 過剰な抽象化・不要なラッパーがないか
