import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { Response } from 'express';

@Injectable()
export class LoginService {
	constructor(private readonly userService: UserService) {}

	async login(req: any, res: Response) {
		console.log("🔑 Login Service...");
		// const user = await this.userService.findByName(req.user.username);
		// if (user)
		// {
		// 	console.log("login");
		// 	user.status = 2;	//기존 유저 표시를 위한 임시 데이터..
		// 	user.second_auth = false;
		// 	return await this.userService.create(user);
		// }
		// return this.signIn(req);
		console.log(`token: ${req.user.token}`);
		res.cookie('access_token', req.user.token, {
			httpOnly: false,
		});
		res.status(302).redirect('http://localhost:3001');
	}

	async signIn(req: any) {
		console.log("🤝 SignIn Service...");
		console.log("new user login");
		let newUser = new User();
		newUser.intra_id = req.user.username;
		newUser.nickname = `test${req.user.id}`;
		newUser.avatar = '';
		newUser.status = 1;
		newUser.second_auth = false;
		newUser.ladder_level = 0;
		newUser.ladder_point = 0;
		return await this.userService.create(newUser);
	}
}
