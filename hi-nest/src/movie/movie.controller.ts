import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
	constructor(private readonly movieService: MovieService) {}

	@Get()
	getAll(): Movie[] {
		return this.movieService.getAll();
	}

	@Get("search")
	search(@Query("title") movieTitle: string) {
		return `this will search a movie with the title: ${movieTitle}`;
	}

	@Get("/:id")
	getOne(@Param("id") movieId: number): Movie {
		console.log(typeof movieId);
		return this.movieService.getOne(movieId);
	}

	@Post()
	create(@Body() newMovie: CreateMovieDto) {
		return this.movieService.create(newMovie);
	}

	@Delete("/:id")
	remove(@Param("id") movieID: number) {
		return this.movieService.remove(movieID);
	}

	@Patch("/:id")	//Put은 모든 리소스를 업데이트
	updateOne(@Param("id") movieID: number, @Body() updateData: UpdateMovieDto) {
		return this.movieService.update(movieID, updateData);
	}
}
