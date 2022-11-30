import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Maamaamaa12345',
      database: 'auth',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // this is for development only
    }),
    AuthModule,
    ProfileModule,
  ],
})
export class AppModule {}
