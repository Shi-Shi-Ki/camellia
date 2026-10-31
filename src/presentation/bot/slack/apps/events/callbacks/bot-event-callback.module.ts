import { Module } from "@nestjs/common"
import { SubmitCreateChannelApplyService } from "./submit-create-channel-apply.service"

@Module({
  providers: [SubmitCreateChannelApplyService],
})
export class BotEventCallbackModule {}
