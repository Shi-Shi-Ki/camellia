/**
 * 管理者向けチャンネルへの通知インターフェース
 */
export interface IAdminNotificationGateway {
  notify(message: string): Promise<void>
}
export const I_ADMIN_NOTIFICATION_GATEWAY = Symbol.for("IAdminNotificationGateway")
