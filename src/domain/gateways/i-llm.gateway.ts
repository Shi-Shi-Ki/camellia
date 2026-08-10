export interface ILlmGateway {
  generateReply(prompt: string): Promise<string>
}
export const I_LLM_GATEWAY = Symbol.for("ILlmGateway")
