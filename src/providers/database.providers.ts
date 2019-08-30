import config from 'src/environment/config/keys';

import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(config.mongoURI, { useNewUrlParser: true, useFindAndModify: false }),
  },
];