import { WorkFlows } from "./bot.type"

export const BotWorkflow = {
  ENTRY: {
    EVENT_NAME: "app_mention",
  },
} as const satisfies WorkFlows
