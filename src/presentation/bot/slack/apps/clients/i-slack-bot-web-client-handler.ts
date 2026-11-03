import { SlackAction } from "@slack/bolt"
import { WebClient } from "@slack/web-api"

export interface ISlackBotWebClientHandler {
  invoke(client: WebClient, body: SlackAction): Promise<void>
}
export const I_SLACK_BOT_WEB_CLIENT_HANDLER = Symbol.for("ISlackBotWebClientHandler")
