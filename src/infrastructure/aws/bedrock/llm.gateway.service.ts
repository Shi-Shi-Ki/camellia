import { type ILlmGateway } from "@/domain/gateways/i-llm.gateway"
import { BedrockRuntimeClient, ConverseCommand } from "@aws-sdk/client-bedrock-runtime"
import { Inject, Injectable, Logger } from "@nestjs/common"

@Injectable()
export class LlmGatewayService implements ILlmGateway {
  private readonly logger = new Logger(LlmGatewayService.name)
  private readonly modelId: string

  constructor(@Inject("BEDROCK_RUNTIME_CLIENT") private readonly client: BedrockRuntimeClient) {
    this.modelId = process.env.BEDROCK_MODEL_ID ?? "anthropic.claude-3-5-haiku-20241022-v1:0"
  }

  async generateReply(prompt: string): Promise<string> {
    const command = new ConverseCommand({
      modelId: this.modelId,
      messages: [
        {
          role: "user",
          content: [{ text: prompt }],
        },
      ],
      inferenceConfig: {
        maxTokens: 1024,
        temperature: 0.7,
      },
    })

    try {
      const response = await this.client.send(command)
      this.logger.log(response)
      const text = response.output?.message?.content?.[0]?.text

      if (!text) {
        this.logger.warn("Bedrock response contained no text")
        return "すみません、応答の生成に失敗しました。"
      }
      return text
    } catch (error) {
      this.logger.error("Failed to invoke Bedrock", error)
      throw error
    }
  }
}
