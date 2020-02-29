import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { GenresModule } from './genres/genres.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/book-inventory'),
    BooksModule,
    GenresModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
