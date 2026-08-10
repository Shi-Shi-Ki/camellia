variable "aws_region" {
  description = "Bedrockを利用するリージョン"
  type        = string
  default     = "ap-northeast-1"
}

variable "aws_profile" {
  description = "Terraform実行に使うAWS CLIプロファイル名（~/.aws/configのprofile名）"
  type        = string
  default     = "administrator_access-730335481619" # 実際のプロファイル名に合わせて変更可
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
