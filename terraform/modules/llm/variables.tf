variable "aws_region" {
  description = "Bedrockを利用するリージョン"
  type        = string
}

variable "bedrock_model_id" {
  description = "呼び出しを許可するBedrockモデルID"
  type        = string
}

variable "sso_user_name" {
  description = "パーミッションセットを割り当てるIAM Identity Centerのユーザー名"
  type        = string
}
