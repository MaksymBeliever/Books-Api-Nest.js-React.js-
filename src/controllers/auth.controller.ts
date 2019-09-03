import { Controller, Post, Request, Get, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('login')
export class AuthController {
  constructor(
    private readonly authService: AuthService) {}

@UseGuards(AuthGuard('local'))
@Post('')
    async login(@Request() req) {
        return this.authService.getToken(req.body);
    }

@UseGuards(AuthGuard('jwt'))
@Get('')
    getProfile(@Request() req) {
        return req.user;
    }
}
