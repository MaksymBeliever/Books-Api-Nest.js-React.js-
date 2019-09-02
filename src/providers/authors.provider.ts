import { Connection } from 'mongoose';
import { AuthorSchema } from 'src/documents/schemas/author.schema';

export const AuthorsProviders = [
    {
      provide: 'AUTHOR_MODEL',
      useFactory: (connection: Connection) => connection.model('Author', AuthorSchema),
      inject: ['DATABASE_CONNECTION'],
    },
  ];
