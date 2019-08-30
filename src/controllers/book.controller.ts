import {  Controller,  Get,  Put,  Post,  Delete,  Body,  Param} from '@nestjs/common';
import { Book } from 'src/models/book.model';
import { BooksService } from 'src/services/book.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) { }

  @Get()
  async getBooks() {
    return 'This action returns all books';
  }

  @Get(':bookId')
  findOne(@Param('bookId') bookId) {
    return 'book1';
  }

  @Post()
  public async createBook(@Body() book: Book) {
    return 'Return book';
  }

  @Delete(':bookID')
    async deleteBook(@Param('bookID') bookID) {
        return 'books';
    }

    @Put(':bookID')
    async editBook(@Param('bookID') bookID, @Body() book: Book) {
        return 'books';
    }

}
