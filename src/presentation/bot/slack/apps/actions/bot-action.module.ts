import { Module } from "@nestjs/common"
import { CreateChannelModalService } from "./modals/users/create-channel.modal.service"

@Module({
  providers: [CreateChannelModalService],
})
export class BotActionModule {}
