import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()	// dependency injection: controllers가 해당 서비스를 import할 수 있도록
export class MovieService {
	private movieList: Movie[] = [];

	getAll(): Movie[] {	//Movie[] type을 return하는 getAll() 함수
		return this.movieList;
	}

	getOne(id: number): Movie {
		const movie = this.movieList.find(movie => movie.id === id);
		if (!movie) {
			throw new NotFoundException(`Movie width ID ${id} is NOT FOUND`);
		}
		return movie;
	}

	remove(id: number): boolean {
		this.getOne(id);
		this.movieList = this.movieList.filter(movie => movie.id !== id);
		return true;
	}

	create(movieData: CreateMovieDto) {
		this.movieList.push({
			id: this.movieList.length + 1,
			...movieData
		})
	}

	update(id: number, updateData: UpdateMovieDto) {
		const movie = this.getOne(id);
		this.remove(id);
		this.movieList.push({...movie, ...updateData});
	}
}
