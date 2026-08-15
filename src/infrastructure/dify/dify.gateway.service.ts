import { ILlmGateway, LlmReply } from "@/domain/gateways/i-llm.gateway"
import { Injectable, Logger } from "@nestjs/common"

interface DifyChatResponse {
  answer: string
  conversation_id: string
}

@Injectable()
export class DifyGatewayService implements ILlmGateway {
  private readonly logger = new Logger(DifyGatewayService.name)
  private readonly baseUrl: string
  private readonly apiKey: string

  constructor() {
    this.baseUrl = process.env.DIFY_API_URL ?? "http://localhost/v1"
    this.apiKey = process.env.DIFY_API_KEY ?? ""
  }

  async generateReply(prompt: string, conversationId?: string): Promise<LlmReply> {
    const response = await fetch(`${this.baseUrl}/chat-messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: {},
        query: prompt,
        response_mode: "blocking",
        conversation_id: conversationId ?? "",
        user: "slack-bot",
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      this.logger.error(`Dify API error: ${response.status} ${errorBody}`)
      throw new Error(`Dify API returned ${response.status}`)
    }

    const data = (await response.json()) as DifyChatResponse

    return {
      text: data.answer,
      conversationId: data.conversation_id,
    }
  }
}
