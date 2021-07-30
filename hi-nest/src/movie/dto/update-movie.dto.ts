import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movie.dto";

// PartialType(CreateMovieDto) 이 클래스가 CreateMovieDto와 똑같은 속성을 지니지만,
// 모든 속성들이 필수가 아닌 선택사항임을 의미
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}