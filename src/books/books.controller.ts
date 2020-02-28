import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller('books')
export class BooksController {

    @Get('/all')
    getAllBooks() {
        return ['book1', 'bood2'];
    }

    @Get(':id')
    getBookById(@Param() params: any) {
        return { params };
    }

    @Post('/new')
    addNewBook(@Body() body: any) {
        return body;
    }

    @Patch('/update')
    updateBook(@Body() body: any) {
        return body;
    }

    @Delete(':id')
    deleteBook(@Param() params: any) {
        return { params };
    }
}
