import { SSMClient } from "@aws-sdk/client-ssm"
import { Module } from "@nestjs/common"
import { SsmGatewayService } from "./ssm.gateway.service"

@Module({
  providers: [
    {
      provide: "SSM_CLIENT",
      useFactory: () => {
        return new SSMClient({
          region: process.env.AWS_REGION ?? "ap-northeast-1",
        })
      },
    },
    SsmGatewayService,
  ],
})
export class SsmModule {}
