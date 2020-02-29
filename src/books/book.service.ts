import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './book.interface';
import { CreateBookDto } from './create-book-dto.interface';

@Injectable()
export class BookService {

    constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

    async create(createBookDto: CreateBookDto): Promise<Book> {
        const createdBook = new this.bookModel(createBookDto);
        console.log(createdBook);
        return createdBook.save();
    }

    async findAll(): Promise<Book[]> {
        return this.bookModel.find().exec();
    }
    
}
