export interface LlmReply {
  text: string
  conversationId?: string
}

export interface ILlmGateway {
  generateReply(prompt: string, conversationId?: string): Promise<LlmReply>
}

export const I_LLM_GATEWAY = Symbol.for("ILlmGateway")
