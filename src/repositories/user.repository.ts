import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/documents/dbData/db.userData';

@Injectable()
export class UserRepository {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<User>,
  ) { }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.find().exec();
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users;
  }

  async create(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    const newUser = await createdUser.save();
    return newUser;
  }

  async delete(id: string): Promise<User> {
    const deletedUser = await this.userModel.deleteOne(id);
    return deletedUser;
  }

  async findOneByName(username: string): Promise<User> {
    return await this.userModel.findOne({username});
  }
}
