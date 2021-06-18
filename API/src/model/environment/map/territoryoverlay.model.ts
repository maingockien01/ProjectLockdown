import { Category } from 'src/model/category/category.models';
import { Position } from 'src/model/common';

export interface ITerritoryOverlay {
    show: boolean;
    position: string;
    defaultCategoryUid: string;
    pldCode: string;
    categories: Array<Category>;
}

export class TerritoryOverlay implements ITerritoryOverlay {
    constructor(
        public show: boolean,
        public position: Position,
        public behavior: Behavior,
        public defaultCategoryUid: string,
        public pldCode: string,
        public categories: Array<Category>,
    ) {}
}

export enum Behavior {
    OnTap = 'OnTap',
    Forced = 'Forced',
    No = 'No',
}
