import { SayArguments } from "@slack/bolt"
import { AppMentionEvent } from "@slack/web-api"

export interface ISlackBotSayHandler {
  invoke(event: AppMentionEvent): Promise<SayArguments>
}
export const I_SLACK_BOT_SAY_HANDLER = Symbol.for("ISlackBotSayHandler")
