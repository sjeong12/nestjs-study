import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { FtStrategy } from './ft-passport/ft.strategy';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [LoginController],
  providers: [LoginService, FtStrategy]
})
export class LoginModule {}
