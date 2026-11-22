#
# SSM
#

resource "aws_ssm_parameter" "slack_user_oauth_token" {
  name  = "/slack_app/slack_user_oauth_token"
  type  = "SecureString"
  value = var.slack_user_oauth_token
}

resource "aws_ssm_parameter" "slack_bot_oauth_token" {
  name  = "/slack_app/slack_bot_oauth_token"
  type  = "SecureString"
  value = var.slack_bot_oauth_token
}

resource "aws_ssm_parameter" "slack_socket_token" {
  name  = "/slack_app/slack_socket_token"
  type  = "SecureString"
  value = var.slack_socket_token
}

resource "aws_ssm_parameter" "slack_signing_secret" {
  name  = "/slack_app/slack_signing_secret"
  type  = "SecureString"
  value = var.slack_signing_secret
}
