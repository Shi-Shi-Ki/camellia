output "permission_set_arn" {
  value       = aws_ssoadmin_permission_set.slack_bot_bedrock.arn
  description = "作成したBedrock呼び出し許可パーミッションセットのARN"
}

output "assigned_account_id" {
  value       = data.aws_caller_identity.current.account_id
  description = "権限を割り当てたAWSアカウントID"
}
