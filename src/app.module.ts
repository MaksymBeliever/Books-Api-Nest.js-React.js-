// nest modules
import { Module } from '@nestjs/common';

// Schemas
import { BookSchema } from 'src/documents/book/book.schema';
import { UserSchema } from 'src/documents/user/user.schema';
import { AuthorSchema } from 'src/documents/author/author.schema';

// Controllers
import { BooksController } from 'src/controllers/book.controller';
import { UsersController } from 'src/controllers/user.controller';
import { AuthorsController } from 'src/controllers/author.controller';

// Services
import { BooksService } from 'src/services/book.service';
import { UsersService } from 'src/services/user.service';
import { AuthorsService } from 'src/services/author.service';

// Providers
import { databaseProviders } from 'src/providers/database.providers';
import { BooksProviders } from 'src/providers/books.provider';
import { UsersProviders } from 'src/providers/users.provider';
import { AuthorsProviders } from 'src/providers/authors.provider';

// Repositories
import { BookRepository } from 'src/repositories/book.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { AuthorRepository } from 'src/repositories/author.repository';

@Module({
  imports: [],
  controllers: [
                BooksController,
                UsersController,
                AuthorsController,
  ],
  providers: [
              BooksService,
              UsersService,
              AuthorsService,
              BookRepository,
              UserRepository,
              AuthorRepository,
              ...databaseProviders,
              ...BooksProviders,
              ...UsersProviders,
              ...AuthorsProviders,
  ],
})
export class AppModule {}
