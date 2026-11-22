import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import "dotenv/config"
import { getEnvValueOrFail } from "./common/utils"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(getEnvValueOrFail(process.env.PORT, "3000"))
}
bootstrap().catch((e) => console.error(e))
