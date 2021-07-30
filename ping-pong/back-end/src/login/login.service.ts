import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { Response } from 'express';
import axios from 'axios';

@Injectable()
export class LoginService {
	constructor(private readonly userService: UserService) {}

	// 42OAuth로부터 얻은 access token을 cookie에 저장
	async OAuth(req: any, res: Response) {
		console.log("🔑 LoginService : 42 OAuth");
		res.cookie('access_token', req.user.token, {
			httpOnly: false,
		});
		res.status(302).redirect('http://localhost:3001');
	}

	// 기존 유저의 닉네임 변경 or 새 유저 추가
	async signIn(token: string, nickname: string) {
		console.log("🤝 LoginService : Sign-In with new nickname");
		console.log(`[token] ${token}`);

		// access token으로 /v2/me에서 유저 정보를 조회
		try {
			const response = await axios.get('https://api.intra.42.fr/v2/me', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log(`[response] ${response.data}`);

			const user = await this.userService.findByName(response.data.login);
			if (user)	// 이미 가입 된 유저의 닉네임을 변경
			{
				console.log("change nickname...");
				user.nickname = nickname;
				user.status = 1;
				user.second_auth = false;
				return await this.userService.create(user);
			}
			else {	// 새 유저
				console.log("new user...");
				let newUser = new User();
				newUser.user_idx = response.data.id;
				newUser.intra_id = response.data.login;
				newUser.nickname = nickname;
				newUser.avatar = '';
				newUser.status = 1;
				newUser.second_auth = false;
				newUser.ladder_level = 0;
				newUser.ladder_point = 0;
				return await this.userService.create(newUser);
			}
		}
		catch (e) {
			console.log(`[error] ${e}`);
		}
	}
}
