import { Module } from "@nestjs/common"
import { CreateChannelModalService } from "./modals/users/create-channel.modal.service"
import { BotActionEventService } from "./bot-action-event.service"
import { I_MODAL_OPENER } from "@/domain/workflows/modal-opener/i-modal-opener"

@Module({
  providers: [
    CreateChannelModalService,
    BotActionEventService,
    {
      provide: I_MODAL_OPENER,
      useFactory: (createChannel: CreateChannelModalService) => [createChannel],
      inject: [CreateChannelModalService],
    },
  ],
  exports: [BotActionEventService, I_MODAL_OPENER],
})
export class BotActionModule {}
