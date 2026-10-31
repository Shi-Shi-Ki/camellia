import { AllMiddlewareArgs, SlackActionMiddlewareArgs } from "@slack/bolt"

export interface IModalOpener {
  readonly menuValue: string
  open(args: SlackActionMiddlewareArgs & AllMiddlewareArgs): Promise<void>
}
export const I_MODAL_OPENER = Symbol.for("IModalOpener")
