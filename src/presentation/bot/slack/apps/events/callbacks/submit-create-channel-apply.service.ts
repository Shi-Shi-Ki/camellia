import { Inject, Injectable, Logger } from "@nestjs/common"
import { ISlackBotRegisterHandler } from "@presentation/bot/slack/apps/i-slack-bot-register-handler"
import { BotWorkflow } from "@domain/workflows/bot.workflow"
import {
  I_ADMIN_NOTIFICATION_GATEWAY,
  type IAdminNotificationGateway,
} from "@domain/gateways/i-admin-notification.gateway"
import AppClass from "@slack/bolt"

@Injectable()
export class SubmitCreateChannelApplyService implements ISlackBotRegisterHandler {
  private readonly logger = new Logger(SubmitCreateChannelApplyService.name)

  constructor(
    @Inject(I_ADMIN_NOTIFICATION_GATEWAY) private readonly adminNotifier: IAdminNotificationGateway
  ) {}

  register(app: AppClass): void {
    app.view(BotWorkflow.CREATE_CHANNEL.CALLBACK_ID, async ({ ack, view, body }) => {
      await ack()

      this.logger.debug("view", view)
      this.logger.debug("body", body)

      const user = body["user"]["id"]
      const channelName =
        view["state"]["values"]["channel_name_block"]["channel_name_input"]["value"]

      try {
        await this.adminNotifier.notify(
          `チャンネル作成申請\n申請者: <@${user}>\nチャンネル名: ${channelName || ""}`
        )
      } catch (error) {
        console.error(error)
      }
    })
  }
}
