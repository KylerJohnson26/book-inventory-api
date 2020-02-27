import { Controller, Delete, Patch, Post, Get, Param } from '@nestjs/common';

@Controller('genres')
export class GenresController {

    @Get('/all')
    getAllGenres() {
        return ['genre1', 'genre2'];
    }

    @Get(':id')
    getGenreById(@Param() params) {
        return { params };
    }

    @Post('/new')
    addNewGenre(genreDto: any) {
        return true;
    }

    @Patch('/update')
    updateGenre(genreDto: any) {
        return true;
    }

    @Delete('/delete/id')
    deleteGenre(@Param('id') id: string) {
        return { id };
    }
}
