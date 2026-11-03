import { Module } from "@nestjs/common"
import { BotCallEventService } from "./bot-call.event.service"
import { I_SLACK_BOT_REGISTER_HANDLER } from "../i-slack-bot-register-handler"
// import { BotActionModule } from "../actions/bot-action.module"
import { BotEventCallbackModule } from "./callbacks/bot-event-callback.module"

@Module({
  // imports: [BotActionModule],
  imports: [BotEventCallbackModule],
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
export class BotEventModule {}
