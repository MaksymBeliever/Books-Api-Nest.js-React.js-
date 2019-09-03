// Nest modules
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

// JWT
import { jwtConstants } from 'src/strategy/constants';
import { JwtModule } from '@nestjs/jwt';

// import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { JwtStrategy } from 'src/strategy/jwt.strategy';

// import { LocalStrategy } from 'src/strategy/local.strategy';
import { LocalStrategy } from 'src/strategy/local.strategy';

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
import { AuthController } from 'src/controllers/auth.controller';

// Services
import { BooksService } from 'src/services/book.service';
import { UserService } from 'src/services/user.service';
import { AuthorsService } from 'src/services/author.service';
import { AuthService } from 'src/services/auth.service';

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
  imports: [ PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: {
      expiresIn: '600s',
    },
  }),
],
  controllers: [
                BooksController,
                UsersController,
                AuthorsController,
                AuthController,
  ],
  providers: [
              BooksService,
              UserService,
              AuthorsService,
              AuthService,
              BookRepository,
              UserRepository,
              AuthorRepository,
              ...databaseProviders,
              ...BooksProviders,
              ...UsersProviders,
              ...AuthorsProviders,
              LocalStrategy,
              JwtStrategy,
  ],
})
export class AppModule {}
