import { Module } from "@nestjs/common"
import { DifyGatewayService } from "./dify.gateway.service"
import { I_LLM_GATEWAY } from "@/domain/gateways/i-llm.gateway"

@Module({
  providers: [
    {
      provide: I_LLM_GATEWAY,
      useClass: DifyGatewayService,
    },
  ],
  exports: [I_LLM_GATEWAY],
})
export class DifyModule {}
