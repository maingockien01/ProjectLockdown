import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import {
    ApiResponse as APIResponse,
    SuccessResponse,
} from 'src/core/ApiResponse';

import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('environments')
@Controller('environments')
export class EnvironmentController {
    @ApiOperation({ summary: 'Get default environemnt for given module' })
    @ApiResponse({
        status: 200,
        description:
            'Return environment data of default DSL uid, given module, and default environment uid',
    })
    @ApiResponse({
        status: 404,
        description: 'Module id is not found',
    })
    @Get(':module')
    getDefaultDsl(@Param('module') module: string, @Res() res: Response) {
        const response = this.prepareEnv(module);
        response.send(res);
    }

    @Get(':dslUid/:module/')
    @ApiOperation({
        summary: 'Get default environemnt for given DSL, and given module',
    })
    @ApiResponse({
        status: 200,
        description:
            'Return environment data of given DSL uid, given module, and default environment uid',
    })
    @ApiResponse({
        status: 404,
        description: 'Module id is not found',
    })
    @ApiResponse({
        status: 404,
        description: 'DSL UID is not found',
    })
    getDefaultEnv(
        @Param('dslUid') dslUid: string,
        @Param('module') module: string,
        @Res() res: Response,
    ) {
        const response = this.prepareEnv(module, dslUid);
        response.send(res);
    }

    @Get(':dslUid/:module/:envUid')
    @ApiOperation({
        summary:
            'Get default environment for given DSL, given module, and given environment UID',
    })
    @ApiResponse({
        status: 200,
        description:
            'Return environment data of given DSL uid, given module, and default environment uid',
    })
    @ApiResponse({
        status: 404,
        description: 'Module id is not found',
    })
    @ApiResponse({
        status: 404,
        description: 'DSL UID is not found',
    })
    @ApiResponse({
        status: 404,
        description: 'Environment UID is not found',
    })
    getEnv(
        @Param('dslUid') dslUid: string,
        @Param('module') module: string,
        @Param('envUid') envUid: string,
        @Res() res: Response,
    ) {
        const response = this.prepareEnv(module, dslUid, envUid);
        response.send(res);
    }

    prepareEnv(module: string, dslUid = '0', envUid = '0'): APIResponse {
        return new SuccessResponse('Success', sampleResponse);
    }
}

const sampleResponse = {
    environment: {
        dsl_id: 1,
        components: [
            {
                name: 'TimeSlider',
                is_visible: true,
            },
            {
                name: 'Legend',
                is_visible: true,
                data: [
                    {
                        title: 'mapLegend.no',
                        worldStyle: '2',
                    },
                    {
                        title: 'mapLegend.partial',
                        worldStyle: '1',
                    },
                    {
                        title: 'mapLegend.full',
                        worldStyle: '2',
                    },
                    {
                        title: 'mapLegend.noData',
                        worldStyle: '3',
                    },
                ],
            },
            {
                name: 'CountriesSearcher',
                is_visible: true,
            },
        ],
        overlay: {
            tabs: [
                {
                    id: 1,
                    title: 'Daily Life',
                    is_visible: true,
                    key_values: {
                        population: 'Population',
                        maximum_assembly: 'Maximum assembly',
                        daily_life: 'Daily life (restrictions)',
                    },
                },
                {
                    id: 2,
                    title: 'Mobility',
                    is_visible: true,
                    key_values: {},
                },
                {
                    id: 3,
                    title: 'Reports',
                    is_visible: true,
                    key_values: {},
                },
            ],
        },
    },
};
