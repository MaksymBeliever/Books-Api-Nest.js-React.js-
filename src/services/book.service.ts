import { Injectable } from '@nestjs/common';
import { Book } from 'src/models/book.model';
import { BookRepository } from 'src/repositories/book.repository';

@Injectable()
export class BooksService {
    constructor(private readonly bookRepository: BookRepository) {}

    

}