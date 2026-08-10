import { App } from "@slack/bolt"

export interface ISlackBotRegisterHandler {
  register(app: App): void
}
export const I_SLACK_BOT_REGISTER_HANDLER = Symbol.for("ISlackBotRegisterHandler")
