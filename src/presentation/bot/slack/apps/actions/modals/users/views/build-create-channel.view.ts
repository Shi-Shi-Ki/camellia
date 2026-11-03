import { AllMiddlewareArgs, BlockAction, SlackActionMiddlewareArgs } from "@slack/bolt"
import type { ModalView } from "@slack/types"

export const buildCreateChannelView = (
  args: SlackActionMiddlewareArgs<BlockAction> & AllMiddlewareArgs,
  callBackId: string
): ModalView => {
  return {
    type: "modal",
    callback_id: callBackId,
    title: { type: "plain_text", text: "チャンネル作成" },
    submit: { type: "plain_text", text: "作成" },
    close: { type: "plain_text", text: "キャンセル" },
    blocks: [
      {
        type: "input",
        block_id: "channel_name_block",
        label: { type: "plain_text", text: "チャンネル名" },
        element: {
          type: "plain_text_input",
          action_id: "channel_name_input",
        },
      },
    ],
  }
}
