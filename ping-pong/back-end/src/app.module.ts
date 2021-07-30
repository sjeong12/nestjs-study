import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
