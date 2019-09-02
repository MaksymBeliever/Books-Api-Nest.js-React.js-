import { Injectable } from '@nestjs/common';
import { Book } from 'src/models/book.model';
import { BookRepository } from 'src/repositories/book.repository';

@Injectable()
export class BooksService {
    constructor(private readonly bookRepository: BookRepository) {
    }

    public async findOne(id: string): Promise<Book> {
      return await this.bookRepository.findOne(id);
    }

    public async findAll(): Promise<Book[]> {
      return await this.bookRepository.findAll();
    }

    public async create(book: Book): Promise<Book> {
      return await this.bookRepository.create(book);
    }

    public async delete(id: string): Promise<Book> {
      const deletedBook = await this.bookRepository.delete(id);
      return deletedBook;
    }
}
