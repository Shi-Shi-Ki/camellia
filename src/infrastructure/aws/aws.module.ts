import { Module } from "@nestjs/common"
import { BedRockGatewayService } from "./bedrock/bedrock.gateway.service"
import { I_LLM_GATEWAY } from "@/domain/gateways/i-llm.gateway"
import { BedrockRuntimeClient } from "@aws-sdk/client-bedrock-runtime"
import { SsmModule } from "./ssm/ssm.module"

@Module({
  providers: [
    {
      provide: "BEDROCK_RUNTIME_CLIENT",
      useFactory: () => {
        return new BedrockRuntimeClient({
          region: process.env.AWS_REGION ?? "ap-northeast-1",
        })
      },
    },
    {
      provide: I_LLM_GATEWAY,
      useClass: BedRockGatewayService,
    },
  ],
  exports: [I_LLM_GATEWAY],
  imports: [SsmModule],
})
export class AwsModule {}
