import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { coreConfig, httpConfig } from './config';
import { ExampleModule } from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env.development', '.env'],
      load: [httpConfig, coreConfig],
      isGlobal: true,
    }),
    ExampleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
