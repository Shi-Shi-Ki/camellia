import { Test, TestingModule } from "@nestjs/testing"
import { BotActionEventService } from "./bot-action-event.service"
import { I_MODAL_OPENER } from "@domain/workflows/modal-opener/i-modal-opener"

describe("BotActionEventService", () => {
  let service: BotActionEventService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BotActionEventService, { provide: I_MODAL_OPENER, useValue: [] }],
    }).compile()

    service = module.get<BotActionEventService>(BotActionEventService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })
})
