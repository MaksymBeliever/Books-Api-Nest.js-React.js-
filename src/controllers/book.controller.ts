import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { Book } from 'src/models/book.model';

@Controller('books')
export class BooksController {
  @Get()
  findAll(): string {
    return 'This action returns all books';
  }
  
}