import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Book } from 'src/documents/book/db.data';

@Injectable()
export class BookRepository {
  constructor(private readonly bookRepository: BookRepository) { }

  async findAll(): Promise<Book[]> {
    const books = this.bookRepository.findAll();

    return books;
  }

  async findOne(id: string): Promise<Book> {
    const book = this.bookRepository.findOne( id );

    return book;
  }  

}