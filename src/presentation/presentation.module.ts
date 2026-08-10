import { Module } from "@nestjs/common"
import { BotCallEventService } from "./bot/slack/apps/events/bot-call.event.service"
import { I_SLACK_BOT_REGISTER_HANDLER } from "./bot/slack/apps/i-slack-bot-register-handler"
import { AwsModule } from "@/infrastructure/aws/aws.module"

@Module({
  imports: [AwsModule],
  providers: [
    BotCallEventService,
    {
      provide: I_SLACK_BOT_REGISTER_HANDLER,
      useFactory: (botCall: BotCallEventService) => [botCall],
      inject: [BotCallEventService],
    },
  ],
  exports: [I_SLACK_BOT_REGISTER_HANDLER],
})
export class PresentationModule {}
