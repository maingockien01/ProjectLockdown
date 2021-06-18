export interface ILogger {
    info(message: string);
    warn(e: Error, message?: string);
}

class Logger implements ILogger {
    info(message: string) {
        const now = Date.now();
        const log = `${now.toString()} : ${message}`;

        console.log(log);
    }

    warn(e: Error, message?: string) {
        const now = Date.now();
        const log = `${now.toString()} : ${e.name} - ${message}`;

        console.log(log);
    }
}

export const logger = new Logger();
