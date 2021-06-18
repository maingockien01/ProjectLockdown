import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSetEntriesModule, EnvironmentModule } from './endpoints';
@Module({
    imports: [DataSetEntriesModule, EnvironmentModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
