import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//main.ts가 모든것을 시작
async function bootstrap() {
  const app = await NestFactory.create(AppModule); //app에서 AppModule을 호출
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,  //검증을 위한 데코레이터가 없는 속성을 제외
    forbidNonWhitelisted: true, //whitelist에 없는 속성일 경우 금지(400 error)
    transform: true //자동 형변환
  }));
  await app.listen(3000); //app이 포트 3000번을 listen
}
bootstrap();
