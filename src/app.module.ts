import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { SlackBotModule } from "./infrastructure/bot/slack/slack-bot.module"
import { PresentationModule } from "./presentation/presentation.module"
import { AwsModule } from "./infrastructure/aws/aws.module"
import { DifyModule } from "./infrastructure/dify/dify.module"

@Module({
  imports: [SlackBotModule, PresentationModule, AwsModule, DifyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
