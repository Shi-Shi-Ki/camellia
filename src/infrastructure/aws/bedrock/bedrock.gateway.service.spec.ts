import { Test, TestingModule } from "@nestjs/testing"
import { BedRockGatewayService } from "./bedrock.gateway.service"

describe("BedRockGatewayService", () => {
  let service: BedRockGatewayService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BedRockGatewayService],
    }).compile()

    service = module.get<BedRockGatewayService>(BedRockGatewayService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })
})
