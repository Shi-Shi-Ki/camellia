import { IModalOpener } from "@/domain/workflows/modal-opener/i-modal-opener"
import { SlackActionMiddlewareArgs, AllMiddlewareArgs, BlockAction } from "@slack/bolt"
import { ModalView } from "@slack/web-api"

export abstract class AbstractModalOpener implements IModalOpener {
  abstract readonly menuValue: string
  abstract readonly callbackId: string

  protected abstract buildView(
    args: SlackActionMiddlewareArgs<BlockAction> & AllMiddlewareArgs
  ): ModalView | Promise<ModalView>

  async open(args: SlackActionMiddlewareArgs<BlockAction> & AllMiddlewareArgs): Promise<void> {
    const { ack, body, client } = args
    await ack()
    await client.views.open({
      trigger_id: body.trigger_id,
      view: await this.buildView(args),
    })
  }
}
