import { Module } from '@nestjs/common';
import { GenresController } from './genres.controller';
import { GenreService } from './genre.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GenreSchema } from './genre.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Genre', schema: GenreSchema }
  ])],
  controllers: [GenresController],
  providers: [GenreService]
})
export class GenresModule {}
