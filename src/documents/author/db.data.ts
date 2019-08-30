import { Document , Schema  } from 'mongoose';

export interface Author extends Document  {
    id: Schema.Types.ObjectId;
    username: string;
}
