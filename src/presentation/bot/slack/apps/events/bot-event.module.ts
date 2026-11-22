import { Module } from "@nestjs/common"
import { BotCallEventService } from "./bot-call.event.service"
import { I_SLACK_BOT_REGISTER_HANDLER } from "../i-slack-bot-register-handler"
import { BotActionModule } from "../actions/bot-action.module"
import { BotActionEventService } from "../actions/bot-action-event.service"
import { BotEventCallbackModule } from "./callbacks/bot-event-callback.module"
import { SubmitCreateChannelApplyService } from "./callbacks/submit-create-channel-apply.service"

@Module({
  imports: [BotEventCallbackModule, BotActionModule],
  providers: [
    BotCallEventService,
    {
      provide: I_SLACK_BOT_REGISTER_HANDLER,
      useFactory: (
        botCall: BotCallEventService,
        botAction: BotActionEventService,
        submitCreateChannel: SubmitCreateChannelApplyService
      ) => [botCall, botAction, submitCreateChannel],
      inject: [BotCallEventService, BotActionEventService, SubmitCreateChannelApplyService],
    },
  ],
  exports: [I_SLACK_BOT_REGISTER_HANDLER],
})
export class BotEventModule {}
