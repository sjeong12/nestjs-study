import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { AppController } from './app/app.controller';

// @Module 데코레이터. 데코레이터는 해당 클래스 또는 함수를 꾸며준다
// (여기서는 AppModule 클래스를 위한 함수와 유사하게 기능)
@Module({ // 모듈 = 특정 기능단위
  imports: [MovieModule],
  controllers: [AppController], //==라우터. 특정 url에 맞는 함수를 실행
  providers: [],
})
export class AppModule {} //main.ts에서 호출하는 클래스.
