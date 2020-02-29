import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { CreateBookDto } from './create-book-dto.interface';
import { BookService } from './book.service';

@Controller('books')
export class BooksController {

    constructor(
        private bookService: BookService
    ) {}

    @Get('/all')
    getAllBooks() {
        return this.bookService.findAll();
    }

    @Get(':id')
    getBookById(@Param() params: any) {
        return { params };
    }

    @Post('/new')
    addNewBook(@Body() createBookDto: CreateBookDto) {
        return this.bookService.create(createBookDto);
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
