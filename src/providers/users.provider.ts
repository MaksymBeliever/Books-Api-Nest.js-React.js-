import { Connection } from 'mongoose';
import { UserSchema } from 'src/documents/user/user.schema';

export const UsersProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];