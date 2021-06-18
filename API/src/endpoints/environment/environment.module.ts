import { Module } from '@nestjs/common';
import { EnvironmentController } from './environment.controller';
@Module({
    imports: [],
    controllers: [EnvironmentController],
    providers: [],
})
export class EnvironmentModule {}
