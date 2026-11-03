import { Module } from "@nestjs/common"
import { SlackBotModule } from "./bot/slack/slack-bot.module"
import { AwsModule } from "./aws/aws.module"
// import { DifyModule } from "./dify/dify.module"

@Module({
  // imports: [SlackBotModule, AwsModule, DifyModule],
  imports: [SlackBotModule, AwsModule],
})
export class InfrastructureModule {}
