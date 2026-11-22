import { Test, TestingModule } from "@nestjs/testing"
import { BotCallEventService } from "./bot-call.event.service"
import { I_MODAL_OPENER } from "@domain/workflows/modal-opener/i-modal-opener"

describe("BotCallEventService", () => {
  let service: BotCallEventService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BotCallEventService, { provide: I_MODAL_OPENER, useValue: [] }],
    }).compile()

    service = module.get<BotCallEventService>(BotCallEventService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })
})
