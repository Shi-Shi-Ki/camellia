import { Inject, Injectable, Logger } from "@nestjs/common"
import { App, BlockStaticSelectAction } from "@slack/bolt"
import { ISlackBotRegisterHandler } from "@presentation/bot/slack/apps/i-slack-bot-register-handler"
import { I_MODAL_OPENER, IModalOpener } from "@domain/workflows/modal-opener/i-modal-opener"
import { BOT_MENU_ACTION_ID } from "@presentation/bot/slack/apps/views/build-bot-menu.view"

@Injectable()
export class BotActionEventService implements ISlackBotRegisterHandler {
  private readonly logger = new Logger(BotActionEventService.name)

  constructor(@Inject(I_MODAL_OPENER) private readonly modalOpeners: IModalOpener[]) {}

  register(app: App): void {
    app.action<BlockStaticSelectAction>(BOT_MENU_ACTION_ID, async (args) => {
      const selected = args.payload.selected_option.value
      const opener = this.modalOpeners.find((o) => o.menuValue === selected)
      if (!opener) {
        this.logger.warn(`該当するIModalOpenerが見つからない menuValue: ${selected}`)
        await args.ack()
        return
      }
      await opener.open(args)
    })
  }
}
