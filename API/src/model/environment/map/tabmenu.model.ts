/*
 * @class           TabMenu
 * @description     control apearance of tab menu in MAP
 */
export interface ITabMenu {
    show: boolean;
    position: boolean;
    page: string;
}
export class TabMenu {
    /*
     * @field       show        {boolean}   whether show the tab menu or not?
     * @field       position    {string}    position of the tab menu in MAP
     * @field       page        {string}    page that tabe menu is open on default
     */
    constructor(
        public show: boolean,
        public position: string,
        public page: string,
    ) {}
}
