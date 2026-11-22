/**
 * ChatBot interface
 */
export interface IChatBotGateway {
  /**
   * chatbotの開始処理
   */
  start(): Promise<void>
}
export const I_CHAT_BOT_GATEWAY = Symbol.for("IChatBotGateway")
