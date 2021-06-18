import { assert } from 'console';

/*
 * @class   PressPlay
 * @desc    control the rendering and behavior of the PressPlay component
 */
export interface IPressplay {
    show: boolean;
    behavior: string;
    startDelay: number;
    step: number;
}

export class PressPlay implements IPressplay {
    /*
     * @field   show        {boolean}   control whether pressplay is rendered
     * @field   behavior    {Behavior}  control the behavior of the animation
     * @field   startDelay  {number}    number of second
     * @field   step        {number}    indicate the number of DSL days per second
     */
    constructor(
        public show: boolean,
        public behavior: Behavior,
        public startDelay: number,
        public step: number,
    ) {}

    /*
     * @function    setShow
     * @desc        (Date, Date) => PressPlay
     *              compare start date and return date
     *                  to check whether the pressplay should be shown
     * @params      startDate   {Date}  start date of data shown in map
     * @params      endDate     {Date}  end date of data shown in map
     * @return      new PressPlay with new show
     */
    setShow = (startDate: Date, endDate: Date): PressPlay => {
        assert(startDate.valueOf() <= endDate.valueOf());

        if (startDate.valueOf() == endDate.valueOf()) {
            return new PressPlay(
                false,
                this.behavior,
                this.startDelay,
                this.step,
            );
        } else {
            return new PressPlay(
                true,
                this.behavior,
                this.startDelay,
                this.step,
            );
        }
    };
}

export enum Behavior {
    BackwardStop = 'BackwardStop',
    BackwardContinuous = 'BackwardContinuous',
    ForwardContinuous = 'ForwardContinuous',
    Random = 'Random',
    RandomContinuous = 'RandomContinuous',
}
