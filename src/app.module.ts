// nest modules
import { Module } from '@nestjs/common';

// Controllers
import { BooksController } from 'src/controllers/book.controller';

// Services
// import { AppService } from 'src/services/app.service';


@Module({
  imports: [],
  controllers: [BooksController],
})
export class AppModule {}
