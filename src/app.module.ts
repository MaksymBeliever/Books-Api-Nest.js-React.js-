// nest modules
import { Module } from '@nestjs/common';

// Config
import config from 'src/environment/config/keys';

// Schemas
import { BookSchema } from 'src/documents/schemas/book.schema';
import { UserSchema } from 'src/documents/schemas/user.schema';
import { AuthorSchema } from 'src/documents/schemas/author.schema';

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

// JWT
// import { JwtStrategy } from 'src/strategy/jwt.strategy';
// import { LocalStrategy } from 'src/strategy/local.strategy';

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
