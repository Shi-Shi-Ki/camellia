import type { SlackEventMiddlewareArgs, AllMiddlewareArgs } from "@slack/bolt"
import { stripSlackMentions } from "@/common/utils"
import { ChatPostMessageResponse } from "@slack/web-api"
import type { KnownBlock } from "@slack/types"

type MentionEventArgs = SlackEventMiddlewareArgs<"app_mention"> & AllMiddlewareArgs

type CleanedMentionPayload = MentionEventArgs["payload"] & {
  cleanedText: string
}

type SayThreadOptions = {
  blocks?: KnownBlock[]
}

type CleanedMentionArgs = Omit<MentionEventArgs, "payload"> & {
  payload: CleanedMentionPayload
  sayThread: (message: string, options?: SayThreadOptions) => Promise<ChatPostMessageResponse>
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
    const sayThread = (message: string, options?: SayThreadOptions) =>
      args.say({ text: message, thread_ts: threadTs, ...options })

    await handler({
      ...args,
      payload: { ...args.payload, cleanedText },
      sayThread,
    })
  }
}
