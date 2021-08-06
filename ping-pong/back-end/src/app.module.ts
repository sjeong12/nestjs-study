import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';
import { AppGateway } from './app.gateway';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, LoginModule],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
