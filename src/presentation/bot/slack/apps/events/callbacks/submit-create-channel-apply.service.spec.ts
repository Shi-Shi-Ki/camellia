import { Test, TestingModule } from "@nestjs/testing"
import { SubmitCreateChannelApplyService } from "./submit-create-channel-apply.service"
import { I_ADMIN_NOTIFICATION_GATEWAY } from "@domain/gateways/i-admin-notification.gateway"

describe("SubmitCreateChannelApplyService", () => {
  let service: SubmitCreateChannelApplyService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SubmitCreateChannelApplyService,
        { provide: I_ADMIN_NOTIFICATION_GATEWAY, useValue: { notify: jest.fn() } },
      ],
    }).compile()

    service = module.get<SubmitCreateChannelApplyService>(SubmitCreateChannelApplyService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })
})
