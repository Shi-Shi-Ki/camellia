variable "aws_region" {
  description = "region"
  type        = string
  default     = "ap-northeast-1"
}

variable "slack_user_oauth_token" {
  description = "slack user oauth token"
  type        = string
  default     = "xoxp-*"
}

variable "slack_bot_user_oauth_token" {
  description = "slack bot oauth token"
  type        = string
  default     = "xoxb-*"
}

variable "slack_signing_secret" {
  description = "slack signing secret value"
  type        = string
  default     = ""
}

variable "slack_socket_token" {
  description = "slack socket token"
  type        = string
  default     = "xapp-*"
}

variable "aws_profile" {
  description = "Terraform実行に使うAWS CLIプロファイル名（~/.aws/configのprofile名）"
  type        = string
  default     = "localstack" # 実際のプロファイル名に合わせて変更可
}

variable "bedrock_model_id" {
  description = "呼び出しを許可するBedrockモデルID"
  type        = string
  default     = "google.gemma-3-4b-it"
}

variable "sso_user_name" {
  description = "パーミッションセットを割り当てるIAM Identity Centerのユーザー名"
  type        = string
  default     = "development"
}

variable "enable_bedrock" {
  description = "Bedrock連携用のSSO権限セットなどLLM関連リソースを作成するかどうか"
  type        = bool
  default     = false
}
