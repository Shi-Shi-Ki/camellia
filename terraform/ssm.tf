#
# SSM
#

resource "aws_ssm_parameter" "slack_user_oauth_token" {
  name  = "slack_app/SLACK_USER_OAUTH_TOKEN"
  type  = "SecureString"
  value = var.slack_user_oauth_token
}

resource "aws_ssm_parameter" "slack_bot_oauth_token" {
  name  = "slack_app/SLACK_BOT_OAUTH_TOKEN"
  type  = "SecureString"
  value = var.slack_bot_user_oauth_token
}

resource "aws_ssm_parameter" "slack_socket_token" {
  name  = "slack_app/SLACK_SOCKET_TOKEN"
  type  = "SecureString"
  value = var.slack_socket_token
}

resource "aws_ssm_parameter" "slack_signing_secret" {
  name  = "slack_app/SLACK_SIGNING_SECRET"
  type  = "SecureString"
  value = var.slack_signing_secret
}
