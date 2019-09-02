import { Injectable } from '@nestjs/common';
import { Author } from 'src/models/author.model';
import { AuthorRepository } from 'src/repositories/author.repository';

@Injectable()
export class AuthorsService {
    constructor(private readonly authorRepository: AuthorRepository) {
    }

    public async findOne(id: string): Promise<Author> {
      return await this.authorRepository.findOne(id);
    }

    public async findAll(): Promise<Author[]> {
      return await this.authorRepository.findAll();
    }

    public async create(author: Author): Promise<Author> {
      return await this.authorRepository.create(author);
    }

    public async delete(id: string): Promise<Author> {
      const deletedAuthor = await this.authorRepository.delete(id);
      return deletedAuthor;
    }
}
