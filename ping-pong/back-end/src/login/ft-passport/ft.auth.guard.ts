import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class FtAuthGuard extends AuthGuard('42') {
  handleRequest(err, user, info, context: ExecutionContext) {
    console.log(`👍 FtAuthGuard extends 42 AuthGuard...`);
    if (err || !user) {
      const res = context.switchToHttp().getResponse();
      return res.redirect('/login/err');
    }
    console.log(`[user] ${JSON.stringify(user)}`);
    console.log(`[info] ${JSON.stringify(info)}`);
    return user;
  }
}
