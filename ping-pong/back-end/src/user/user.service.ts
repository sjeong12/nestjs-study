import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios, { AxiosResponse } from 'axios';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) {}

	getAll(): Promise<User[]> {
		return this.userRepository.find();
	}

	async findByName(intra_id: string) {
		return await this.userRepository.findOne({ intra_id });
	}

	async create(userData: User): Promise<User> {
		return await this.userRepository.save(userData);
	}
}
