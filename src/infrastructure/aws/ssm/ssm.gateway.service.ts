import {
  ISsmGateway,
  ParameterValueResponse,
  ParameterValueSchema,
} from "@/domain/gateways/i-ssm.gateway"
import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm"
import { Inject, Injectable } from "@nestjs/common"

@Injectable()
export class SsmGatewayService implements ISsmGateway {
  constructor(@Inject("SSM_CLIENT") private readonly ssmClient: SSMClient) {}

  async getParameterValue(name: string): Promise<ParameterValueResponse> {
    const result = await this.ssmClient.send(
      new GetParameterCommand({
        Name: name,
        WithDecryption: true,
      })
    )

    return ParameterValueSchema.parse(result)
  }
}
