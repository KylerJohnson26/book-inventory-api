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
        return createdBook.save();
    }

    async findAll(): Promise<Book[]> {
        return this.bookModel.find().exec();
    }

    async findById(id: string): Promise<Book> {
        return this.bookModel.findOne({ _id: id }).exec();
    }

    async updateById(book: Book): Promise<Book> {      
        const options = { new: true, useFindAndModify: false }
        return this.bookModel.findByIdAndUpdate(book._id, { $set: book }, options);
    }

    async deleteById(id: string): Promise<boolean> {
        return this.bookModel.findByIdAndDelete(id);
    }
    
}
