import { Body, Controller, Post } from "@nestjs/common";
import { SaveMovieUseCase } from "src/movie/application/usecases/save-movie.usecase";
import { SaveMovieRequestDTO } from "./save-movie-request.dto";

@Controller('save-movie')
export class SaveMovieController {
  constructor(
    private readonly saveMovieUseCase: SaveMovieUseCase
  ) { }

  @Post()
  async saveMovie(@Body() request: SaveMovieRequestDTO): Promise<void> {
    await this.saveMovieUseCase.execute(request);
  }
}
