/*
 * @class           Map
 * @desc            Conbtrol the figuration of the Map provider
 */

export interface IMap {
    region: string;
    zoom: number;
    lat: number;
    lng: number;
    defaultDP: DefaultDP;
    snapshotOrder: Array<string>;
}

export class Map implements IMap {
    /*
     * @field   region      {string}        control the center region on map
     * @field   zoom        {number}        control the level of zoom on map
     * @field   lat         {number}        control the lattitude of the center point on map
     * @field   lng         {number}        control the Longtitude of the center point on map
     * @field   defaultDP   {object}        indicate default DP associated with the differen MAP geometries
     * @field   snapshotOrder {array}       indicate the order of snapshots source type are to be rendered
     */
    constructor(
        public region: string,
        public zoom: number,
        public lat: number,
        public lng: number,
        public defaultDP: DefaultDP,
        public snapshotOrder: Array<string>,
    ) {}
}

/*
 * @class           DefaultDP
 * @desc            indicate the default data points to be assocaited with trhe different map geometries
 */
export interface IDefaultDP {
    territory: string;
    border: string;
    location: string;
}

export class DefaultDP implements IDefaultDP {
    /*
     * @field   territory   {string}        control the default datapoints to be rendered in the map for territory (Surface)
     * @field   border      {string}        control the default datapoints to be rendered in the map for Border (Line)
     * @field   location    {string}        control the default datapoints to be rendered in the map for Location (Point)
     */
    constructor(
        public territory: string,
        public border: string,
        public location: string,
    ) {}
}
