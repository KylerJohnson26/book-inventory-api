import { Controller, Delete, Patch, Post, Get, Param, Body } from '@nestjs/common';

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
    addNewGenre(@Body() body: any) {
        return body;
    }

    @Patch('/update')
    updateGenre(@Body() body: any) {
        return body;
    }

    @Delete(':id')
    deleteGenre(@Param('id') id: string) {
        return { id };
    }
}
