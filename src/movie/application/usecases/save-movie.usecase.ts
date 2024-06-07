import { Movie } from "src/movie/domain/movie";
import { SaveMovieRepositoryPort } from "../ports/save-movie-repository.port";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SaveMovieUseCase {
  constructor(
    private readonly saveMovieRepositoryPort: SaveMovieRepositoryPort,
  ) { }

  async execute(command: Movie): Promise<Movie> {
    const movie = new Movie(
      command.name,
      command.genre,
      command.studio,
      command.rate,
    )
    await this.saveMovieRepositoryPort.save(movie);
    return movie;
  }
}
