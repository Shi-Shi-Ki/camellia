data "aws_iam_policy_document" "bedrock_invoke" {
  statement {
    sid    = "AllowBedrockInvokeModel"
    effect = "Allow"
    actions = [
      "bedrock:InvokeModel",
      "bedrock:InvokeModelWithResponseStream",
    ]
    resources = [
      "arn:aws:bedrock:${var.aws_region}::foundation-model/${var.bedrock_model_id}",
    ]
  }
}

resource "aws_ssoadmin_permission_set" "slack_bot_bedrock" {
  instance_arn     = tolist(data.aws_ssoadmin_instances.this.arns)[0]
  name             = "SlackBotBedrockAccess"
  description      = "Slack bot local dev: allow invoking a specific Bedrock model"
  session_duration = "PT12H" # セッション最大12時間
}

resource "aws_ssoadmin_permission_set_inline_policy" "slack_bot_bedrock" {
  instance_arn       = tolist(data.aws_ssoadmin_instances.this.arns)[0]
  permission_set_arn = aws_ssoadmin_permission_set.slack_bot_bedrock.arn
  inline_policy      = data.aws_iam_policy_document.bedrock_invoke.json
}

resource "aws_ssoadmin_account_assignment" "slack_bot_bedrock_assignment" {
  instance_arn       = tolist(data.aws_ssoadmin_instances.this.arns)[0]
  permission_set_arn = aws_ssoadmin_permission_set.slack_bot_bedrock.arn

  principal_id   = data.aws_identitystore_user.development.user_id
  principal_type = "USER"

  target_id   = data.aws_caller_identity.current.account_id
  target_type = "AWS_ACCOUNT"
}
