import { ViewsOpenArguments } from "@slack/web-api"

export interface ISlackBotViewHandler {
  view(): Promise<ViewsOpenArguments>
}
export const I_SLACK_BOT_VIEW_HANDLER = Symbol.for("ISlackBotViewHandler")
