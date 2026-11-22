import { IModalOpener } from "@domain/workflows/modal-opener/i-modal-opener"
import { KnownBlock } from "@slack/types"

export const BOT_MENU_ACTION_ID = "bot_menu_select" as const

export const buildBotMenuBlocks = (openers: IModalOpener[]): KnownBlock[] => [
  {
    type: "actions",
    block_id: "bot_menu_block",
    elements: [
      {
        type: "static_select",
        action_id: BOT_MENU_ACTION_ID,
        placeholder: { type: "plain_text", text: "操作を選択してください" },
        options: openers.map((opener) => ({
          text: { type: "plain_text", text: opener.label },
          value: opener.menuValue,
        })),
      },
    ],
  },
]
