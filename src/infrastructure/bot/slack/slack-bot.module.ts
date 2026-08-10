import { Inject, Module } from "@nestjs/common"
import { App } from "@slack/bolt"
import { SlackBotGatewayService } from "./slack-bot.gateway.service"
import { I_CHAT_BOT_GATEWAY, type IChatBotGateway } from "@/domain/gateways/i-chat-bot.gateway"
import { SlackRouterRepositoryService } from "./slack-router.repository.service"
import { PresentationModule } from "@/presentation/presentation.module"

@Module({
  imports: [PresentationModule],
  providers: [
    {
      provide: "SLACK_BOLT_APP",
      useFactory: () => {
        return new App({
          token: process.env.BOT_USER_OAUTH_TOKEN ?? "",
          signingSecret: process.env.SLACK_SIGNING_SECRET ?? "",
          socketMode: true,
          appToken: process.env.SOCKET_TOKEN ?? "",
        })
      },
    },
    {
      provide: I_CHAT_BOT_GATEWAY,
      useClass: SlackBotGatewayService,
    },
    SlackRouterRepositoryService,
  ],
})
export class SlackBotModule {
  constructor(
    @Inject(I_CHAT_BOT_GATEWAY)
    private readonly slackBotGatewayService: IChatBotGateway
  ) {}

  async onModuleInit() {
    await this.slackBotGatewayService.start()
  }
}
