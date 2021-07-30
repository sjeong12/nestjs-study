import { Body, Controller, Get, Header, Post, Req, Request, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
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
		return 'success';
	}

	@Get('return')
	@UseGuards(FtAuthGuard)
	redirect(@Req() req: any, @Res({ passthrough: true }) res: Response) {
		if (req.user)
			this.loginService.OAuth(req, res);
	}

	@Post('signin')
	@Header('Access-Control-Allow-Origin', '*')
	signIn(@Body() body:CreateUserDto) {
		this.loginService.signIn(body.token, body.nickname);
	}

	@Get('err')
	getErr() {
		return 'error';
	}
}
