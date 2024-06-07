import { Movie } from "src/movie/domain/movie";

export abstract class SaveMovieRepositoryPort {
  abstract save(movie: Movie): Promise<Movie>;
}
