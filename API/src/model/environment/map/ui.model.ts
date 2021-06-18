/*
 * @class       UI
 * @desc        control the final rendering type of the map
 */
export interface IUi {
    locale: string;
    mode: string;
    watermark: string;
}
export class Ui implements IUi {
    /*
     * @field   locale      {string}    control the language used in the map
     * @field   mode        {Mode}      the mode of ui
     * @field   watermark   {string}    control the rendering of water mark in the map
     */
    //TODO: finalize watermark type and value
    constructor(
        public locale: string,
        public mode: Mode,
        public watermark: string,
    ) {}

    //TODO: function matchAccessibility - match mode to accessibility category
    matchAccessibility = (): Ui => {
        return this;
    };
}

enum Mode {
    Common = 'Common',
    HighContrast = 'HighContrast',
    AudioNote = 'AudioNote',
    Tactile = 'Tactile',
}
