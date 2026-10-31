output "permission_set_arn" {
  value       = try(module.llm[0].permission_set_arn, null)
  description = "作成したBedrock呼び出し許可パーミッションセットのARN（enable_bedrock=falseの場合はnull）"
}

output "assigned_account_id" {
  value       = try(module.llm[0].assigned_account_id, null)
  description = "権限を割り当てたAWSアカウントID（enable_bedrock=falseの場合はnull）"
}
