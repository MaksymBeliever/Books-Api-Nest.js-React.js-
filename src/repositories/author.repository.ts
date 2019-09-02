import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Author } from 'src/documents/dbData/db.authorData';

@Injectable()
export class AuthorRepository {
  constructor(
    @Inject('AUTHOR_MODEL')
    private readonly authorModel: Model<Author>,
  ) { }

  async findOne(id: string): Promise<Author> {
    const author = await this.authorModel.find().exec();
    return author;
  }

  async findAll(): Promise<Author[]> {
    const authors = await this.authorModel.find().exec();
    return authors;
  }

  async create(author: Author): Promise<Author> {
    const createdAuthor = new this.authorModel(author);
    const newAuthor = await createdAuthor.save();
    return newAuthor;
  }

  async delete(id: string): Promise<Author> {
    const deletedAuthor = await this.authorModel.deleteOne(id);
    return deletedAuthor;
  }
}
