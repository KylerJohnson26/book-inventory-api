import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { CreateBookDto } from './create-book-dto.interface';
import { BookService } from './book.service';
import { Book } from './book.interface';

@Controller('books')
export class BooksController {

    constructor(
        private bookService: BookService
    ) {}

    @Get()
    getAllBooks() {
        return this.bookService.findAll();
    }

    @Get(':id')
    getBookById(@Param('id') id: string) {
        return this.bookService.findById(id);
    }

    @Post()
    addNewBook(@Body() createBookDto: CreateBookDto) {
        return this.bookService.create(createBookDto);
    }

    @Patch()
    updateBook(@Body() book: Book) {
        return this.bookService.updateById(book);
    }

    @Delete(':id')
    deleteBook(@Param('id') id: string) {
        return this.bookService.deleteById(id);
    }
}
