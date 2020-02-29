import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGenreDto } from './create-genre-dto.interface';
import { Genre } from './genre.interface';

@Injectable()
export class GenreService {

    constructor(@InjectModel('Genre') private readonly genreModel: Model<Genre>) {}

    async create(createGenreDto: CreateGenreDto): Promise<Genre> {
        const createdGenre = new this.genreModel(createGenreDto);
        return createdGenre.save();
    }

    async findAll(): Promise<Genre[]> {
        return this.genreModel.find().exec();
    }

    async findById(id: string): Promise<Genre> {
        return this.genreModel.findOne({ _id: id }).exec();
    }

    async updateById(book: Genre): Promise<Genre> {      
        const options = { new: true, useFindAndModify: false }
        return this.genreModel.findByIdAndUpdate(book._id, { $set: book }, options);
    }

    async deleteById(id: string): Promise<boolean> {
        const result = await this.genreModel.deleteOne({ _id: id });
        return result && result.deletedCount > 0;
    }
    
}
