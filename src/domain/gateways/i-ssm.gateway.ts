import { z } from "zod"

export const ParameterValueSchema = z.object({
  Parameter: z.object({
    Name: z.string(),
    Value: z.string(),
  }),
})
export type ParameterValueResponse = z.infer<typeof ParameterValueSchema>

export interface ISsmGateway {
  getParameterValue(name: string): Promise<ParameterValueResponse>
}

export const I_SSM_GATEWAY = Symbol.for("ISsmGateway")
