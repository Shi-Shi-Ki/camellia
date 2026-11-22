import { Injectable } from "@nestjs/common"
import { WebClient } from "@slack/web-api"
import { getEnvValueOrFail } from "@/common/utils"
import { IAdminNotificationGateway } from "@domain/gateways/i-admin-notification.gateway"

@Injectable()
export class AdminNotificationGatewayService implements IAdminNotificationGateway {
  private readonly client = new WebClient(getEnvValueOrFail(process.env.BOT_USER_OAUTH_TOKEN))

  async notify(message: string): Promise<void> {
    await this.client.chat.postMessage({
      channel: getEnvValueOrFail(process.env.ADMIN_CHANNEL_ID),
      text: message,
    })
  }
}
