import { Injectable } from "@nestjs/common"
import { SlackActionMiddlewareArgs, AllMiddlewareArgs, BlockAction } from "@slack/bolt"
import { AbstractModalOpener } from "../abstract-modal-opener"
import { ModalView } from "@slack/web-api"
import { buildCreateChannelView } from "./views/build-create-channel.view"

@Injectable()
export class CreateChannelModalService extends AbstractModalOpener {
  readonly menuValue = "create_channel" as const
  readonly callbackId = "submit_create_channel_apply" as const

  protected buildView(
    args: SlackActionMiddlewareArgs<BlockAction> & AllMiddlewareArgs
  ): ModalView | Promise<ModalView> {
    return buildCreateChannelView(args, this.callbackId)
  }
}
