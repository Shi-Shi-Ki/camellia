import { Injectable } from "@nestjs/common"
import { SlackActionMiddlewareArgs, AllMiddlewareArgs, BlockAction } from "@slack/bolt"
import { AbstractModalOpener } from "../abstract-modal-opener"
import { ModalView } from "@slack/web-api"
import { buildCreateChannelView } from "./views/build-create-channel.view"
import { BotWorkflow } from "@domain/workflows/bot.workflow"

@Injectable()
export class CreateChannelModalService extends AbstractModalOpener {
  readonly menuValue = "create_channel" as const
  readonly label = "チャンネル作成" as const
  readonly callbackId = BotWorkflow.CREATE_CHANNEL.CALLBACK_ID

  protected buildView(
    args: SlackActionMiddlewareArgs<BlockAction> & AllMiddlewareArgs
  ): ModalView | Promise<ModalView> {
    return buildCreateChannelView(args, this.callbackId)
  }
}
