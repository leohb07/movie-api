import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SaveMovieRepositoryPort } from "src/movie/application/ports/save-movie-repository.port";
import { Movie } from "src/movie/domain/movie";
import { MovieEntity } from "src/movie/infrastructure/database/entities/movie.entity";
import { Repository } from "typeorm";

@Injectable()
export class SaveMovieRepository implements SaveMovieRepositoryPort {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
  ) { }

  async save(movie: Movie): Promise<Movie> {
    const response = this.movieRepository.create({
      name: movie.name,
      genre: movie.genre,
      studio: movie.studio,
      rate: movie.rate,
    })
    return await this.movieRepository.save(response);
  }
}
