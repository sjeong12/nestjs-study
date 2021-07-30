import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({	// dependency injection: 여기서 controllers와 providers를 import
	controllers: [MovieController],
	providers: [MovieService]
})
export class MovieModule {}
