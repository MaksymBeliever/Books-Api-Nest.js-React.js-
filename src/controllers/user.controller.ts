import {  Controller,  Get,  Put,  Post,  Delete,  Body,  Param} from '@nestjs/common';
import { User } from 'src/models/user.model';
import { UsersService } from 'src/services/user.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get('/:userId')
        public async getBook(@Param('userId') userId) {
            const book = await this.usersService.findOne(userId);
        }

    @Get()
        public async getUsers() {
            const users = await this.usersService.findAll();
        }

    @Post()
        public async addUser(@Body() user: User) {
            const newUser = await this.usersService.create(user);
            return newUser;
        }

    @Delete('/:userId')
        public async deleteUser(@Param('userId') userID: string) {
            const users = this.usersService.delete(userID);
            return users;
        }
}
