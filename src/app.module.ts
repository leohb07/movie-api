import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MovieModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'movie',
      password: 'movie',
      database: 'movieapi',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    })
  ],
})
export class AppModule { }
