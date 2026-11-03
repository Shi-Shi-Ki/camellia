import z from "zod"

const menuActionEnum = z.enum(["CREATE", "CANCEL"])

export const WorkFlowTypeEntrySchema = z.object({
  ENTRY: z.object({
    EVENT_NAME: z.string(),
  }),
})
export type WorkFlowTypeEntryType = z.infer<typeof WorkFlowTypeEntrySchema>

export const WorkFlowTypeMessageSchema = z.object({
  MESSAGE: z.object({
    actionId: z.string(),
  }),
})
export type WorkFlowTypeMessageType = z.infer<typeof WorkFlowTypeMessageSchema>

export const WorkFlowTypeMenuSchema = z.object({
  MENU: z.object({
    actionId: z.string(),
    options: z.record(menuActionEnum, z.string()),
  }),
})
export type WorkFlowTypeMenuType = z.infer<typeof WorkFlowTypeMenuSchema>

export const WorkFlowTypeModalSchema = z.object({
  MODAL: z.object({
    viewId: z.string(),
    callbackId: z.string(),
    blocks: z
      .object({
        id: z.string(),
        actionId: z.string(),
      })
      .array(),
  }),
})
export type WorkFlowTypeModalType = z.infer<typeof WorkFlowTypeModalSchema>

export const WorkflowSchema = z.object({
  WorkFlowTypeEntrySchema,
  WorkFlowTypeMessageSchema,
  WorkFlowTypeMenuSchema,
  WorkFlowTypeModalSchema,
})
// export type WorkFlows = z.infer<typeof WorkflowSchema>

export type WorkFlows =
  | WorkFlowTypeEntryType
  | WorkFlowTypeMessageType
  | WorkFlowTypeMenuType
  | WorkFlowTypeModalType
