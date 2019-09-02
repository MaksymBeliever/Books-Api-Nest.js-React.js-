import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UsersService {
    constructor(private readonly userRepository: UserRepository) { }

    public async findOne(id: string): Promise<User> {
      return await this.userRepository.findOne(id);
    }

    public async findAll(): Promise<User[]> {
      return await this.userRepository.findAll();
    }

    public async create(user: User): Promise<User> {
      return await this.userRepository.create(user);
    }

    public async delete(id: string): Promise<User> {
      const deletedUser = await this.userRepository.delete(id);
      return deletedUser;
    }
}
