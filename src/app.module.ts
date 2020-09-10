import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { GenresModule } from './genres/genres.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:33017/book-inventory-manager', 
      { useNewUrlParser: true, useUnifiedTopology: true }
    ),
    BooksModule,
    GenresModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
