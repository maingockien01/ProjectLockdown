import { Controller, Param, Res, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('snapshots')
@Controller('snapshots')
export class SnapshotController {
    @ApiOperation({
        summary: 'Return data snapshot',
    })
    @ApiResponse({
        status: 200,
        description:
            'Return the data set layer of given shapshot from given start time to end time for given module',
    })
    @Get(':snapshotUID/:module/:dateStart/:dateEnd/:dslUID')
    getSnapshot(
        @Param('snapshotUID') snapshotUID: string,
        @Param('module') module: string,
        @Param('dateStart') dateStart: string,
        @Param('dateEnd') dateEnd: string,
        @Param('dslUID') dslUID: string,
        @Res() res: Response,
    ) {
        return 'Hi';
    }
}
