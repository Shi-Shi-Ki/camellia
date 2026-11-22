import { Global, Module } from "@nestjs/common"
import { I_ADMIN_NOTIFICATION_GATEWAY } from "@domain/gateways/i-admin-notification.gateway"
import { AdminNotificationGatewayService } from "./admin-notification.gateway.service"

@Global()
@Module({
  providers: [
    {
      provide: I_ADMIN_NOTIFICATION_GATEWAY,
      useClass: AdminNotificationGatewayService,
    },
  ],
  exports: [I_ADMIN_NOTIFICATION_GATEWAY],
})
export class AdminNotificationModule {}
