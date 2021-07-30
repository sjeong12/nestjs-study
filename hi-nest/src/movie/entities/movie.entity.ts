// 실제로는 이곳에서 JS object가 아닌 DB 모델을 만들어야 함
export class Movie {
	id: number;
	title: string;
	director: string;
	year: number;
	genres: string[];
}