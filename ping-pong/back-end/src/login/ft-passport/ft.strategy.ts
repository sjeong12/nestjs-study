import { Injectable, NotAcceptableException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-42';

const clientID = "221e5c10ec3f815a0374fbe3fe4ef7c8e3bba6b9e3d13d841be16694f2264a8e";
const clientSecret = "017d8b3e15eac3cbade5ca6c83fd80cca04488e699afdc18f97952342eba2a3a";
const callbackURL = "http://localhost:3000/login/return";

@Injectable()
export class FtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID,
      clientSecret,
      callbackURL,
    });
  }
  async validate(token: string, rt: string, profile: any) {
    console.log('🔍 FtStrategy extends PassportStrategy...');
    try {
      const user = { id: profile.id, username: profile.username, token: token};
      console.log(`[rt] ${rt}`);
      return user;
    } catch (e) {
      console.log(`❌ strategy error: ${e}`);
      throw e;
    }
  }
}
