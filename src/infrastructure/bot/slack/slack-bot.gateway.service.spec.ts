import { Test, TestingModule } from "@nestjs/testing"
import { SlackBotGatewayService } from "./slack-bot.gateway.service"

describe("SlackBotGatewayService", () => {
  let service: SlackBotGatewayService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SlackBotGatewayService],
    }).compile()

    service = module.get<SlackBotGatewayService>(SlackBotGatewayService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })
})
