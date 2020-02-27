import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { GenresController } from './genres/genres.controller';

@Module({
  imports: [],
  controllers: [
    AppController, 
    BooksController, 
    GenresController
  ],
  providers: [AppService],
})
export class AppModule {}
