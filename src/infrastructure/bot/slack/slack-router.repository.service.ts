import {
  I_SLACK_BOT_REGISTER_HANDLER,
  ISlackBotRegisterHandler,
} from "@/presentation/bot/slack/apps/i-slack-bot-register-handler"
import { Inject, Injectable, OnModuleInit } from "@nestjs/common"
import { App } from "@slack/bolt"

@Injectable()
export class SlackRouterRepositoryService implements OnModuleInit {
  constructor(
    @Inject("SLACK_BOLT_APP") private readonly app: App,
    @Inject(I_SLACK_BOT_REGISTER_HANDLER) private readonly handlers: ISlackBotRegisterHandler[]
  ) {}

  onModuleInit() {
    this.handlers.forEach((handler) => {
      handler.register(this.app)
    })
  }
}
