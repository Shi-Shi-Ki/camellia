# 現在の認証情報が紐づくアカウントIDを自動取得
# developmentユーザーでログインしているアカウント＝ここに権限を割り当てるアカウント
data "aws_caller_identity" "current" {}

# アカウントに紐づくIAM Identity Centerインスタンスを自動取得
data "aws_ssoadmin_instances" "this" {}

# "development" というユーザー名からユーザーIDを取得
data "aws_identitystore_user" "development" {
  identity_store_id = tolist(data.aws_ssoadmin_instances.this.identity_store_ids)[0]

  alternate_identifier {
    unique_attribute {
      attribute_path  = "UserName"
      attribute_value = var.sso_user_name
    }
  }
}
