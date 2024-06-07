import { Module } from "@nestjs/common";
import { SaveMovieRepositoryPort } from "./application/ports/save-movie-repository.port";
import { SaveMovieRepository } from "./adapters/out/save-movie-repository";
import { SaveMovieController } from "./adapters/in/controller/save-movie/save-movie.controller";
import { SaveMovieUseCase } from "./application/usecases/save-movie.usecase";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieEntity } from "./infrastructure/database/entities/movie.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([MovieEntity])
  ],
  controllers: [SaveMovieController],
  providers: [
    {
      provide: SaveMovieRepositoryPort,
      useClass: SaveMovieRepository,
    },
    SaveMovieUseCase,
  ]
})
export class MovieModule { }
