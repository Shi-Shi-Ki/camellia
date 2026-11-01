# camellia

## 概要
- Slack Bot（@slack/bolt）のバックエンド。AWS Bedrock・Dify の LLM と連携して応答し、トークン類は SSM から取得する
- 主要ディレクトリ: src/（NestJS。domain / application / infrastructure / presentation / common のクリーンアーキテクチャ構成）, test/（e2e）, terraform/（AWS: Bedrock・SSM・IAM）

## バージョン
- Node.js 24.x / TypeScript 5.9.x（package.json は ^5.7.3） / pnpm 10.x
- NestJS 11.x / Jest 30.x / ESLint 9.x + Prettier 3.x
- Terraform >= 1.9（providers.tf の required_version）/ AWS provider 5.x（~> 5.60）
- ローカル: Redis 8.x・LocalStack（docker-compose.yml）

## コマンド
- テスト: `pnpm test`（単体: `pnpm test -- path/to/file.spec.ts`、e2e: `pnpm test:e2e`）
- 型チェック: `pnpm exec tsc --noEmit`
- Lint: `pnpm lint`（`--fix` 付きのため、ファイルが書き換わる）
- Terraform: `cd terraform && terraform fmt -recursive && terraform validate`

## 完了の定義
- 変更後に型チェック / lint / テストを実行し、すべて成功したことを報告する
- 失敗した場合はテストを削除・スキップせず、原因を報告する

## 禁止事項
- `terraform apply` を実行しない（人間が行う）
- 新しい依存パッケージを追加する前に確認を取る
- 設計判断（ライブラリ選定、データモデル変更、アーキテクチャ変更）は実装前に選択肢を提示し、docs/adr/ に ADR の下書きを作る
- `aws` コマンドでリソースを作成・変更・削除しない（参照系のみ）。`aws ssm get-parameter(s) --with-decryption` で SecureString を復号しない
- `terraform/*.tfstate*`・`*.tfvars`・`.env` を読まない
- `docker compose down -v` を実行しない（LocalStack / Redis のデータが消える）

## プロジェクト固有の注意点
- Terraform の state はローカル（terraform/terraform.tfstate）にあり、backend は未設定。変数は terraform/value.tfvars（git 管理外）
- パスエイリアス（`@domain/*` `@infrastructure/*` など）は tsconfig.json の paths で定義している
- 必要な環境変数は .env.example を参照する。コードが参照するのは `BOT_USER_OAUTH_TOKEN` `SOCKET_TOKEN` `SLACK_SIGNING_SECRET` `PORT` `AWS_REGION` `BEDROCK_MODEL_ID` `DIFY_API_URL` `DIFY_API_KEY`、docker-compose.yml は `DEBUG` `LOCAL_STACK_VOLUME_DIR` も使う

## 参照
- チーム共通の規約: .claude/rules/team-*.md（中央リポジトリから同期。ここでは編集しない）
- このリポジトリ固有の規約: .claude/rules/local-*.md
- 設計判断の履歴: docs/adr/
