import { Controller, Delete, Patch, Post, Get, Param, Body } from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './create-genre-dto.interface';
import { Genre } from './genre.interface';

@Controller('genres')
export class GenresController {

    constructor(private genreService: GenreService) {}

    @Get()
    getAllGenres() {
        return this.genreService.findAll();
    }

    @Get(':id')
    getGenreById(@Param('id') id: string) {
        return this.genreService.findById(id);
    }

    @Post()
    addNewGenre(@Body() createGenreDto: CreateGenreDto) {
        return this.genreService.create(createGenreDto);
    }

    @Patch()
    updateGenre(@Body() genre: Genre) {
        return this.genreService.updateById(genre);
    }

    @Delete(':id')
    deleteGenre(@Param('id') id: string) {
        return this.genreService.deleteById(id);
    }
}
