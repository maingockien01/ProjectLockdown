import { formatDate } from '../../common';

/*
 * @class           TimeSlider
 * @description     Controll appearance, date range of Time Slider
 */
export interface ITimeSlide {
    dateStart: string;
    dateEnd: string;
    dateView: string;
    position: string;
    show: boolean;
}
export class TimeSlider implements ITimeSlide {
    /*
     * @field   dateStart   {string}    date in format DD/MM/YYYY
     * @field   dateEnd     {string}    date in format DD/MM/YYYY
     * @field   dateView    {string}    date in format DD/MM/YYYY
     * @field   position    {string}    position of time slider
     * @field   show        {boolean}   show time slider or not
     */
    dateStart: string;
    dateEnd: string;
    dateView: string;
    constructor(
        public position: string,
        dateStart: Date,
        dateEnd: Date,
        dateView: Date,
        public show: boolean,
    ) {
        this.dateStart = formatDate(dateStart);
        this.dateEnd = formatDate(dateEnd);
        this.dateView = formatDate(dateView);
    }
}
