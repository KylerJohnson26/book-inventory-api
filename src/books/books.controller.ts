import { Controller, Get, Post, Patch, Delete, Param } from '@nestjs/common';

@Controller('books')
export class BooksController {

    @Get('/all')
    getAllBooks() {
        return ['book1', 'bood2'];
    }

    @Get(':id')
    getBookById(@Param() params) {
        return { params };
    }

    @Post('/new')
    addNewBook(bookDto: any) {
        return true;
    }

    @Patch('/update')
    updateBook(bookDto: any) {
        return true;
    }

    @Delete('/delete:id')
    deleteBook(@Param() params) {
        return { params };
    }
}
