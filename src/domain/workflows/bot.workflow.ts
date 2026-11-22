import { WorkFlows } from "./bot.type"

export const BotWorkflow = {
  ENTRY: {
    EVENT_NAME: "app_mention",
  },
  CREATE_CHANNEL: {
    CALLBACK_ID: "submit_create_channel_apply",
  },
} as const satisfies WorkFlows
