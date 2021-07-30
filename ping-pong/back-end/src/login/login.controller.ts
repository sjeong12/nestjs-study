import { Controller, Get, Req, Request, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { FtAuthGuard } from './ft-passport/ft.auth.guard';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
	constructor(private readonly loginService: LoginService) {}

	@Get()
	@UseGuards(FtAuthGuard)
	login(@Request() req) {
		// console.log("🎮 Login Controller get request...");
		// console.log(`[req] ${JSON.stringify(req.user)}`);
		// this.loginService.login(req);
		// return 'success';
	}

	@Get('return')
	@UseGuards(FtAuthGuard)
	redirect(@Req() req: any, @Res({ passthrough: true }) res: Response) {
		if (req.user)
			this.loginService.login(req, res);
	}

	@Get('err')
	getErr() {
		return 'error';
	}
}
