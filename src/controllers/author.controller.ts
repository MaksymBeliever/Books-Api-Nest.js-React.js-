import { Controller,  Get,  Put,  Post,  Delete,  Body,  Param } from '@nestjs/common';
import { Author } from 'src/models/author.model';
import { AuthorsService } from 'src/services/author.service';

@Controller('authors')
export class AuthorsController {
  constructor(private authorsService: AuthorsService) { }

  @Get('/:authorId')
    public async getAuthor(@Param('authorId') authorId) {
      const author = await this.authorsService.findOne(authorId);
    }

  @Get()
    public async getAuthors() {
      const authors = await this.authorsService.findAll();
    }

  @Post()
    public async addAuthor(@Body() author: Author) {
      const newAuthor = await this.authorsService.create(author);
      return newAuthor;
    }

  @Delete('/:authorId')
    public async deleteBook(@Param('authorId') authorID: string) {
      const authors = this.authorsService.delete(authorID);
      return authors;
    }
}
