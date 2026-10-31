module "llm" {
  count  = var.enable_bedrock ? 1 : 0
  source = "./modules/llm"

  aws_region       = var.aws_region
  bedrock_model_id = var.bedrock_model_id
  sso_user_name    = var.sso_user_name
}
