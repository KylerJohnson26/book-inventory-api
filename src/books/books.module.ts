import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './book.schema';
import { BookService } from './book.service';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Book', schema: BookSchema }
  ])],
  controllers: [BooksController],
  providers: [BookService],
})
export class BooksModule {}
