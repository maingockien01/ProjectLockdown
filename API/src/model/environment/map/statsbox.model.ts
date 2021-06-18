import { Position } from 'src/model/common';
import { Layout } from 'src/model/layout/layout.model';
import { Snapshot } from 'src/model/snapshot/snapshot.model';

/*
 * @class           StatsBox
 * @description     control the behavior of stats box in MAP
 */
export interface IStatsBox {
    show: boolean;
    position: string;
    showLastUpdate: boolean;
    layout: Layout;
    defaultDP: Snapshot[];
}

export class StatsBox implements IStatsBox {
    /*
     * @field   layout          {Layout}        TODO: design the connection between stats box and layout
     * @field   defaultDP       {Snapshot[]}    array of DPUIDs that are used in the stats box when rendering this DSL
     * @field   show            {boolean}       whether stats box is visiable?
     * @field   position        {string}        position of the stats box
     * @field   showLastUpdate  {boolean}       whether show the last update in the stats box
     */
    layout: Layout;
    defaultDP: Snapshot[]; //TODO: create snapshot models
    constructor(
        public show: boolean,
        public position: Position,
        public showLastUpdate: boolean,
    ) {
        //TODO: init defaultDP array
    }

    /* TODO: update when snapshot and layout is created
    function addDataPoint (dataPoint: Snapshot) {

    }

    function addLayout (layout: Layout) {

    }
    */
}
