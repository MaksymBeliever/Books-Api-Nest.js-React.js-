import { Connection } from 'mongoose';
import { BookSchema } from 'src/documents/book/book.schema';

export const BooksProviders = [
    {
      provide: 'BOOK_MODEL',
      useFactory: (connection: Connection) => connection.model('Book', BookSchema),
      inject: ['DATABASE_CONNECTION'],
    },
  ];
