import { IChatBotGateway } from "@/domain/gateways/i-chat-bot.gateway"
import { Inject, Injectable, Logger } from "@nestjs/common"
import { App } from "@slack/bolt"

@Injectable()
export class SlackBotGatewayService implements IChatBotGateway {
  private readonly logger = new Logger(SlackBotGatewayService.name)

  constructor(@Inject("SLACK_BOLT_APP") private readonly app: App) {}

  async start(): Promise<void> {
    await this.app.start()
    this.logger.debug("start!!")
  }
}
