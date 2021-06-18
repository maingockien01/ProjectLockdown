export function formatDate(date: Date) {
    const [month, day, year] = date.toLocaleDateString('en-US').split('/');
    const formattedDate =
        '' +
        day.toString().padStart(2, '0') +
        '/' +
        month.toString().padStart(2, '0') +
        '/' +
        year.toString().padStart(4, '0');
    return formattedDate;
}

export enum Position {
    POSITION_LEFT = 'Left',
    RIGHT = 'Right',
    TOP = 'Top',
    BOTTOM = 'Bottom',
}
