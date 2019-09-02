import {  Controller, Get, Put, Post, Delete, Body, Param } from '@nestjs/common';
import { Book } from 'src/models/book.model';
import { BooksService } from 'src/services/book.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) { }

  @Get('/:bookId')
    public async getBook(@Param('bookId') bookId) {
      const book = await this.booksService.findOne(bookId);
      return 'documentation';
    }

  @Get()
    public async getBooks() {
      const books = await this.booksService.findAll();
      return books;
    }

  @Post()
    public async addBook(@Body() book: Book) {
      const newBook = await this.booksService.create(book);
      return newBook;
    }

  @Delete('/:bookId')
    public async deleteBook(@Param('bookId') bookID: string) {
      const books = this.booksService.delete(bookID);
      return books;
    }
}
