import {  Controller,  Get,  Put,  Post,  Delete,  Body,  Param} from '@nestjs/common';
import { Book } from 'src/models/book.model';
import { BooksService } from 'src/services/book.service';

@Controller('books')
export class BooksController {
  // constructor(private booksService: BooksService) { }
  
  @Get()
  findAll(): string {
    return 'This action returns all books';
  }
  
}