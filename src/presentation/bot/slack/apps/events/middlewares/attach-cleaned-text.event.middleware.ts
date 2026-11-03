import type { SlackEventMiddlewareArgs, AllMiddlewareArgs } from "@slack/bolt"
import { stripSlackMentions } from "@/common/utils"
import { ChatPostMessageResponse } from "@slack/web-api"

type MentionEventArgs = SlackEventMiddlewareArgs<"app_mention"> & AllMiddlewareArgs

type CleanedMentionPayload = MentionEventArgs["payload"] & {
  cleanedText: string
}

type CleanedMentionArgs = Omit<MentionEventArgs, "payload"> & {
  payload: CleanedMentionPayload
  sayThread: (message: string) => Promise<ChatPostMessageResponse>
}

/**
 * app_mentionのpayloadからボットのメンション文字列を取り除いた
 * cleanedTextを付与した状態でハンドラを呼び出すラッパー
 */
export function withCleanedMention(
  handler: (args: CleanedMentionArgs) => Promise<void>
): (args: MentionEventArgs) => Promise<void> {
  return async (args) => {
    const cleanedText = stripSlackMentions(args.payload.text)
    const threadTs = ("thread_ts" in args.payload && args.payload.thread_ts) || args.payload.ts
    const sayThread = (message: string) => args.say({ text: message, thread_ts: threadTs })

    await handler({
      ...args,
      payload: { ...args.payload, cleanedText },
      sayThread,
    })
  }
}
