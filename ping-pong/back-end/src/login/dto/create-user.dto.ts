import { IsString } from "class-validator";

export class CreateUserDto {
	@IsString()
	readonly token: string;

	@IsString()
	readonly nickname: string;
}