import { Inject, Injectable, Logger } from "@nestjs/common"
import { ISlackBotRegisterHandler } from "@presentation/bot/slack/apps/i-slack-bot-register-handler"
import { BotWorkflow } from "@domain/workflows/bot.workflow"
import AppClass from "@slack/bolt"
import { withCleanedMention } from "./middlewares/attach-cleaned-text.event.middleware"
import { I_LLM_GATEWAY, type ILlmGateway } from "@/domain/gateways/i-llm.gateway"

@Injectable()
export class BotCallEventService implements ISlackBotRegisterHandler {
  private readonly logger = new Logger(BotCallEventService.name)

  constructor(@Inject(I_LLM_GATEWAY) private readonly llmGateway: ILlmGateway) {}

  register(app: AppClass): void {
    this.logger.log("BotCallEventService start.")
    app.event(
      BotWorkflow.ENTRY.EVENT_NAME,
      withCleanedMention(async ({ sayThread, payload }) => {
        console.log(payload)
        try {
          const reply = await this.llmGateway.generateReply(payload.cleanedText)
          await sayThread(reply.text)
        } catch (e) {
          this.logger.error(e)
        }
      })
    )
  }
}
